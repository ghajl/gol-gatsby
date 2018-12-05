import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import ToggleIcon from './ToggleIcon';
import color from '../util/colors';

const styles = {
  container: {
    fontSize: '.7em',
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    height: '100%',
    width: '30vw',
    '@media (min-width: 960px)': {
      width: '20vw',
    },
  },
  canvas: {
    backgroundColor: color.BOARD,
    display: 'block',
  },
  iconbutton: {
    width: 35,
    height: 35,
    color: color.BUTTON,
  },
  icon: {
    width: 25,
    height: 25,
  },
  canvasReplacementWrapper: {
    position: 'relative',
    width: '100%',
  },
  canvasReplacement: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    background: '#eee',
  },
  progressWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  loading: {
    position: 'relative',
    animation: 'mui-progress-circular-dash 3s ease infinite',
  },
};

class Sample extends PureComponent {
  handleClick = () => {
    const { handlePlayToggle, patternName } = this.props;
    console.log(patternName)
    handlePlayToggle(patternName);
  }

  render() {
    const {
      classes,
      running,
      canvasRef,
      withButton,
      patternLabel,
      width,
      boardWidth,
      boardHeight,
      loading,
    } = this.props;
    const buttonStyle = { display: `${withButton ? 'inline' : 'none'}` };
    const containerStyle = { width };
    return (
      <div className={classes.container} style={containerStyle}>
        {loading
          && (
            <div
              className={classes.canvasReplacementWrapper}
              style={{ paddingBottom: `${(boardHeight / boardWidth) * 100}%` }}
            >
              <div className={classes.canvasReplacement}>
                <div className={classes.progressWrapper}>
                  <CircularProgress
                    size={30}
                    thickness={22}
                    className={classes.loading}
                  />
                </div>
              </div>
            </div>
          )
        }
        <canvas
          className={classes.canvas}
          height={0}
          ref={canvasRef}
        />
        <div className={classes.button} style={buttonStyle}>
          <IconButton
            className={classes.iconbutton}
            title={running ? 'Pause' : 'Start'}
            onClick={this.handleClick}
          >
            <ToggleIcon
              on={!running}
              onIcon={<PlayArrow className={classes.icon} />}
              offIcon={<Pause className={classes.icon} />}
            />
          </IconButton>
        </div>
        <div>
          {patternLabel}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Sample);

Sample.propTypes = {
  loading: PropTypes.bool.isRequired,
  running: PropTypes.bool.isRequired,
  withButton: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}),
  handlePlayToggle: PropTypes.func.isRequired,
  patternName: PropTypes.string.isRequired,
  patternLabel: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  boardWidth: PropTypes.number.isRequired,
  boardHeight: PropTypes.number.isRequired,
  canvasRef: PropTypes.shape({}).isRequired,
};

Sample.defaultProps = {
  classes: {},
  width: null,
};
