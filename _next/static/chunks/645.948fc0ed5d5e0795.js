"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{73645:function(t,e,r){r.d(e,{secp256k1:function(){return ti}});var n={};r.r(n),r.d(n,{gk:function(){return u},dQ:function(){return B},ci:function(){return a},bytesToNumberBE:function(){return p},ty:function(){return y},eV:function(){return b},n$:function(){return I},ql:function(){return w},hexToBytes:function(){return g},_t:function(){return l},tL:function(){return m},S5:function(){return E},FF:function(){return A}});var i=r(65530);BigInt(0);let o=BigInt(1),f=BigInt(2);function l(t){return t instanceof Uint8Array||null!=t&&"object"==typeof t&&"Uint8Array"===t.constructor.name}function u(t){if(!l(t))throw Error("Uint8Array expected")}let s=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function a(t){u(t);let e="";for(let r=0;r<t.length;r++)e+=s[t[r]];return e}function d(t){if("string"!=typeof t)throw Error("hex string expected, got "+typeof t);return BigInt(""===t?"0":`0x${t}`)}let h={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function c(t){return t>=h._0&&t<=h._9?t-h._0:t>=h._A&&t<=h._F?t-(h._A-10):t>=h._a&&t<=h._f?t-(h._a-10):void 0}function g(t){if("string"!=typeof t)throw Error("hex string expected, got "+typeof t);let e=t.length,r=e/2;if(e%2)throw Error("padded hex string expected, got unpadded hex of length "+e);let n=new Uint8Array(r);for(let e=0,i=0;e<r;e++,i+=2){let r=c(t.charCodeAt(i)),o=c(t.charCodeAt(i+1));if(void 0===r||void 0===o)throw Error('hex string expected, got non-hex character "'+(t[i]+t[i+1])+'" at index '+i);n[e]=16*r+o}return n}function p(t){return d(a(t))}function y(t){return u(t),d(a(Uint8Array.from(t).reverse()))}function m(t,e){return g(t.toString(16).padStart(2*e,"0"))}function E(t,e){return m(t,e).reverse()}function w(t,e,r){let n;if("string"==typeof e)try{n=g(e)}catch(r){throw Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)}else if(l(e))n=Uint8Array.from(e);else throw Error(`${t} must be hex string or Uint8Array`);let i=n.length;if("number"==typeof r&&i!==r)throw Error(`${t} expected ${r} bytes, got ${i}`);return n}function b(...t){let e=0;for(let r=0;r<t.length;r++){let n=t[r];u(n),e+=n.length}let r=new Uint8Array(e);for(let e=0,n=0;e<t.length;e++){let i=t[e];r.set(i,n),n+=i.length}return r}let B=t=>(f<<BigInt(t-1))-o,x=t=>new Uint8Array(t),v=t=>Uint8Array.from(t);function I(t,e,r){if("number"!=typeof t||t<2)throw Error("hashLen must be a number");if("number"!=typeof e||e<2)throw Error("qByteLen must be a number");if("function"!=typeof r)throw Error("hmacFn must be a function");let n=x(t),i=x(t),o=0,f=()=>{n.fill(1),i.fill(0),o=0},l=(...t)=>r(i,n,...t),u=(t=x())=>{i=l(v([0]),t),n=l(),0!==t.length&&(i=l(v([1]),t),n=l())},s=()=>{if(o++>=1e3)throw Error("drbg: tried 1000 values");let t=0,r=[];for(;t<e;){let e=(n=l()).slice();r.push(e),t+=n.length}return b(...r)};return(t,e)=>{let r;for(f(),u(t);!(r=e(s()));)u();return f(),r}}let S={bigint:t=>"bigint"==typeof t,function:t=>"function"==typeof t,boolean:t=>"boolean"==typeof t,string:t=>"string"==typeof t,stringOrUint8Array:t=>"string"==typeof t||l(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>"function"==typeof t&&Number.isSafeInteger(t.outputLen)};function A(t,e,r={}){let n=(e,r,n)=>{let i=S[r];if("function"!=typeof i)throw Error(`Invalid validator "${r}", expected function`);let o=t[e];if((!n||void 0!==o)&&!i(o,t))throw Error(`Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`)};for(let[t,r]of Object.entries(e))n(t,r,!1);for(let[t,e]of Object.entries(r))n(t,e,!0);return t}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let O=BigInt(0),q=BigInt(1),R=BigInt(2),N=BigInt(3),$=BigInt(4),_=BigInt(5),z=BigInt(8);function F(t,e){let r=t%e;return r>=O?r:e+r}function P(t,e,r){let n=t;for(;e-- >O;)n*=n,n%=r;return n}function Z(t,e){if(t===O||e<=O)throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);let r=F(t,e),n=e,i=O,o=q,f=q,l=O;for(;r!==O;){let t=n/r,e=n%r,u=i-f*t,s=o-l*t;n=r,r=e,i=f,o=l,f=u,l=s}if(n!==q)throw Error("invert: does not exist");return F(i,e)}BigInt(9),BigInt(16);let L=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function U(t,e){let r=void 0!==e?e:t.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}function T(t){if("bigint"!=typeof t)throw Error("field order must be bigint");return Math.ceil(t.toString(2).length/8)}function C(t){let e=T(t);return e+Math.ceil(e/2)}var V=r(93557),j=r(68104);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let H=BigInt(0),K=BigInt(1);function k(t){return A(t.Fp,L.reduce((t,e)=>(t[e]="function",t),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"})),A(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...U(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}let{bytesToNumberBE:D,hexToBytes:Y}=n,M={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(t){let{Err:e}=M;if(t.length<2||2!==t[0])throw new e("Invalid signature integer tag");let r=t[1],n=t.subarray(2,r+2);if(!r||n.length!==r)throw new e("Invalid signature integer: wrong length");if(128&n[0])throw new e("Invalid signature integer: negative");if(0===n[0]&&!(128&n[1]))throw new e("Invalid signature integer: unnecessary leading zero");return{d:D(n),l:t.subarray(r+2)}},toSig(t){let{Err:e}=M,r="string"==typeof t?Y(t):t;u(r);let n=r.length;if(n<2||48!=r[0])throw new e("Invalid signature tag");if(r[1]!==n-2)throw new e("Invalid signature: incorrect length");let{d:i,l:o}=M._parseInt(r.subarray(2)),{d:f,l:l}=M._parseInt(o);if(l.length)throw new e("Invalid signature: left bytes after parsing");return{r:i,s:f}},hexFromSig(t){let e=t=>8&Number.parseInt(t[0],16)?"00"+t:t,r=t=>{let e=t.toString(16);return 1&e.length?`0${e}`:e},n=e(r(t.s)),i=e(r(t.r)),o=n.length/2,f=i.length/2,l=r(o),u=r(f);return`30${r(f+o+4)}02${u}${i}02${l}${n}`}},W=BigInt(0),G=BigInt(1),J=(BigInt(2),BigInt(3));BigInt(4);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */let Q=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),X=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),tt=BigInt(1),te=BigInt(2),tr=(t,e)=>(t+e/te)/e,tn=function(t,e,r=!1,n={}){if(t<=O)throw Error(`Expected Field ORDER > 0, got ${t}`);let{nBitLength:i,nByteLength:o}=U(t,e);if(o>2048)throw Error("Field lengths over 2048 bytes are not supported");let f=function(t){if(t%$===N){let e=(t+q)/$;return function(t,r){let n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw Error("Cannot find square root");return n}}if(t%z===_){let e=(t-_)/z;return function(t,r){let n=t.mul(r,R),i=t.pow(n,e),o=t.mul(r,i),f=t.mul(t.mul(o,R),i),l=t.mul(o,t.sub(f,t.ONE));if(!t.eql(t.sqr(l),r))throw Error("Cannot find square root");return l}}return function(t){let e,r,n;let i=(t-q)/R;for(e=t-q,r=0;e%R===O;e/=R,r++);for(n=R;n<t&&function(t,e,r){if(r<=O||e<O)throw Error("Expected power/modulo > 0");if(r===q)return O;let n=q;for(;e>O;)e&q&&(n=n*t%r),t=t*t%r,e>>=q;return n}(n,i,t)!==t-q;n++);if(1===r){let e=(t+q)/$;return function(t,r){let n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw Error("Cannot find square root");return n}}let o=(e+q)/R;return function(t,f){if(t.pow(f,i)===t.neg(t.ONE))throw Error("Cannot find square root");let l=r,u=t.pow(t.mul(t.ONE,n),e),s=t.pow(f,o),a=t.pow(f,e);for(;!t.eql(a,t.ONE);){if(t.eql(a,t.ZERO))return t.ZERO;let e=1;for(let r=t.sqr(a);e<l&&!t.eql(r,t.ONE);e++)r=t.sqr(r);let r=t.pow(u,q<<BigInt(l-e-1));u=t.sqr(r),s=t.mul(s,r),a=t.mul(a,u),l=e}return s}}(t)}(t),l=Object.freeze({ORDER:t,BITS:i,BYTES:o,MASK:B(i),ZERO:O,ONE:q,create:e=>F(e,t),isValid:e=>{if("bigint"!=typeof e)throw Error(`Invalid field element: expected bigint, got ${typeof e}`);return O<=e&&e<t},is0:t=>t===O,isOdd:t=>(t&q)===q,neg:e=>F(-e,t),eql:(t,e)=>t===e,sqr:e=>F(e*e,t),add:(e,r)=>F(e+r,t),sub:(e,r)=>F(e-r,t),mul:(e,r)=>F(e*r,t),pow:(t,e)=>(function(t,e,r){if(r<O)throw Error("Expected power > 0");if(r===O)return t.ONE;if(r===q)return e;let n=t.ONE,i=e;for(;r>O;)r&q&&(n=t.mul(n,i)),i=t.sqr(i),r>>=q;return n})(l,t,e),div:(e,r)=>F(e*Z(r,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>Z(e,t),sqrt:n.sqrt||(t=>f(l,t)),invertBatch:t=>(function(t,e){let r=Array(e.length),n=e.reduce((e,n,i)=>t.is0(n)?e:(r[i]=e,t.mul(e,n)),t.ONE),i=t.inv(n);return e.reduceRight((e,n,i)=>t.is0(n)?e:(r[i]=t.mul(e,r[i]),t.mul(e,n)),i),r})(l,t),cmov:(t,e,r)=>r?e:t,toBytes:t=>r?E(t,o):m(t,o),fromBytes:t=>{if(t.length!==o)throw Error(`Fp.fromBytes: expected ${o}, got ${t.length}`);return r?y(t):p(t)}});return Object.freeze(l)}(Q,void 0,void 0,{sqrt:function(t){let e=BigInt(3),r=BigInt(6),n=BigInt(11),i=BigInt(22),o=BigInt(23),f=BigInt(44),l=BigInt(88),u=t*t*t%Q,s=u*u*t%Q,a=P(s,e,Q)*s%Q,d=P(a,e,Q)*s%Q,h=P(d,te,Q)*u%Q,c=P(h,n,Q)*h%Q,g=P(c,i,Q)*c%Q,p=P(g,f,Q)*g%Q,y=P(p,l,Q)*p%Q,m=P(y,f,Q)*g%Q,E=P(m,e,Q)*s%Q,w=P(E,o,Q)*c%Q,b=P(w,r,Q)*u%Q,B=P(b,te,Q);if(!tn.eql(tn.sqr(B),t))throw Error("Cannot find square root");return B}}),ti=function(t,e){let r=e=>(function(t){let e=function(t){let e=k(t);return A(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:r,n:n}=e,i=r.BYTES+1,o=2*r.BYTES+1;function f(t){return F(t,n)}let{ProjectivePoint:u,normPrivateKeyToScalar:s,weierstrassEquation:d,isWithinCurveOrder:h}=function(t){let e=/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function(t){let e=k(t);A(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});let{endo:r,Fp:n,a:i}=e;if(r){if(!n.eql(i,n.ZERO))throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof r||"bigint"!=typeof r.beta||"function"!=typeof r.splitScalar)throw Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:r}=e,n=e.toBytes||((t,e,n)=>{let i=e.toAffine();return b(Uint8Array.from([4]),r.toBytes(i.x),r.toBytes(i.y))}),i=e.fromBytes||(t=>{let e=t.subarray(1);return{x:r.fromBytes(e.subarray(0,r.BYTES)),y:r.fromBytes(e.subarray(r.BYTES,2*r.BYTES))}});function o(t){let{a:n,b:i}=e,o=r.sqr(t),f=r.mul(o,t);return r.add(r.add(f,r.mul(t,n)),i)}if(!r.eql(r.sqr(e.Gy),o(e.Gx)))throw Error("bad generator point: equation left != right");function f(t){return"bigint"==typeof t&&W<t&&t<e.n}function u(t){if(!f(t))throw Error("Expected valid bigint: 0 < bigint < curve.n")}function s(t){let r;let{allowedPrivateKeyLengths:n,nByteLength:i,wrapPrivateKey:o,n:f}=e;if(n&&"bigint"!=typeof t){if(l(t)&&(t=a(t)),"string"!=typeof t||!n.includes(t.length))throw Error("Invalid key");t=t.padStart(2*i,"0")}try{r="bigint"==typeof t?t:p(w("private key",t,i))}catch(e){throw Error(`private key must be ${i} bytes, hex or bigint, not ${typeof t}`)}return o&&(r=F(r,f)),u(r),r}let d=new Map;function h(t){if(!(t instanceof c))throw Error("ProjectivePoint expected")}class c{constructor(t,e,n){if(this.px=t,this.py=e,this.pz=n,null==t||!r.isValid(t))throw Error("x required");if(null==e||!r.isValid(e))throw Error("y required");if(null==n||!r.isValid(n))throw Error("z required")}static fromAffine(t){let{x:e,y:n}=t||{};if(!t||!r.isValid(e)||!r.isValid(n))throw Error("invalid affine point");if(t instanceof c)throw Error("projective point not allowed");let i=t=>r.eql(t,r.ZERO);return i(e)&&i(n)?c.ZERO:new c(e,n,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(t){let e=r.invertBatch(t.map(t=>t.pz));return t.map((t,r)=>t.toAffine(e[r])).map(c.fromAffine)}static fromHex(t){let e=c.fromAffine(i(w("pointHex",t)));return e.assertValidity(),e}static fromPrivateKey(t){return c.BASE.multiply(s(t))}_setWindowSize(t){this._WINDOW_SIZE=t,d.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint&&!r.is0(this.py))return;throw Error("bad point: ZERO")}let{x:t,y:n}=this.toAffine();if(!r.isValid(t)||!r.isValid(n))throw Error("bad point: x or y not FE");let i=r.sqr(n),f=o(t);if(!r.eql(i,f))throw Error("bad point: equation left != right");if(!this.isTorsionFree())throw Error("bad point: not in prime-order subgroup")}hasEvenY(){let{y:t}=this.toAffine();if(r.isOdd)return!r.isOdd(t);throw Error("Field doesn't support isOdd")}equals(t){h(t);let{px:e,py:n,pz:i}=this,{px:o,py:f,pz:l}=t,u=r.eql(r.mul(e,l),r.mul(o,i)),s=r.eql(r.mul(n,l),r.mul(f,i));return u&&s}negate(){return new c(this.px,r.neg(this.py),this.pz)}double(){let{a:t,b:n}=e,i=r.mul(n,J),{px:o,py:f,pz:l}=this,u=r.ZERO,s=r.ZERO,a=r.ZERO,d=r.mul(o,o),h=r.mul(f,f),g=r.mul(l,l),p=r.mul(o,f);return p=r.add(p,p),a=r.mul(o,l),a=r.add(a,a),u=r.mul(t,a),s=r.mul(i,g),s=r.add(u,s),u=r.sub(h,s),s=r.add(h,s),s=r.mul(u,s),u=r.mul(p,u),a=r.mul(i,a),g=r.mul(t,g),p=r.sub(d,g),p=r.mul(t,p),p=r.add(p,a),a=r.add(d,d),d=r.add(a,d),d=r.add(d,g),d=r.mul(d,p),s=r.add(s,d),g=r.mul(f,l),g=r.add(g,g),d=r.mul(g,p),u=r.sub(u,d),a=r.mul(g,h),a=r.add(a,a),new c(u,s,a=r.add(a,a))}add(t){h(t);let{px:n,py:i,pz:o}=this,{px:f,py:l,pz:u}=t,s=r.ZERO,a=r.ZERO,d=r.ZERO,g=e.a,p=r.mul(e.b,J),y=r.mul(n,f),m=r.mul(i,l),E=r.mul(o,u),w=r.add(n,i),b=r.add(f,l);w=r.mul(w,b),b=r.add(y,m),w=r.sub(w,b),b=r.add(n,o);let B=r.add(f,u);return b=r.mul(b,B),B=r.add(y,E),b=r.sub(b,B),B=r.add(i,o),s=r.add(l,u),B=r.mul(B,s),s=r.add(m,E),B=r.sub(B,s),d=r.mul(g,b),s=r.mul(p,E),d=r.add(s,d),s=r.sub(m,d),d=r.add(m,d),a=r.mul(s,d),m=r.add(y,y),m=r.add(m,y),E=r.mul(g,E),b=r.mul(p,b),m=r.add(m,E),E=r.sub(y,E),E=r.mul(g,E),b=r.add(b,E),y=r.mul(m,b),a=r.add(a,y),y=r.mul(B,b),s=r.mul(w,s),s=r.sub(s,y),y=r.mul(w,m),d=r.mul(B,d),new c(s,a,d=r.add(d,y))}subtract(t){return this.add(t.negate())}is0(){return this.equals(c.ZERO)}wNAF(t){return y.wNAFCached(this,d,t,t=>{let e=r.invertBatch(t.map(t=>t.pz));return t.map((t,r)=>t.toAffine(e[r])).map(c.fromAffine)})}multiplyUnsafe(t){let n=c.ZERO;if(t===W)return n;if(u(t),t===G)return this;let{endo:i}=e;if(!i)return y.unsafeLadder(this,t);let{k1neg:o,k1:f,k2neg:l,k2:s}=i.splitScalar(t),a=n,d=n,h=this;for(;f>W||s>W;)f&G&&(a=a.add(h)),s&G&&(d=d.add(h)),h=h.double(),f>>=G,s>>=G;return o&&(a=a.negate()),l&&(d=d.negate()),d=new c(r.mul(d.px,i.beta),d.py,d.pz),a.add(d)}multiply(t){let n,i;u(t);let{endo:o}=e;if(o){let{k1neg:e,k1:f,k2neg:l,k2:u}=o.splitScalar(t),{p:s,f:a}=this.wNAF(f),{p:d,f:h}=this.wNAF(u);s=y.constTimeNegate(e,s),d=y.constTimeNegate(l,d),d=new c(r.mul(d.px,o.beta),d.py,d.pz),n=s.add(d),i=a.add(h)}else{let{p:e,f:r}=this.wNAF(t);n=e,i=r}return c.normalizeZ([n,i])[0]}multiplyAndAddUnsafe(t,e,r){let n=c.BASE,i=(t,e)=>e!==W&&e!==G&&t.equals(n)?t.multiply(e):t.multiplyUnsafe(e),o=i(this,e).add(i(t,r));return o.is0()?void 0:o}toAffine(t){let{px:e,py:n,pz:i}=this,o=this.is0();null==t&&(t=o?r.ONE:r.inv(i));let f=r.mul(e,t),l=r.mul(n,t),u=r.mul(i,t);if(o)return{x:r.ZERO,y:r.ZERO};if(!r.eql(u,r.ONE))throw Error("invZ was invalid");return{x:f,y:l}}isTorsionFree(){let{h:t,isTorsionFree:r}=e;if(t===G)return!0;if(r)return r(c,this);throw Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){let{h:t,clearCofactor:r}=e;return t===G?this:r?r(c,this):this.multiplyUnsafe(e.h)}toRawBytes(t=!0){return this.assertValidity(),n(c,this,t)}toHex(t=!0){return a(this.toRawBytes(t))}}c.BASE=new c(e.Gx,e.Gy,r.ONE),c.ZERO=new c(r.ZERO,r.ONE,r.ZERO);let g=e.nBitLength,y=function(t,e){let r=(t,e)=>{let r=e.negate();return t?r:e},n=t=>({windows:Math.ceil(e/t)+1,windowSize:2**(t-1)});return{constTimeNegate:r,unsafeLadder(e,r){let n=t.ZERO,i=e;for(;r>H;)r&K&&(n=n.add(i)),i=i.double(),r>>=K;return n},precomputeWindow(t,e){let{windows:r,windowSize:i}=n(e),o=[],f=t,l=f;for(let t=0;t<r;t++){l=f,o.push(l);for(let t=1;t<i;t++)l=l.add(f),o.push(l);f=l.double()}return o},wNAF(e,i,o){let{windows:f,windowSize:l}=n(e),u=t.ZERO,s=t.BASE,a=BigInt(2**e-1),d=2**e,h=BigInt(e);for(let t=0;t<f;t++){let e=t*l,n=Number(o&a);o>>=h,n>l&&(n-=d,o+=K);let f=e+Math.abs(n)-1,c=t%2!=0,g=n<0;0===n?s=s.add(r(c,i[e])):u=u.add(r(g,i[f]))}return{p:u,f:s}},wNAFCached(t,e,r,n){let i=t._WINDOW_SIZE||1,o=e.get(t);return o||(o=this.precomputeWindow(t,i),1!==i&&e.set(t,n(o))),this.wNAF(i,o,r)}}}(c,e.endo?Math.ceil(g/2):g);return{CURVE:e,ProjectivePoint:c,normPrivateKeyToScalar:s,weierstrassEquation:o,isWithinCurveOrder:f}}({...e,toBytes(t,e,n){let i=e.toAffine(),o=r.toBytes(i.x),f=b;return n?f(Uint8Array.from([e.hasEvenY()?2:3]),o):f(Uint8Array.from([4]),o,r.toBytes(i.y))},fromBytes(t){let e=t.length,n=t[0],f=t.subarray(1);if(e===i&&(2===n||3===n)){let t;let e=p(f);if(!(W<e&&e<r.ORDER))throw Error("Point is not on curve");let i=d(e);try{t=r.sqrt(i)}catch(t){throw Error("Point is not on curve"+(t instanceof Error?": "+t.message:""))}return(1&n)==1!=((t&G)===G)&&(t=r.neg(t)),{x:e,y:t}}if(e===o&&4===n)return{x:r.fromBytes(f.subarray(0,r.BYTES)),y:r.fromBytes(f.subarray(r.BYTES,2*r.BYTES))};throw Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)}}),c=t=>a(m(t,e.nByteLength)),x=(t,e,r)=>p(t.slice(e,r));class v{constructor(t,e,r){this.r=t,this.s=e,this.recovery=r,this.assertValidity()}static fromCompact(t){let r=e.nByteLength;return new v(x(t=w("compactSignature",t,2*r),0,r),x(t,r,2*r))}static fromDER(t){let{r:e,s:r}=M.toSig(w("DER",t));return new v(e,r)}assertValidity(){if(!h(this.r))throw Error("r must be 0 < r < CURVE.n");if(!h(this.s))throw Error("s must be 0 < s < CURVE.n")}addRecoveryBit(t){return new v(this.r,this.s,t)}recoverPublicKey(t){let{r:i,s:o,recovery:l}=this,s=R(w("msgHash",t));if(null==l||![0,1,2,3].includes(l))throw Error("recovery id invalid");let a=2===l||3===l?i+e.n:i;if(a>=r.ORDER)throw Error("recovery id 2 or 3 invalid");let d=(1&l)==0?"02":"03",h=u.fromHex(d+c(a)),g=Z(a,n),p=f(-s*g),y=f(o*g),m=u.BASE.multiplyAndAddUnsafe(h,p,y);if(!m)throw Error("point at infinify");return m.assertValidity(),m}hasHighS(){return this.s>n>>G}normalizeS(){return this.hasHighS()?new v(this.r,f(-this.s),this.recovery):this}toDERRawBytes(){return g(this.toDERHex())}toDERHex(){return M.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return g(this.toCompactHex())}toCompactHex(){return c(this.r)+c(this.s)}}function S(t){let e=l(t),r="string"==typeof t,n=(e||r)&&t.length;return e?n===i||n===o:r?n===2*i||n===2*o:t instanceof u}let O=e.bits2int||function(t){let r=p(t),n=8*t.length-e.nBitLength;return n>0?r>>BigInt(n):r},R=e.bits2int_modN||function(t){return f(O(t))},N=B(e.nBitLength);function $(t){if("bigint"!=typeof t)throw Error("bigint expected");if(!(W<=t&&t<N))throw Error(`bigint expected < 2^${e.nBitLength}`);return m(t,e.nByteLength)}let _={lowS:e.lowS,prehash:!1},z={lowS:e.lowS,prehash:!1};return u.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t,e=!0){return u.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e,r=!0){if(S(t))throw Error("first arg must be private key");if(!S(e))throw Error("second arg must be public key");return u.fromHex(e).multiply(s(t)).toRawBytes(r)},sign:function(t,i,o=_){let{seed:l,k2sig:a}=function(t,i,o=_){if(["recovered","canonical"].some(t=>t in o))throw Error("sign() legacy options not supported");let{hash:l,randomBytes:a}=e,{lowS:d,prehash:c,extraEntropy:g}=o;null==d&&(d=!0),t=w("msgHash",t),c&&(t=w("prehashed msgHash",l(t)));let p=R(t),y=s(i),m=[$(y),$(p)];if(null!=g&&!1!==g){let t=!0===g?a(r.BYTES):g;m.push(w("extraEntropy",t))}return{seed:b(...m),k2sig:function(t){let e=O(t);if(!h(e))return;let r=Z(e,n),i=u.BASE.multiply(e).toAffine(),o=f(i.x);if(o===W)return;let l=f(r*f(p+o*y));if(l===W)return;let s=(i.x===o?0:2)|Number(i.y&G),a=l;if(d&&l>n>>G)a=l>n>>G?f(-l):l,s^=1;return new v(o,a,s)}}}(t,i,o);return I(e.hash.outputLen,e.nByteLength,e.hmac)(l,a)},verify:function(t,r,i,o=z){let s,a;if(r=w("msgHash",r),i=w("publicKey",i),"strict"in o)throw Error("options.strict was renamed to lowS");let{lowS:d,prehash:h}=o;try{if("string"==typeof t||l(t))try{a=v.fromDER(t)}catch(e){if(!(e instanceof M.Err))throw e;a=v.fromCompact(t)}else if("object"==typeof t&&"bigint"==typeof t.r&&"bigint"==typeof t.s){let{r:e,s:r}=t;a=new v(e,r)}else throw Error("PARSE");s=u.fromHex(i)}catch(t){if("PARSE"===t.message)throw Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(d&&a.hasHighS())return!1;h&&(r=e.hash(r));let{r:c,s:g}=a,p=R(r),y=Z(g,n),m=f(p*y),E=f(c*y),b=u.BASE.multiplyAndAddUnsafe(s,m,E)?.toAffine();return!!b&&f(b.x)===c},ProjectivePoint:u,Signature:v,utils:{isValidPrivateKey(t){try{return s(t),!0}catch(t){return!1}},normPrivateKeyToScalar:s,randomPrivateKey:()=>{let t=C(e.n);return function(t,e,r=!1){let n=t.length,i=T(e),o=C(e);if(n<16||n<o||n>1024)throw Error(`expected ${o}-1024 bytes of input, got ${n}`);let f=F(r?p(t):y(t),e-q)+q;return r?E(f,i):m(f,i)}(e.randomBytes(t),e.n)},precompute:(t=8,e=u.BASE)=>(e._setWindowSize(t),e.multiply(BigInt(3)),e)}}})({...t,hash:e,hmac:(t,...r)=>(0,V.b)(e,t,(0,j.eV)(...r)),randomBytes:j.O6});return Object.freeze({...r(e),create:r})}({a:BigInt(0),b:BigInt(7),Fp:tn,n:X,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{let e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-tt*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=BigInt("0x100000000000000000000000000000000"),o=tr(e*t,X),f=tr(-r*t,X),l=F(t-o*e-f*n,X),u=F(-o*r-f*e,X),s=l>i,a=u>i;if(s&&(l=X-l),a&&(u=X-u),l>i||u>i)throw Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:s,k1:l,k2neg:a,k2:u}}}},i.J);BigInt(0),ti.ProjectivePoint}}]);