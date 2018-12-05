import { connect } from 'react-redux';
import {
  changePattern,
  changeBoardSize,
  incrementGeneration,
  setRunning,
  setSpeed,
  setClear,
  saveCells,
} from '../actions';
import Main from '../components/Main';

const mapDispatchToProps = dispatch => ({
  changePattern: index => {
    dispatch(changePattern(index));
  },
  changeBoardSize: size => {
    dispatch(changeBoardSize(size));
  },
  incrementGeneration: () => {
    dispatch(incrementGeneration());
  },
  setRunning: (running, name) => {
    dispatch(setRunning(running, name));
  },
  setSpeed: fps => {
    dispatch(setSpeed(fps));
  },
  setClear: () => {
    dispatch(setClear());
  },
  saveCells: cells => {
    dispatch(saveCells(cells));
  },
});

const mapStateToProps = ({ running, currentSize, cells, currentPattern }) => ({
  running,
  currentSize,
  cells,
  currentPattern,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
