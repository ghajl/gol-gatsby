import { connect } from 'react-redux';
import { setRunning } from '../actions';
import About from '../components/About';

const mapDispatchToProps = dispatch => ({
  setRunning: (running, name) => {
    dispatch(setRunning(running, name));
  },
});

export default connect(state => state, mapDispatchToProps)(About);
