import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';

const styles = {
  '@global': {
    html: {
      height: '100%',
      fontSize: '14px',
    },
    body: {
      background: 'white',
      fontFamily: 'Century Gothic',
      fallbacks: {
        fontFamily: 'sans-serif',
      },
      margin: 0,
      display: 'flex',
      'flex-direction': 'column',
      height: '100%',
      '& > div:first-child': {
        height: '100%',
        flex: '1 0 auto',
        '& > div': {
          '&:first-child': {
            height: '100%',
          },
        },
      },
    },
    a: {
      textDecoration: 'none !important',
      outline: 'none',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    flex: '1 0 auto',
    width: '100%',
  },
  navbar: {
    overflow: 'hidden',
    boxShadow: '0 3px 15px -6px #222',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 3,
    backgroundColor: '#fff',
  },
};

class Layout extends PureComponent {
  meta = [
    {
      charset: 'utf-8',
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content: 'user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height',
    },
  ];

  links = [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/public/icons/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500|Open+Sans|Julius+Sans+One',
    },
  ];

  title = 'John Conway\'s Game Of Life';

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <Helmet
          title={this.title}
          meta={this.meta}
          link={this.links}
        >
          <html lang="en" />
        </Helmet>
        <div className={classes.navbar}>
          <Header />
        </div>
        <div className={classes.content}>
          {children}
        </div>

        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Layout);
