(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(1)),r=l(n(478)),i=l(n(499)),o=l(n(5816));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)(function(){return a.default.createElement(i.default,null,a.default.createElement(o.default,null))});t.default=s},5816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=n(149),i=n(150),o=(a=n(5817))&&a.__esModule?a:{default:a},l=(0,r.connect)(function(e){return e},function(e){return{setRunning:function(t,n){e((0,i.setRunning)(t,n))}}})(o.default);t.default=l},5817:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(5818)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(1)),i=m(n(11)),o=n(411),l=m(n(5819)),s=n(444),c=m(n(5822)),u=m(n(459)),f=m(n(5825)),d=n(503),p=m(n(5827)),h=m(n(5828));function m(e){return e&&e.__esModule?e:{default:e}}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e,t){var n={};return Object.keys(e).forEach(function(a){var r=e[a],i=r.width,o=r.height,l=r.unwrapped,s=r.coordinates,c=r.label,p=r.type,h="gun"===a?(0,d.shiftPattern)(s,1,1):(0,d.shiftPatternToCenter)(s,o,i),m=l?new f.default(i,o,t.squareSize,h,t.padding):new u.default(i,o,t.squareSize,h);n[a]={board:m,label:c,width:i,height:o,type:p}}),n},k=function(e){var t={};return Object.keys(e).forEach(function(e){t[e]=r.default.createRef()}),t},j=function(e){function t(e){var n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=y(t).call(this,e),_(x(x(n=!a||"object"!==w(a)&&"function"!=typeof a?x(this):a)),"propsStatic",function(e){var t=n.samples[e],a=t.label;return{width:t.canvasWidth,patternLabel:a,withButton:!1}}),_(x(x(n)),"propsControlled",function(e){var t=n.props.running,a=n.samples[e],r=a.label;return{width:a.canvasWidth,patternLabel:r,running:t[e]||!1,withButton:!0}}),_(x(x(n)),"propsResponsive",function(e){var t=n.props.running;return{width:"100%",patternLabel:n.samples[e].label,running:t[e]||!1,withButton:!0}}),_(x(x(n)),"handleWindowSizeChange",function(){n.samples.gun.board.handleWindowSizeChange(n.samples.gun.canvas)}),_(x(x(n)),"handlePlayToggle",function(e){n.props.running[e]?n.stop(e):n.start(e)}),_(x(x(n)),"run",function(){var e=n.props.running;n.now=Date.now(),n.delta=n.now-n.then,n.delta>n.speed&&(n.then=n.now-n.delta%n.speed,Object.keys(e).forEach(function(t){e[t]&&(console.log(t),console.log(n.samples),n.samples[t].board.update())})),n.rAF=requestAnimationFrame(function(){n.run()})}),n.boardParameters={squareSize:12,padding:20},n.samples=O(p.default,n.boardParameters),n.canvases=k(p.default),n.runningCount=0,n.rAF=null,n.speed=300,n.state={loading:!0},n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;if(window){window.addEventListener("resize",this.handleWindowSizeChange);var t,n=window.innerWidth;t=n<600?3:n<960?6:10,Object.keys(this.samples).forEach(function(a){e.samples[a].canvasWidth=function(e,t,n,a){var r=(e+1)*t*n/100*.7/a,i=.6*n,o=r>i?i:r;return Math.floor(o)}(e.samples[a].width,e.boardParameters.squareSize,n,t)}),this.setState({loading:!1},function(){var t,n,a,r=window.devicePixelRatio;t=e.canvases,n=e.samples,a=r,Object.keys(n).forEach(function(e){var r=t[e].current;n[e].board.drawBoard(r,a)})})}}},{key:"componentWillUnmount",value:function(){var e=this.props.setRunning;window&&window.removeEventListener("resize",this.handleWindowSizeChange),cancelAnimationFrame(this.rAF),e(!1,null)}},{key:"stop",value:function(e){var t=this.props,n=t.running,a=t.setRunning;n[e]&&(this.runningCount-=1,a(!1,e),0===this.runningCount&&cancelAnimationFrame(this.rAF))}},{key:"start",value:function(e){var t=this,n=this.props,a=n.running,r=n.setRunning;a[e]||(this.runningCount+=1,r(!0,e),this.then=Date.now(),1===this.runningCount&&(this.rAF=requestAnimationFrame(function(){t.run()})))}},{key:"renderBoard",value:function(e){var t="gun"===e?this.propsResponsive(e):"static"===this.samples[e].type?this.propsStatic(e):this.propsControlled(e),n=t.width,a=void 0===n?null:n,i=t.running,o=void 0!==i&&i,l=t.patternLabel,s=t.withButton,c=void 0!==s&&s,u=this.props.classes,f=this.state.loading;return r.default.createElement("div",{className:u.sample,key:e},r.default.createElement(h.default,{loading:f,boardWidth:this.samples[e].width,boardHeight:this.samples[e].height,width:a,running:o,canvasRef:this.canvases[e],withButton:c,patternLabel:l,patternName:e,handlePlayToggle:this.handlePlayToggle}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.data.markdownRemark.frontmatter.page,i=a.intro,o=a.rules,s=a.examples,u=a.origins,f=a.references,d=a.links,p=s.subsections,h=p.still,m=p.guns,g=p.oscillators,w=p.gliders;return r.default.createElement("div",{className:n.mainContent},r.default.createElement(l.default,{container:!0,spacing:0},r.default.createElement(l.default,{item:!0,xs:1,sm:2}),r.default.createElement(l.default,{item:!0,xs:10,sm:8},r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:i.content}}),r.default.createElement("div",{className:n.video},r.default.createElement(c.default,{title:"John H. Conway on the creation of his Game of Life",videoId:"R9Plq-D1gEk",showinfo:0,rel:0}),"John H. Conway on the creation of his Game of Life"),r.default.createElement("div",{className:n.video},r.default.createElement(c.default,{title:"Fragment from The Meaning of Life",videoId:"CgOcEZinQ2I",showinfo:0,rel:0}),"Fragment from Stephen Hawking`s The Meaning of Life"),r.default.createElement("h2",{className:n.title},o.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:o.content}}),r.default.createElement("h2",{className:n.title},s.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:s.content}}),r.default.createElement("h4",{className:n.title},h.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:h.content}}),r.default.createElement("div",{className:n.boardsSection},["block","boat","loaf","beehive"].map(function(t){return e.renderBoard(t)})),r.default.createElement("h4",{className:n.title},g.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:g.content}}),r.default.createElement("div",{className:n.boardsSection},["blinker","beacon","toad","glasses","quad"].map(function(t){return e.renderBoard(t)})),r.default.createElement("h4",{className:n.title},w.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:w.content}}),r.default.createElement("div",{className:n.boardsSection},["glider","spaceship"].map(function(t){return e.renderBoard(t)})),r.default.createElement("h4",{className:n.title},m.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:m.content}}),r.default.createElement("div",{className:n.boardsSection},this.renderBoard("gun")),r.default.createElement("h2",{className:n.title},u.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:u.content}}),r.default.createElement("h2",{className:n.title},f.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:f.content}}),r.default.createElement("h2",{className:n.title},d.title),r.default.createElement("div",{className:n.text,dangerouslySetInnerHTML:{__html:d.content}})),r.default.createElement(l.default,{item:!0,xs:1,sm:2})))}}])&&b(n.prototype,a),t}();j.propTypes={classes:i.default.shape({}).isRequired,data:i.default.shape({}).isRequired,setRunning:i.default.func.isRequired,running:i.default.shape({}).isRequired};var E,S=(E=(0,o.withStyles)({mainContent:{marginTop:75},rules:{backgroundColor:"rgba(240,248,255,.7)"},text:{fontFamily:"Open Sans",fallbacks:{fontFamily:"sans-serif"}},title:{fontFamily:"Julius Sans One",fallbacks:{fontFamily:"sans-serif"},fontWeight:900,marginTop:40},video:{textAlign:"center",fontFamily:"Open Sans",fallbacks:{fontFamily:"sans-serif"},marginTop:30},boardsSection:{display:"inline-block",marginTop:30},link:{"text-decoration":"underline !important","overflow-wrap":"break-word","word-wrap":"break-word"},sample:{display:"inline-block",margin:"16px 0 0 16px"}})(j),function(e){return r.default.createElement(s.StaticQuery,{query:"2935510517",render:function(t){return r.default.createElement(E,g({data:t},e))},data:a.default})});t.default=S},5818:function(e){e.exports={data:{markdownRemark:{frontmatter:{page:{intro:{content:'<p><strong>The Game of Life</strong> is the best-known two-dimensional <a href="https://en.wikipedia.org/wiki/Cellular_automaton" rel="noopener noreferrer" target="_blank" title="Cellular automaton">cellular automaton</a>, invented in 1970 by the British mathematician <a href="https://en.wikipedia.org/wiki/John_Horton_Conway" rel="noopener noreferrer" target="_blank" title="John Conway">John Horton Conway</a>.  The life is a cellular automaton, which is a model of a discrete abstract computational system, composed of a finite or infinite set of objects – "cells". The cell in the game of life has two states - "alive" and "dead", or "populated" and "unpopulated". The cells live on a two-dimensional grid and each cell has eight adjacent cells - "neighbors". All cells change their state simultaneously, according to update rules by taking into account the states of their neighbors.</p>\n'},rules:{title:"Rules",content:"<p>Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:</p>\n<ul>\n<li>Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.</li>\n<li>Any live cell with two or three live neighbors lives on to the next generation.</li>\n<li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>\n<li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>\n</ul>\n<p>The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.</p>\n"},examples:{title:"Examples of Patterns",content:"<p>In order to simulate infinite grid on the game board and in the examples below (except for the gun pattern), cells that are situated on the edges of the boards are handled in a toroidal manner, i.e. lower neighbor of a cell situated on the bottom edge of board will be a cell from the top edge on the same column and a neighbor to the right of a cell situated on the right edge will be from the left edge.</p>\n",subsections:{still:{title:"Still Life",content:"<p>Stable finite patterns.</p>\n"},oscillators:{title:"Oscillators",content:"<p>These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. The most common period-2 oscillators include:</p>\n"},gliders:{title:"Gliders and Spaceships",content:"<p>A spaceship is more complex oscillator, returning to the same configuration but shifted after a finite number of generations. The glider is a simple spaceship that has period 4, i.e. repeats every four generations, but moves diagonally one cell every four generations. Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. They each move in a straight line.</p>\n"},guns:{title:"Guns",content:"<p>Conway offered a prize for any example of patterns that grow forever. Conway's prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever. The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. Where these shuttles collide, instead of producing beehives, they produce a new glider. This glider moves away in time for the process to repeat itself 30 steps later.</p>\n"}}},origins:{title:"Origins",content:'<p>Conway was interested in a problem presented in the 1940s by mathematician <a href="https://en.wikipedia.org/wiki/John_von_Neumann" rel="noopener noreferrer" target="_blank" title="John von Neumann">John von Neumann</a> , who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway\'s successful attempt to drastically simplify von Neumann\'s ideas.\nThe game made its first public appearance in the October 1970 issue of <em>Scientific American</em>, in Martin Gardner\'s column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway\'s Game of Life. Gardner wrote:</p>\n<blockquote>\n<p>The game made Conway instantly famous, but it also opened up a whole new field of mathematical research, the field of cellular automata ... Because of Life\'s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called "simulation games" (games that resemble real life processes).</p>\n</blockquote>\n'},references:{title:"References",content:'<p>Wikipedia. 2017. Conway\'s Game of Life. [ONLINE] Available at: <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life</a>. Overview of history, rules and examples of patterns of the Game of Life.</p>\n<p>www.ericweisstein.com. 1996-2005. Eric Weisstein\'s Treasure Trove of the Life C.A. [ONLINE] Available at: <a href="http://www.ericweisstein.com/encyclopedias/life/">http://www.ericweisstein.com/encyclopedias/life/</a>. This source includes large collection of examples of possible patterns.</p>\n'},links:{title:"Links",content:'<p><a href="http://www.scholarpedia.org/article/Game_of_Life">www.scholarpedia.org/article/Game_of_Life</a></p>\n<p><a href="https://www.ibiblio.org/lifepatterns/">www.ibiblio.org/lifepatterns/</a></p>\n<p><a className={classes.link} href="http://mathworld.wolfram.com/GameofLife.html">http://mathworld.wolfram.com/GameofLife.html</a></p>\n<p><a className={classes.link} href="http://www.conwaylife.com/">http://www.conwaylife.com/</a></p>\n<p><a className={classes.link} href="http://golly.sourceforge.net/">http://golly.sourceforge.net/</a></p>\n<p><a className={classes.link} href="http://www.math.com/students/wonders/life/life.html">http://www.math.com/students/wonders/life/life.html</a></p>\n<p><a className={classes.link} href="http://www.cuug.ab.ca/dewara/life/life.html">http://www.cuug.ab.ca/dewara/life/life.html</a></p>\n<p><a className={classes.link} href="http://www.radicaleye.com/lifepage/">http://www.radicaleye.com/lifepage/</a></p>\n<p><a className={classes.link} href="https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide">https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide</a></p>\n<p><a className={classes.link} href="http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/">http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/</a></p>\n<p><a className={classes.link} href="http://natureofcode.com/book/chapter-7-cellular-automata/">http://natureofcode.com/book/chapter-7-cellular-automata/</a></p>\n'}}}}}}},5819:function(e,t,n){"use strict";var a=n(72);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(5820))},5820:function(e,t,n){"use strict";var a=n(72);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(103)),i=a(n(400)),o=a(n(399)),l=a(n(1)),s=(a(n(11)),a(n(401))),c=a(n(407)),u=n(481),f=(a(n(5821)),[0,8,16,24,32,40]),d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],p=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return f.forEach(function(e,t){0!==t&&(n["spacing-".concat("xs","-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(),u.keys.reduce(function(t,n){return function(e,t,n){var a={};d.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e7)/1e5,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,o.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function h(e){var t,n=e.alignContent,a=e.alignItems,c=e.classes,u=e.className,f=e.component,d=e.container,p=e.direction,m=e.item,g=e.justify,w=e.lg,b=e.md,y=e.sm,v=e.spacing,x=e.wrap,_=e.xl,O=e.xs,k=e.zeroMinWidth,j=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),E=(0,s.default)((t={},(0,r.default)(t,c.container,d),(0,r.default)(t,c.item,m),(0,r.default)(t,c.zeroMinWidth,k),(0,r.default)(t,c["spacing-xs-".concat(String(v))],d&&0!==v),(0,r.default)(t,c["direction-xs-".concat(String(p))],p!==h.defaultProps.direction),(0,r.default)(t,c["wrap-xs-".concat(String(x))],x!==h.defaultProps.wrap),(0,r.default)(t,c["align-items-xs-".concat(String(a))],a!==h.defaultProps.alignItems),(0,r.default)(t,c["align-content-xs-".concat(String(n))],n!==h.defaultProps.alignContent),(0,r.default)(t,c["justify-xs-".concat(String(g))],g!==h.defaultProps.justify),(0,r.default)(t,c["grid-xs-".concat(String(O))],!1!==O),(0,r.default)(t,c["grid-sm-".concat(String(y))],!1!==y),(0,r.default)(t,c["grid-md-".concat(String(b))],!1!==b),(0,r.default)(t,c["grid-lg-".concat(String(w))],!1!==w),(0,r.default)(t,c["grid-xl-".concat(String(_))],!1!==_),t),u);return l.default.createElement(f,(0,o.default)({className:E},j))}t.styles=p,h.propTypes={},h.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var m=(0,c.default)(p,{name:"MuiGrid"})(h);t.default=m},5821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return function(){return null}}},5822:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(1)),r=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.videoId,n=e.autoplay,r=e.showinfo,i=e.rel,o=e.title,l="https://www.youtube.com/embed/".concat(t,"?autoplay=").concat(n,"&rel=").concat(i,"&showinfo=").concat(r);return a.default.createElement("div",null,a.default.createElement("iframe",{title:o,type:"text/html",width:"100%",height:"390px",src:l,frameBorder:"0"}))},l=o;t.default=l,o.propTypes={videoId:r.default.string.isRequired,autoplay:r.default.number,showinfo:r.default.number.isRequired,rel:r.default.number,title:r.default.string.isRequired},o.defaultProps={autoplay:0,rel:1}},5825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(459)),r=i(n(5826));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e,n,a,i,o){var l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(l=s(this,c(t).call(this,e,n,a,i))).padding=o,l.gridWidth=e+2*o,l.gridHidth=n+2*o;var u=i.map(function(e){return[e[0]+o,e[1]+o]});return l.life=new r.default(l.gridWidth,l.gridHidth,u),l.cellmap=l.life.getCellmap(),l}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a.default),n=t,(i=[{key:"redrawWorld",value:function(e){var t=this;e.forEach(function(e){var n=e[1],a=e[0];n>=t.padding&&n<t.gridWidth-t.padding&&a>=t.padding&&a<t.gridHidth-t.padding&&(n=(n-t.padding+1)*t.squareSize,a=(a-t.padding+1)*t.squareSize,-1===t.cellmap[e[0]][e[1]].getState()?t.canvas.drawDeadCell(n,a):t.canvas.drawLiveCell(n,a))})}}])&&l(n.prototype,i),t}();t.default=f},5826:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeNeighbors=c,t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(502));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,n,a){for(var r={},i=-1;i<2;i++)for(var o=-1;o<2;o++){var l=a+o,s=n+i;s>=0&&s<t&&l>=0&&l<e&&(0!==i||0!==o)&&(r["".concat(s,",").concat(l)]=1)}return Object.keys(r)}var u=function(e){function t(e,n,r){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=o(this,l(t).call(this,e,n,r))).cellmap=(0,a.createCellmap)(i.gridWidth,i.gridHeight,c),i}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a.default),n=t,(r=[{key:"reload",value:function(e,t){this.changeList=null,this.gridWidth=e,this.gridHeight=t,this.cellmap=(0,a.createCellmap)(this.gridWidth,this.gridHeight,c)}}])&&i(n.prototype,r),t}();t.default=u},5827:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t,n,a,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"none";return{width:e,height:t,coordinates:function(e){return Object.keys(e).reduce(function(t,n){return e[n].forEach(function(e){return t.push([+n,e])}),t},[])}(n),unwrapped:a,label:r,type:i}},r={beacon:a(6,6,{0:[0,1],1:[0,1],2:[2,3],3:[2,3]},!1,"Beacon"),beehive:a(6,5,{0:[1,2],1:[0,3],2:[1,2]},!1,"Beehive","static"),blinker:a(5,5,{0:[0,1,2]},!1,"Blinker"),block:a(4,4,{0:[0,1],1:[0,1]},!1,"Block","static"),boat:a(5,5,{0:[0,1],1:[0,2],2:[1]},!1,"Boat","static"),glider:a(10,10,{0:[2],1:[0,2],2:[1,2]},!1,"Glider"),gun:a(40,20,{0:[24],1:[22,24],2:[12,13,20,21,34,35],3:[11,15,20,21,34,35],4:[0,1,10,16,20,21],5:[0,1,10,14,16,17,22,24],6:[10,16,24],7:[11,15],8:[12,13]},!0,"The Gosper Glider Gun"),loaf:a(6,6,{0:[1,2],1:[0,3],2:[1,3],3:[2]},!1,"Loaf","static"),spaceship:a(12,12,{0:[1,2,3,4],1:[0,4],2:[4],3:[0,3]},!1,"Lightweight Spaceship"),glasses:a(20,13,{0:[4,13],1:[2,3,4,13,14,15],2:[1,16],3:[1,4,5,6,11,12,13,16],4:[0,1,3,5,7,10,12,14,16,17],5:[3,4,6,7,10,11,13,14],6:[3,5,7,10,12,14],7:[4,5,6,11,12,13],9:[4,5,7,10,12,13],10:[4,6,7,10,11,13]},!1,"Glasses"),quad:a(8,8,{0:[0,1,4,5],1:[0,2,5],2:[4],3:[1],4:[0,3,5],5:[0,1,4,5]},!1,"Quad"),toad:a(6,6,{0:[1,2,3],1:[0,1,2]},!1,"Toad")};t.default=r},5828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(1)),r=d(n(11)),i=d(n(504)),o=d(n(462)),l=d(n(463)),s=d(n(507)),c=n(411),u=d(n(508)),f=d(n(424));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b={container:{fontSize:".7em",textAlign:"center",fontFamily:"Open Sans, sans-serif",height:"100%",width:"30vw","@media (min-width: 960px)":{width:"20vw"}},canvas:{backgroundColor:f.default.BOARD,display:"block"},iconbutton:{width:35,height:35,color:f.default.BUTTON},icon:{width:25,height:25},canvasReplacementWrapper:{position:"relative",width:"100%"},canvasReplacement:{position:"absolute",top:0,bottom:0,left:0,right:0,overflow:"hidden",background:"#eee"},progressWrapper:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},loading:{position:"relative",animation:"mui-progress-circular-dash 3s ease infinite"}},y=function(e){function t(){var e,n,a,r,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return this,a=(e=m(t)).call.apply(e,[this].concat(s)),o=function(){var e=n.props,t=e.handlePlayToggle,a=e.patternName;console.log(a),t(a)},(i="handleClick")in(r=w(w(n=!a||"object"!==p(a)&&"function"!=typeof a?w(this):a)))?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.running,r=e.canvasRef,c=e.withButton,f=e.patternLabel,d=e.width,p=e.boardWidth,h=e.boardHeight,m=e.loading,g={display:"".concat(c?"inline":"none")},w={width:d};return a.default.createElement("div",{className:t.container,style:w},m&&a.default.createElement("div",{className:t.canvasReplacementWrapper,style:{paddingBottom:"".concat(h/p*100,"%")}},a.default.createElement("div",{className:t.canvasReplacement},a.default.createElement("div",{className:t.progressWrapper},a.default.createElement(s.default,{size:30,thickness:22,className:t.loading})))),a.default.createElement("canvas",{className:t.canvas,height:0,ref:r}),a.default.createElement("div",{className:t.button,style:g},a.default.createElement(i.default,{className:t.iconbutton,title:n?"Pause":"Start",onClick:this.handleClick},a.default.createElement(u.default,{on:!n,onIcon:a.default.createElement(o.default,{className:t.icon}),offIcon:a.default.createElement(l.default,{className:t.icon})}))),a.default.createElement("div",null,f))}}])&&h(n.prototype,r),t}(),v=(0,c.withStyles)(b)(y);t.default=v,y.propTypes={loading:r.default.bool.isRequired,running:r.default.bool.isRequired,withButton:r.default.bool.isRequired,classes:r.default.shape({}),handlePlayToggle:r.default.func.isRequired,patternName:r.default.string.isRequired,patternLabel:r.default.string.isRequired,width:r.default.oneOfType([r.default.number,r.default.string]),boardWidth:r.default.number.isRequired,boardHeight:r.default.number.isRequired,canvasRef:r.default.shape({}).isRequired},y.defaultProps={classes:{},width:null}}}]);
//# sourceMappingURL=component---src-pages-about-jsx-4ff54071ca79c8048d1b.js.map