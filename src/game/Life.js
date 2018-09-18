import Cell from './Cell';

const nextState = {
  '-1': [-1, -1, -1, 1, -1, -1, -1, -1, -1],
  1: [-1, -1, 1, 1, -1, -1, -1, -1, -1],
};

export function makeNeighbors(width, height, Y, X) {
  const cells = {};
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let tX = X + j;
      let tY = Y + i;
      if (tY < 0) {
        tY = height - 1;
      } else if (tY >= height) {
        tY = 0;
      }
      if (tX < 0) {
        tX = width - 1;
      } else if (tX >= width) {
        tX = 0;
      }
      if (!(i === 0 && j === 0)) {
        cells[`${tY},${tX}`] = 1;
      }
    }
  }
  return Object.keys(cells);
}

export function createCellmap(width, height, makeNeighborsCoordinates) {
  const cellmap = Array(height).fill(null);
  for (let i = 0; i < height; i++) {
    cellmap[i] = Array(width).fill(null);
    for (let j = 0; j < width; j++) {
      cellmap[i][j] = new Cell();
    }
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const neighborsCoordinates = makeNeighborsCoordinates(width, height, i, j);
      cellmap[i][j].setNeighborsCoordinates(neighborsCoordinates);
      cellmap[i][j].setNeighbors(neighborsCoordinates.map((coordinates) => {
        const [y, x] = coordinates.split(',').map(k => +k);
        return cellmap[y][x];
      }));
    }
  }
  return cellmap;
}

export function getLiveCells(cellmap) {
  const cells = [];
  for (let i = 0; i < cellmap.length; i++) {
    for (let j = 0; j < cellmap[i].length; j++) {
      if (cellmap[i][j].getState() === 1) {
        cells.push([i, j]);
      }
    }
  }
  return cells;
}

export function totalCheck(cellmap) {
  const changeList = [];
  for (let i = 0; i < cellmap.length; i++) {
    for (let j = 0; j < cellmap[i].length; j++) {
      const state = cellmap[i][j].getState();
      const neighborsCount = cellmap[i][j].getNeighborsCount();
      if (nextState[state][neighborsCount] !== state) {
        changeList.push([i, j]);
      }
    }
  }
  return changeList;
}

export function applyChanges(changeList, cellmap) {
  const checkList = {};
  changeList.forEach((cell) => {
    const [y, x] = cell;
    cellmap[y][x].changeState();
    if (typeof checkList[`${y},${x}`] === 'undefined') {
      checkList[`${y},${x}`] = 1;
    }
    const neighbors = cellmap[y][x].getNeighborsCoordinates();
    neighbors.forEach((neighbor) => {
      if (typeof checkList[neighbor] === 'undefined') {
        checkList[neighbor] = 1;
      }
    });
  });
  return Object.keys(checkList);
}

export function makeChangeList(checkList, cellmap) {
  const changeList = [];
  const re = /\d+/g;
  checkList.forEach((cell) => {
    const y = +re.exec(cell)[0];
    const x = +re.exec(cell)[0];
    re.lastIndex = 0;
    const state = cellmap[y][x].getState();
    const neighborsCount = cellmap[y][x].getNeighborsCount();
    if (nextState[state][neighborsCount] !== state) {
      changeList.push([y, x]);
    }
  });
  return changeList;
}

class Life {
  constructor(width, height, initialState) {
    this.gridWidth = width;
    this.gridHeight = height;
    this.changeList = initialState;
    this.cellmap = createCellmap(this.gridWidth, this.gridHeight, makeNeighbors);
  }

  reload(width, height) {
    this.changeList = [];
    this.gridWidth = width;
    this.gridHeight = height;
    this.cellmap = createCellmap(this.gridWidth, this.gridHeight, makeNeighbors);
  }

  setPattern(pattern) {
    const liveCells = getLiveCells(this.cellmap);
    if (liveCells.length === 0) {
      this.changeList = pattern;
    } else {
      this.changeList = liveCells.filter(cell => pattern.indexOf(cell) === -1)
        .concat(pattern.filter(cell => liveCells.indexOf(cell) === -1));
    }
    return this.nextGeneration();
  }

  drawCell(y, x) {
    this.cellmap[y][x].changeState();
    this.changeList = totalCheck(this.cellmap);
    return [[y, x]];
  }

  clearWorld() {
    this.changeList = getLiveCells(this.cellmap);
    return this.nextGeneration();
  }

  nextGeneration() {
    const redrawList = this.changeList;
    const checkList = applyChanges(this.changeList, this.cellmap, this.gridWidth, this.gridHeight);
    this.changeList = makeChangeList(checkList, this.cellmap);
    return redrawList;
  }

  getLiveCells() {
    return getLiveCells(this.cellmap);
  }

  getCellmap() {
    return this.cellmap;
  }
}

export default Life;
