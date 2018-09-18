export default class Cell {
  constructor() {
    this.state = -1;
    this.count = 0;
    this.neighbors = null;
    this.neighborsCoordinates = null;
  }

  changeState() {
    this.state *= -1;
    this.neighbors.forEach((neighbor) => {
      neighbor.updateNeighborsCount(this.state);
    });
  }

  updateNeighborsCount(value) {
    this.count += value;
  }

  getState() {
    return this.state;
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  setNeighborsCoordinates(coordinates) {
    this.neighborsCoordinates = coordinates;
  }

  getNeighborsCount() {
    return this.count;
  }

  getNeighborsCoordinates() {
    return this.neighborsCoordinates;
  }
}
