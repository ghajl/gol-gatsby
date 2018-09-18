import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  root: {
    width: '100%',
    maxWidth: 360,
    textAlign: 'center',
  },
};

class Select extends Component {
  constructor(props) {
    super(props);
    this.options = [];
    if (typeof props.items !== 'undefined') {
      this.options = [...props.items];
    }
    this.button = undefined;
    this.state = {
      anchorEl: undefined,
      open: false,
    };
  }

  handleClickListItem = (event) => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    const { onChange } = this.props;
    this.setState({ open: false });
    onChange(index);
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes, items, index, label,
    } = this.props;
    const { anchorEl, open } = this.state;
    this.options.length = 0;
    if (typeof items !== 'undefined') {
      this.options = [...items];
    }
    return (
      <div className={classes.root}>
        <List>
          <ListItem
            button
            onClick={this.handleClickListItem}
          >
            {index < 0
              ? (
                <ListItemText
                  primary={label}
                  secondary=""
                />
              )
              : (
                <ListItemText
                  primary={label}
                  secondary={this.options[index]}
                />
              )
            }
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleRequestClose}
          transitionDuration={250}
        >
          {this.options.map((option, i) => (
            <MenuItem
              key={option}
              selected={i === index}
              onClick={event => this.handleMenuItemClick(event, i)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

Select.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default withStyles(styles)(Select);
