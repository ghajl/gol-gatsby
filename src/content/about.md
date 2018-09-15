---
page:
  intro:
    content: >
      **The Game of Life** is the best-known two-dimensional <a href="https://en.wikipedia.org/wiki/Cellular_automaton" rel="noopener noreferrer" target="_blank" title="Cellular automaton">cellular automaton</a>, invented in 1970 by the British mathematician <a href="https://en.wikipedia.org/wiki/John_Horton_Conway" rel="noopener noreferrer" target="_blank" title="John Conway">John Horton Conway</a>. 
      The life is a cellular automaton, which is a model of a discrete abstract computational system,
      composed of a finite or infinite set of objects – "cells".
      The cell in the game of life has two states - "alive" and "dead", or "populated"
      and "unpopulated". The cells live on a two-dimensional grid and each cell
      has eight adjacent cells - "neighbors". All cells change their state simultaneously,
      according to update rules by taking into account the states of their neighbors.
  rules:
    title: "Rules"
    content: >
      Every cell interacts with its eight neighbors,
      which are the cells that are horizontally, vertically, or diagonally adjacent.
      At each step in time, the following transitions occur:

      - Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.

      - Any live cell with two or three live neighbors lives on to the next generation.

      - Any live cell with more than three live neighbors dies, as if by overpopulation.

      - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

      
      The initial pattern constitutes the seed of the system.
      The first generation is created by applying the above rules
      simultaneously to every cell in the seed - births and deaths occur simultaneously,
      and the discrete moment at which this happens is sometimes called a tick
      (in other words, each generation is a pure function of the preceding one).
      The rules continue to be applied repeatedly to create further generations.
  examples:
    title: "Examples of Patterns"
    content: >
      In order to simulate infinite grid on the game board and in the examples
      below (except for the gun pattern),
      cells that are situated on the edges of the boards are handled in a toroidal manner,
      i.e. lower neighbor of a cell situated on the bottom edge of board will be a cell from
      the top edge on the same column and a neighbor to the right of a cell situated
      on the right
      edge will be from the left edge.
    subsections:
      still:
        title: "Still Life"
        content: >
          Stable finite patterns.
      oscillators:
        title: "Oscillators"
        content: >
          These patterns repeat their configuration periodically and infinitely.
          The basic oscillators have periods of two or three ticks.
          The most common period-2 oscillators include:
      gliders:
        title: "Gliders and Spaceships"
        content: >
          A spaceship is more complex oscillator, returning to the same configuration but
          shifted after a finite number of generations.
          The glider is a simple spaceship that has period 4, i.e. repeats every
          four generations, but moves diagonally one cell every four generations.
          Other examples of simple spaceships include lightweight, medium weight,
          and heavyweight spaceships.
          They each move in a straight line.
      guns:
        title: "Guns"
        content: >
          Conway offered a prize for any example of patterns that grow forever.
          Conway's prize was collected soon after its announcement, when two different
          ways were discovered for designing a pattern that grows forever.
          The first of these patterns is the period-30 glider gun, which is
          based on the interaction
          of two queen bee shuttles.
          Where these shuttles collide, instead of producing beehives,
          they produce a new glider.
          This glider moves away in time for the process to repeat itself 30 steps later.
  origins:
    title: "Origins"
    content: >
      Conway was interested in a problem presented in the 1940s by
      mathematician <a href="https://en.wikipedia.org/wiki/John_von_Neumann" rel="noopener noreferrer" target="_blank" title="John von Neumann">John von Neumann</a>
      , who attempted to find a hypothetical machine that could build copies of itself
      and succeeded when he found a mathematical model for such a machine with very
      complicated rules on a rectangular grid. The Game of Life emerged as Conway's
      successful attempt to drastically simplify von Neumann's ideas.

      The game made its first public appearance in the October 1970 issue of
      *Scientific American*, in Martin Gardner's column.
      From a theoretical point of view, it is interesting because it has the power of
      a universal Turing machine: that is, anything that can be computed algorithmically
      can be computed within Conway's Game of Life. Gardner wrote:

      > The game made Conway instantly famous, but it also opened up a whole new
      field of mathematical research, the field of cellular automata&nbsp;... Because of
      Life's analogies with the rise,
      fall and alterations of a society of living organisms, it belongs to a
      growing class of what are called "simulation games"
      (games that resemble real life processes).

  references:
    title: "References"
    content: >
      Wikipedia. 2017. Conway's Game of Life. [ONLINE] Available at: <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life</a>. Overview of history, rules and examples of patterns of the Game of Life.


      www.ericweisstein.com. 1996-2005. Eric Weisstein's Treasure Trove of the Life C.A. [ONLINE] Available at: <a href="http://www.ericweisstein.com/encyclopedias/life/">http://www.ericweisstein.com/encyclopedias/life/</a>. This source includes large collection of examples of possible patterns.

  links:
    title: "Links"
    content: >
      <a href="http://www.scholarpedia.org/article/Game_of_Life">www.scholarpedia.org/article/Game_of_Life</a>


      <a href="https://www.ibiblio.org/lifepatterns/">www.ibiblio.org/lifepatterns/</a>


      <a className={classes.link} href="http://mathworld.wolfram.com/GameofLife.html">http://mathworld.wolfram.com/GameofLife.html</a>


      <a className={classes.link} href="http://www.conwaylife.com/">http://www.conwaylife.com/</a>


      <a className={classes.link} href="http://golly.sourceforge.net/">http://golly.sourceforge.net/</a>


      <a className={classes.link} href="http://www.math.com/students/wonders/life/life.html">http://www.math.com/students/wonders/life/life.html</a>


      <a className={classes.link} href="http://www.cuug.ab.ca/dewara/life/life.html">http://www.cuug.ab.ca/dewara/life/life.html</a>


      <a className={classes.link} href="http://www.radicaleye.com/lifepage/">http://www.radicaleye.com/lifepage/</a>


      <a className={classes.link} href="https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide">https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide</a>


      <a className={classes.link} href="http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/">http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/</a>


      <a className={classes.link} href="http://natureofcode.com/book/chapter-7-cellular-automata/">http://natureofcode.com/book/chapter-7-cellular-automata/</a>
---