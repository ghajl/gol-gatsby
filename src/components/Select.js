/* eslint-disable */
import React, {Component} from 'react';
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
  },
};

class Select extends Component {
  constructor(props){
    super(props);
    this.options = [];
    if(typeof props.items !== 'undefined'){
      for(let i=0;i<props.items.length;i++){
        this.options.push(props.items[i]);
      }         
    }
  }

  state = {
    anchorEl: undefined,
    open: false,
  };

  button = undefined;

  handleClickListItem = event => {
    this.setState({ open: true, anchorEl: event.currentTarget, });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({open: false});
    this.props.onChange(index);
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    const classes = this.props.classes;
    this.options.length = 0;
    if (typeof this.props.items !== 'undefined') {
        for (let i = 0; i < this.props.items.length; i++) {
          this.options.push(this.props.items[i]);
      }         
    }
    
    return (
      <div className={classes.root}>
        <List>
          <ListItem
            button
            onClick={this.handleClickListItem}
          >
          {this.props.index < 0 
            ? (
              <ListItemText
                primary={this.props.label}
                secondary=""
              />
            ) 
            : (
              <ListItemText
                primary={this.props.label}
                secondary={this.options[this.props.index]}
              />
            )
          }
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleRequestClose}
          transitionDuration={250}
        >
        {this.options.map((option, index) =>
          <MenuItem
            key={option}
            selected={index === this.props.index}
            onClick={event => this.handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>,
        )}
        </Menu>
      </div>
    );
  }
}

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default withStyles(styles)(Select);
