/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { StaticQuery, graphql } from 'gatsby';
import YouTube from './YouTubePlayer';
import Game from '../game/Game';
import UnwrappedGame from '../game/UnwrappedGame';
import { shiftPatternToCenter, shiftPattern } from '../util/helpers';
import samples from '../game/samples';
import Sample from './Sample';

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
};

const initSamples = (boards, params) => {
  const result = {};
  Object.keys(boards).forEach(name => {
    const { width, height, unwrapped, coordinates, label, type } = boards[name];

    const cells =
      name === 'gun'
        ? shiftPattern(coordinates, 1, 1)
        : shiftPatternToCenter(coordinates, height, width);
    const board = unwrapped
      ? new UnwrappedGame(
          width,
          height,
          params.squareSize,
          cells,
          params.padding
        )
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
  Object.keys(boards).forEach(name => {
    const canvas = canvases[name].current;
    const { board } = boards[name];
    board.drawBoard(canvas, ratio);
  });
};

const initRefs = boards => {
  const resultObject = {};
  Object.keys(boards).forEach(name => {
    resultObject[name] = React.createRef();
  });
  return resultObject;
};

const computeWidth = (width, squareSize, windowWidth, factor) => {
  const w = ((((width + 1) * squareSize * windowWidth) / 100) * 0.7) / factor;
  const sm = windowWidth * 0.6;
  const resultWidth = w > sm ? sm : w;
  return Math.floor(resultWidth);
};

class About extends Component {
  constructor(props) {
    super(props);
    this.boardParameters = {
      squareSize: 12,
      padding: 20,
    };
    this.samples = initSamples(samples, this.boardParameters);
    this.canvases = initRefs(samples);
    this.runningCount = 0;
    this.rAF = null;
    this.speed = 300;
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleWindowSizeChange);
      const { innerWidth } = window;
      let factor;
      if (innerWidth < 600) {
        factor = 3;
      } else if (innerWidth < 960) {
        factor = 6;
      } else {
        factor = 10;
      }
      Object.keys(this.samples).forEach(name => {
        this.samples[name].canvasWidth = computeWidth(
          this.samples[name].width,
          this.boardParameters.squareSize,
          innerWidth,
          factor
        );
      });
      this.setState(
        {
          loading: false,
        },
        () => {
          const { devicePixelRatio } = window;
          initCanvases(this.canvases, this.samples, devicePixelRatio);
        }
      );
    }
  }

  componentWillUnmount() {
    const { setRunning } = this.props;
    if (window)
      window.removeEventListener('resize', this.handleWindowSizeChange);
    cancelAnimationFrame(this.rAF);
    setRunning(false, null);
  }

  propsStatic = name => {
    const { label, canvasWidth } = this.samples[name];
    return {
      width: canvasWidth,
      patternLabel: label,
      withButton: false,
    };
  };

  propsControlled = name => {
    const { running } = this.props;
    const { label, canvasWidth } = this.samples[name];
    const isRunning = running[name] || false;
    return {
      width: canvasWidth,
      patternLabel: label,
      running: isRunning,
      withButton: true,
    };
  };

  propsResponsive = name => {
    const { running } = this.props;
    const { label } = this.samples[name];
    const isRunning = running[name] || false;
    return {
      width: '100%',
      patternLabel: label,
      running: isRunning,
      withButton: true,
    };
  };

  handleWindowSizeChange = () => {
    this.samples.gun.board.handleWindowSizeChange(this.samples.gun.canvas);
  };

  handlePlayToggle = name => {
    const { running } = this.props;
    if (running[name]) {
      this.stop(name);
    } else {
      this.start(name);
    }
  };

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
    if (!running[name]) {
      this.runningCount += 1;
      setRunning(true, name);
      this.then = Date.now();
      if (this.runningCount === 1) {
        this.rAF = requestAnimationFrame(() => {
          this.run();
        });
      }
    }
  }

  run() {
    const { running } = this.props;
    this.now = Date.now();
    this.delta = this.now - this.then;
    if (this.delta > this.speed) {
      this.then = this.now - (this.delta % this.speed);
      Object.keys(running).forEach(name => {
        if (running[name] && this.samples[name]) {
          this.samples[name].board.update();
        }
      });
    }
    this.rAF = requestAnimationFrame(() => {
      this.run();
    });
  }

  renderBoard(patternName) {
    let boardProps;
    if (patternName === 'gun') {
      boardProps = this.propsResponsive(patternName);
    } else if (this.samples[patternName].type === 'static') {
      boardProps = this.propsStatic(patternName);
    } else {
      boardProps = this.propsControlled(patternName);
    }
    const {
      width = null,
      running = false,
      patternLabel,
      withButton = false,
    } = boardProps;
    const { classes } = this.props;
    const { loading } = this.state;
    return (
      <div className={classes.sample} key={patternName}>
        <Sample
          loading={loading}
          boardWidth={this.samples[patternName].width}
          boardHeight={this.samples[patternName].height}
          width={width}
          running={running}
          canvasRef={this.canvases[patternName]}
          withButton={withButton}
          patternLabel={patternLabel}
          patternName={patternName}
          handlePlayToggle={this.handlePlayToggle}
        />
      </div>
    );
  }

  render() {
    const { classes, data } = this.props;
    const { markdownRemark } = data;
    const {
      frontmatter: { page },
    } = markdownRemark;
    const sections = page;
    const { intro, rules, examples, origins, references, links } = sections;
    const {
      subsections: { still, guns, oscillators, gliders },
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
                title="John H. Conway on the creation of his Game of Life"
                videoId="R9Plq-D1gEk"
                showinfo={0}
                rel={0}
              />
              John H. Conway on the creation of his Game of Life
            </div>
            <div className={classes.video}>
              <YouTube
                title="Fragment from The Meaning of Life"
                videoId="CgOcEZinQ2I"
                showinfo={0}
                rel={0}
              />
              Fragment from Stephen Hawking`s The Meaning of Life
            </div>
            <h2 className={classes.title}>{rules.title}</h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: rules.content }}
            />
            <h2 className={classes.title}>{examples.title}</h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: examples.content }}
            />
            <h4 className={classes.title}>{still.title}</h4>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: still.content }}
            />
            <div className={classes.boardsSection}>
              {['block', 'boat', 'loaf', 'beehive'].map(name =>
                this.renderBoard(name)
              )}
            </div>
            <h4 className={classes.title}>{oscillators.title}</h4>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: oscillators.content }}
            />
            <div className={classes.boardsSection}>
              {['blinker', 'beacon', 'toad', 'glasses', 'quad'].map(name =>
                this.renderBoard(name)
              )}
            </div>
            <h4 className={classes.title}>{gliders.title}</h4>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: gliders.content }}
            />
            <div className={classes.boardsSection}>
              {['glider', 'spaceship'].map(name => this.renderBoard(name))}
            </div>
            <h4 className={classes.title}>{guns.title}</h4>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: guns.content }}
            />
            <div className={classes.boardsSection}>
              {this.renderBoard('gun')}
            </div>
            <h2 className={classes.title}>{origins.title}</h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: origins.content }}
            />
            <h2 className={classes.title}>{references.title}</h2>
            <div
              className={classes.text}
              dangerouslySetInnerHTML={{ __html: references.content }}
            />
            <h2 className={classes.title}>{links.title}</h2>
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
            page {
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
