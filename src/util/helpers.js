/* eslint-disable */
export function shiftPatternToCenter(pattern,boardHeight,boardWidth){
  const patternSize = getPatternSize(pattern)
  const center = [Math.floor((boardHeight - 1) / 2), Math.floor((boardWidth - 1) / 2)]
  const trans = [Math.floor((patternSize.maxY - patternSize.minY) / 2), Math.floor((patternSize.maxX - patternSize.minX) / 2)]
  const result = pattern.map(cell => {
    const y = cell[0] + center[0] - trans[0]
    const x = cell[1] + center[1] - trans[1]
    return [y,x];
  });

  return result;
}

export function shiftPattern(pattern,vertShift,horShift){
  return pattern.map(cell => {
    const y = cell[0] + vertShift;
    const x = cell[1] + horShift;
    return [y,x];
  });
}

export function getRandomPattern(height,width){
  const min = Math.floor(Math.max(2, height*width*.05));
  const max = Math.floor(Math.max(2, height*width*.2));
  const len = getRandomInt(min, max);
  const arr =  Array.from({length: len}, () => `${Math.floor(Math.random() * height)},${Math.floor(Math.random() * width)}`);
  return [...new Set(arr)].map(crd => crd.split(',').map(k => +k));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPatternSize(pattern){
  return pattern.reduce((acc, val, ind) => {
    if(ind === 0){
      acc.minX = acc.maxX = val[1]
      acc.minY = acc.maxY = val[0]
    } else {
      acc.minX = val[1] < acc.minX ? val[1] : acc.minX
      acc.maxX = val[1] > acc.maxX ? val[1] : acc.maxX
      acc.minY = val[0] < acc.minY ? val[0] : acc.minY
      acc.maxY = val[0] > acc.maxY ? val[0] : acc.maxY
    }
    return acc
  }, {})
}