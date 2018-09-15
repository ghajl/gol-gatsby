/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { StaticQuery, graphql } from 'gatsby';
import YouTube from './YouTubePlayer';
import Game from '../game/Game';
import UnwrappedGame from '../game/UnwrappedGame';
import ToggleIcon from './ToggleIcon';
import { shiftPatternToCenter, shiftPattern } from '../util/helpers';
import color from '../util/colors';
import samples from '../game/samples';

const styles = {
  mainContent: {
    marginTop: 75,
  },
  rules: {
    backgroundColor: 'rgba(240,248,255,.7)',
  },
  text: {
    fontFamily: 'Open Sans',
    fallbacks: {
      fontFamily: 'sans-serif',
    },
  },
  title: {
    fontFamily: 'Julius Sans One',
    fallbacks: {
      fontFamily: 'sans-serif',
    },
    fontWeight: 900,
    marginTop: 40,
  },
  video: {
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fallbacks: {
      fontFamily: 'sans-serif',
    },
    marginTop: 30,
  },
  boardsSection: {
    display: 'inline-block',
    marginTop: 30,
  },
  link: {
    'text-decoration': 'underline !important',
    'overflow-wrap': 'break-word',
    'word-wrap': 'break-word',
  },
  sample: {
    display: 'inline-block',
    margin: '16px 0 0 16px',
  },
  container: {
    display: 'flex',
    fontSize: '.7em',
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
  },
  item: {
    alignSelf: 'flex-end',
  },
  canvas: {
    backgroundColor: color.BOARD,
  },
  iconbutton: {
    width: 35,
    height: 35,
    color: color.BUTTON,
  },
  icon: {
    width: 25,
    height: 25,
  },
};

const initSamples = (boards, params) => {
  const result = {};
  Object.keys(boards).forEach((name) => {
    const {
      width, height, unwrapped, coordinates, label, type,
    } = boards[name];
    const cells = name === 'gun' ? shiftPattern(coordinates, 1, 1) : shiftPatternToCenter(coordinates, height, width);
    const board = unwrapped
      ? new UnwrappedGame(width, height, params.squareSize, cells, params.padding)
      : new Game(width, height, params.squareSize, cells);
    result[name] = {
      board,
      label,
      width,
      height,
      type,
    };
  });
  return result;
};

const initCanvases = (canvases, boards, ratio) => {
  Object.keys(boards).forEach((name) => {
    const canvas = canvases[name];
    const { board } = boards[name];
    board.drawBoard(canvas, ratio);
  });
};

class About extends Component {
  constructor(props) {
    super(props);
    this.boardParameters = {
      squareSize: 12,
      padding: 20,
    };
    this.samples = initSamples(samples, this.boardParameters);
    this.canvases = {};
    this.runningCount = 0;
    this.rAF = null;
    this.speed = 300;
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleWindowSizeChange);
      const { devicePixelRatio } = window;
      this.setState({
        screen: {
          ratio: devicePixelRatio || 1,
        },
      }, () => {
        const { screen } = this.state;
        initCanvases(this.canvases, this.samples, screen.ratio);
      });
    }
  }

  componentWillUnmount() {
    const { setRunning } = this.props;
    if (window) window.removeEventListener('resize', this.handleWindowSizeChange);
    cancelAnimationFrame(this.rAF);
    setRunning(false, null);
  }

  propsStatic = (name) => {
    const { label } = this.samples[name];
    return {
      patternName: label,
      withButton: false,
    };
  };

  propsControlled = (name) => {
    const { running } = this.props;
    const { label } = this.samples[name];
    const isRunning = running[name] || false;
    return {
      patternName: label,
      running: isRunning,
      withButton: true,
    };
  };

  propsResponsive = (name) => {
    const { running } = this.props;
    const { label } = this.samples[name];
    const isRunning = running[name] || false;
    return {
      patternName: label,
      running: isRunning,
      withButton: true,
    };
  };

  handleWindowSizeChange = () => {
    this.samples.gun.board.handleWindowSizeChange(this.samples.gun.canvas);
  }

  handlePlayToggle(name) {
    const { running } = this.props;
    if (running[name]) {
      this.stop(name);
    } else {
      this.start(name);
    }
  }

  stop(name) {
    const { running, setRunning } = this.props;
    if (running[name]) {
      this.runningCount -= 1;
      setRunning(false, name);
      if (this.runningCount === 0) {
        cancelAnimationFrame(this.rAF);
      }
    }
  }

  start(name) {
    const { running, setRunning } = this.props;
    if (running[name] == null || running[name] === false) {
      this.runningCount += 1;
      setRunning(true, name);
      this.then = Date.now();
      if (this.runningCount === 1) {
        this.rAF = requestAnimationFrame(() => { this.run(); });
      }
    }
  }

  run() {
    const { running } = this.props;
    this.now = Date.now();
    this.delta = this.now - this.then;
    if (this.delta > this.speed) {
      this.then = this.now - (this.delta % this.speed);
      Object.keys(running).forEach((name) => {
        if (running[name]) {
          this.samples[name].board.update();
        }
      });
    }
    this.rAF = requestAnimationFrame(() => { this.run(); });
  }

  renderBoard(boardName) {
    let boardProps;
    if (boardName === 'gun') {
      boardProps = this.propsResponsive(boardName);
    } else if (this.samples[boardName].type === 'static') {
      boardProps = this.propsStatic(boardName);
    } else {
      boardProps = this.propsControlled(boardName);
    }
    const {
      running = false,
      patternName,
      withButton = false,
    } = boardProps;
    const { classes } = this.props;
    const buttonStyle = { display: `${withButton ? 'inline' : 'none'}` };
    return (
      <div className={classes.sample} key={boardName}>
        <div className={classes.container} style={{ width: '100%', height: '100%' }}>
          <div className={classes.item}>
            <div className={classes.canvas}>
              <canvas
                ref={(el) => {
                  this.canvases[boardName] = el;
                }}
              />
            </div>
            <div className={classes.button} style={buttonStyle}>
              <IconButton
                className={classes.iconbutton}
                title={running ? 'Pause' : 'Start'}
                onClick={() => this.handlePlayToggle(boardName)}
              >
                <ToggleIcon
                  on={!running}
                  onIcon={<PlayArrow className={classes.icon} />}
                  offIcon={<Pause className={classes.icon} />}
                />
              </IconButton>
            </div>
            <div>
              {patternName}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { classes, data } = this.props;
    const { markdownRemark } = data;
    const { frontmatter: { page } } = markdownRemark;
    const sections = page;
    const {
      intro, rules, examples, origins, references, links,
    } = sections;
    const {
      subsections: {
        still, guns, oscillators, gliders,
      },
    } = examples;
    return (
      <div className={classes.mainContent}>
        <Grid container spacing={0}>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: intro.content }}
            />
            <div className={classes.video}>
              <YouTube
                videoId="R9Plq-D1gEk"
                showinfo={0}
                rel={0}
              />
              John H. Conway on the creation of his Game of Life
            </div>
            <div className={classes.video}>
              <YouTube
                videoId="CgOcEZinQ2I"
                showinfo={0}
                rel={0}
              />
              Fragment from Stephen Hawking`s The Meaning of Life
            </div>
            <h2 className={classes.title}>
              {rules.title}
            </h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: rules.content }}
            />
            <h2
              className={classes.title}
            >
              {examples.title}
            </h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: examples.content }}
            />
            <h4
              className={classes.title}
            >
              {still.title}
            </h4>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: still.content }}
            />
            <div
              className={classes.boardsSection}
            >
              {['block', 'boat', 'loaf', 'beehive'].map(name => this.renderBoard(name))}
            </div>
            <h4
              className={classes.title}
            >
              {oscillators.title}
            </h4>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: oscillators.content }}
            />
            <div
              className={classes.boardsSection}
            >
              {['blinker', 'beacon', 'toad', 'glasses', 'quad'].map(name => this.renderBoard(name))}
            </div>
            <h4 className={classes.title}>
              {gliders.title}
            </h4>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: gliders.content }}
            />
            <div
              className={classes.boardsSection}
            >
              {['glider', 'spaceship'].map(name => this.renderBoard(name))}
            </div>
            <h4 className={classes.title}>
              {guns.title}
            </h4>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: guns.content }}
            />
            <div
              className={classes.boardsSection}
            >
              {this.renderBoard('gun')}
            </div>
            <h2
              className={classes.title}
            >
              {origins.title}
            </h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: origins.content }}
            />
            <h2
              className={classes.title}
            >
              {references.title}
            </h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: references.content }}
            />
            <h2
              className={classes.title}
            >
              {links.title}
            </h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: links.content }}
            />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
  setRunning: PropTypes.func.isRequired,
  running: PropTypes.shape({}).isRequired,
};

const withData = WrappedComponent => props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark {
          frontmatter {
            page{
              intro {
                content
              }
              rules {
                title
                content
              }
              examples {
                title
                content
                subsections {
                  still {
                    title
                    content
                  }
                  oscillators {
                    title
                    content
                  }
                  gliders {
                    title
                    content
                  }
                  guns {
                    title
                    content
                  }
                }
              }
              origins {
                title
                content
              }
              references {
                title
                content
              }
              links {
                title
                content
              }
            }
          }
        }
      }
    `}
    render={data => <WrappedComponent data={data} {...props} />}
  />
);

export default withData(withStyles(styles)(About));
