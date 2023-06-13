(function(m,E){typeof exports=="object"&&typeof module<"u"?E(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],E):(m=typeof globalThis<"u"?globalThis:m||self,E(m.andamiojs={},m.require$$0))})(this,function(m,E){"use strict";const ee=(l=>l&&typeof l=="object"&&"default"in l?l:{default:l})(E);var q={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function je(){if(re)return j;re=1;var l=ee.default,b=Symbol.for("react.element"),L=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,W=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function D(R,c,x){var p,h={},T=null,$=null;x!==void 0&&(T=""+x),c.key!==void 0&&(T=""+c.key),c.ref!==void 0&&($=c.ref);for(p in c)P.call(c,p)&&!Y.hasOwnProperty(p)&&(h[p]=c[p]);if(R&&R.defaultProps)for(p in c=R.defaultProps,c)h[p]===void 0&&(h[p]=c[p]);return{$$typeof:b,type:R,key:T,ref:$,props:h,_owner:W.current}}return j.Fragment=L,j.jsx=D,j.jsxs=D,j}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function ke(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var l=ee.default,b=Symbol.for("react.element"),L=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),R=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),oe=Symbol.iterator,Le="@@iterator";function We(e){if(e===null||typeof e!="object")return null;var r=oe&&e[oe]||e[Le];return typeof r=="function"?r:null}var O=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ye("error",e,t)}}function Ye(e,r,t){{var n=O.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var $e=!1,Ne=!1,Me=!1,Ue=!1,Ve=!1,ie;ie=Symbol.for("react.module.reference");function Be(e){return!!(typeof e=="string"||typeof e=="function"||e===P||e===Y||Ve||e===W||e===x||e===p||Ue||e===$||$e||Ne||Me||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===h||e.$$typeof===D||e.$$typeof===R||e.$$typeof===c||e.$$typeof===ie||e.getModuleId!==void 0))}function qe(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ue(e){return e.displayName||"Context"}function y(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case L:return"Portal";case Y:return"Profiler";case W:return"StrictMode";case x:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return ue(r)+".Consumer";case D:var t=e;return ue(t._context)+".Provider";case c:return qe(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:y(e.type)||"Memo";case T:{var i=e,u=i._payload,o=i._init;try{return y(o(u))}catch{return null}}}return null}var C=Object.assign,F=0,se,fe,le,ce,de,ve,pe;function ge(){}ge.__reactDisabledLog=!0;function Je(){{if(F===0){se=console.log,fe=console.info,le=console.warn,ce=console.error,de=console.group,ve=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}F++}}function Ge(){{if(F--,F===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:C({},e,{value:se}),info:C({},e,{value:fe}),warn:C({},e,{value:le}),error:C({},e,{value:ce}),group:C({},e,{value:de}),groupCollapsed:C({},e,{value:ve}),groupEnd:C({},e,{value:pe})})}F<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=O.ReactCurrentDispatcher,G;function N(e,r,t){{if(G===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var z=!1,M;{var ze=typeof WeakMap=="function"?WeakMap:Map;M=new ze}function me(e,r){if(!e||z)return"";{var t=M.get(e);if(t!==void 0)return t}var n;z=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=J.current,J.current=null,Je();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(_){n=_}Reflect.construct(e,[],o)}else{try{o.call()}catch(_){n=_}e.call(o.prototype)}}else{try{throw Error()}catch(_){n=_}e()}}catch(_){if(_&&n&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),v=n.stack.split(`
`),s=a.length-1,f=v.length-1;s>=1&&f>=0&&a[s]!==v[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==v[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==v[f]){var g=`
`+a[s].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&M.set(e,g),g}while(s>=1&&f>=0);break}}}finally{z=!1,J.current=u,Ge(),Error.prepareStackTrace=i}var w=e?e.displayName||e.name:"",we=w?N(w):"";return typeof e=="function"&&M.set(e,we),we}function Ke(e,r,t){return me(e,!1)}function He(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function U(e,r,t){if(e==null)return"";if(typeof e=="function")return me(e,He(e));if(typeof e=="string")return N(e);switch(e){case x:return N("Suspense");case p:return N("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ke(e.render);case h:return U(e.type,r,t);case T:{var n=e,i=n._payload,u=n._init;try{return U(u(i),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,be={},he=O.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function Xe(e,r,t,n,i){{var u=Function.call.bind(V);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var v=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(B(i),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),B(null)),a instanceof Error&&!(a.message in be)&&(be[a.message]=!0,B(i),d("Failed %s type: %s",t,a.message),B(null))}}}var Ze=Array.isArray;function K(e){return Ze(e)}function Qe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function er(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function _e(e){if(er(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Qe(e)),ye(e)}var A=O.ReactCurrentOwner,rr={key:!0,ref:!0,__self:!0,__source:!0},Ee,Re,H;H={};function tr(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function nr(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ar(e,r){if(typeof e.ref=="string"&&A.current&&r&&A.current.stateNode!==r){var t=y(A.current.type);H[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',y(A.current.type),e.ref),H[t]=!0)}}function or(e,r){{var t=function(){Ee||(Ee=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ir(e,r){{var t=function(){Re||(Re=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ur=function(e,r,t,n,i,u,o){var a={$$typeof:b,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function sr(e,r,t,n,i){{var u,o={},a=null,v=null;t!==void 0&&(_e(t),a=""+t),nr(r)&&(_e(r.key),a=""+r.key),tr(r)&&(v=r.ref,ar(r,i));for(u in r)V.call(r,u)&&!rr.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||v){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&or(o,f),v&&ir(o,f)}return ur(e,a,v,i,n,A.current,o)}}var X=O.ReactCurrentOwner,Te=O.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===b}function Ce(){{if(X.current){var e=y(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Pe={};function lr(e){{var r=Ce();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function xe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=lr(r);if(Pe[t])return;Pe[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+y(e._owner.type)+"."),S(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),S(null)}}function Oe(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&xe(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=We(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Q(o.value)&&xe(o.value,r)}}}function cr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=y(r);Xe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=y(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){S(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),S(null);break}}e.ref!==null&&(S(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),S(null))}}function Se(e,r,t,n,i,u){{var o=Be(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=fr(i);v?a+=v:a+=Ce();var s;e===null?s="null":K(e)?s="array":e!==void 0&&e.$$typeof===b?(s="<"+(y(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=sr(e,r,t,i,u);if(f==null)return f;if(o){var g=r.children;if(g!==void 0)if(n)if(K(g)){for(var w=0;w<g.length;w++)Oe(g[w],e);Object.freeze&&Object.freeze(g)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(g,e)}return e===P?dr(f):cr(f),f}}function vr(e,r,t){return Se(e,r,t,!0)}function pr(e,r,t){return Se(e,r,t,!1)}var gr=pr,mr=vr;k.Fragment=P,k.jsx=gr,k.jsxs=mr}()),k}(function(l){process.env.NODE_ENV==="production"?l.exports=je():l.exports=ke()})(q);const I=q.exports.jsx,De=q.exports.jsxs;function Fe({src:l,caption:b=void 0}){return De("figure",{className:"h-auto mx-auto",children:[I("img",{className:"h-auto max-w-full rounded-lg",src:l}),b&&I("figcaption",{className:"mt-2 text-sm text-center",children:b})]})}function Ae({children:l}){return I("div",{className:"prose prose-sm sm:prose-base lg:prose-lg prose-blue dark:prose-invert",children:l})}const ne={connectedContribToken:void 0,connectedContribTokenUnit:void 0,connectedIssuerToken:void 0,loading:!1,error:!1},ae=E.createContext(ne),Ie=({children:l})=>{const[b,L]=E.useState(ne);return I(ae.Provider,{value:b,children:l})};m.Image=Fe,m.Layout=Ae,m.PPBLContext=ae,m.PPBLContextProvider=Ie,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});