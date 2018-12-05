import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const running = (
  state = {
    main: false,
  },
  action,
) => {
  switch (action.type) {
  case actionTypes.SET_RUNNING:
    if (action.name) {
      if (action.running) {
        return { ...state, ...{ [action.name]: true } };
      }
      const newState = { ...state };
      delete newState[action.name];
      return newState;
    }
    return {};
  default:
    return state;
  }
};

const generation = (
  state = 0,
  action,
) => {
  switch (action.type) {
  case actionTypes.CHANGE_PATTERN:
  case actionTypes.CHANGE_BOARD_SIZE:
  case actionTypes.SET_CLEAR:
    return 0;
  case actionTypes.INCREMENT_GENERATION:
    return state + 1;
  default:
    return state;
  }
};

const currentPattern = (
  state = 0,
  action,
) => {
  switch (action.type) {
  case actionTypes.CHANGE_BOARD_SIZE:
  case actionTypes.SET_CLEAR:
    return -1;
  case actionTypes.CHANGE_PATTERN:
    return action.index;
  default:
    return state;
  }
};

const currentSize = (
  state = 1,
  action,
) => {
  switch (action.type) {
  case actionTypes.CHANGE_BOARD_SIZE:
    return action.currentSize;
  default:
    return state;
  }
};

const cells = (
  state = null,
  action,
) => {
  switch (action.type) {
  case actionTypes.SAVE_CELLS:
    return action.cells;
  default:
    return state;
  }
};

const fps = (
  state = 2,
  action,
) => {
  switch (action.type) {
  case actionTypes.SET_SPEED:
    return action.fps;
  default:
    return state;
  }
};

export default combineReducers({
  running,
  generation,
  currentPattern,
  currentSize,
  cells,
  fps,
});
