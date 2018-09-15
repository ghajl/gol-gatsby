/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { connect } from 'react-redux';

const handleStyle = {
  position: 'absolute',
  transform: 'translate(-35%, -35%)',
  width: '15px',
  height: '15px',
  cursor: 'pointer',
  borderRadius: '50%',
  border: 'solid 3px',
  borderColor: 'rgba(0, 0, 0, .7)',
  backgroundColor: 'white',
};

class Handle extends Component {
  render() {
    const style = Object.assign({ left: `${this.props.offset}%` }, handleStyle);
    return(
      <div style={style}/>
    )
  }
}

const sliderStyle = {    
  width: 60,
  height: 40,
};

const handle = ({ fps, ...Props }) => {
  return (
    <Handle value={fps} style={{borderColor: 'black',}} {...Props} />
  );
};

class SpeedSlider extends Component {
  componentWillMount() {
      this.props.onChange(this.props.fps)
  }
  render() { 
    return (
      <div style={sliderStyle}>
        <Slider
          min={2}
          max={160}
          step={2}
          value={this.props.fps}
          onChange={(v) => this.props.onChange(v)}
          handle={handle}
        />
      </div>
    )
  }
}

const mapStateToProps =({fps}) => ({fps});

export default (connect(mapStateToProps)(SpeedSlider));

SpeedSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
