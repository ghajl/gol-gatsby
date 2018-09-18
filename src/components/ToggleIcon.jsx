import React from 'react';
import PropTypes from 'prop-types';

const ToggleIcon = ({ on, onIcon, offIcon }) => (
  <React.Fragment>
    {on ? onIcon : offIcon }
  </React.Fragment>
);

ToggleIcon.propTypes = {
  on: PropTypes.bool.isRequired,
  onIcon: PropTypes.shape({}).isRequired,
  offIcon: PropTypes.shape({}).isRequired,
};

export default ToggleIcon;
