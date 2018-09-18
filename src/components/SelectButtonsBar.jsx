import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Select from './Select';

const styles = {
  container: {
    textAlign: 'center',
  },
  item: {
    width: '50%',
    display: 'inline-block',
    maxWidth: 360,
  },
};

const SelectButtonsBar = ({
  classes,
  direction,
  patternIndex,
  parameters,
  patterns,
  onPatternChange,
  sizeIndex,
  onBoardSizeChange,
}) => {
  const sizeItems = parameters.map(size => size.label);
  const patternItems = patterns.map(pattern => pattern.label);
  const width = direction === 'column' ? '100%' : null;
  return (
    <div className={classes.container}>
      <div className={classes.item} style={{ width }}>
        <Select
          index={patternIndex}
          items={patternItems}
          onChange={onPatternChange}
          label="Pattern"
        />
      </div>
      <div className={classes.item} style={{ width }}>
        <Select
          index={sizeIndex}
          items={sizeItems}
          onChange={onBoardSizeChange}
          label="Board Size"
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(SelectButtonsBar);

SelectButtonsBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  direction: PropTypes.string,
  patternIndex: PropTypes.number.isRequired,
  patterns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onPatternChange: PropTypes.func.isRequired,
  sizeIndex: PropTypes.number.isRequired,
  parameters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onBoardSizeChange: PropTypes.func.isRequired,
};

SelectButtonsBar.defaultProps = {
  direction: 'row',
};
