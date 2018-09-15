/* eslint-disable */
import Game from './Game';
import UnwrappedLife from './UnwrappedLife';
import color from '../util/colors';

export default class UnwrappedGame extends Game {
  constructor(width, height, squareSize, initialState, padding) {
    super(width, height, squareSize, initialState);
    this.padding = padding;
    this.gridWidth = width + padding * 2;
    this.gridHidth = height + padding * 2;
    const cells = initialState.map(cell => [cell[0] + padding, cell[1] + padding]);
    this.life = new UnwrappedLife(this.gridWidth, this.gridHidth, cells);
    this.cellmap = this.life.getCellmap();
  }

  redrawWorld(redrawList) {
    redrawList.forEach(cell => {
      let X = cell[1];
      let Y = cell[0];
      if(X >= this.padding &&  X < this.gridWidth - this.padding && Y >= this.padding &&  Y < this.gridHidth - this.padding){
        X = (X - this.padding + 1) * this.squareSize;
        Y = (Y - this.padding + 1) * this.squareSize;
        if (this.cellmap[cell[0]][cell[1]].getState() === -1) {
          this.canvas.drawDeadCell(X, Y);
        } else {
          this.canvas.drawLiveCell(X, Y);
        }
      }
    })
  }
}
