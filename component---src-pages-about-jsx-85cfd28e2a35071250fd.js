(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{105:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(1)),o=c(a(130)),l=a(81),i=c(a(107)),u=c(a(110));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return this,b(m(m(a=!(n=(e=d(t)).call.apply(e,[this].concat(o)))||"object"!==f(n)&&"function"!=typeof n?m(this):n)),"meta",[{charset:"utf-8"},{"http-equiv":"X-UA-Compatible",content:"IE=edge"},{name:"viewport",content:"user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"}]),b(m(m(a)),"links",[{rel:"shortcut icon",type:"image/x-icon",href:"/public/icons/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500|Open+Sans|Julius+Sans+One"}]),b(m(m(a)),"title","John Conway's Game Of Life"),a}var a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n.PureComponent),a=t,(r=[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.children;return n.default.createElement("div",{className:t.root},n.default.createElement(o.default,{title:this.title,meta:this.meta,link:this.links},n.default.createElement("html",{lang:"en"})),n.default.createElement("div",{className:t.navbar},n.default.createElement(i.default,null)),n.default.createElement("div",{className:t.content},a),n.default.createElement(u.default,null))}}])&&s(a.prototype,r),t}();y.propTypes={classes:r.default.shape({}),children:r.default.node.isRequired},y.defaultProps={classes:{}};var h=(0,l.withStyles)({"@global":{html:{height:"100%",fontSize:"14px"},body:{background:"white",fontFamily:"Century Gothic",fallbacks:{fontFamily:"sans-serif"},margin:0,display:"flex","flex-direction":"column",height:"100%","& > div:first-child":{height:"100%",flex:"1 0 auto","& > div":{"&:first-child":{height:"100%"}}}},a:{textDecoration:"none !important",outline:"none"}},root:{display:"flex",flexDirection:"column",height:"100%"},content:{flex:"1 0 auto",width:"100%"},navbar:{overflow:"hidden",boxShadow:"0 3px 15px -6px #222",position:"fixed",top:0,width:"100%",zIndex:3,backgroundColor:"#fff"}})(y);t.default=h},107:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(0)),r=u(a(1)),o=a(91),l=a(81),i=u(a(86));function u(e){return e&&e.__esModule?e:{default:e}}var c={nav:{display:"flex",justifyContent:"space-between","& a":{color:i.default.HEADER_LINK_INACTIVE,display:"block",padding:"1em",transition:".2s",fontFamily:"Julius Sans One",fallbacks:{fontFamily:"sans-serif"}}},title:{fontWeight:900,"text-transform":"none",fontSize:"1.1em","@media (min-width: 768px)":{fontSize:"1.5em"},"@media (min-width: 480px)":{"text-transform":"uppercase"}},author:{color:i.default.TITLE_AUTHOR},game:{color:i.default.TITLE_GAME},links:{display:"flex",alignItems:"center",justifyContent:"center",paddingRight:"20px",fontWeight:900,"& a":{"&:hover":{color:i.default.HEADER_LINK_ACTIVE}},fontSize:".9em","@media (min-width: 768px)":{fontSize:"1.2em"}},small:{display:"block","@media (min-width: 480px)":{display:"none"}},large:{display:"none","@media (min-width: 480px)":{display:"block"}},active:{color:i.default.HEADER_LINK_ACTIVE}},f=function(e){var t=e.classes;return n.default.createElement("div",{className:t.nav},n.default.createElement(o.Link,{className:t.title,to:"/",activeStyle:{color:i.default.HEADER_LINK_ACTIVE}},n.default.createElement("div",{className:t.small},n.default.createElement("span",{className:t.game},"GoL")),n.default.createElement("div",{className:t.large},n.default.createElement("span",{className:t.author},"John Conway`s"),n.default.createElement("span",{className:t.game},"Game of Life"))),n.default.createElement("div",{className:t.links},n.default.createElement(o.Link,{to:"/about",activeStyle:{color:i.default.HEADER_LINK_ACTIVE}},"About")))},s=(0,l.withStyles)(c)(f);t.default=s,f.propTypes={classes:r.default.shape({}).isRequired}},108:function(e,t,a){var n;e.exports=(n=a(109))&&n.default||n},109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(1)),o=i(a(27)),l=i(a(4));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.location,a=l.default.getResourcesForPathname(t.pathname);return n.default.createElement(o.default,{location:t,pageResources:a})};u.propTypes={location:r.default.shape({pathname:r.default.string.isRequired}).isRequired};var c=u;t.default=c},110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(1)),o=a(81),l=i(a(86));function i(e){return e&&e.__esModule?e:{default:e}}var u={root:{borderBottom:"10px solid ".concat(l.default.FOOTER_BOTTOM),backgroundColor:"".concat(l.default.FOOTER_TOP)},iconsContainer:{position:"relative",display:"inline-block",left:"50%",transform:"translateX(-50%)"},iconContainer:{display:"inline-block",textAlign:"center",padding:"3px 20px","& *":{boxSizing:"content-box"}},a:{margin:"0 20px",display:"flex",justifyContent:"center",alignItems:"center"},icon:{transition:".4s",borderRadius:"50%",border:"1px solid",borderColor:"".concat(l.default.FOOTER_LINK),padding:5,margin:".5em",width:24,height:24,fill:"".concat(l.default.FOOTER_LINK),"&:hover":{fill:"".concat(l.default.FOOTER_LINK_ICON_ACTIVE),backgroundColor:"".concat(l.default.FOOTER_LINK_ACTIVE),borderColor:"".concat(l.default.FOOTER_LINK_ACTIVE)}}},c=function(e){var t=e.classes;return n.default.createElement("div",{className:t.root},n.default.createElement("div",{className:t.iconsContainer},n.default.createElement("div",{className:t.iconContainer},n.default.createElement("a",{className:t.a,href:"https://github.com/ghajl/golife",target:"_blank",rel:"noopener noreferrer"},n.default.createElement("svg",{className:t.icon},n.default.createElement("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"})))),n.default.createElement("div",{className:t.iconContainer},n.default.createElement("a",{className:t.a,href:"mailto:michaelmsky@gmail.com?subject=Mail from GOL",target:"_blank",rel:"noopener noreferrer"},n.default.createElement("svg",{className:t.icon},n.default.createElement("path",{d:"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}))))))};c.propTypes={classes:r.default.shape({}).isRequired};var f=(0,o.withStyles)(u)(c);t.default=f},69:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=a(91),o=l(a(105));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(o.default,null,n.default.createElement("h1",null,"Hi from the second page"),n.default.createElement("p",null,"Welcome to page 2"),n.default.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},86:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={EMPTY_CELL:"rgba(47,79,79,.2)",LIVE_CELL:"#FF0000",BUTTON:"rgba(0, 0, 0, .7)",GENERATION:"#FF0000",BOARD:"rgba(47,79,79,1)",GRID:"#878789",HEADER_LINK_ACTIVE:"#016FB9",HEADER_LINK_INACTIVE:"#A9A9A9",TITLE_AUTHOR:"#011627",TITLE_GAME:"#A2D729",FOOTER_TOP:"rgba(196,196,196,.1)",FOOTER_BOTTOM:"rgba(162,215,41,.5)",FOOTER_LINK:"rgba(1,22,39,.7)",FOOTER_LINK_ACTIVE:"rgba(0, 0, 0, 1)",FOOTER_LINK_ICON_ACTIVE:"white"}},91:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"withPrefix",{enumerable:!0,get:function(){return o.withPrefix}}),Object.defineProperty(t,"navigate",{enumerable:!0,get:function(){return o.navigate}}),Object.defineProperty(t,"push",{enumerable:!0,get:function(){return o.push}}),Object.defineProperty(t,"replace",{enumerable:!0,get:function(){return o.replace}}),Object.defineProperty(t,"navigateTo",{enumerable:!0,get:function(){return o.navigateTo}}),Object.defineProperty(t,"waitForRouteChange",{enumerable:!0,get:function(){return l.waitForRouteChange}}),Object.defineProperty(t,"PageRenderer",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return u.default}}),t.StaticQuery=t.StaticQueryContext=void 0;var n=c(a(0)),r=c(a(1)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(139)),l=a(25),i=c(a(108)),u=c(a(26));function c(e){return e&&e.__esModule?e:{default:e}}var f=n.default.createContext({});t.StaticQueryContext=f;var s=function(e){return n.default.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=s,s.propTypes={data:r.default.object,query:r.default.string.isRequired,render:r.default.func,children:r.default.func}}}]);
//# sourceMappingURL=component---src-pages-about-jsx-85cfd28e2a35071250fd.js.map