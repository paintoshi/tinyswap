"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{12599:function(e,t,n){var r,a,i,l;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){let t;void 0===e&&(e={});let{initialEntries:n=["/"],initialIndex:a,v5Compat:i=!1}=e;t=n.map((e,t)=>d(e,"string"==typeof e?null:e.state,0===t?"default":void 0));let l=p(null==a?t.length-1:a),s=r.Pop,h=null;function p(e){return Math.min(Math.max(e,0),t.length-1)}function d(e,n,r){var a,i;void 0===n&&(n=null);let s=(a=t?t[l].pathname:"/",void 0===(i=n)&&(i=null),o({pathname:"string"==typeof a?a:a.pathname,search:"",hash:""},"string"==typeof e?c(e):e,{state:i,key:e&&e.key||r||Math.random().toString(36).substr(2,8)}));return u("/"===s.pathname.charAt(0),"relative pathnames are not supported in memory history: "+JSON.stringify(e)),s}function f(e){return"string"==typeof e?e:function(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}(e)}return{get index(){return l},get action(){return s},get location(){return t[l]},createHref:f,createURL:e=>new URL(f(e),"http://localhost"),encodeLocation(e){let t="string"==typeof e?c(e):e;return{pathname:t.pathname||"",search:t.search||"",hash:t.hash||""}},push(e,n){s=r.Push;let a=d(e,n);l+=1,t.splice(l,t.length,a),i&&h&&h({action:s,location:a,delta:1})},replace(e,n){s=r.Replace;let a=d(e,n);t[l]=a,i&&h&&h({action:s,location:a,delta:0})},go(e){s=r.Pop;let n=p(l+e),a=t[n];l=n,h&&h({action:s,location:a,delta:e})},listen:e=>(h=e,()=>{h=null})}}function h(e,t){if(!1===e||null==e)throw Error(t)}function u(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p(e,t,n){void 0===n&&(n="/");let r=g(("string"==typeof t?c(t):t).pathname||"/",n);if(null==r)return null;let a=function e(t,n,r,a){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a="");let i=(t,i,l)=>{let o={relativePath:void 0===l?t.path||"":l,caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};o.relativePath.startsWith("/")&&(h(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(a.length));let s=P([a,o.relativePath]),u=r.concat(o);if(t.children&&t.children.length>0&&(h(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),e(t.children,n,u,s)),null!=t.path||t.index){var c;let e,r;n.push({path:s,score:(c=t.index,r=(e=s.split("/")).length,e.some(f)&&(r+=-2),c&&(r+=2),e.filter(e=>!f(e)).reduce((e,t)=>e+(d.test(t)?3:""===t?1:10),r)),routesMeta:u})}};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,i=r.endsWith("?"),l=r.replace(/\?$/,"");if(0===a.length)return i?[l,""]:[l];let o=e(a.join("/")),s=[];return s.push(...o.map(e=>""===e?l:[l,e].join("/"))),i&&s.push(...o),s.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))i(e,t,n);else i(e,t)}),n}(e);!function(e){e.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?n[n.length-1]-r[r.length-1]:0)})}(a);let i=null;for(let e=0;null==i&&e<a.length;++e)i=function(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let e=0;e<n.length;++e){let l=n[e],o=e===n.length-1,s="/"===a?t:t.slice(a.length)||"/",h=m({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},s);if(!h)return null;Object.assign(r,h.params);let u=l.route;i.push({params:r,pathname:P([a,h.pathname]),pathnameBase:w(P([a,h.pathnameBase])),route:u}),"/"!==h.pathnameBase&&(a=P([a,h.pathnameBase]))}return i}(a[e],function(e){try{return decodeURI(e)}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(r));return i}n.d(t,{J0:function(){return h},LX:function(){return m},PP:function(){return s},RQ:function(){return P},WK:function(){return R},X3:function(){return x},Zn:function(){return g},Zq:function(){return y},aU:function(){return r},cP:function(){return c},fp:function(){return p},pC:function(){return b}}),(i=r||(r={})).Pop="POP",i.Push="PUSH",i.Replace="REPLACE",(l=a||(a={})).data="data",l.deferred="deferred",l.redirect="redirect",l.error="error";let d=/^:\w+$/,f=e=>"*"===e;function m(e,t){var n,r,a;let i,l;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[o,s]=(n=e.path,r=e.caseSensitive,a=e.end,void 0===r&&(r=!1),void 0===a&&(a=!0),u("*"===n||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),i=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(e,t,n)=>(i.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")),n.endsWith("*")?(i.push({paramName:"*"}),l+="*"===n||"/*"===n?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?l+="\\/*$":""!==n&&"/"!==n&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),i]),h=t.match(o);if(!h)return null;let c=h[0],p=c.replace(/(.)\/+$/,"$1"),d=h.slice(1);return{params:s.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=d[n]||"";p=c.slice(0,c.length-e.length).replace(/(.)\/+$/,"$1")}let i=d[n];return a&&!i?e[r]=void 0:e[r]=function(e,t){try{return decodeURIComponent(e)}catch(n){return u(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(i||"",r),e},{}),pathname:c,pathnameBase:p,pattern:e}}function g(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function v(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t)+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function y(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function b(e,t,n,r){let a,i;void 0===r&&(r=!1),"string"==typeof e?a=c(e):(h(!(a=o({},e)).pathname||!a.pathname.includes("?"),v("?","pathname","search",a)),h(!a.pathname||!a.pathname.includes("#"),v("#","pathname","hash",a)),h(!a.search||!a.search.includes("#"),v("#","search","hash",a)));let l=""===e||""===a.pathname,s=l?"/":a.pathname;if(r||null==s)i=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){let n;void 0===t&&(t="/");let{pathname:r,search:a="",hash:i=""}="string"==typeof e?c(e):e;return{pathname:r?r.startsWith("/")?r:(n=t.replace(/\/+$/,"").split("/"),r.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"):t,search:W(a),hash:$(i)}}(a,i),p=s&&"/"!==s&&s.endsWith("/"),d=(l||"."===s)&&n.endsWith("/");return!u.pathname.endsWith("/")&&(p||d)&&(u.pathname+="/"),u}let P=e=>e.join("/").replace(/\/\/+/g,"/"),w=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",$=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class x extends Error{}function R(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("deferred")}}]);