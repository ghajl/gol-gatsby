import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import color from '../util/colors';

const styles = {
  generation: {
    color: color.GENERATION,
    fontSize: '1.5em',
    textAlign: 'right',
  },
};

const Generation = ({ classes, generation }) => (
  <div className={classes.generation}>
    {generation}
  </div>
);

const mapStateToProps = ({ generation }) => ({ generation });

export default (connect(mapStateToProps)(withStyles(styles)(Generation)));

Generation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  generation: PropTypes.number.isRequired,
};
