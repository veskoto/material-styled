
          window.__NEXT_REGISTER_PAGE('/dialog', function() {
            var comp = module.exports=webpackJsonp([6],{117:function(e,t,n){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen,isInWorker:!o};e.exports=r},118:function(e,t,n){"use strict";var o=n(70),r={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:o}},registerDefault:function(){}};e.exports=r},119:function(e,t,n){"use strict";function o(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}e.exports=o},120:function(e,t,n){"use strict";function o(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}function r(e,t){if(o(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!a.call(t,n[i])||!o(e[n[i]],t[n[i]]))return!1;return!0}var a=Object.prototype.hasOwnProperty;e.exports=r},121:function(e,t,n){"use strict";function o(e,t){return!(!e||!t)&&(e===t||!r(e)&&(r(t)?o(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}var r=n(88);e.exports=o},122:function(e,t,n){"use strict";function o(e){try{e.focus()}catch(e){}}e.exports=o},252:function(e,t,n){e.exports=n(253)},253:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),a=o(r),i=n(6),l=o(i),u=n(7),c=o(u),s=n(12),d=o(s),f=n(13),p=o(f),m=n(0),h=o(m),g=n(101),v=o(g),y=n(254),x=n(37),_=o(x),b=function(e){function t(){var e,n,o,r;(0,l.default)(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=o=(0,d.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(u))),o.state={open:!1},o.openDialog=function(){return o.setState({open:!0})},o.closeDialog=function(){return o.setState({open:!1})},r=n,(0,d.default)(o,r)}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.open,e.title);e.body;return h.default.createElement("div",null,h.default.createElement(y.Dialog,{open:this.state.open},Boolean(t)&&h.default.createElement(y.DialogTitle,null,t),h.default.createElement(y.DialogBody,null,"Dialog body goes here"),h.default.createElement(y.DialogFooter,null,h.default.createElement(v.default,{onClick:this.closeDialog},"Cancel"),h.default.createElement(v.default,{onClick:this.closeDialog},"Confirm"))),h.default.createElement(v.default,{onClick:this.openDialog},"Open dialog"))}}]),t}(m.Component),E=function(){return h.default.createElement(_.default,null,h.default.createElement("div",null,h.default.createElement("h1",null,"Dialog with title"),h.default.createElement(b,{title:"Dialog title"}),h.default.createElement("h1",null,"Dialog without title"),h.default.createElement(b,null)))};t.default=E},254:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(255);Object.defineProperty(t,"Dialog",{enumerable:!0,get:function(){return o(r).default}});var a=n(257);Object.defineProperty(t,"DialogTitle",{enumerable:!0,get:function(){return o(a).default}});var i=n(258);Object.defineProperty(t,"DialogBody",{enumerable:!0,get:function(){return o(i).default}});var l=n(259);Object.defineProperty(t,"DialogFooter",{enumerable:!0,get:function(){return o(l).default}})},255:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=o(r),i=n(11),l=o(i),u=n(6),c=o(u),s=n(7),d=o(s),f=n(12),p=o(f),m=n(13),h=o(m),g=n(0),v=o(g),y=n(1),x=o(y),_=n(138),b=o(_),E=n(256),w=(0,a.default)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > .smc-dialog-surface {\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    max-width: 865px;\n    border-radius: 2px;\n    background-color: #fff;\n    ",";\n  }\n"],["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > .smc-dialog-surface {\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    max-width: 865px;\n    border-radius: 2px;\n    background-color: #fff;\n    ",";\n  }\n"]),O=function(e){function t(){var e,n,o,r;(0,c.default)(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=o=(0,p.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(i))),o.state={open:Boolean(o.props.open)},o.closeModal=function(){return o.setState({open:!1})},o.openModal=function(){return o.setState({open:!0})},o.stopPropogation=function(e){return e.stopPropagation()},o.renderContents=function(){return v.default.createElement("div",{className:o.props.className+" smc-dialog",onClick:o.closeModal},v.default.createElement("div",{className:"smc-dialog-surface",onClick:o.stopPropogation},o.props.children))},r=n,(0,p.default)(o,r)}return(0,h.default)(t,e),(0,d.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=Boolean(e.open);if(Boolean(this.props.open)!==t)return this.setState({open:t});t&&!this.state.open&&this.openModal()}},{key:"render",value:function(){return v.default.createElement(E.Portal,{showOverlay:this.state.open,renderContents:this.renderContents})}}]),t}(g.Component);t.default=(0,x.default)(O)(w,(0,b.default)(24))},256:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=void 0;var r=n(11),a=o(r),i=n(6),l=o(i),u=n(7),c=o(u),s=n(12),d=o(s),f=n(13),p=o(f),m=n(2),h=o(m),g=n(0),v=o(g),y=n(87),x=n(1),_=o(x),b=(0,h.default)(["\n  background: rgba(0, 0, 0, .6);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: ",";\n  transition: opacity 0.3s 0ms cubic-bezier(0, 0, .2, 1);\n  will-change: opacity;\n  pointer-events: ",";\n  contain: strict;\n\n  & > .smc-portal-content {\n    height: 100%;\n    width: 100%;\n  }\n"],["\n  background: rgba(0, 0, 0, .6);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: ",";\n  transition: opacity 0.3s 0ms cubic-bezier(0, 0, .2, 1);\n  will-change: opacity;\n  pointer-events: ",";\n  contain: strict;\n\n  & > .smc-portal-content {\n    height: 100%;\n    width: 100%;\n  }\n"]),E=void 0,w=function(e){return e.stopPropagation()},O=function(e){return v.default.createElement("div",{className:e.className+" smc-overlay",onClick:e.onClick},v.default.createElement("div",{className:"smc-portal-content",onClick:w},e.children))},k=(0,_.default)(O)(b,function(e){return e.showOverlay?1:0},function(e){return e.showOverlay?"inherit":"none"});t.Portal=function(e){function t(){var e,n,o,r;(0,l.default)(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=o=(0,d.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(u))),o.state={portalMounted:!1},r=n,(0,d.default)(o,r)}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){E||(E=document.createElement("div"),E.id="smc-portal",E.className="smc-portal",document.body.appendChild(E)),this.el=document.createElement("div"),this.el.className="smc-portal-instance",E.appendChild(this.el),this.setState({portalMounted:!0})}},{key:"componentWillUnmount",value:function(){E.removeChild(this.el)}},{key:"render",value:function(){return this.state.portalMounted?(0,y.createPortal)(v.default.createElement(k,{showOverlay:this.props.showOverlay,onClick:this.props.onRequestClose},this.props.renderContents()),this.el):null}}]),t}(g.Component)},257:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=o(r),i=n(0),l=o(i),u=n(1),c=o(u),s=(0,a.default)(["\n  text-align: left;\n  font-weight: 500;\n  font-size: 20px;\n  letter-spacing: 0.4px;\n  line-height: 32px;\n  color: rgb(0, 0, 0);\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n  margin: 0px;\n"],["\n  text-align: left;\n  font-weight: 500;\n  font-size: 20px;\n  letter-spacing: 0.4px;\n  line-height: 32px;\n  color: rgb(0, 0, 0);\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n  margin: 0px;\n"]),d=function(e){var t=e.className,n=e.children;return l.default.createElement("h2",{className:"smc-dialog-dialog-title "+t},n)},f=(0,c.default)(d)(s);t.default=f},258:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=o(r),i=n(0),l=o(i),u=n(1),c=o(u),s=(0,a.default)(["\n  text-align: left;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0.56px;\n  line-height: 20px;\n  display: block;\n  color: rgba(0, 0, 0, .54);\n  margin-top: 20px;\n  padding: 0 24px 24px;\n"],["\n  text-align: left;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0.56px;\n  line-height: 20px;\n  display: block;\n  color: rgba(0, 0, 0, .54);\n  margin-top: 20px;\n  padding: 0 24px 24px;\n"]),d=function(e){var t=e.className,n=e.children;return l.default.createElement("div",{className:"smc-dialog-dialog-body "+t},n)},f=(0,c.default)(d)(s);t.default=f},259:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=o(r),i=n(0),l=o(i),u=n(1),c=o(u),s=(0,a.default)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n"]),d=function(e){var t=e.className,n=e.children;return l.default.createElement("div",{className:"smc-dialog-dialog-footer "+t},n)},f=(0,c.default)(d)(s);t.default=f},87:function(e,t,n){"use strict";function o(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}o(),e.exports=n(116)},88:function(e,t,n){"use strict";function o(e){return r(e)&&3==e.nodeType}var r=n(89);e.exports=o},89:function(e,t,n){"use strict";function o(e){var t=e?e.ownerDocument||e:document,n=t.defaultView||window;return!(!e||!("function"==typeof n.Node?e instanceof n.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}e.exports=o}},[252]);
            return { page: comp.default }
          })
        