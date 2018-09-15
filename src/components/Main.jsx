import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { StaticQuery, graphql } from 'gatsby';
import CircularProgress from '@material-ui/core/CircularProgress';
import Game from '../game/Game';
import SelectButtonsBar from './SelectButtonsBar';
import PlayButtonsBar from './PlayButtonsBar';

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px',
    zIndex: 2,
  },
  wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  game: {
    width: '100%',
    display: 'inline-block',
    '@media (min-width: 1280px)': {
      width: '50%',
    },
  },
  menu: {
    display: 'block',
    '@media (orientation: landscape) and (max-width: 1280px)': {
      display: 'none',
    },
  },
  verticalMenu: {
    display: 'none',
    width: '25%',
    padding: 2,
    verticalAlign: 'top',
    '@media (orientation: landscape) and (max-width: 1280px)': {
      display: 'inline-block',
    },
  },
  canvasControls: {
    display: 'block',
    width: '100%',
    '@media (orientation: landscape) and (max-width: 1280px)': {
      display: 'inline-block',
      width: '70%',
    },
  },
  canvasReplacementWrapper: {
    paddingBottom: '56.25%',
    position: 'relative',
    width: '100%',
  },
  canvasReplacement: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    background: '#eee',
  },
  progressWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  loading: {
    position: 'relative',
  },
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.boards = [
      {
        name: 'small',
        width: 30,
        height: 20,
        squareSize: 24,
        label: '20 X 30',
      },
      {
        name: 'medium',
        width: 60,
        height: 40,
        squareSize: 12,
        label: '40 X 60',
      },
      {
        name: 'large',
        width: 90,
        height: 60,
        squareSize: 8,
        label: '60 X 90',
      },
    ];
    const params = this.boards[props.currentSize];
    this.patterns = [
      {
        name: 'random',
        label: 'Random',
      },
    ];
    this.boardWidth = params.width;
    this.boardHeight = params.height;
    this.squareSize = params.squareSize;
    this.game = new Game(this.boardWidth, this.boardHeight, this.squareSize, props.cells);
    this.setRunning = running => props.setRunning(running, 'main');
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleWindowSizeChange);
      this.setState({ loading: false });
      const ratio = window.devicePixelRatio || 1;
      this.game.drawBoard(this.canvas, ratio);
    }
  }

  componentWillUnmount() {
    if (window) window.removeEventListener('resize', this.handleWindowSizeChange);
    cancelAnimationFrame(this.rAF);
    const liveCellsList = this.game.getLiveCells();
    const { saveCells } = this.props;
    saveCells(liveCellsList);
  }

  setInterval(value) {
    const { setSpeed } = this.props;
    this.interval = 1000 / value;
    setSpeed(value);
  }

  handleWindowSizeChange = () => {
    this.game.handleWindowSizeChange();
  };


  start = () => {
    const { running } = this.props;
    if (!(running.main || this.game.getCellCount() === 0)) {
      this.then = Date.now();
      this.setRunning(true);
      this.rAF = requestAnimationFrame(() => {
        this.run();
      });
    }
  }

  handleClick(e) {
    const { running } = this.props;
    if (running.main) {
      this.stop();
    }
    this.game.drawCell(e);
  }

  handlePlayToggle() {
    const { running } = this.props;
    if (running.main) {
      this.stop();
    } else {
      this.start();
    }
  }


  handlePatternChange(index) {
    const { currentPattern, data, changePattern } = this.props;
    if (index !== currentPattern) {
      this.stop();
      const patterns = [...this.patterns, ...data];
      this.game.setPattern(index, patterns);
      changePattern(index);
    }
  }

  handleBoardSizeChange(index) {
    const { currentSize, changeBoardSize } = this.props;
    if (index !== currentSize) {
      this.stop();
      const params = this.boards[index];
      this.boardWidth = params.width;
      this.boardHeight = params.height;
      this.squareSize = params.squareSize;
      this.game.reload(this.boardWidth, this.boardHeight, this.squareSize, this.canvas);
      changeBoardSize(index);
    }
  }

  stop() {
    const { running } = this.props;
    if (running.main) {
      this.setRunning(false);
      cancelAnimationFrame(this.rAF);
    }
  }

  clear() {
    if (!(this.game.getCellCount() === 0)) {
      const { setClear } = this.props;
      this.stop();
      setClear();
      this.game.clear();
    }
  }

  step() {
    const { running } = this.props;
    if (!(running.main || this.game.getCellCount() === 0)) {
      this.updateOnce();
    }
  }

  updateOnce() {
    const { incrementGeneration } = this.props;
    this.game.update();
    incrementGeneration();
  }

  run() {
    this.now = Date.now();
    this.delta = this.now - this.then;
    if (this.delta > this.interval) {
      this.then = this.now - (this.delta % this.interval);
      this.updateOnce();
    }
    this.rAF = requestAnimationFrame(() => {
      this.run();
    });
  }

  render() {
    const {
      classes, running, currentPattern, data, currentSize,
    } = this.props;
    const { loading } = this.state;
    const patterns = [...this.patterns, ...data];
    const isRunning = running.main || false;
    return (
      <div className={classes.container}>
        <div className={classes.game}>
          <div className={classes.menu}>
            <div className={classes.wrapper}>
              <SelectButtonsBar
                patternIndex={currentPattern}
                patterns={patterns}
                parameters={this.boards}
                onPatternChange={index => this.handlePatternChange(index)}
                sizeIndex={currentSize}
                onBoardSizeChange={index => this.handleBoardSizeChange(index)}
              />
            </div>
          </div>
          <div className={classes.verticalMenu}>
            <SelectButtonsBar
              patternIndex={currentPattern}
              patterns={patterns}
              parameters={this.boards}
              onPatternChange={index => this.handlePatternChange(index)}
              sizeIndex={currentSize}
              onBoardSizeChange={index => this.handleBoardSizeChange(index)}
              direction="column"
            />
          </div>
          <div className={classes.canvasControls}>
            <div className={classes.wrapper}>
              {loading
                && (
                  <div
                    className={classes.canvasReplacementWrapper}
                  >
                    <div className={classes.canvasReplacement}>
                      <div className={classes.progressWrapper}>
                        <CircularProgress
                          size={30}
                          thickness={22}
                          className={classes.loading}
                          classes={{
                            circleIndeterminate: {
                              animation: 'mui-progress-circular-dash 3s ease infinite',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )
              }
              <canvas
                height={0}
                ref={(canvas) => { this.canvas = canvas; }}
                onClick={e => this.handleClick(e)}
              />
            </div>
            <div className="controls">
              <PlayButtonsBar
                on={!isRunning}
                handlePlayToggle={() => this.handlePlayToggle()}
                step={() => this.step()}
                clear={() => this.clear()}
                setInterval={v => this.setInterval(v)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const withData = WrappedComponent => props => (
  <StaticQuery
    query={graphql`
      query {
        allPattern {
          edges {
            node {
              name,
              pattern,
              label
            }
          }
        }
      }
    `}
    render={(data) => {
      const patternlist = data.allPattern.edges.map(item => item.node);
      return (
        <WrappedComponent data={patternlist} {...props} />
      );
    }}
  />
);

export default withData(withStyles(styles)(Main));

Main.propTypes = {
  setRunning: PropTypes.func.isRequired,
  running: PropTypes.shape({
    main: PropTypes.bool,
  }),
  classes: PropTypes.shape({}),
  cells: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  changePattern: PropTypes.func.isRequired,
  changeBoardSize: PropTypes.func.isRequired,
  incrementGeneration: PropTypes.func.isRequired,
  setSpeed: PropTypes.func.isRequired,
  setClear: PropTypes.func.isRequired,
  saveCells: PropTypes.func.isRequired,
  currentPattern: PropTypes.number,
  currentSize: PropTypes.number,
};

Main.defaultProps = {
  classes: {},
  running: {
    main: false,
  },
  currentPattern: 0,
  currentSize: 1,
  data: [],
};
