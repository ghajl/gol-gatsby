import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { connect } from 'react-redux';

const Handle = ({ offset }) => {
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
    left: `${offset}%`,
  };
  return (
    <div style={handleStyle} />
  );
};

Handle.propTypes = {
  offset: PropTypes.number.isRequired,
};

const sliderStyle = {
  width: 60,
};

const handle = ({ fps, ...props }) => (
  <Handle value={fps} style={{ borderColor: 'black' }} {...props} />
);

class SpeedSlider extends Component {
  componentDidMount() {
    const { onChange, fps } = this.props;
    onChange(fps);
  }

  render() {
    const { onChange, fps } = this.props;

    return (
      <div style={sliderStyle}>
        <Slider
          min={2}
          max={160}
          step={2}
          value={fps}
          onChange={onChange}
          handle={handle}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ fps }) => ({ fps });

export default (connect(mapStateToProps)(SpeedSlider));

SpeedSlider.propTypes = {
  fps: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
