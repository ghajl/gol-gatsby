/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { PlayArrow, Pause, Clear, SkipNext } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import SpeedSlider from './SpeedSlider';
import Generation from './Generation';
import ToggleIcon from './ToggleIcon';
import color from '../util/colors';

const styles = theme => ({
  button: {
    color: color.BUTTON,
    width: 35,
    height: 35,
  },
  icon: {
    width: 25,
    height: 25,
  },
  vertical: {
    [theme.breakpoints.up('xs')]: {
      marginTop: 10
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 20
    }
  },
  bar: {
    margin: 5,
    display: 'flex',
    justifyContent: 'space-between',
  },
  controls: {
    display: 'flex',
  },
  slider: {
    marginTop: 10,
    marginLeft: 15,
  },
  generation: {
    align: 'flex-end',
    marginTop: 5,
    marginRight: 15,
    transform: 'skew(-10deg)',
   }
});

const PlayButtonsBar = ({classes, ...props}) => {
  return (
    <div className={classes.bar}>
      <div className={classes.controls}>
        <div  className={classes.item}>
          <IconButton className={classes.button} title={props.on?"Start":"Pause"} onClick={() => props.handlePlayToggle()}>
            <ToggleIcon
              on={props.on}
              onIcon={<PlayArrow className={classes.icon}/>}
              offIcon={<Pause className={classes.icon} />}
            />
          </IconButton>
        </div>
        <div className={classes.item}>
          <IconButton className={classes.button} title="Next Generation" onClick={() => props.step()} >
            <SkipNext className={classes.icon}/>
          </IconButton>
          </div>
        <div  className={classes.item}>
          <IconButton className={classes.button} title="Clear" onClick={() => props.clear()} >
            <Clear  className={classes.icon}/>
          </IconButton>
        </div>
        <div className={classes.slider} title="Set Speed">
          <SpeedSlider onChange={(v) => props.setInterval(v)}/>
        </div>
      </div>
      <div>
        <div className={classes.generation} title="Generation">
          <Generation />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PlayButtonsBar);

PlayButtonsBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handlePlayToggle: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  step: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  setInterval: PropTypes.func.isRequired,
};
