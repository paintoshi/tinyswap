"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{11481:function(e,t,s){s.d(t,{ConfigCtrl:function(){return W},zv:function(){return y},uA:function(){return w},ExplorerCtrl:function(){return K},jb:function(){return B},OptionsCtrl:function(){return I},AV:function(){return b},ThemeCtrl:function(){return Z},ToastCtrl:function(){return et}}),Symbol();let r=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,i=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),a=e=>i(e)&&e[r]||null,l=(e,t=!0)=>{o.set(e,t)},c=e=>"object"==typeof e&&null!==e,d=new WeakMap,u=new WeakSet,[p]=((e=Object.is,t=(e,t)=>new Proxy(e,t),s=e=>c(e)&&!u.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),r=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,o=(e,t,s=r)=>{let i=n.get(e);if((null==i?void 0:i[0])===t)return i[1];let a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(a,!0),n.set(e,[t,a]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(a,t))return;let r=Reflect.get(e,t),n={value:r,enumerable:!0,configurable:!0};if(u.has(r))l(r,!1);else if(r instanceof Promise)delete n.value,n.get=()=>s(r);else if(d.has(r)){let[e,t]=d.get(r);n.value=o(e,t(),s)}Object.defineProperty(a,t,n)}),Object.preventExtensions(a)},i=new WeakMap,p=[1,1],f=r=>{if(!c(r))throw Error("object required");let n=i.get(r);if(n)return n;let l=p[0],h=new Set,g=(e,t=++p[0])=>{l!==t&&(l=t,h.forEach(s=>s(e,t)))},m=p[1],b=(e=++p[1])=>(m===e||h.size||(m=e,v.forEach(([t])=>{let s=t[1](e);s>l&&(l=s)})),l),y=e=>(t,s)=>{let r=[...t];r[1]=[e,...r[1]],g(r,s)},v=new Map,w=(e,t)=>{if(v.has(e))throw Error("prop listener already exists");if(h.size){let s=t[3](y(e));v.set(e,[t,s])}else v.set(e,[t])},C=e=>{var t;let s=v.get(e);s&&(v.delete(e),null==(t=s[1])||t.call(s))},I=e=>{h.add(e),1===h.size&&v.forEach(([e,t],s)=>{if(t)throw Error("remove already exists");let r=e[3](y(s));v.set(s,[e,r])});let t=()=>{h.delete(e),0===h.size&&v.forEach(([e,t],s)=>{t&&(t(),v.set(s,[e]))})};return t},O=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),W={deleteProperty(e,t){let s=Reflect.get(e,t);C(t);let r=Reflect.deleteProperty(e,t);return r&&g(["delete",[t],s]),r},set(t,r,n,o){let l=Reflect.has(t,r),p=Reflect.get(t,r,o);if(l&&(e(p,n)||i.has(n)&&e(p,i.get(n))))return!0;C(r),c(n)&&(n=a(n)||n);let h=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[r],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[r],e])});else{!d.has(n)&&s(n)&&(h=f(n));let e=!u.has(h)&&d.get(h);e&&w(r,e)}return Reflect.set(t,r,h,o),g(["set",[r],n,p]),!0}},E=t(O,W);i.set(r,E);let j=[O,b,o,I];return d.set(E,j),Reflect.ownKeys(r).forEach(e=>{let t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(E[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(O,e,t)}),E})=>[f,d,u,e,t,s,r,n,o,i,p])();function f(e={}){return p(e)}function h(e,t,s){let r;let n=d.get(e);n||console.warn("Please use proxy object");let o=[],i=n[3],a=!1,l=i(e=>{if(o.push(e),s){t(o.splice(0));return}r||(r=Promise.resolve().then(()=>{r=void 0,a&&t(o.splice(0))}))});return a=!0,()=>{a=!1,l()}}var g=s(9109).Buffer;let m=f({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),b={state:m,subscribe:e=>h(m,()=>e(m)),push(e,t){e!==m.view&&(m.view=e,t&&(m.data=t),m.history.push(e))},reset(e){m.view=e,m.history=[e]},replace(e){m.history.length>1&&(m.history[m.history.length-1]=e,m.view=e)},goBack(){if(m.history.length>1){m.history.pop();let[e]=m.history.slice(-1);m.view=e}},setData(e){m.data=e}},y={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>y.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return y.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,isTelegram:()=>"undefined"!=typeof window&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto),formatNativeUrl(e,t,s){if(y.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);let n=encodeURIComponent(t);return`${r}wc?uri=${n}`},formatUniversalUrl(e,t,s){if(!y.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;if(r.startsWith("https://t.me")){let e=g.from(t).toString("base64").replace(/[=]/g,"");r.endsWith("/")&&(r=r.slice(0,-1)),this.setWalletConnectDeepLink(r,s);let n=new URL(r);return n.searchParams.set("startapp",e),n.toString()}r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);let n=encodeURIComponent(t);return`${r}wc?uri=${n}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){let s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(e){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch(e){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(y.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"undefined"!=typeof localStorage&&localStorage.setItem(y.WCM_VERSION,"2.7.0")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=b.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},v=f({enabled:"undefined"!=typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),w={state:v,subscribe:e=>h(v.events,()=>e(function(e,t){let s=d.get(e);s||console.warn("Please use proxy object");let[r,n,o]=s;return o(r,n(),void 0)}(v.events[v.events.length-1]))),initialize(){v.enabled&&void 0!==(null==crypto?void 0:crypto.randomUUID)&&(v.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){v.connectedWalletId=e},click(e){if(v.enabled){let t={type:"CLICK",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}},track(e){if(v.enabled){let t={type:"TRACK",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}},view(e){if(v.enabled){let t={type:"VIEW",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}}},C=f({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:C,subscribe:e=>h(C,()=>e(C)),setChains(e){C.chains=e},setWalletConnectUri(e){C.walletConnectUri=e},setIsCustomDesktop(e){C.isCustomDesktop=e},setIsCustomMobile(e){C.isCustomMobile=e},setIsDataLoaded(e){C.isDataLoaded=e},setIsUiLoaded(e){C.isUiLoaded=e},setIsAuth(e){C.isAuth=e}},O=f({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),W={state:O,subscribe:e=>h(O,()=>e(O)),setConfig(e){var t,s;w.initialize(),I.setChains(e.chains),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),I.setIsCustomDesktop(!!(null==(s=e.desktopWallets)?void 0:s.length)),y.setModalVersionInStorage(),Object.assign(O,e)}};var E=Object.defineProperty,j=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,k=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,M=(e,t)=>{for(var s in t||(t={}))L.call(t,s)&&k(e,s,t[s]);if(j)for(var s of j(t))A.call(t,s)&&k(e,s,t[s]);return e};let U="https://explorer-api.walletconnect.com",P="js-2.7.0";async function D(e,t){let s=M({sdkType:"wcm",sdkVersion:P},t),r=new URL(e,U);return r.searchParams.append("projectId",W.state.projectId),Object.entries(s).forEach(([e,t])=>{t&&r.searchParams.append(e,String(t))}),(await fetch(r)).json()}let S={getDesktopListings:async e=>D("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>D("/w3m/v1/getMobileListings",e),getAllListings:async e=>D("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${U}/w3m/v1/getWalletImage/${e}?projectId=${W.state.projectId}&sdkType=wcm&sdkVersion=${P}`,getAssetImageUrl:e=>`${U}/w3m/v1/getAssetImage/${e}?projectId=${W.state.projectId}&sdkType=wcm&sdkVersion=${P}`};var T=Object.defineProperty,N=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,R=(e,t,s)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,$=(e,t)=>{for(var s in t||(t={}))_.call(t,s)&&R(e,s,t[s]);if(N)for(var s of N(t))x.call(t,s)&&R(e,s,t[s]);return e};let V=y.isMobile(),H=f({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),K={state:H,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=W.state;if("NONE"===e||"ALL"===t&&!e)return H.recomendedWallets;if(y.isArray(e)){let t=e.join(","),{listings:s}=await S.getAllListings({recommendedIds:t}),r=Object.values(s);r.sort((t,s)=>e.indexOf(t.id)-e.indexOf(s.id)),H.recomendedWallets=r}else{let{chains:e,isAuth:s}=I.state,r=null==e?void 0:e.join(","),n=y.isArray(t),o={page:1,sdks:s?"auth_v1":void 0,entries:y.RECOMMENDED_WALLET_AMOUNT,chains:r,version:2,excludedIds:n?t.join(","):void 0},{listings:i}=V?await S.getMobileListings(o):await S.getDesktopListings(o);H.recomendedWallets=Object.values(i)}return H.recomendedWallets},async getWallets(e){let t=$({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=W.state,{recomendedWallets:n}=H;if("ALL"===r)return H.wallets;n.length?t.excludedIds=n.map(e=>e.id).join(","):y.isArray(s)&&(t.excludedIds=s.join(",")),y.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");let{page:o,search:i}=e,{listings:a,total:l}=V?await S.getMobileListings(t):await S.getDesktopListings(t),c=Object.values(a),d=i?"search":"wallets";return H[d]={listings:[...H[d].listings,...c],total:l,page:null!=o?o:1},{listings:c,total:l}},getWalletImageUrl:e=>S.getWalletImageUrl(e),getAssetImageUrl:e=>S.getAssetImageUrl(e),resetSearch(){H.search={listings:[],total:0,page:1}}},z=f({open:!1}),B={state:z,subscribe:e=>h(z,()=>e(z)),open:async e=>new Promise(t=>{let{isUiLoaded:s,isDataLoaded:r}=I.state;if(y.removeWalletConnectDeepLink(),I.setWalletConnectUri(null==e?void 0:e.uri),I.setChains(null==e?void 0:e.chains),b.reset("ConnectWallet"),s&&r)z.open=!0,t();else{let e=setInterval(()=>{let s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),z.open=!0,t())},200)}}),close(){z.open=!1}};var J=Object.defineProperty,q=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,Q=(e,t,s)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,X=(e,t)=>{for(var s in t||(t={}))F.call(t,s)&&Q(e,s,t[s]);if(q)for(var s of q(t))G.call(t,s)&&Q(e,s,t[s]);return e};let Y=f({themeMode:"undefined"!=typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Z={state:Y,subscribe:e=>h(Y,()=>e(Y)),setThemeConfig(e){let{themeMode:t,themeVariables:s}=e;t&&(Y.themeMode=t),s&&(Y.themeVariables=X({},s))}},ee=f({open:!1,message:"",variant:"success"}),et={state:ee,subscribe:e=>h(ee,()=>e(ee)),openToast(e,t){ee.open=!0,ee.message=e,ee.variant=t},closeToast(){ee.open=!1}}},55318:function(e,t,s){s.d(t,{WalletConnectModal:function(){return n}});var r=s(11481);class n{constructor(e){this.openModal=r.jb.open,this.closeModal=r.jb.close,this.subscribeModal=r.jb.subscribe,this.setTheme=r.ThemeCtrl.setThemeConfig,r.ThemeCtrl.setThemeConfig(e),r.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if("undefined"!=typeof window){await s.e(866).then(s.bind(s,80866));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),r.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);