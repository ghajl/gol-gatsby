const coordinates = {
  beacon: {
    0: [0, 1],
    1: [0, 1],
    2: [2, 3],
    3: [2, 3],
  },
  beehive: {
    0: [1, 2],
    1: [0, 3],
    2: [1, 2],
  },
  blinker: {
    0: [0, 1, 2],
  },
  block: {
    0: [0, 1],
    1: [0, 1],
  },
  boat: {
    0: [0, 1],
    1: [0, 2],
    2: [1],
  },
  glider: {
    0: [2],
    1: [0, 2],
    2: [1, 2],
  },
  gun: {
    0: [24],
    1: [22, 24],
    2: [12, 13, 20, 21, 34, 35],
    3: [11, 15, 20, 21, 34, 35],
    4: [0, 1, 10, 16, 20, 21],
    5: [0, 1, 10, 14, 16, 17, 22, 24],
    6: [10, 16, 24],
    7: [11, 15],
    8: [12, 13],
  },
  loaf: {
    0: [1, 2],
    1: [0, 3],
    2: [1, 3],
    3: [2],
  },
  spaceship: {
    0: [1, 2, 3, 4],
    1: [0, 4],
    2: [4],
    3: [0, 3],
  },
  glasses: {
    0: [4, 13],
    1: [2, 3, 4, 13, 14, 15],
    2: [1, 16],
    3: [1, 4, 5, 6, 11, 12, 13, 16],
    4: [0, 1, 3, 5, 7, 10, 12, 14, 16, 17],
    5: [3, 4, 6, 7, 10, 11, 13, 14],
    6: [3, 5, 7, 10, 12, 14],
    7: [4, 5, 6, 11, 12, 13],
    9: [4, 5, 7, 10, 12, 13],
    10: [4, 6, 7, 10, 11, 13],
  },
  quad: {
    0: [0, 1, 4, 5],
    1: [0, 2, 5],
    2: [4],
    3: [1],
    4: [0, 3, 5],
    5: [0, 1, 4, 5],
  },
  toad: {
    0: [1, 2, 3],
    1: [0, 1, 2],
  },
};

const makeList = cellCoordinates => Object.keys(cellCoordinates).reduce((acc, y) => {
  cellCoordinates[y].forEach(x => acc.push([+y, x]));
  return acc;
}, []);


const makeSample = (width, height, cellCoordinates, unwrapped, label, type = 'none') => ({
  width,
  height,
  coordinates: makeList(cellCoordinates),
  unwrapped,
  label,
  type,
});

const samples = {
  beacon: makeSample(6, 6, coordinates.beacon, false, 'Beacon'),
  beehive: makeSample(6, 5, coordinates.beehive, false, 'Beehive', 'static'),
  blinker: makeSample(5, 5, coordinates.blinker, false, 'Blinker'),
  block: makeSample(4, 4, coordinates.block, false, 'Block', 'static'),
  boat: makeSample(5, 5, coordinates.boat, false, 'Boat', 'static'),
  glider: makeSample(10, 10, coordinates.glider, false, 'Glider'),
  gun: makeSample(40, 20, coordinates.gun, true, 'The Gosper Glider Gun'),
  loaf: makeSample(6, 6, coordinates.loaf, false, 'Loaf', 'static'),
  spaceship: makeSample(12, 12, coordinates.spaceship, false, 'Lightweight Spaceship'),
  glasses: makeSample(20, 13, coordinates.glasses, false, 'Glasses'),
  quad: makeSample(8, 8, coordinates.quad, false, 'Quad'),
  toad: makeSample(6, 6, coordinates.toad, false, 'Toad'),
};

export default samples;
