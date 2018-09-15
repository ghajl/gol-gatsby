(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{5521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(25),i=n(26),o=(r=n(5522))&&r.__esModule?r:{default:r},l=(0,a.connect)(function(e){return{running:e.running,currentSize:e.currentSize,cells:e.cells,currentPattern:e.currentPattern}},function(e){return{changePattern:function(t){e((0,i.changePattern)(t))},changeBoardSize:function(t){e((0,i.changeBoardSize)(t))},incrementGeneration:function(){e((0,i.incrementGeneration)())},setRunning:function(t,n){e((0,i.setRunning)(t,n))},setSpeed:function(t){e((0,i.setSpeed)(t))},setClear:function(){e((0,i.setClear)())},saveCells:function(t){e((0,i.saveCells)(t))}}})(o.default);t.default=l},5522:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(5523)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=f(n(1)),o=n(85),l=n(99),u=f(n(142)),s=f(n(5524)),c=f(n(5567));function f(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}f(n(88));var O,w=function(e){function t(e){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=b(t).call(this,e),v(g(g(n=!r||"object"!==p(r)&&"function"!=typeof r?g(this):r)),"handleWindowSizeChange",function(){n.game.handleWindowSizeChange()}),v(g(g(n)),"start",function(){n.props.running.main||0===n.game.getCellCount()||(n.then=Date.now(),n.setRunning(!0),n.rAF=requestAnimationFrame(function(){n.run()}))}),n.boards=[{name:"small",width:30,height:20,squareSize:24,label:"20 X 30"},{name:"medium",width:60,height:40,squareSize:12,label:"40 X 60"},{name:"large",width:90,height:60,squareSize:8,label:"60 X 90"}];var a=n.boards[e.currentSize];return n.patterns=[{name:"random",label:"Random"}],n.boardWidth=a.width,n.boardHeight=a.height,n.squareSize=a.squareSize,n.game=new u.default(n.boardWidth,n.boardHeight,n.squareSize,e.cells),n.setRunning=function(t){return e.setRunning(t,"main")},n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.Component),n=t,(r=[{key:"componentDidMount",value:function(){if(window){window.addEventListener("resize",this.handleWindowSizeChange);var e=window.devicePixelRatio||1;this.game.drawBoard(this.canvas,e)}}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.handleWindowSizeChange),cancelAnimationFrame(this.rAF);var e=this.game.getLiveCells();(0,this.props.saveCells)(e)}},{key:"setInterval",value:function(e){var t=this.props.setSpeed;this.interval=1e3/e,t(e)}},{key:"handleClick",value:function(e){this.props.running.main&&this.stop(),this.game.drawCell(e)}},{key:"handlePlayToggle",value:function(){this.props.running.main?this.stop():this.start()}},{key:"handlePatternChange",value:function(e){var t=this.props,n=t.currentPattern,r=t.data,a=t.changePattern;if(e!==n){this.stop();var i=h(this.patterns).concat(h(r));console.log(i),this.game.setPattern(e,i),a(e)}}},{key:"handleBoardSizeChange",value:function(e){var t=this.props,n=t.currentSize,r=t.changeBoardSize;if(e!==n){this.stop();var a=this.boards[e];this.boardWidth=a.width,this.boardHeight=a.height,this.squareSize=a.squareSize,this.game.reload(this.boardWidth,this.boardHeight,this.squareSize,this.canvas),r(e)}}},{key:"stop",value:function(){this.props.running.main&&(this.setRunning(!1),cancelAnimationFrame(this.rAF))}},{key:"clear",value:function(){if(0!==this.game.getCellCount()){var e=this.props.setClear;this.stop(),e(),this.game.clear()}}},{key:"step",value:function(){this.props.running.main||0===this.game.getCellCount()||this.updateOnce()}},{key:"updateOnce",value:function(){var e=this.props.incrementGeneration;this.game.update(),e()}},{key:"run",value:function(){var e=this;this.now=Date.now(),this.delta=this.now-this.then,this.delta>this.interval&&(this.then=this.now-this.delta%this.interval,this.updateOnce()),this.rAF=requestAnimationFrame(function(){e.run()})}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.running,i=t.currentPattern,o=t.data,l=t.currentSize,u=h(this.patterns).concat(h(o)),f=this.boards[l],d={width:(f.width+1)*f.squareSize,height:(f.height+1)*f.squareSize},p=r.main||!1;return a.default.createElement("div",{className:n.container},a.default.createElement("div",{className:n.game},a.default.createElement("div",{className:n.menu},a.default.createElement("div",{className:n.wrapper},a.default.createElement(s.default,{patternIndex:i,patterns:u,parameters:this.boards,onPatternChange:function(t){return e.handlePatternChange(t)},sizeIndex:l,onBoardSizeChange:function(t){return e.handleBoardSizeChange(t)}}))),a.default.createElement("div",{className:n.verticalMenu},a.default.createElement(s.default,{patternIndex:i,patterns:u,parameters:this.boards,onPatternChange:function(t){return e.handlePatternChange(t)},sizeIndex:l,onBoardSizeChange:function(t){return e.handleBoardSizeChange(t)},direction:"column"})),a.default.createElement("div",{className:n.canvasControls},a.default.createElement("div",{className:n.wrapper},a.default.createElement("div",{style:{maxWidth:"100%"}},a.default.createElement("canvas",{style:d,ref:function(t){e.canvas=t},onClick:function(t){return e.handleClick(t)}}))),a.default.createElement("div",{className:"controls"},a.default.createElement(c.default,{on:!p,handlePlayToggle:function(){return e.handlePlayToggle()},step:function(){return e.step()},clear:function(){return e.clear()},setInterval:function(t){return e.setInterval(t)}})))))}}])&&m(n.prototype,r),t}(),P=(O=(0,o.withStyles)({container:{textAlign:"center",marginTop:"80px",zIndex:2},wrapper:{paddingLeft:10,paddingRight:10},game:{width:"100%",display:"inline-block","@media (min-width: 1280px)":{width:"50%"}},menu:{display:"block","@media (orientation: landscape) and (max-width: 1280px)":{display:"none"}},verticalMenu:{display:"none",width:"25%",padding:2,verticalAlign:"top","@media (orientation: landscape) and (max-width: 1280px)":{display:"inline-block"}},canvasControls:{display:"block",height:"100%",width:"100%","@media (orientation: landscape) and (max-width: 1280px)":{display:"inline-block",width:"70%"}}})(w),function(e){return a.default.createElement(l.StaticQuery,{query:"1819188391",render:function(t){var n=t.allPattern.edges.map(function(e){return e.node});return a.default.createElement(O,d({data:n},e))},data:r.default})});t.default=P,w.propTypes={setRunning:i.default.func.isRequired,running:i.default.shape({main:i.default.bool}),classes:i.default.shape({}),cells:i.default.func.isRequired,patterns:i.default.arrayOf(i.default.shape({})),changePattern:i.default.func.isRequired,changeBoardSize:i.default.func.isRequired,incrementGeneration:i.default.func.isRequired,setSpeed:i.default.func.isRequired,setClear:i.default.func.isRequired,saveCells:i.default.func.isRequired,currentPattern:i.default.number,currentSize:i.default.number},w.defaultProps={classes:{},running:{main:!1},currentPattern:0,currentSize:1,patterns:[{name:"random",label:"Random"}]}},5523:function(e){e.exports={data:{allPattern:{edges:[{node:{name:"glider",pattern:[[0,2],[1,0],[1,2],[2,1],[2,2]],label:"Glider"}},{node:{name:"spaceship",pattern:[[3,0],[3,3],[2,4],[1,0],[1,4],[0,1],[0,2],[0,3],[0,4]],label:"Lightweight space ship"}},{node:{name:"exploder",pattern:[[0,0],[0,2],[0,4],[1,0],[1,4],[2,0],[2,4],[3,0],[3,4],[4,0],[4,2],[4,4]],label:"Exploder"}},{node:{name:"tencellrow",pattern:[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]],label:"10 cell row"}},{node:{name:"tumbler",pattern:[[0,1],[0,2],[0,4],[0,5],[1,1],[1,2],[1,4],[1,5],[2,2],[2,4],[3,0],[3,2],[3,4],[3,6],[4,0],[4,2],[4,4],[4,6],[5,0],[5,1],[5,5],[5,6]],label:"Tumbler"}},{node:{name:"weekender",pattern:[[0,7],[0,8],[0,9],[1,6],[1,7],[1,9],[2,4],[2,6],[2,7],[2,8],[2,9],[3,3],[4,3],[4,4],[5,0],[5,1],[5,2],[5,3],[6,3],[6,5],[7,3],[7,6],[8,3],[8,6],[9,3],[9,5],[10,0],[10,1],[10,2],[10,3],[11,3],[11,4],[12,3],[13,4],[13,6],[13,7],[13,8],[13,9],[14,6],[14,7],[14,9],[15,7],[15,8],[15,9]],label:"The Weekender"}}]}}}},5524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(1)),i=o(n(5525));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.direction,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["direction"]),a=n.parameters.map(function(e){return e.label}),o=n.patterns.map(function(e){return e.label}),l="column"==t?"100%":null;return r.default.createElement("div",{className:n.classes.container},r.default.createElement("div",{className:n.classes.item,style:{width:l}},r.default.createElement(i.default,{index:n.patternIndex,items:o,onChange:function(e){return n.onPatternChange(e)},label:"Pattern"})),r.default.createElement("div",{className:n.classes.item,style:{width:l}},r.default.createElement(i.default,{index:n.sizeIndex,items:a,onChange:function(e){return n.onBoardSizeChange(e)},label:"Board Size"})))},u=(0,n(85).withStyles)(function(e){return{container:{textAlign:"center"},item:{width:"50%",display:"inline-block",maxWidth:360}}})(l);t.default=u,l.propTypes={classes:a.default.object.isRequired,direction:a.default.string,justify:a.default.string,patternNamesIndex:a.default.number.isRequired,patternNames:a.default.array.isRequired,changePatternEvent:a.default.func.isRequired,patternLabel:a.default.string.isRequired,gridSizesIndex:a.default.number.isRequired,gridSizes:a.default.array.isRequired,changeBoardSizeEventHandler:a.default.func.isRequired,gridLabel:a.default.string.isRequired}},5525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=f(n(1)),i=n(85),o=f(n(189)),l=f(n(190)),u=f(n(5529)),s=f(n(5533)),c=f(n(5565));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(e){var n,r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,r=h(t).call(this,e),y(b(b(n=!r||"object"!==d(r)&&"function"!=typeof r?b(this):r)),"state",{anchorEl:void 0,open:!1}),y(b(b(n)),"button",void 0),y(b(b(n)),"handleClickListItem",function(e){n.setState({open:!0,anchorEl:e.currentTarget})}),y(b(b(n)),"handleMenuItemClick",function(e,t){n.setState({open:!1}),n.props.onChange(t)}),y(b(b(n)),"handleRequestClose",function(){n.setState({open:!1})}),n.options=[],void 0!==e.items)for(var a=0;a<e.items.length;a++)n.options.push(e.items[a]);return n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.Component),n=t,(a=[{key:"render",value:function(){var e=this,t=this.props.classes;if(this.options.length=0,void 0!==this.props.items)for(var n=0;n<this.props.items.length;n++)this.options.push(this.props.items[n]);return r.default.createElement("div",{className:t.root},r.default.createElement(o.default,null,r.default.createElement(l.default,{button:!0,onClick:this.handleClickListItem},this.props.index<0?r.default.createElement(u.default,{primary:this.props.label,secondary:""}):r.default.createElement(u.default,{primary:this.props.label,secondary:this.options[this.props.index]}))),r.default.createElement(s.default,{id:"lock-menu",anchorEl:this.state.anchorEl,open:this.state.open,onClose:this.handleRequestClose,transitionDuration:250},this.options.map(function(t,n){return r.default.createElement(c.default,{key:t,selected:n===e.props.index,onClick:function(t){return e.handleMenuItemClick(t,n)}},t)})))}}])&&p(n.prototype,a),t}();g.propTypes={classes:a.default.object.isRequired,items:a.default.array.isRequired,onChange:a.default.func.isRequired,label:a.default.string.isRequired,index:a.default.number.isRequired};var v=(0,i.withStyles)({root:{width:"100%",maxWidth:360}})(g);t.default=v},5567:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=d(n(1)),i=n(85),o=n(5568),l=d(n(183)),u=d(n(5569)),s=d(n(5626)),c=d(n(188)),f=d(n(88));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){var t=e.classes,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["classes"]);return r.default.createElement("div",{className:t.bar},r.default.createElement("div",{className:t.controls},r.default.createElement("div",{className:t.item},r.default.createElement(l.default,{className:t.button,title:n.on?"Start":"Pause",onClick:function(){return n.handlePlayToggle()}},r.default.createElement(c.default,{on:n.on,onIcon:r.default.createElement(o.PlayArrow,{className:t.icon}),offIcon:r.default.createElement(o.Pause,{className:t.icon})}))),r.default.createElement("div",{className:t.item},r.default.createElement(l.default,{className:t.button,title:"Next Generation",onClick:function(){return n.step()}},r.default.createElement(o.SkipNext,{className:t.icon}))),r.default.createElement("div",{className:t.item},r.default.createElement(l.default,{className:t.button,title:"Clear",onClick:function(){return n.clear()}},r.default.createElement(o.Clear,{className:t.icon}))),r.default.createElement("div",{className:t.slider,title:"Set Speed"},r.default.createElement(u.default,{onChange:function(e){return n.setInterval(e)}}))),r.default.createElement("div",null,r.default.createElement("div",{className:t.generation,title:"Generation"},r.default.createElement(s.default,null))))},m=(0,i.withStyles)(function(e){var t;return{button:{color:f.default.BUTTON,width:35,height:35},icon:{width:25,height:25},vertical:(t={},p(t,e.breakpoints.up("xs"),{marginTop:10}),p(t,e.breakpoints.up("lg"),{marginTop:20}),t),bar:{margin:5,display:"flex",justifyContent:"space-between"},controls:{display:"flex"},slider:{marginTop:10,marginLeft:15},generation:{align:"flex-end",marginTop:5,marginRight:15,transform:"skew(-10deg)"}}})(h);t.default=m,h.propTypes={classes:a.default.object.isRequired,handlePlayToggle:a.default.func.isRequired,on:a.default.bool.isRequired,color:a.default.string.isRequired,step:a.default.func.isRequired,clear:a.default.func.isRequired,setInterval:a.default.func.isRequired}},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(1)),i=l(n(5627)),o=n(25);function l(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}var b={position:"absolute",transform:"translate(-35%, -35%)",width:"15px",height:"15px",cursor:"pointer",borderRadius:"50%",border:"solid 3px",borderColor:"rgba(0, 0, 0, .7)",backgroundColor:"white"},y=function(e){function t(){return c(this,t),p(this,h(t).apply(this,arguments))}return m(t,r.Component),d(t,[{key:"render",value:function(){var e=Object.assign({left:"".concat(this.props.offset,"%")},b);return r.default.createElement("div",{style:e})}}]),t}(),g={width:60,height:40},v=function(e){var t=e.fps,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["fps"]);return r.default.createElement(y,u({value:t,style:{borderColor:"black"}},n))},O=function(e){function t(){return c(this,t),p(this,h(t).apply(this,arguments))}return m(t,r.Component),d(t,[{key:"componentWillMount",value:function(){this.props.onChange(this.props.fps)}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{style:g},r.default.createElement(i.default,{min:2,max:160,step:2,value:this.props.fps,onChange:function(t){return e.props.onChange(t)},handle:v}))}}]),t}(),w=(0,o.connect)(function(e){return{fps:e.fps}})(O);t.default=w,O.propTypes={value:a.default.number.isRequired,onChange:a.default.func.isRequired}},5626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(1)),i=n(25),o=l(n(88));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.generation;return r.default.createElement("div",{className:"generation"},t,r.default.createElement("style",{jsx:!0,global:!0},"\n      .generation {\n        color: ".concat(o.default.GENERATION,";\n        font-size: 1.5em;\n        text-align: right;\n      }\n    ")))},s=(0,i.connect)(function(e){return{generation:e.generation}})(u);t.default=s,u.propTypes={generation:a.default.number.isRequired}},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(182)),i=l(n(110)),o=l(n(5521));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=(0,a.default)(function(e){var t=u({},e);return r.default.createElement(i.default,null,r.default.createElement(o.default,t))});t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-jsx-771cdae18713bc9c8a19.js.map