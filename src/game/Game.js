import Life from './Life';
import Canvas from './Canvas';
import { shiftPatternToCenter, getRandomPattern } from '../util/helpers';

class Game {
  constructor(width, height, squareSize, initialState) {
    this.width = width;
    this.height = height;
    this.squareSize = squareSize;
    this.radius = this.squareSize / 2;
    let cells;
    if (initialState != null) {
      cells = initialState;
    } else {
      cells = getRandomPattern(height, width);
    }
    this.life = new Life(this.width, this.height, cells);
    this.cellmap = this.life.getCellmap();
    this.cellCount = 0;
  }

  reload(width, height, squareSize, canvas) {
    this.width = width;
    this.height = height;
    this.cellCount = 0;
    this.squareSize = squareSize;
    this.radius = this.squareSize / 2;
    this.life.reload(width, height);
    this.cellmap = this.life.getCellmap();
    this.drawBoard(canvas);
  }

  drawBoard(canvas, ratio) {
    if (ratio != null) {
      this.ratio = ratio;
    }
    this.canvas = new Canvas(canvas, this.width, this.height, this.squareSize, this.ratio);
    this.canvas.init();
    const redrawList = this.life.nextGeneration();
    this.redrawWorld(redrawList);
    return this.cellCount;
  }

  drawCell(e) {
    const coordinates = this.canvas.getClickCoordinates(e);
    if (coordinates !== null) {
      const redrawList = this.life.drawCell(coordinates.Y, coordinates.X);
      this.redrawWorld(redrawList);
    }
    return this.cellCount;
  }

  setPattern(index, patternsList) {
    let pattern;
    if (patternsList[index].pattern) {
      pattern = shiftPatternToCenter(patternsList[index].pattern, this.height, this.width);
    } else {
      pattern = getRandomPattern(this.height, this.width);
    }
    const redrawList = this.life.setPattern(pattern);
    this.redrawWorld(redrawList);
    return this.cellCount;
  }

  handleWindowSizeChange() {
    this.canvas.handleWindowSizeChange();
  }

  getLiveCells() {
    return this.life.getLiveCells();
  }

  getCellCount() {
    return this.cellCount;
  }

  clear() {
    const redrawList = this.life.clearWorld();
    this.redrawWorld(redrawList);
    return this.cellCount;
  }

  update() {
    const redrawList = this.life.nextGeneration();
    this.redrawWorld(redrawList);
    return this.cellCount;
  }

  redrawWorld(redrawList) {
    redrawList.forEach((cell) => {
      const X = (cell[1] + 1) * this.squareSize;
      const Y = (cell[0] + 1) * this.squareSize;
      if (this.cellmap[cell[0]][cell[1]].getState() === -1) {
        this.cellCount -= 1;
        this.canvas.drawDeadCell(X, Y);
      } else {
        this.cellCount += 1;
        this.canvas.drawLiveCell(X, Y);
      }
    });
  }
}

export default Game;
