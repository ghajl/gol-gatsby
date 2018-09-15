import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import color from '../util/colors';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      color: color.HEADER_LINK_INACTIVE,
      display: 'block',
      padding: '1em',
      transition: '.2s',
      fontFamily: 'Julius Sans One',
      fallbacks: {
        fontFamily: 'sans-serif',
      },
    },
  },
  title: {
    fontWeight: 900,
    'text-transform': 'none',
    fontSize: '1.1em',
    '@media (min-width: 768px)': {
      fontSize: '1.5em',
    },
    '@media (min-width: 480px)': {
      'text-transform': 'uppercase',
    },
  },
  author: {
    color: color.TITLE_AUTHOR,
  },
  game: {
    color: color.TITLE_GAME,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '20px',
    fontWeight: 900,
    '& a': {
      '&:hover': {
        color: color.HEADER_LINK_ACTIVE,
      },
    },
    fontSize: '.9em',
    '@media (min-width: 768px)': {
      fontSize: '1.2em',
    },
  },
  small: {
    display: 'block',
    '@media (min-width: 480px)': {
      display: 'none',
    },
  },
  large: {
    display: 'none',
    '@media (min-width: 480px)': {
      display: 'block',
    },
  },
  active: {
    color: color.HEADER_LINK_ACTIVE,
  },
};

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.nav}>
      <Link
        className={classes.title}
        to="/"
        activeStyle={{
          color: color.HEADER_LINK_ACTIVE,
        }}
      >
        <div className={classes.small}>
          <span className={classes.game}>
            {'GoL'}
          </span>
        </div>
        <div className={classes.large}>
          <span className={classes.author}>
            {'John Conway`s'}
          </span>
          <span className={classes.game}>
            {'Game of Life'}
          </span>
        </div>
      </Link>
      <div className={classes.links}>
        <Link
          to="/about"
          activeStyle={{
            color: color.HEADER_LINK_ACTIVE,
          }}
        >
          {'About'}
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};
