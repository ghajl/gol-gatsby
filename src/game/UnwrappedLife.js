import Life, { createCellmap } from './Life';

export function makeNeighbors(width, height, Y, X) {
  const cells = {};
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const tX = X + j;
      const tY = Y + i;
      if (tY >= 0
        && tY < height
        && tX >= 0
        && tX < width
        && !(i === 0 && j === 0)
      ) {
        cells[`${tY},${tX}`] = 1;
      }
    }
  }
  return Object.keys(cells);
}

export default class UnwrappedLife extends Life {
  constructor(width, height, initialState) {
    super(width, height, initialState);
    this.cellmap = createCellmap(this.gridWidth, this.gridHeight, makeNeighbors);
  }

  reload(width, height) {
    this.changeList = null;
    this.gridWidth = width;
    this.gridHeight = height;
    this.cellmap = createCellmap(this.gridWidth, this.gridHeight, makeNeighbors);
  }
}
