(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return T},DV:function(){return B},GJ:function(){return j},L:function(){return d},LL:function(){return P},P0:function(){return E},Pz:function(){return _},Sg:function(){return I},UI:function(){return q},US:function(){return u},Wl:function(){return F},Yr:function(){return R},ZR:function(){return L},aH:function(){return b},b$:function(){return A},cI:function(){return M},dS:function(){return ee},eu:function(){return D},g5:function(){return a},gK:function(){return Z},gQ:function(){return Q},h$:function(){return h},hl:function(){return O},hu:function(){return s},m9:function(){return en},ne:function(){return X},p$:function(){return p},pd:function(){return W},q4:function(){return w},r3:function(){return z},ru:function(){return k},tV:function(){return f},uI:function(){return S},ug:function(){return et},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let a=t[s],o=n[s];if(H(a)&&H(o)){if(!e(a,o))return!1}else if(a!==o)return!1}for(let l of i)if(!r.includes(l))return!1;return!0}},w1:function(){return N},w9:function(){return U},xO:function(){return K},xb:function(){return $},z$:function(){return C},zd:function(){return G}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw a(t)},a=function(e){return Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},l=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let a=e[n++],o=e[n++],l=e[n++],u=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{let c=e[n++],h=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&c)<<6|63&h)}}return t.join("")},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(3&s)<<4|o>>4,d=(15&o)<<2|u>>6,f=63&u;l||(f=64,a||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):l(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],a=i<e.length,o=a?n[e.charAt(i)]:0;++i;let l=i<e.length,u=l?n[e.charAt(i)]:64;++i;let h=i<e.length,d=h?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==u||null==d)throw new c;let f=s<<2|o>>4;if(r.push(f),64!==u){let p=o<<4&240|u>>2;if(r.push(p),64!==d){let g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let h=function(e){let t=o(e);return u.encodeByteArray(t,!0)},d=function(e){return h(e).replace(/\./g,"")},f=function(e){try{return u.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let r in n)n.hasOwnProperty(r)&&"__proto__"!==r&&(t[r]=e(t[r],n[r]));return t}(void 0,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,m=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},y=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let n=e&&f(e[1]);return n&&JSON.parse(n)},v=()=>{try{return g()||m()||y()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},w=e=>{var t,n;return null===(n=null===(t=v())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=e=>{let t=w(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},b=()=>{var e;return null===(e=v())||void 0===e?void 0:e.config},_=e=>{var t;return null===(t=v())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[d(JSON.stringify({alg:"none",type:"JWT"})),d(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function S(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function k(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function A(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function N(){let e=C();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function O(){try{return"object"==typeof indexedDB}catch(e){return!1}}function D(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}})}class L extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(x,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`,o=new L(r,a,n);return o}}let x=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return JSON.parse(e)}function F(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V=function(e){let t={},n={},r={},i="";try{let s=e.split(".");t=M(f(s[0])||""),n=M(f(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(a){}return{header:t,claims:n,data:r,signature:i}},U=function(e){let t=V(e),n=t.claims;return!!n&&"object"==typeof n&&n.hasOwnProperty("iat")},j=function(e){let t=V(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function $(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function q(e,t,n){let r={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function H(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function G(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function W(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,r;t||(t=0);let i=this.W_;if("string"==typeof e)for(let s=0;s<16;s++)i[s]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let a=0;a<16;a++)i[a]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let o=16;o<80;o++){let l=i[o-3]^i[o-8]^i[o-14]^i[o-16];i[o]=(l<<1|l>>>31)&4294967295}let u=this.chain_[0],c=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4];for(let p=0;p<80;p++){p<40?p<20?(n=d^c&(h^d),r=1518500249):(n=c^h^d,r=1859775393):p<60?(n=c&h|d&(c|h),r=2400959708):(n=c^h^d,r=3395469782);let g=(u<<5|u>>>27)+n+f+r+i[p]&4294967295;f=d,d=h,h=(c<<30|c>>>2)&4294967295,c=u,u=g}this.chain_[0]=this.chain_[0]+u&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function X(e,t){let n=new J(e,t);return n.subscribe.bind(n)}class J{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=Y),void 0===r.error&&(r.error=Y),void 0===r.complete&&(r.complete=Y);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y(){}function Z(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ee=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){let a=i-55296;s(++r<e.length,"Surrogate pair missing trail surrogate.");let o=e.charCodeAt(r)-56320;i=65536+(a<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},et=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8484)}])},2619:function(e,t,n){"use strict";var r=n(7294);let i=r.createContext();t.Z=i},8079:function(e,t,n){"use strict";n.d(t,{I8:function(){return l},db:function(){return o}});var r=n(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r.KN)("firebase","9.23.0","app");var i=n(4747),s=n(6100);let a=(0,r.ZF)({apiKey:"AIzaSyAygFmC-fuKmUkWwy0jvYlINRkycNR3QpY",authDomain:"fb-crud-10eb9.firebaseapp.com",databaseURL:"https://fb-crud-10eb9-default-rtdb.firebaseio.com",projectId:"fb-crud-10eb9",storageBucket:"fb-crud-10eb9.appspot.com",messagingSenderId:"751757775811",appId:"1:751757775811:web:d6068b17f36bf4823f6376"}),o=(0,s.ad)(a),l=(0,i.v0)(a)},1804:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(5893),i=n(7294),s=n(1664),a=n.n(s);n(5675);var o=n(5788),l=n(8357);function u(e){return(0,l.w_)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}}]})(e)}function c(e){return(0,l.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"9.5",cy:"9.5",r:"6.5"}},{tag:"rect",attr:{x:"10",y:"10",width:"11",height:"11",rx:"2"}}]})(e)}var h=n(3750),d=n(9583),f=n(4747),p=n(2920),g=n(2619);let m=e=>{let{children:t}=e,{setAdmin:n,Admin:s,setName:l,name:m}=(0,i.useContext)(g.Z),y=()=>{let e=(0,f.v0)();p.Am.success("Signed Out Succesfully",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),n(!1),(0,f.w7)(e).then(()=>{n(!1)}).catch(e=>{})};return(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(p.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,r.jsx)("div",{className:"fixed w-80 h-screen p-4 bg-[#90c5de9e] text-[#010D82] border-r-[1px] flex flex-col justify-between",children:(0,r.jsxs)("div",{className:" flex flex-col ",children:[(0,r.jsx)(a(),{href:"/",children:(0,r.jsxs)("div",{className:" flex text-[#51C9FF] items-center gap-5 cursor-pointer my-4 p-3 rounded-lg ",children:["              ",(0,r.jsx)(o.QA4,{size:40})," ",(0,r.jsxs)("h1",{className:" text-[#010D82]",children:["BC ",(0,r.jsx)("span",{className:"text-[#51C9FF]",children:"Inventory"})]})]})}),(0,r.jsx)("span",{className:"border-b-[1px] w-full "}),(0,r.jsx)(a(),{href:"/home",children:(0,r.jsxs)("div",{className:" flex items-center gap-5 hover:bg-[#a8d1f5ce] cursor-pointer my-4 p-3 rounded-lg ",children:["              ",(0,r.jsx)(o.Dm6,{size:20}),"Dashboard"]})}),(0,r.jsx)(a(),{href:"/categories",children:(0,r.jsxs)("div",{className:" flex items-center gap-5 hover:bg-[#a8d1f5ce] cursor-pointer my-4 p-3 rounded-lg ",children:["              ",(0,r.jsx)(c,{size:20})," Categories"]})}),(0,r.jsxs)("div",{className:" flex flex-col",children:[(0,r.jsx)("h1",{className:" text-[1.2em] text-white",children:"PRODUCTS"}),s?(0,r.jsx)(a(),{href:"/addproduct",children:(0,r.jsxs)("div",{className:" flex items-center gap-5 hover:bg-[#a8d1f5ce] cursor-pointer my-4 p-3 rounded-lg ",children:[(0,r.jsx)(h.Dwu,{size:20})," Add Products"]})}):null,(0,r.jsx)(a(),{href:"/inventory",children:(0,r.jsxs)("div",{className:" flex items-center gap-5 hover:bg-[#a8d1f5ce] cursor-pointer my-4 p-3 rounded-lg ",children:[(0,r.jsx)(h.TlO,{className:" rounded-md -600",size:20}),"Inventory"]})})]}),!0===s?(0,r.jsxs)("div",{className:" flex flex-col",children:[(0,r.jsx)("h1",{className:"text-white text-[1.2em]",children:"ADMIN"}),(0,r.jsx)(a(),{href:"/admins",children:(0,r.jsxs)("div",{className:" flex items-center gap-5 hover:bg-[#a8d1f5ce] cursor-pointer my-4 p-3 rounded-lg ",children:["                ",(0,r.jsx)(u,{size:20})," Manage Admins"]})}),(0,r.jsx)(a(),{className:"",href:"",children:(0,r.jsxs)("div",{className:" flex justify-center items-center text-white text-center gap-3 bg-[#023e72ce] cursor-pointer my-4 p-3 rounded-lg ",onClick:y,children:["  ",(0,r.jsx)(d.fHX,{size:20})," log Out"]})})]}):(0,r.jsx)(a(),{className:"",href:"",children:(0,r.jsxs)("div",{className:" flex justify-center items-center text-white text-center gap-3 bg-[#023e72ce] cursor-pointer my-4 p-3 rounded-lg ",onClick:y,children:["  ",(0,r.jsx)(d.fHX,{size:20})," log Out"]})})]})}),(0,r.jsx)("main",{className:"ml-80 w-[80%]",children:t})]})};var y=m},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=n(2648).Z,s=n(1598).Z,a=n(7273).Z,o=s(n(7294)),l=i(n(3121)),u=n(2675),c=n(139),h=n(8730);n(7238);var d=i(n(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,i,s,a,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(e)}})}let y=o.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:s,qualityInt:l,className:u,imgStyle:c,blurStyle:h,isLazy:d,fill:f,placeholder:p,loading:g,srcString:y,config:v,unoptimized:w,loader:E,onLoadRef:b,onLoadingCompleteRef:_,setBlurComplete:T,setShowAltText:I,onLoad:C,onError:S}=e,k=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},k,n,{width:s,height:i,decoding:"async","data-nimg":f?"fill":"1",className:u,loading:g,style:r({},c,h),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,y,p,b,_,T,w))},[y,p,b,_,T,S,w,t]),onLoad:e=>{let t=e.currentTarget;m(t,y,p,b,_,T,w)},onError:e=>{I(!0),"blur"===p&&T(!0),S&&S(e)}})))}),v=o.forwardRef((e,t)=>{let n,i;var s,{src:m,sizes:v,unoptimized:w=!1,priority:E=!1,loading:b,className:_,quality:T,width:I,height:C,fill:S,style:k,onLoad:A,onLoadingComplete:N,placeholder:R="empty",blurDataURL:O,layout:D,objectFit:L,objectPosition:P,lazyBoundary:x,lazyRoot:M}=e,F=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let V=o.useContext(h.ImageConfigContext),U=o.useMemo(()=>{let e=f||V||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[V]),j=F,z=j.loader||d.default;delete j.loader;let B="__next_img_default"in z;if(B){if("custom"===U.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let $=z;z=e=>{let{config:t}=e,n=a(e,["config"]);return $(n)}}if(D){"fill"===D&&(S=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];q&&(k=r({},k,q));let H={responsive:"100vw",fill:"100vw"}[D];H&&!v&&(v=H)}let K="",G=g(I),W=g(C);if("object"==typeof(s=m)&&(p(s)||void 0!==s.src)){let Q=p(m)?m.default:m;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(!Q.height||!Q.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)));if(n=Q.blurWidth,i=Q.blurHeight,O=O||Q.blurDataURL,K=Q.src,!S){if(G||W){if(G&&!W){let X=G/Q.width;W=Math.round(Q.height*X)}else if(!G&&W){let J=W/Q.height;G=Math.round(Q.width*J)}}else G=Q.width,W=Q.height}}let Y=!E&&("lazy"===b||void 0===b);((m="string"==typeof m?m:K).startsWith("data:")||m.startsWith("blob:"))&&(w=!0,Y=!1),U.unoptimized&&(w=!0),B&&m.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(w=!0);let[Z,ee]=o.useState(!1),[et,en]=o.useState(!1),er=g(T),ei=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:P}:{},et?{}:{color:"transparent"},k),es="blur"===R&&O&&!Z?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:G,heightInt:W,blurWidth:n,blurHeight:i,blurDataURL:O}),'")')}:{},ea=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:s,sizes:a,loader:o}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let s=/(^|\s)(1?\d?\d)vw/g,a=[];for(let o;o=s.exec(n);o)a.push(parseInt(o[2]));if(a.length){let l=.01*Math.min(...a);return{widths:i.filter(e=>e>=r[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let u=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:u,kind:"x"}}(t,i,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,r)=>"".concat(o({config:t,src:n,quality:s,width:e})," ").concat("w"===u?e:r+1).concat(u)).join(", "),src:o({config:t,src:n,quality:s,width:l[c]})}}({config:U,src:m,unoptimized:w,width:G,quality:er,sizes:v,loader:z}),eo=m,el={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:j.crossOrigin},eu=o.useRef(A);o.useEffect(()=>{eu.current=A},[A]);let ec=o.useRef(N);o.useEffect(()=>{ec.current=N},[N]);let eh=r({isLazy:Y,imgAttributes:ea,heightInt:W,widthInt:G,qualityInt:er,className:_,imgStyle:ei,blurStyle:es,loading:b,config:U,fill:S,unoptimized:w,placeholder:R,loader:z,srcString:eo,onLoadRef:eu,onLoadingCompleteRef:ec,setBlurComplete:ee,setShowAltText:en},j);return o.default.createElement(o.default.Fragment,null,o.default.createElement(y,Object.assign({},eh,{ref:t})),E?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},el))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,i=n(7273).Z,s=r(n(7294)),a=n(1003),o=n(7795),l=n(4465),u=n(2692),c=n(8245),h=n(9246),d=n(227),f=n(3468);let p=new Set;function g(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,s=t+"%"+n+"%"+i;if(p.has(s))return;p.add(s)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:o.formatUrl(e)}let y=s.default.forwardRef(function(e,t){let n,r;let{href:o,as:p,children:y,prefetch:v,passHref:w,replace:E,shallow:b,scroll:_,locale:T,onClick:I,onMouseEnter:C,onTouchStart:S,legacyBehavior:k=!1}=e,A=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,k&&("string"==typeof n||"number"==typeof n)&&(n=s.default.createElement("a",null,n));let N=!1!==v,R=s.default.useContext(u.RouterContext),O=s.default.useContext(c.AppRouterContext),D=null!=R?R:O,L=!R,{href:P,as:x}=s.default.useMemo(()=>{if(!R){let e=m(o);return{href:e,as:p?m(p):e}}let[t,n]=a.resolveHref(R,o,!0);return{href:t,as:p?a.resolveHref(R,p):n||t}},[R,o,p]),M=s.default.useRef(P),F=s.default.useRef(x);k&&(r=s.default.Children.only(n));let V=k?r&&"object"==typeof r&&r.ref:t,[U,j,z]=h.useIntersection({rootMargin:"200px"}),B=s.default.useCallback(e=>{(F.current!==x||M.current!==P)&&(z(),F.current=x,M.current=P),U(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[x,V,P,z,U]);s.default.useEffect(()=>{D&&j&&N&&g(D,P,x,{locale:T})},[x,P,j,T,N,null==R?void 0:R.locale,D]);let $={ref:B,onClick(e){k||"function"!=typeof I||I(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,n,r,i,o,l,u,c,h){let{nodeName:d}=e.currentTarget,f="A"===d.toUpperCase();if(f&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:u,scroll:l}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!h})};c?s.default.startTransition(p):p()}(e,D,P,x,E,b,_,T,L,N)},onMouseEnter(e){k||"function"!=typeof C||C(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),D&&(N||!L)&&g(D,P,x,{locale:T,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof S||S(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),D&&(N||!L)&&g(D,P,x,{locale:T,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||w||"a"===r.type&&!("href"in r.props)){let q=void 0!==T?T:null==R?void 0:R.locale,H=(null==R?void 0:R.isLocaleDomain)&&d.getDomainLocale(x,q,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);$.href=H||f.addBasePath(l.addLocale(x,q,null==R?void 0:R.defaultLocale))}return k?s.default.cloneElement(r,$):s.default.createElement("a",Object.assign({},A,$),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:l}=e,u=l||!s,[c,h]=r.useState(!1),[d,f]=r.useState(null);r.useEffect(()=>{if(s){if(!u&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:i,elements:s}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:s,elements:i},o.push(n),a.set(n,t),t}(n);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),a.delete(r);let t=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&o.splice(t,1)}}}(d,e=>e&&h(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let r=i.requestIdleCallback(()=>h(!0));return()=>i.cancelIdleCallback(r)}},[d,u,n,t,c]);let p=r.useCallback(()=>{h(!1)},[]);return[f,c,p]};var r=n(7294),i=n(4686);let s="function"==typeof IntersectionObserver,a=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:s}=e,a=r||t,o=i||n,l=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},8484:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893);n(4744),n(1804);var i=n(4747),s=n(7294),a=n(8079),o=n(2619);function l(e){let{Component:t,pageProps:n}=e,[l,u]=(0,s.useState)(null),[c,h]=(0,s.useState)(""),[d,f]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(0,i.Aj)(a.I8,e=>{u(e),console.log(e)})},[]);let p=(null==l?void 0:l.photoURL)||"",g=(null==l?void 0:l.displayName)||"";return console.log(p),(0,r.jsx)(o.Z.Provider,{value:{name:c,setAdmin:f,Admin:d,userName:g,setName:h,userImage:p},children:(0,r.jsx)(t,{...n})})}},4744:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(r){n=a}}();var l=[],u=!1,c=-1;function h(){u&&r&&(u=!1,r.length?l=r.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=o(h);u=!0;for(var t=l.length;t;){for(r=l,l=[];++c<t;)r&&r[c].run();c=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},a=!0;try{t[e](s,s.exports,r),a=!1}finally{a&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)},3750:function(e,t,n){"use strict";n.d(t,{Dwu:function(){return u},FQA:function(){return c},G3K:function(){return a},RPM:function(){return l},TlO:function(){return i},k1O:function(){return s},w7k:function(){return o}});var r=n(8357);function i(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"}}]})(e)}function s(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}}]})(e)}function a(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"}}]})(e)}function l(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]})(e)}function u(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}},{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(e)}function c(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}}]})(e)}},9583:function(e,t,n){"use strict";n.d(t,{$nz:function(){return a},FeP:function(){return u},Xfy:function(){return l},Xm5:function(){return h},Y2X:function(){return o},a4m:function(){return s},fHX:function(){return c},j5f:function(){return i},m3W:function(){return d}});var r=n(8357);function i(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm257.3 160l48.1-48.1c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0L224 306.7l-48.1-48.1c-4.7-4.7-12.3-4.7-17 0l-28.3 28.3c-4.7 4.7-4.7 12.3 0 17l48.1 48.1-48.1 48.1c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l48.1-48.1 48.1 48.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17L269.3 352z"}}]})(e)}function s(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function a(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(e)}function l(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"}}]})(e)}function u(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"}}]})(e)}function c(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(e)}function h(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function d(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"}}]})(e)}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function l(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var n,i=e.attr,s=e.size,l=e.title,u=o(e,["attr","size","title"]),c=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==s?r.createElement(s.Consumer,null,function(e){return t(e)}):t(i)}},5788:function(e,t,n){"use strict";n.d(t,{Dm6:function(){return i},QA4:function(){return s}});var r=n(8357);function i(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z",fill:"currentColor"}}]})(e)}function s(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4.76447 3.12199C5.63151 3.04859 6.56082 3 7.5 3C8.43918 3 9.36849 3.04859 10.2355 3.12199C11.2796 3.21037 11.9553 3.27008 12.472 3.39203C12.9425 3.50304 13.2048 3.64976 13.4306 3.88086C13.4553 3.90618 13.4902 3.94414 13.5133 3.97092C13.7126 4.20149 13.8435 4.4887 13.918 5.03283C13.9978 5.6156 14 6.37644 14 7.52493C14 8.66026 13.9978 9.41019 13.9181 9.98538C13.8439 10.5206 13.7137 10.8061 13.5125 11.0387C13.4896 11.0651 13.4541 11.1038 13.4296 11.1287C13.2009 11.3625 12.9406 11.5076 12.4818 11.6164C11.9752 11.7365 11.3143 11.7942 10.2878 11.8797C9.41948 11.9521 8.47566 12 7.5 12C6.52434 12 5.58052 11.9521 4.7122 11.8797C3.68572 11.7942 3.02477 11.7365 2.51816 11.6164C2.05936 11.5076 1.7991 11.3625 1.57037 11.1287C1.54593 11.1038 1.51035 11.0651 1.48748 11.0387C1.28628 10.8061 1.15612 10.5206 1.08193 9.98538C1.00221 9.41019 1 8.66026 1 7.52493C1 6.37644 1.00216 5.6156 1.082 5.03283C1.15654 4.4887 1.28744 4.20149 1.48666 3.97092C1.5098 3.94414 1.54468 3.90618 1.56942 3.88086C1.7952 3.64976 2.05752 3.50304 2.52796 3.39203C3.04473 3.27008 3.7204 3.21037 4.76447 3.12199ZM0 7.52493C0 5.28296 0 4.16198 0.729985 3.31713C0.766457 3.27491 0.815139 3.22194 0.854123 3.18204C1.63439 2.38339 2.64963 2.29744 4.68012 2.12555C5.56923 2.05028 6.52724 2 7.5 2C8.47276 2 9.43077 2.05028 10.3199 2.12555C12.3504 2.29744 13.3656 2.38339 14.1459 3.18204C14.1849 3.22194 14.2335 3.27491 14.27 3.31713C15 4.16198 15 5.28296 15 7.52493C15 9.74012 15 10.8477 14.2688 11.6929C14.2326 11.7348 14.1832 11.7885 14.1444 11.8281C13.3629 12.6269 12.3655 12.71 10.3709 12.8763C9.47971 12.9505 8.50782 13 7.5 13C6.49218 13 5.52028 12.9505 4.62915 12.8763C2.63446 12.71 1.63712 12.6269 0.855558 11.8281C0.816844 11.7885 0.767442 11.7348 0.731221 11.6929C0 10.8477 0 9.74012 0 7.52493ZM5.25 5.38264C5.25 5.20225 5.43522 5.08124 5.60041 5.15369L10.428 7.27105C10.6274 7.35853 10.6274 7.64147 10.428 7.72895L5.60041 9.84631C5.43522 9.91876 5.25 9.79775 5.25 9.61736V5.38264Z",fill:"currentColor"}}]})(e)}},5816:function(e,t,n){"use strict";let r,i;n.d(t,{Jn:function(){return P},qX:function(){return O},Xd:function(){return R},Mq:function(){return M},ZF:function(){return x},KN:function(){return F}});var s,a=n(8463),o=n(3333),l=n(4444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),m(c.get(this))}:function(...e){return m(t.apply(y(this),e))}:function(e,...n){let r=t.call(y(this),e,...n);return d.set(r,e.sort?e.sort():[e]),m(r)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),u(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return n!==e&&(f.set(e,n),p.set(n,e)),n}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],E=new Map;function b(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(E.get(t))return E.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return E.set(t,s),s}g={...s=g,get:(e,t,n)=>b(e,t)||s.get(e,t,n),has:(e,t)=>!!b(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let T="@firebase/app",I="0.9.13",C=new o.Yd("@firebase/app"),S="[DEFAULT]",k={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,N=new Map;function R(e){let t=e.name;if(N.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(N.set(t,e),A.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function O(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let D=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P="9.23.0";function x(e,t={}){let n=e;if("object"!=typeof t){let r=t;t={name:r}}let i=Object.assign({name:S,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw D.create("bad-app-name",{appName:String(s)});if(n||(n=(0,l.aH)()),!n)throw D.create("no-options");let o=A.get(s);if(o){if((0,l.vZ)(n,o.options)&&(0,l.vZ)(i,o.config))return o;throw D.create("duplicate-app",{appName:s})}let u=new a.H0(s);for(let c of N.values())u.addComponent(c);let h=new L(n,i,u);return A.set(s,h),h}function M(e=S){let t=A.get(e);if(!t&&e===S&&(0,l.aH)())return x();if(!t)throw D.create("no-app",{appName:e});return t}function F(e,t,n){var r;let i=null!==(r=k[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),C.warn(l.join(" "));return}R(new a.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let V="firebase-heartbeat-store",U=null;function j(){return U||(U=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=m(a);return r&&a.addEventListener("upgradeneeded",e=>{r(m(a.result),e.oldVersion,e.newVersion,m(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(V)}}).catch(e=>{throw D.create("idb-open",{originalErrorMessage:e.message})})),U}async function z(e){try{let t=await j(),n=await t.transaction(V).objectStore(V).get($(e));return n}catch(i){if(i instanceof l.ZR)C.warn(i.message);else{let r=D.create("idb-get",{originalErrorMessage:null==i?void 0:i.message});C.warn(r.message)}}}async function B(e,t){try{let n=await j(),r=n.transaction(V,"readwrite"),i=r.objectStore(V);await i.put(t,$(e)),await r.done}catch(a){if(a instanceof l.ZR)C.warn(a.message);else{let s=D.create("idb-set",{originalErrorMessage:null==a?void 0:a.message});C.warn(s.message)}}}function $(e){return`${e.name}!${e.options.appId}`}class q{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new K(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=H();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=H(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let s=n.find(e=>e.agent===i.agent);if(s){if(s.dates.push(i.date),G(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),G(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function H(){let e=new Date;return e.toISOString().substring(0,10)}class K{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await z(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function G(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}R(new a.wA("platform-logger",e=>new _(e),"PRIVATE")),R(new a.wA("heartbeat",e=>new q(e),"PRIVATE")),F(T,I,""),F(T,I,"esm2017"),F("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new r.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(s){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch(o){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[i,s]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(i);n===a&&s.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return c},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},4747:function(e,t,n){"use strict";n.d(t,{hJ:function(){return eB},Xb:function(){return e0},v0:function(){return t6},Aj:function(){return e2},e5:function(){return e1},rh:function(){return tT},w7:function(){return e4}});var r,i=n(4444),s=n(5816);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var o=n(3333),l=n(8463);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new i.LL("auth","Firebase",u()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o.in.ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,n){let r=Object.assign(Object.assign({},u()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function m(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function y(e,t,...n){if(!e)throw m(t,...n)}function v(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||v("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===E()||"https:"===E()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){e.emulator||v("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},C=new b(3e4,6e4);function S(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function k(e,t,n,r,s={}){return A(e,s,async()=>{let s={},a={};r&&("GET"===t?a=r:s={body:JSON.stringify(r)});let o=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),T.fetch()(R(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function A(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},I),t);try{let s=new O(e),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();let o=await a.json();if("needConfirmation"in o)throw D(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{let l=a.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===u)throw D(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===u)throw D(e,"email-already-in-use",o);if("USER_DISABLED"===u)throw D(e,"user-disabled",o);let h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw g(e,h,c);f(e,h)}}catch(d){if(d instanceof i.ZR)throw d;f(e,"network-request-failed",{message:String(d)})}}async function N(e,t,n,r,i={}){let s=await k(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function R(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?_(e.config,i):`${e.config.apiScheme}://${i}`}class O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),C.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L(e,t){return k(e,"POST","/v1/accounts:delete",t)}async function P(e,t){return k(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(n){}}async function M(e,t=!1){let n=(0,i.m9)(e),r=await n.getIdToken(t),s=V(r);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:x(F(s.auth_time)),issuedAtTime:x(F(s.iat)),expirationTime:x(F(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function F(e){return 1e3*Number(e)}function V(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{let s=(0,i.tV)(n);if(!s)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(s)}catch(a){return d("Caught error parsing JWT payload as JSON",null==a?void 0:a.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}{this.errorBackoff=3e4;let r=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=r-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=x(this.lastLoginAt),this.creationTime=x(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e){var t;let n=e.auth,r=await e.getIdToken(),i=await U(e,P(n,{idToken:r}));y(null==i?void 0:i.users.length,n,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],l=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new z(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}async function $(e){let t=(0,i.m9)(e);await B(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){let n=await A(e,{},async()=>{let n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=R(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=V(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await q(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new H;return n&&(y("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new H,this.toJSON())}_performRefresh(){return v("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class G{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await U(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return M(this,e)}reload(){return $(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new G(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await B(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await U(this,L(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,g=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:E,isAnonymous:b,providerData:_,stsTokenManager:T}=t;y(w&&T,e,"internal-error");let I=H.fromJSON(this.name,T);y("string"==typeof w,e,"internal-error"),K(c,e.name),K(h,e.name),y("boolean"==typeof E,e,"internal-error"),y("boolean"==typeof b,e,"internal-error"),K(d,e.name),K(f,e.name),K(p,e.name),K(g,e.name),K(m,e.name),K(v,e.name);let C=new G({uid:w,auth:e,email:h,emailVerified:E,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:v});return _&&Array.isArray(_)&&(C.providerData=_.map(e=>Object.assign({},e))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){let r=new H;r.updateFromServerResponse(t);let i=new G({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await B(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W=new Map;function Q(e){e instanceof Function||v("Expected a class definition");let t=W.get(e);return t?(t instanceof e||v("Instance stored in cache mismatched with class"),t):(t=new e,W.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}X.type="NONE";class Y{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=J(this.userKey,r.apiKey,i),this.fullPersistenceKey=J("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?G._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Y(Q(X),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||Q(X),s=J(n,e.config.apiKey,e.name),a=null;for(let o of t)try{let l=await o._get(s);if(l){let u=G._fromJSON(e,l);o!==i&&(a=u),i=o;break}}catch(c){}let h=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&h.length&&(i=h[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(t){}}))),new Y(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(er(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(es(t))return"Blackberry";if(ea(t))return"Webos";if(et(t))return"Safari";if((t.includes("chrome/")||en(t))&&!t.includes("edge/"))return"Chrome";if(ei(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function ee(e=(0,i.z$)()){return/firefox\//i.test(e)}function et(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function en(e=(0,i.z$)()){return/crios\//i.test(e)}function er(e=(0,i.z$)()){return/iemobile/i.test(e)}function ei(e=(0,i.z$)()){return/android/i.test(e)}function es(e=(0,i.z$)()){return/blackberry/i.test(e)}function ea(e=(0,i.z$)()){return/webos/i.test(e)}function eo(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function el(e=(0,i.z$)()){return eo(e)||ei(e)||ea(e)||es(e)||/windows phone/i.test(e)||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t=[]){let n;switch(e){case"Browser":n=Z((0,i.z$)());break;case"Worker":n=`${Z((0,i.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`}async function ec(e,t){return k(e,"GET","/v2/recaptchaConfig",S(e,t))}function eh(e){return void 0!==e&&void 0!==e.enterprise}class ed{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function ef(e){return new Promise((t,n)=>{var r,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)})}function ep(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eg{constructor(e){this.type="recaptcha-enterprise",this.auth=ew(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{ec(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0===r.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let i=new ed(r);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;eh(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&eh(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}ef("https://www.google.com/recaptcha/enterprise.js?render="+n).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function em(e,t,n,r=!1){let i;let s=new eg(e);try{i=await s.verify(n)}catch(a){i=await s.verify(n,!0)}let o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let i=e(t);n(i)}catch(s){r(s)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(s){for(let r of(t.reverse(),t))try{r()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==s?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eE(this),this.idTokenSubscription=new eE(this),this.beforeStateQueue=new ey(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Q(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===a)&&(null==o?void 0:o.user)&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await B(e)}catch(t){if((null==t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Q(e))})}async initializeRecaptchaConfig(){let e=await ec(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ed(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){let n=new eg(this);n.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Q(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[Q(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(y(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){h.logLevel<=o.in.WARN&&h.warn(`Auth (${s.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ew(e){return(0,i.m9)(e)}class eE{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eb(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function e_(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}async function eI(e,t){return k(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",S(e,t))}async function ek(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA extends eT{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new eA(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new eA(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":let n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return eC(e,n).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let r=await em(e,n,"signInWithPassword");return eC(e,r)}});{let r=await em(e,n,"signInWithPassword");return eC(e,r)}case"emailLink":return eS(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eI(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ek(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",S(e,t))}class eR extends eT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eR(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new eR(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eN(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,eN(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eN(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(e,t){return k(e,"POST","/v1/accounts:sendVerificationCode",S(e,t))}async function eD(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,t))}async function eL(e,t){let n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,t));if(n.temporaryProof)throw D(e,"account-exists-with-different-credential",n);return n}let eP={USER_NOT_FOUND:"user-not-found"};async function ex(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,n),eP)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM extends eT{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eM({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eM({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eD(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eL(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ex(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new eM({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class eF{constructor(e){var t,n,r,s,a,o;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(n=l.oobCode)&&void 0!==n?n:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);y(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,n=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,r=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=r?(0,i.zd)((0,i.pd)(r)).link:null;return s||r||n||t||e}(e);try{return new eF(t)}catch(n){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(){this.providerId=eV.PROVIDER_ID}static credential(e,t){return eA._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=eF.parseLink(t);return y(n,"argument-error"),eA._fromEmailAndCode(e,n.code,n.tenantId)}}eV.PROVIDER_ID="password",eV.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eV.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej extends eU{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez extends ej{constructor(){super("facebook.com")}static credential(e){return eR._fromParams({providerId:ez.PROVIDER_ID,signInMethod:ez.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ez.credentialFromTaggedObject(e)}static credentialFromError(e){return ez.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ez.credential(e.oauthAccessToken)}catch(t){return null}}}ez.FACEBOOK_SIGN_IN_METHOD="facebook.com",ez.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB extends ej{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eR._fromParams({providerId:eB.PROVIDER_ID,signInMethod:eB.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eB.credentialFromTaggedObject(e)}static credentialFromError(e){return eB.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eB.credential(t,n)}catch(r){return null}}}eB.GOOGLE_SIGN_IN_METHOD="google.com",eB.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e$ extends ej{constructor(){super("github.com")}static credential(e){return eR._fromParams({providerId:e$.PROVIDER_ID,signInMethod:e$.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e$.credentialFromTaggedObject(e)}static credentialFromError(e){return e$.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e$.credential(e.oauthAccessToken)}catch(t){return null}}}e$.GITHUB_SIGN_IN_METHOD="github.com",e$.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq extends ej{constructor(){super("twitter.com")}static credential(e,t){return eR._fromParams({providerId:eq.PROVIDER_ID,signInMethod:eq.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eq.credentialFromTaggedObject(e)}static credentialFromError(e){return eq.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eq.credential(t,n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eH(e,t){return N(e,"POST","/v1/accounts:signUp",S(e,t))}eq.TWITTER_SIGN_IN_METHOD="twitter.com",eq.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await G._fromIdTokenResponse(e,n,r),s=eG(n),a=new eK({user:i,providerId:s,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=eG(n);return new eK({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function eG(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,eW.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new eW(e,t,n,r)}}function eQ(e,t,n,r){let i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw eW._fromErrorAndOperation(e,n,t,r);throw n})}async function eX(e,t,n=!1){let r=await U(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return eK._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eJ(e,t,n=!1){let{auth:r}=e,i="reauthenticate";try{let s=await U(e,eQ(r,i,t,e),n);y(s.idToken,r,"internal-error");let a=V(s.idToken);y(a,r,"internal-error");let{sub:o}=a;return y(e.uid===o,r,"user-mismatch"),eK._forOperation(e,i,s)}catch(l){throw(null==l?void 0:l.code)==="auth/user-not-found"&&f(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eY(e,t,n=!1){let r="signIn",i=await eQ(e,r,t),s=await eK._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function eZ(e,t){return eY(ew(e),t)}async function e0(e,t,n){var r;let i;let s=ew(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};if(null===(r=s._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){let o=await em(s,a,"signUpPassword");i=eH(s,o)}else i=eH(s,a).catch(async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let t=await em(s,a,"signUpPassword");return eH(s,t)}});let l=await i.catch(e=>Promise.reject(e)),u=await eK._fromIdTokenResponse(s,"signIn",l);return await s._updateCurrentUser(u.user),u}function e1(e,t,n){return eZ((0,i.m9)(e),eV.credential(t,n))}function e2(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}function e4(e){return(0,i.m9)(e).signOut()}new WeakMap;let e5="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e5,"1"),this.storage.removeItem(e5),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e3 extends e9{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return et(e)||eo(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let s=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},a=this.storage.getItem(n);(0,i.w1)()&&10===document.documentMode&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e3.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6 extends e9{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e6.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new e7(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(i).map(async t=>t(e.origin,r)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(n){return{fulfilled:!1,reason:n}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}e7.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=e8("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},n);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(e.data.response);break;default:clearTimeout(u),clearTimeout(r),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return void 0!==tt().WorkerGlobalScope&&"function"==typeof tt().importScripts}async function tr(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti="firebaseLocalStorageDb",ts="firebaseLocalStorage",ta="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tl(e,t){return e.transaction([ts],t?"readwrite":"readonly").objectStore(ts)}function tu(){let e=indexedDB.open(ti,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(ts,{keyPath:ta})}catch(r){n(r)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(ts)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(ti);return new to(e).toPromise()}(),t(await tu()))})})}async function tc(e,t,n){let r=tl(e,!0).put({[ta]:t,value:n});return new to(r).toPromise()}async function th(e,t){let n=tl(e,!1).get(t),r=await new to(n).toPromise();return void 0===r?null:r.value}function td(e,t){let n=tl(e,!0).delete(t);return new to(n).toPromise()}class tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tu()),this.db}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(r){if(t++>3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=e7._getInstance(tn()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tr(),!this.activeServiceWorker)return;this.sender=new te(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tu();return await tc(e,e5,"1"),await td(e,e5),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>th(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>td(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=tl(e,!1).getAll();return new to(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function tp(e,t,n){var r,i,s;let a=await n.verify();try{let o;if(y("string"==typeof a,e,"argument-error"),y("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let l=o.session;if("phoneNumber"in o){y("enroll"===l.type,e,"internal-error");let u=await (i={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},k(e,"POST","/v2/accounts/mfaEnrollment:start",S(e,i)));return u.phoneSessionInfo.sessionInfo}{y("signin"===l.type,e,"internal-error");let c=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;y(c,e,"missing-multi-factor-info");let h=await (s={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:a}},k(e,"POST","/v2/accounts/mfaSignIn:start",S(e,s)));return h.phoneResponseInfo.sessionInfo}}{let{sessionInfo:d}=await eO(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return d}}finally{n._reset()}}tf.type="LOCAL",ep("rcb"),new b(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.providerId=tg.PROVIDER_ID,this.auth=ew(e)}verifyPhoneNumber(e,t){return tp(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eM._fromVerification(e,t)}static credentialFromResult(e){return tg.credentialFromTaggedObject(e)}static credentialFromError(e){return tg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?eM._fromTokenResponse(t,n):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(e,t){return t?Q(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}tg.PROVIDER_ID="phone",tg.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends eT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eN(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eN(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eN(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tv(e){return eY(e.auth,new ty(e),e.bypassAuthState)}function tw(e){let{auth:t,user:n}=e;return y(n,t,"internal-error"),eJ(n,new ty(e),e.bypassAuthState)}async function tE(e){let{auth:t,user:n}=e;return y(n,t,"internal-error"),eX(n,new ty(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tv;case"linkViaPopup":case"linkViaRedirect":return tE;case"reauthViaPopup":case"reauthViaRedirect":return tw;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_=new b(2e3,1e4);async function tT(e,t,n){let r=ew(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&f(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,eU);let i=tm(r,n),s=new tI(r,"signInViaPopup",t,i);return s.executeNotNull()}class tI extends tb{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tI.currentPopupAction&&tI.currentPopupAction.cancel(),tI.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||v("Popup operations only handle one event");let e=e8();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tI.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,t_.get())};e()}}tI.currentPopupAction=null;let tC=new Map;class tS extends tb{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=tC.get(this.auth._key());if(!e){try{let t=await tk(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}tC.set(this.auth._key(),e)}return this.bypassAuthState||tC.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tk(e,t){let n=J("pendingRedirect",t.config.apiKey,t.name),r=Q(e._redirectPersistence);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function tA(e,t){tC.set(e._key(),t)}async function tN(e,t,n=!1){let r=ew(e),i=tm(r,t),s=new tS(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class tR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tD(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tD(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tO(e))}saveEventToCache(e){this.cachedEventUids.add(tO(e)),this.lastProcessedEventTime=Date.now()}}function tO(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tD({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(e,t={}){return k(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tx=/^https?/;async function tM(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tL(e);for(let n of t)try{if(function(e){let t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tx.test(n))return!1;if(tP.test(e))return r===e;let s=e.replace(/\./g,"\\."),a=RegExp("^(.+\\."+s+"|"+s+")$","i");return a.test(r)}(n))return}catch(r){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tF=new b(3e4,6e4);function tV(){let e=tt().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}let tU=null,tj=new b(5e3,15e3),tz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function t$(e){let t=await (tU=tU||new Promise((t,n)=>{var r,i,s;function a(){tV(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tV(),n(p(e,"network-request-failed"))},timeout:tF.get()})}if(null===(i=null===(r=tt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=tt().gapi)||void 0===s?void 0:s.load)a();else{let o=ep("iframefcb");return tt()[o]=()=>{gapi.load?a():n(p(e,"network-request-failed"))},ef(`https://apis.google.com/js/api.js?onload=${o}`).catch(e=>n(e))}}).catch(e=>{throw tU=null,e})),n=tt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;y(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?_(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.Jn},a=tB.get(e.config.apiHost);a&&(r.eid=a);let o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tz,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=tt().setTimeout(()=>{r(i)},tj.get());function a(){tt().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tq={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tH{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let tK=encodeURIComponent("fac");async function tG(e,t,n,r,a,o){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.Jn,eventId:a};if(t instanceof eU)for(let[u,c]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[u]=c;if(t instanceof ej){let h=t.getScopes().filter(e=>""!==e);h.length>0&&(l.scopes=h.join(","))}e.tenantId&&(l.tid=e.tenantId);let d=l;for(let f of Object.keys(d))void 0===d[f]&&delete d[f];let p=await e._getAppCheckToken(),g=p?`#${tK}=${encodeURIComponent(p)}`:"";return`${function({config:e}){return e.emulator?_(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(d).slice(1)}${g}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tW="webStorageSupport",tQ=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e6,this._completeRedirectFn=tN,this._overrideRedirectResult=tA}async _openPopup(e,t,n,r){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||v("_initialize() not called before _openPopup()");let a=await tG(e,t,n,w(),r);return function(e,t,n,r=500,s=600){let a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},tq),{width:r.toString(),height:s.toString(),top:a,left:o}),c=(0,i.z$)().toLowerCase();n&&(l=en(c)?"_blank":n),ee(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,i.z$)()){var t;return eo(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new tH(null);let d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new tH(d)}(e,a,e8())}async _openRedirect(e,t,n,r){await this._originValidation(e);let i=await tG(e,t,n,w(),r);return tt().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(r||v("If manager is not set, promise should be"),r)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await t$(e),n=new tR(e);return t.register("authEvent",t=>{y(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(tW,{type:tW},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[tW];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return el()||et()||eo()}};class tX{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class tJ extends tX{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tJ(e)}_finalizeEnroll(e,t,n){return k(e,"POST","/v2/accounts/mfaEnrollment:finalize",S(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return k(e,"POST","/v2/accounts/mfaSignIn:finalize",S(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class tY extends tX{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new tY(t,void 0,e)}static _fromEnrollmentId(e,t){return new tY(t,e)}async _finalizeEnroll(e,t,n){return y(void 0!==this.secret,e,"argument-error"),k(e,"POST","/v2/accounts/mfaEnrollment:finalize",S(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let n={verificationCode:this.otp};return k(e,"POST","/v2/accounts/mfaSignIn:finalize",S(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}class tZ{constructor(e,t,n,r,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new tZ(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(t0(e)||t0(t))&&(r=!0),r&&(t0(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),t0(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function t0(e){return void 0===e||(null==e?void 0:e.length)===0}var t1="@firebase/auth",t2="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let t5=(0,i.Pz)("authIdTokenMaxAge")||300,t9=null,t3=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>t5)return;let i=null==n?void 0:n.token;t9!==i&&(t9=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t6(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=(0,s.qX)(e,"auth");if(n.isInitialized()){let r=n.getImmediate(),a=n.getOptions();if((0,i.vZ)(a,null!=t?t:{}))return r;f(r,"already-initialized")}let o=n.initialize({options:t});return o}(e,{popupRedirectResolver:tQ,persistence:[tf,e3,e6]}),r=(0,i.Pz)("authTokenSyncURL");if(r){var a,o;let l=t3(r);a=()=>l(n.currentUser),(0,i.m9)(n).beforeAuthStateChanged(l,a),o=e=>l(e),(0,i.m9)(n).onIdTokenChanged(o,void 0,void 0)}let u=(0,i.q4)("auth");return u&&function(e,t,n){let r=ew(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=!!(null==n?void 0:n.disableWarnings),s=eb(t),{host:a,port:o}=function(e){let t=eb(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:e_(r.substr(s.length+1))}}{let[a,o]=r.split(":");return{host:a,port:e_(o)}}}(t),l=null===o?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${u}`),n}r="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;y(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});let l={apiKey:a,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(r)},u=new ev(n,i,s,l);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Q);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal");r.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{let t=ew(e.getProvider("auth").getImmediate());return new t4(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(t1,t2,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(r)),(0,s.KN)(t1,t2,"esm2017")},6100:function(e,t,n){"use strict";n.d(t,{ET:function(){return lm},hJ:function(){return oK},oe:function(){return lg},JU:function(){return oG},PL:function(){return lp},ad:function(){return oJ},cf:function(){return ly}});var r,i,s,a,o,l,u,c=n(5816),h=n(8463),d=n(3333),f=n(4444),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g={},m=m||{},y=p||self;function v(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function w(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function E(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return(_=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E:b).apply(null,arguments)}function T(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}C.prototype.s=!1,C.prototype.sa=function(){this.s||(this.s=!0,this.N())},C.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function k(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function A(e,t){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(v(r)){let i=e.length||0,s=r.length||0;e.length=i+s;for(let a=0;a<s;a++)e[i+a]=r[a]}else e.push(r)}}function N(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",()=>{},t),y.removeEventListener("test",()=>{},t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}function D(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function L(e){return -1!=D().indexOf(e)}function P(e){return P[" "](e),e}P[" "]=function(){};var x=L("Opera"),M=L("Trident")||L("MSIE"),F=L("Edge"),V=F||M,U=L("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),j=-1!=D().toLowerCase().indexOf("webkit")&&!L("Edge");function z(){var e=y.document;return e?e.documentMode:void 0}e:{var B,$="",q=(B=D(),U?/rv:([^\);]+)(\)|;)/.exec(B):F?/Edge\/([\d\.]+)/.exec(B):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(B):j?/WebKit\/(\S+)/.exec(B):x?/(?:Version)[ \/]?(\S+)/.exec(B):void 0);if(q&&($=q?q[1]:""),M){var H=z();if(null!=H&&H>parseFloat($)){i=String(H);break e}}i=$}var K=y.document&&M&&(z()||parseInt(i,10))||void 0;function G(e,t){if(N.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(U){e:{try{P(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:W[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}I(G,N);var W={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Y(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Z(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function ee(e){let t={};for(let n in e)t[n]=e[n];return t}let et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function en(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(let s=0;s<et.length;s++)n=et[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function er(e){this.src=e,this.g={},this.h=0}function ei(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Y(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function es(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==r)return i}return -1}er.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=es(e,t,r,i);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new J(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var ea="closure_lm_"+(1e6*Math.random()|0),eo={};function el(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=w(i)?!!i.capture:!!i,o=ed(e);if(o||(e[ea]=o=new er(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return eh.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ec(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eu(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])ei(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ec(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ed(t))?(ei(n,e),0==n.h&&(n.src=null,t[ea]=null)):Y(e)}}}function ec(e){return e in eo?eo[e]:eo[e]="on"+e}function eh(e,t){if(e.fa)e=!0;else{t=new G(t,this);var n=e.listener,r=e.la||e.src;e.ia&&eu(e),e=n.call(r,t)}return e}function ed(e){return(e=e[ea])instanceof er?e:null}var ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function ep(e){return"function"==typeof e?e:(e[ef]||(e[ef]=function(t){return e.handleEvent(t)}),e[ef])}function eg(){C.call(this),this.i=new er(this),this.S=this,this.J=null}function em(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new N(t,e);else if(t instanceof N)t.target=t.target||e;else{var i=t;en(t=new N(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ey(a,r,!0,t)&&i}if(i=ey(a=t.g=e,r,!0,t)&&i,i=ey(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ey(a=t.g=n[s],r,!1,t)&&i}function ey(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&ei(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}I(eg,C),eg.prototype[Q]=!0,eg.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=w(i)?!!i.capture:!!i,r=ep(r),t&&t[Q])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=es(a=t.g[n],r,i,s))&&(Y(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ed(t))&&(n=t.g[n.toString()],t=-1,n&&(t=es(n,r,i,s)),(r=-1<t?n[t]:null)&&eu(r))}(this,e,t,n,r)},eg.prototype.N=function(){if(eg.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Y(n[r]);delete t.g[e],t.h--}}this.J=null},eg.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eg.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ev=y.JSON.stringify,ew=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eE,e=>e.reset());class eE{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let eb,e_=!1,eT=new class{constructor(){this.h=this.g=null}add(e,t){let n=ew.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},eI=()=>{let e=y.Promise.resolve(void 0);eb=()=>{e.then(eC)}};var eC=()=>{let e;for(;e=null,(n=eT).g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),r=e;){try{r.h.call(r.g)}catch(t){!function(e){y.setTimeout(()=>{throw e},0)}(t)}var n,r,i=ew;i.j(r),100>i.h&&(i.h++,r.next=i.g,i.g=r)}e_=!1};function eS(e,t){eg.call(this),this.h=e||1,this.g=t||y,this.j=_(this.qb,this),this.l=Date.now()}function ek(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function eA(e,t,n){if("function"==typeof e)n&&(e=_(e,n));else if(e&&"function"==typeof e.handleEvent)e=_(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}I(eS,eg),(u=eS.prototype).ga=!1,u.T=null,u.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),em(this,"tick"),this.ga&&(ek(this),this.start()))}},u.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},u.N=function(){eS.$.N.call(this),ek(this),delete this.g};class eN extends C{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eA(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eR(e){C.call(this),this.h=e,this.g={}}I(eR,C);var eO=[];function eD(e,t,n,r){Array.isArray(n)||(n&&(eO[0]=n.toString()),n=eO);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=ep(r),t&&t[Q]?t.P(n,r,w(i)?!!i.capture:!!i,s):el(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=ep(r),t&&t[Q]?t.O(n,r,w(i)?!!i.capture:!!i,s):el(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eL(e){Z(e.g,function(e,t){this.g.hasOwnProperty(t)&&eu(e)},e),e.g={}}function eP(){this.g=!0}function ex(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ev(n)}catch(o){return t}}(e,n)+(r?" "+r:"")})}eR.prototype.N=function(){eR.$.N.call(this),eL(this)},eR.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eP.prototype.Ea=function(){this.g=!1},eP.prototype.info=function(){};var eM={},eF=null;function eV(){return eF=eF||new eg}function eU(e){N.call(this,eM.Ta,e)}function ej(e){let t=eV();em(t,new eU(t))}function ez(e,t){N.call(this,eM.STAT_EVENT,e),this.stat=t}function eB(e){let t=eV();em(t,new ez(t,e))}function e$(e,t){N.call(this,eM.Ua,e),this.size=t}function eq(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}eM.Ta="serverreachability",I(eU,N),eM.STAT_EVENT="statevent",I(ez,N),eM.Ua="timingevent",I(e$,N);var eH={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eK={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eG(){}function eW(e){return e.h||(e.h=e.i())}function eQ(){}eG.prototype.h=null;var eX={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eJ(){N.call(this,"d")}function eY(){N.call(this,"c")}function eZ(){}function e0(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new eR(this),this.P=e2,e=V?125:void 0,this.V=new eS(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e1}function e1(){this.i=null,this.g="",this.h=!1}I(eJ,N),I(eY,N),I(eZ,eG),eZ.prototype.g=function(){return new XMLHttpRequest},eZ.prototype.i=function(){return{}},a=new eZ;var e2=45e3,e4={},e5={};function e9(e,t,n){e.L=1,e.v=tf(tl(t)),e.s=n,e.S=!0,e3(e,null)}function e3(e,t){e.G=Date.now(),e8(e),e.A=tl(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),tS(n.i,"t",r),e.C=0,n=e.l.J,e.h=new e1,e.g=ng(e.l,n?t:null,!e.s),0<e.O&&(e.M=new eN(_(e.Pa,e,e.g),e.O)),eD(e.U,e.g,"readystatechange",e.nb),t=e.I?ee(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ej(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.u,e.A,e.m,e.W,e.s)}function e6(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function e7(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if((i=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?e5:isNaN(n=Number(t.substring(n,r)))?e4:(r+=1)+n>t.length?e5:(t=t.slice(r,r+n),e.C=r+n,t)}(e,n))==e5){4==t&&(e.o=4,eB(14),r=!1),ex(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e4){e.o=4,eB(15),ex(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ex(e.j,e.m,i,null),ti(e,i);e6(e)&&i!=e5&&i!=e4&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,eB(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),no(t),t.M=!0,eB(11))):(ex(e.j,e.m,n,"[Invalid Chunked Response]"),tr(e),tn(e))}function e8(e){e.Y=Date.now()+e.P,te(e,e.P)}function te(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eq(_(e.lb,e),t)}function tt(e){e.B&&(y.clearTimeout(e.B),e.B=null)}function tn(e){0==e.l.H||e.J||nc(e.l,e)}function tr(e){tt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,ek(e.V),eL(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ti(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||tL(n.i,e))){if(!e.K&&tL(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(i){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)nu(n),t8(n);else break e}na(n),eB(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=eq(_(n.ib,n),6e3));if(1>=tD(n.i)&&n.oa){try{n.oa()}catch(a){}n.oa=void 0}}else nd(n,11)}else if((e.K||n.g==e)&&nu(n),!O(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let o=s[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let l=o[3];null!=l&&(n.ra=l,n.l.info("VER="+n.ra));let u=o[4];null!=u&&(n.Ga=u,n.l.info("SVER="+n.Ga));let c=o[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let h=e.g;if(h){let d=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var f=r.i;f.g||-1==d.indexOf("spdy")&&-1==d.indexOf("quic")&&-1==d.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(tP(f,f.h),f.h=null))}if(r.F){let p=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.Da=p,td(r.I,r.F,p))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(r=n).wa=np(r,r.J?r.pa:null,r.Y),e.K){tx(r.i,e);var g=r.L;g&&e.setTimeout(g),e.B&&(tt(e),e8(e)),r.g=e}else ns(r);0<n.j.length&&nt(n)}else"stop"!=o[0]&&"close"!=o[0]||nd(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nd(n,7):t7(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}ej(4)}catch(m){}}function ts(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(v(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(v(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(u=e0.prototype).setTimeout=function(e){this.P=e},u.nb=function(e){e=e.target;let t=this.M;t&&3==t2(e)?t.l():this.Pa(e)},u.Pa=function(e){try{if(e==this.g)e:{let t=t2(this.g);var n=this.g.Ia();let r=this.g.da();if(!(3>t)&&(3!=t||V||this.g&&(this.h.h||this.g.ja()||t4(this.g)))){this.J||4!=t||7==n||(8==n||0>=r?ej(3):ej(2)),tt(this);var i=this.g.da();this.ca=i;t:if(e6(this)){var s=t4(this.g);e="";var a=s.length,o=4==t2(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){tr(this),tn(this);var l="";break t}this.h.i=new y.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:o&&n==a-1});s.splice(0,a),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.ja();if(this.i=200==i,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,t,i),this.i){if(this.aa&&!this.K){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(u)){var h=u;break t}}h=null}if(i=h)ex(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ti(this,i);else{this.i=!1,this.o=3,eB(12),tr(this),tn(this);break e}}this.S?(e7(this,t,l),V&&this.i&&3==t&&(eD(this.U,this.V,"tick",this.mb),this.V.start())):(ex(this.j,this.m,l,null),ti(this,l)),4==t&&tr(this),this.i&&!this.J&&(4==t?nc(this.l,this):(this.i=!1,e8(this)))}else(function(e){let t={};e=(e.g&&2<=t2(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(O(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==i&&0<l.indexOf("Unknown SID")?(this.o=3,eB(12)):(this.o=0,eB(13)),tr(this),tn(this)}}}catch(d){}finally{}},u.mb=function(){if(this.g){var e=t2(this.g),t=this.g.ja();this.C<t.length&&(tt(this),e7(this,e,t),this.i&&4!=e&&e8(this))}},u.cancel=function(){this.J=!0,tr(this)},u.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(ej(),eB(17)),tr(this),this.o=2,tn(this)):te(this,this.Y-e)};var ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function to(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof to){this.h=e.h,tu(this,e.j),this.s=e.s,this.g=e.g,tc(this,e.m),this.l=e.l;var t=e.i,n=new t_;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),th(this,n),this.o=e.o}else e&&(t=String(e).match(ta))?(this.h=!1,tu(this,t[1]||"",!0),this.s=tp(t[2]||""),this.g=tp(t[3]||"",!0),tc(this,t[4]),this.l=tp(t[5]||"",!0),th(this,t[6]||"",!0),this.o=tp(t[7]||"")):(this.h=!1,this.i=new t_(null,this.h))}function tl(e){return new to(e)}function tu(e,t,n){e.j=n?tp(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tc(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function th(e,t,n){var r,i;t instanceof t_?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tT(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tI(this,t),tS(this,n,e))},r)),r.j=i):(n||(t=tg(t,tE)),e.i=new t_(t,e.h))}function td(e,t,n){e.i.set(t,n)}function tf(e){return td(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tp(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tg(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tm),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tm(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}to.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tg(t,ty,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tg(t,ty,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tg(n,"/"==n.charAt(0)?tw:tv,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tg(n,tb)),e.join("")};var ty=/[#\/\?@]/g,tv=/[#\?:]/g,tw=/[#\?]/g,tE=/[#\?@]/g,tb=/#/g;function t_(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tT(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tI(e,t){tT(e),t=tk(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tC(e,t){return tT(e),t=tk(e,t),e.g.has(t)}function tS(e,t,n){tI(e,t),0<n.length&&(e.i=null,e.g.set(tk(e,t),k(n)),e.h+=n.length)}function tk(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(u=t_.prototype).add=function(e,t){tT(this),this.i=null,e=tk(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},u.forEach=function(e,t){tT(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},u.ta=function(){tT(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n},u.Z=function(e){tT(this);let t=[];if("string"==typeof e)tC(this,e)&&(t=t.concat(this.g.get(tk(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},u.set=function(e,t){return tT(this),this.i=null,tC(this,e=tk(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},u.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},u.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let i=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var a=i;""!==s[r]&&(a+="="+encodeURIComponent(String(s[r]))),e.push(a)}}return this.i=e.join("&")};var tA=class{constructor(e,t){this.g=e,this.map=t}};function tN(e){this.l=e||tR,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tR=10;function tO(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tD(e){return e.h?1:e.g?e.g.size:0}function tL(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tP(e,t){e.g?e.g.add(t):e.h=t}function tx(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tM(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return k(e.i)}tN.prototype.cancel=function(){if(this.i=tM(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tF=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function tV(){this.g=new tF}function tU(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function tj(e){this.l=e.fc||null,this.j=e.ob||!1}function tz(e,t){eg.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tB,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(tj,eG),tj.prototype.g=function(){return new tz(this.l,this.j)},tj.prototype.i=(r={},function(){return r}),I(tz,eg);var tB=0;function t$(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tq(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tH(e)}function tH(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(u=tz.prototype).open=function(e,t){if(this.readyState!=tB)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tH(this)},u.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tq(this)),this.readyState=tB},u.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tH(this)),this.g&&(this.readyState=3,tH(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;t$(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},u.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tq(this):tH(this),3==this.readyState&&t$(this)}},u.Za=function(e){this.g&&(this.response=this.responseText=e,tq(this))},u.Ya=function(e){this.g&&(this.response=e,tq(this))},u.ka=function(){this.g&&tq(this)},u.setRequestHeader=function(e,t){this.v.append(e,t)},u.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},u.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tz.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tK=y.JSON.parse;function tG(e){eg.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tW,this.L=this.M=!1}I(tG,eg);var tW="",tQ=/^https?$/i,tX=["POST","PUT"];function tJ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tY(e),t0(e)}function tY(e){e.F||(e.F=!0,em(e,"complete"),em(e,"error"))}function tZ(e){if(e.h&&void 0!==m&&(!e.C[1]||4!=t2(e)||2!=e.da())){if(e.v&&4==t2(e))eA(e.La,0,e);else if(em(e,"readystatechange"),4==t2(e)){e.h=!1;try{let t=e.da();e:switch(t){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n,r,i=!0;break e;default:i=!1}if(!(n=i)){if(r=0===t){var s=String(e.I).match(ta)[1]||null;!s&&y.self&&y.self.location&&(s=y.self.location.protocol.slice(0,-1)),r=!tQ.test(s?s.toLowerCase():"")}n=r}if(n)em(e,"complete"),em(e,"success");else{e.m=6;try{var a=2<t2(e)?e.g.statusText:""}catch(o){a=""}e.j=a+" ["+e.da()+"]",tY(e)}}finally{t0(e)}}}}function t0(e,t){if(e.g){t1(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||em(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function t1(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function t2(e){return e.g?e.g.readyState:0}function t4(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tW:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function t5(e){let t="";return Z(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function t9(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=t5(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):td(e,t,n))}function t3(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function t6(e){this.Ga=0,this.j=[],this.l=new eP,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=t3("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=t3("baseRetryDelayMs",5e3,e),this.hb=t3("retryDelaySeedMs",1e4,e),this.eb=t3("forwardChannelMaxRetries",2,e),this.xa=t3("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tN(e&&e.concurrentRequestLimit),this.Ja=new tV,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function t7(e){if(ne(e),3==e.H){var t=e.W++,n=tl(e.I);if(td(n,"SID",e.K),td(n,"RID",t),td(n,"TYPE","terminate"),nr(e,n),(t=new e0(e,e.l,t)).L=2,t.v=tf(tl(n)),n=!1,y.navigator&&y.navigator.sendBeacon)try{n=y.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&y.Image&&((new Image).src=t.v,n=!0),n||(t.g=ng(t.l,null),t.g.ha(t.v)),t.G=Date.now(),e8(t)}nf(e)}function t8(e){e.g&&(no(e),e.g.cancel(),e.g=null)}function ne(e){t8(e),e.u&&(y.clearTimeout(e.u),e.u=null),nu(e),e.i.cancel(),e.m&&("number"==typeof e.m&&y.clearTimeout(e.m),e.m=null)}function nt(e){if(!tO(e.i)&&!e.m){e.m=!0;var t=e.Na;eb||eI(),e_||(eb(),e_=!0),eT.add(t,e),e.C=0}}function nn(e,t){var n;n=t?t.m:e.W++;let r=tl(e.I);td(r,"SID",e.K),td(r,"RID",n),td(r,"AID",e.V),nr(e,r),e.o&&e.s&&t9(r,e.o,e.s),n=new e0(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ni(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tP(e.i,n),e9(n,r,t)}function nr(e,t){e.na&&Z(e.na,function(e,n){td(t,n,e)}),e.h&&ts({},function(e,n){td(t,n,e)})}function ni(e,t,n){n=Math.min(e.j.length,n);var r=e.h?_(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){let a=["count="+n];-1==s?0<n?(s=i[0].g,a.push("ofs="+s)):s=0:a.push("ofs="+s);let o=!0;for(let l=0;l<n;l++){let u=i[l].g,c=i[l].map;if(0>(u-=s))s=Math.max(0,i[l].g-100),o=!1;else try{!function(e,t,n){let r=n||"";try{ts(e,function(e,n){let i=e;w(e)&&(i=ev(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}(c,a,"req"+u+"_")}catch(h){r&&r(c)}}if(o){r=a.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function ns(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;eb||eI(),e_||(eb(),e_=!0),eT.add(t,e),e.A=0}}function na(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eq(_(e.Ma,e),nh(e,e.A)),e.A++,!0)}function no(e){null!=e.B&&(y.clearTimeout(e.B),e.B=null)}function nl(e){e.g=new e0(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=tl(e.wa);td(t,"RID","rpc"),td(t,"SID",e.K),td(t,"AID",e.V),td(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&td(t,"TO",e.qa),td(t,"TYPE","xmlhttp"),nr(e,t),e.o&&e.s&&t9(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=tf(tl(t)),n.s=null,n.S=!0,e3(n,e)}function nu(e){null!=e.v&&(y.clearTimeout(e.v),e.v=null)}function nc(e,t){var n=null;if(e.g==t){nu(e),no(e),e.g=null;var r=2}else{if(!tL(e.i,t))return;n=t.F,tx(e.i,t),r=1}if(0!=e.H){if(t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i,s,a=e.C;em(r=eV(),new e$(r,n)),nt(e)}else ns(e)}else if(3==(a=t.o)||0==a&&0<t.ca||!(1==r&&(i=e,s=t,!(tD(i.i)>=i.i.j-(i.m?1:0))&&(i.m?(i.j=s.F.concat(i.j),!0):1!=i.H&&2!=i.H&&!(i.C>=(i.cb?0:i.eb))&&(i.m=eq(_(i.Na,i,s),nh(i,i.C)),i.C++,!0)))||2==r&&na(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),a){case 1:nd(e,5);break;case 4:nd(e,10);break;case 3:nd(e,6);break;default:nd(e,2)}}}function nh(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function nd(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=_(e.pb,e);n||(n=new to("//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||tu(n,"https"),tf(n)),function(e,t){let n=new eP;if(y.Image){let r=new Image;r.onload=T(tU,n,r,"TestLoadImage: loaded",!0,t),r.onerror=T(tU,n,r,"TestLoadImage: error",!1,t),r.onabort=T(tU,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=T(tU,n,r,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eB(2);e.H=0,e.h&&e.h.za(t),nf(e),ne(e)}function nf(e){if(e.H=0,e.ma=[],e.h){let t=tM(e.i);(0!=t.length||0!=e.j.length)&&(A(e.ma,t),A(e.ma,e.j),e.i.i.length=0,k(e.j),e.j.length=0),e.h.ya()}}function np(e,t,n){var r=n instanceof to?tl(n):new to(n);if(""!=r.g)t&&(r.g=t+"."+r.g),tc(r,r.m);else{var i=y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new to(null);r&&tu(s,r),t&&(s.g=t),i&&tc(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&td(r,n,t),td(r,"VER",e.ra),nr(e,r),r}function ng(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tG(n&&e.Ha&&!e.va?new tj({ob:!0}):e.va)).Oa(e.J),t}function nm(){}function ny(){if(M&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function nv(e,t){eg.call(this),this.g=new t6(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nb(this)}function nw(e){eJ.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nE(){eY.call(this),this.status=1}function nb(e){this.g=e}function n_(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nT(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function nI(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(u=tG.prototype).Oa=function(e){this.M=e},u.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eW(this.u):eW(a),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){tJ(this,i);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[l,u]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=y.FormData&&e instanceof y.FormData,!(0<=S(tX,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(l,u);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var c;t1(this),0<this.B&&((this.L=(c=this.g,M&&"number"==typeof c.timeout&&void 0!==c.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=eA(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(h){tJ(this,h)}},u.ua=function(){void 0!==m&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,em(this,"timeout"),this.abort(8))},u.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,em(this,"complete"),em(this,"abort"),t0(this))},u.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t0(this,!0)),tG.$.N.call(this)},u.La=function(){this.s||(this.G||this.v||this.l?tZ(this):this.kb())},u.kb=function(){tZ(this)},u.isActive=function(){return!!this.g},u.da=function(){try{return 2<t2(this)?this.g.status:-1}catch(e){return -1}},u.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},u.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tK(t)}},u.Ia=function(){return this.m},u.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(u=t6.prototype).ra=8,u.H=1,u.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let t=new e0(this,this.l,e),n=this.s;if(this.U&&(n?en(n=ee(n),this.U):n=this.U),null!==this.o||this.O||(t.I=n,n=null),this.P)e:{for(var r=0,i=0;i<this.j.length;i++){t:{var s=this.j[i];if("__data__"in s.map&&"string"==typeof(s=s.map.__data__)){s=s.length;break t}s=void 0}if(void 0===s)break;if(4096<(r+=s)){r=i;break e}if(4096===r||i===this.j.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=ni(this,t,r),td(i=tl(this.I),"RID",e),td(i,"CVER",22),this.F&&td(i,"X-HTTP-Session-Id",this.F),nr(this,i),n&&(this.O?r="headers="+encodeURIComponent(String(t5(n)))+"&"+r:this.o&&t9(i,this.o,n)),tP(this.i,t),this.bb&&td(i,"TYPE","init"),this.P?(td(i,"$req",r),td(i,"SID","null"),t.aa=!0,e9(t,i,null)):e9(t,i,r),this.H=2}}else 3==this.H&&(e?nn(this,e):0==this.j.length||tO(this.i)||nn(this))}},u.Ma=function(){if(this.u=null,nl(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eq(_(this.jb,this),e)}},u.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,eB(10),t8(this),nl(this))},u.ib=function(){null!=this.v&&(this.v=null,t8(this),na(this),eB(19))},u.pb=function(e){e?(this.l.info("Successfully pinged google.com"),eB(2)):(this.l.info("Failed to ping google.com"),eB(1))},u.isActive=function(){return!!this.h&&this.h.isActive(this)},(u=nm.prototype).Ba=function(){},u.Aa=function(){},u.za=function(){},u.ya=function(){},u.isActive=function(){return!0},u.Va=function(){},ny.prototype.g=function(e,t){return new nv(e,t)},I(nv,eg),nv.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;eB(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=np(e,null,e.Y),nt(e)},nv.prototype.close=function(){t7(this.g)},nv.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ev(e),e=n);t.j.push(new tA(t.fb++,e)),3==t.H&&nt(t)},nv.prototype.N=function(){this.g.h=null,delete this.j,t7(this.g),delete this.g,nv.$.N.call(this)},I(nw,eJ),I(nE,eY),I(nb,nm),nb.prototype.Ba=function(){em(this.g,"a")},nb.prototype.Aa=function(e){em(this.g,new nw(e))},nb.prototype.za=function(e){em(this.g,new nE)},nb.prototype.ya=function(){em(this.g,"b")},I(n_,function(){this.blockSize=-1}),n_.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},n_.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)nT(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){nT(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){nT(this,r),i=0;break}}this.h=i,this.i+=t},n_.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var nC={};function nS(e){var t;return -128<=e&&128>e?(t=nC,Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=new nI([0|e],0>e?-1:0)):new nI([0|e],0>e?-1:0)}function nk(e){if(isNaN(e)||!isFinite(e))return nN;if(0>e)return nP(nk(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=nA;return new nI(t,0)}var nA=4294967296,nN=nS(0),nR=nS(1),nO=nS(16777216);function nD(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function nL(e){return -1==e.h}function nP(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new nI(n,~e.h).add(nR)}function nx(e,t){return e.add(nP(t))}function nM(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function nF(e,t){this.g=e,this.h=t}function nV(e,t){if(nD(t))throw Error("division by zero");if(nD(e))return new nF(nN,nN);if(nL(e))return t=nV(nP(e),t),new nF(nP(t.g),nP(t.h));if(nL(t))return t=nV(e,nP(t)),new nF(nP(t.g),t.h);if(30<e.g.length){if(nL(e)||nL(t))throw Error("slowDivide_ only works with positive integers.");for(var n=nR,r=t;0>=r.X(e);)n=nU(n),r=nU(r);var i=nj(n,1),s=nj(r,1);for(r=nj(r,2),n=nj(n,2);!nD(r);){var a=s.add(r);0>=a.X(e)&&(i=i.add(n),s=a),r=nj(r,1),n=nj(n,1)}return t=nx(e,i.R(t)),new nF(i,t)}for(i=nN;0<=e.X(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,r-48),a=(s=nk(n)).R(t);nL(a)||0<a.X(e);)n-=r,a=(s=nk(n)).R(t);nD(s)&&(s=nR),i=i.add(s),e=nx(e,a)}return new nF(i,e)}function nU(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new nI(n,e.h)}function nj(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new nI(i,e.h)}(u=nI.prototype).ea=function(){if(nL(this))return-nP(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:nA+r)*t,t*=nA}return e},u.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(nD(this))return"0";if(nL(this))return"-"+nP(this).toString(e);for(var t=nk(Math.pow(e,6)),n=this,r="";;){var i=nV(n,t).g,s=((0<(n=nx(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(nD(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},u.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},u.X=function(e){return nL(e=nx(this,e))?-1:nD(e)?0:1},u.abs=function(){return nL(this)?nP(this):this},u.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,s&=65535,a&=65535,n[i]=a<<16|s}return new nI(n,-2147483648&n[n.length-1]?-1:0)},u.R=function(e){if(nD(this)||nD(e))return nN;if(nL(this))return nL(e)?nP(this).R(nP(e)):nP(nP(this).R(e));if(nL(e))return nP(this.R(nP(e)));if(0>this.X(nO)&&0>e.X(nO))return nk(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,a=65535&this.D(r),o=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=a*l,nM(n,2*r+2*i),n[2*r+2*i+1]+=s*l,nM(n,2*r+2*i+1),n[2*r+2*i+1]+=a*o,nM(n,2*r+2*i+1),n[2*r+2*i+2]+=s*o,nM(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new nI(n,0)},u.gb=function(e){return nV(this,e).h},u.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new nI(n,this.h&e.h)},u.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new nI(n,this.h|e.h)},u.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new nI(n,this.h^e.h)},ny.prototype.createWebChannel=ny.prototype.g,nv.prototype.send=nv.prototype.u,nv.prototype.open=nv.prototype.m,nv.prototype.close=nv.prototype.close,eH.NO_ERROR=0,eH.TIMEOUT=8,eH.HTTP_ERROR=6,eK.COMPLETE="complete",eQ.EventType=eX,eX.OPEN="a",eX.CLOSE="b",eX.ERROR="c",eX.MESSAGE="d",eg.prototype.listen=eg.prototype.O,tG.prototype.listenOnce=tG.prototype.P,tG.prototype.getLastError=tG.prototype.Sa,tG.prototype.getLastErrorCode=tG.prototype.Ia,tG.prototype.getStatus=tG.prototype.da,tG.prototype.getResponseJson=tG.prototype.Wa,tG.prototype.getResponseText=tG.prototype.ja,tG.prototype.send=tG.prototype.ha,tG.prototype.setWithCredentials=tG.prototype.Oa,n_.prototype.digest=n_.prototype.l,n_.prototype.reset=n_.prototype.reset,n_.prototype.update=n_.prototype.j,nI.prototype.add=nI.prototype.add,nI.prototype.multiply=nI.prototype.R,nI.prototype.modulo=nI.prototype.gb,nI.prototype.compare=nI.prototype.X,nI.prototype.toNumber=nI.prototype.ea,nI.prototype.toString=nI.prototype.toString,nI.prototype.getBits=nI.prototype.D,nI.fromNumber=nk,nI.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return nP(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=nk(Math.pow(n,8)),i=nN,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=nk(Math.pow(n,a)),i=i.R(a).add(nk(o))):i=(i=i.R(r)).add(nk(o))}return i};var nz=g.createWebChannelTransport=function(){return new ny},nB=g.getStatEventTarget=function(){return eV()},n$=g.ErrorCode=eH,nq=g.EventType=eK,nH=g.Event=eM,nK=g.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nG=g.FetchXmlHttpFactory=tj,nW=g.WebChannel=eQ,nQ=g.XhrIo=tG,nX=g.Md5=n_,nJ=g.Integer=nI;n(3454);let nY="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nZ.UNAUTHENTICATED=new nZ(null),nZ.GOOGLE_CREDENTIALS=new nZ("google-credentials-uid"),nZ.FIRST_PARTY=new nZ("first-party-uid"),nZ.MOCK_USER=new nZ("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0="9.23.0",n1=new d.Yd("@firebase/firestore");function n2(){return n1.logLevel}function n4(e,...t){if(n1.logLevel<=d.in.DEBUG){let n=t.map(n3);n1.debug(`Firestore (${n0}): ${e}`,...n)}}function n5(e,...t){if(n1.logLevel<=d.in.ERROR){let n=t.map(n3);n1.error(`Firestore (${n0}): ${e}`,...n)}}function n9(e,...t){if(n1.logLevel<=d.in.WARN){let n=t.map(n3);n1.warn(`Firestore (${n0}): ${e}`,...n)}}function n3(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n6(e="Unexpected state"){let t=`FIRESTORE (${n0}) INTERNAL ASSERTION FAILED: `+e;throw n5(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n7={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class n8 extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nZ.UNAUTHENTICATED))}shutdown(){}}class rr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ri{constructor(e){this.t=e,this.currentUser=nZ.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new re;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new re,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{n4("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(n4("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new re)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(n4("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||n6(),new rt(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||n6(),new nZ(e)}}class rs{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=nZ.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ra{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new rs(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(nZ.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ro{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rl{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let n=e=>{null!=e.error&&n4("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.T;return this.T=e.token,n4("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{n4("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?r(e):n4("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||n6(),this.T=e.token,new ro(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function rc(e,t){return e<t?-1:e>t?1:0}function rh(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new n8(n7.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new n8(n7.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rd.fromMillis(Date.now())}static fromDate(e){return rd.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new rd(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?rc(this.nanoseconds,e.nanoseconds):rc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rf(e)}static min(){return new rf(new rd(0,0))}static max(){return new rf(new rd(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,n){void 0===t?t=0:t>e.length&&n6(),void 0===n?n=e.length-t:n>e.length-t&&n6(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rp.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rp?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let i=e.get(r),s=t.get(r);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rg extends rp{construct(e,t,n){return new rg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new n8(n7.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new rg(t)}static emptyPath(){return new rg([])}}let rm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ry extends rp{construct(e,t,n){return new ry(e,t,n)}static isValidIdentifier(e){return rm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ry.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ry(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new n8(n7.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let a=e[r];if("\\"===a){if(r+1===e.length)throw new n8(n7.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[r+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new n8(n7.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,r+=2}else"`"===a?(s=!s,r++):"."!==a||s?(n+=a,r++):(i(),r++)}if(i(),s)throw new n8(n7.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ry(t)}static emptyPath(){return new ry([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.path=e}static fromPath(e){return new rv(rg.fromString(e))}static fromName(e){return new rv(rg.fromString(e).popFirst(5))}static empty(){return new rv(rg.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rv(new rg(e.slice()))}}class rw{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rw(rf.min(),rv.empty(),-1)}static max(){return new rw(rf.max(),rv.empty(),-1)}}class rE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(e){if(e.code!==n7.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;n4("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&n6(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new r_((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof r_?t:r_.resolve(t)}catch(n){return r_.reject(n)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):r_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):r_.reject(t)}static resolve(e){return new r_((t,n)=>{t(e)})}static reject(e){return new r_((t,n)=>{n(e)})}static waitFor(e){return new r_((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=r_.resolve(!1);for(let n of e)t=t.next(e=>e?r_.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new r_((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new r_((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function rT(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function rC(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rk(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rA(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}rI.ct=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,t){this.comparator=e,this.root=t||rO.EMPTY}insert(e,t){return new rN(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rO.BLACK,null,null))}remove(e){return new rN(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rO.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rR(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rR(this.root,e,this.comparator,!1)}getReverseIterator(){return new rR(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rR(this.root,e,this.comparator,!0)}}class rR{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rO{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rO.RED,this.left=null!=r?r:rO.EMPTY,this.right=null!=i?i:rO.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new rO(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rO.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return rO.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rO.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rO.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw n6();let e=this.left.check();if(e!==this.right.check())throw n6();return e+(this.isRed()?0:1)}}rO.EMPTY=null,rO.RED=!0,rO.BLACK=!1,rO.EMPTY=new class{constructor(){this.size=0}get key(){throw n6()}get value(){throw n6()}get color(){throw n6()}get left(){throw n6()}get right(){throw n6()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rO(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.comparator=e,this.data=new rN(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rL(this.data.getIterator())}getIteratorFrom(e){return new rL(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rD)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rD(this.comparator);return t.data=e,t}}class rL{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.fields=e,e.sort(ry.comparator)}static empty(){return new rP([])}unionWith(e){let t=new rD(ry.comparator);for(let n of this.fields)t=t.add(n);for(let r of e)t=t.add(r);return new rP(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rh(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new rx("Invalid base64 string: "+t):t}}(e);return new rM(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new rM(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rM.EMPTY_BYTE_STRING=new rM("");let rF=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rV(e){if(e||n6(),"string"==typeof e){let t=0,n=rF.exec(e);if(n||n6(),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rU(e.seconds),nanos:rU(e.nanos)}}function rU(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rj(e){return"string"==typeof e?rM.fromBase64String(e):rM.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rz(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rB(e){let t=e.mapValue.fields.__previous_value__;return rz(t)?rB(t):t}function r$(e){let t=rV(e.mapValue.fields.__local_write_time__.timestampValue);return new rd(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class rH{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rH("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rH&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rK={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rG(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rz(e)?4:r9(e)?9007199254740991:10:n6()}function rW(e,t){if(e===t)return!0;let n=rG(e);if(n!==rG(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return r$(e).isEqual(r$(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rV(e.timestampValue),r=rV(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rj(e.bytesValue).isEqual(rj(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rU(e.geoPointValue.latitude)===rU(t.geoPointValue.latitude)&&rU(e.geoPointValue.longitude)===rU(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rU(e.integerValue)===rU(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rU(e.doubleValue),r=rU(t.doubleValue);return n===r?rC(n)===rC(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return rh(e.arrayValue.values||[],t.arrayValue.values||[],rW);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rS(n)!==rS(r))return!1;for(let i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!rW(n[i],r[i])))return!1;return!0}(e,t);default:return n6()}}function rQ(e,t){return void 0!==(e.values||[]).find(e=>rW(e,t))}function rX(e,t){if(e===t)return 0;let n=rG(e),r=rG(t);if(n!==r)return rc(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return rc(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rU(e.integerValue||e.doubleValue),r=rU(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return rJ(e.timestampValue,t.timestampValue);case 4:return rJ(r$(e),r$(t));case 5:return rc(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rj(e),r=rj(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){let s=rc(n[i],r[i]);if(0!==s)return s}return rc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=rc(rU(e.latitude),rU(t.latitude));return 0!==n?n:rc(rU(e.longitude),rU(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){let s=rX(n[i],r[i]);if(s)return s}return rc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rK.mapValue&&t===rK.mapValue)return 0;if(e===rK.mapValue)return 1;if(t===rK.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){let o=rc(r[a],s[a]);if(0!==o)return o;let l=rX(n[r[a]],i[s[a]]);if(0!==l)return l}return rc(r.length,s.length)}(e.mapValue,t.mapValue);default:throw n6()}}function rJ(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return rc(e,t);let n=rV(e),r=rV(t),i=rc(n.seconds,r.seconds);return 0!==i?i:rc(n.nanos,r.nanos)}function rY(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rV(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rj(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,rv.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=rY(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${rY(e.fields[i])}`;return n+"}"}(e.mapValue):n6()}function rZ(e){return!!e&&"integerValue"in e}function r0(e){return!!e&&"arrayValue"in e}function r1(e){return!!e&&"nullValue"in e}function r2(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function r4(e){return!!e&&"mapValue"in e}function r5(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rk(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=r5(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=r5(e.arrayValue.values[r]);return n}return Object.assign({},e)}function r9(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.value=e}static empty(){return new r3({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!r4(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=r5(t)}setAll(e){let t=ry.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let s=this.getFieldsMap(t);this.applyChanges(s,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=r5(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());r4(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rW(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];r4(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(rk(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new r3(r5(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new r6(e,0,rf.min(),rf.min(),rf.min(),r3.empty(),0)}static newFoundDocument(e,t,n,r){return new r6(e,1,t,rf.min(),n,r,0)}static newNoDocument(e,t){return new r6(e,2,t,rf.min(),rf.min(),r3.empty(),0)}static newUnknownDocument(e,t){return new r6(e,3,t,rf.min(),rf.min(),r3.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rf.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=r3.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=r3.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rf.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof r6&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r6(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e,t){this.position=e,this.inclusive=t}}function r8(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?rv.comparator(rv.fromName(a.referenceValue),n.key):rX(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ie(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rW(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{}class ii extends ir{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new il(e,t,n):"array-contains"===t?new id(e,n):"in"===t?new ip(e,n):"not-in"===t?new ig(e,n):"array-contains-any"===t?new im(e,n):new ii(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new iu(e,n):new ic(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rX(t,this.value)):null!==t&&rG(this.value)===rG(t)&&this.matchesComparison(rX(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return n6()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class is extends ir{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new is(e,t)}matches(e){return ia(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.ft(e=>e.isInequality());return null!==e?e.field:null}ft(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function ia(e){return"and"===e.op}function io(e){for(let t of e.filters)if(t instanceof is)return!1;return!0}class il extends ii{constructor(e,t,n){super(e,t,n),this.key=rv.fromName(n.referenceValue)}matches(e){let t=rv.comparator(e.key,this.key);return this.matchesComparison(t)}}class iu extends ii{constructor(e,t){super(e,"in",t),this.keys=ih("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ic extends ii{constructor(e,t){super(e,"not-in",t),this.keys=ih("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ih(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>rv.fromName(e.referenceValue))}class id extends ii{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return r0(t)&&rQ(t.arrayValue,this.value)}}class ip extends ii{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rQ(this.value.arrayValue,t)}}class ig extends ii{constructor(e,t){super(e,"not-in",t)}matches(e){if(rQ(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rQ(this.value.arrayValue,t)}}class im extends ii{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!r0(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rQ(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.dt=null}}function iv(e,t=null,n=[],r=[],i=null,s=null,a=null){return new iy(e,t,n,r,i,s,a)}function iw(e){let t=e;if(null===t.dt){let n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof ii)return t.field.canonicalString()+t.op.toString()+rY(t.value);if(io(t)&&ia(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(n+="|l:"+t.limit),t.startAt&&(n+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rY(e)).join(",")),t.endAt&&(n+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rY(e)).join(",")),t.dt=n}return t.dt}function iE(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++){var r,i;if(r=e.orderBy[n],i=t.orderBy[n],!(r.dir===i.dir&&r.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(!function e(t,n){return t instanceof ii?n instanceof ii&&t.op===n.op&&t.field.isEqual(n.field)&&rW(t.value,n.value):t instanceof is?n instanceof is&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void n6()}(e.filters[s],t.filters[s]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ie(e.startAt,t.startAt)&&ie(e.endAt,t.endAt)}function ib(e){return rv.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.wt=null,this._t=null,this.startAt,this.endAt}}function iT(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function iI(e){let t=e;if(null===t.wt){t.wt=[];let n=function(e){for(let t of e.filters){let n=t.getFirstInequalityField();if(null!==n)return n}return null}(t),r=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==n&&null===r)n.isKeyField()||t.wt.push(new it(n)),t.wt.push(new it(ry.keyField(),"asc"));else{let i=!1;for(let s of t.explicitOrderBy)t.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){let a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new it(ry.keyField(),a))}}}return t.wt}function iC(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=iv(t.path,t.collectionGroup,iI(t),t.filters,t.limit,t.startAt,t.endAt);else{let n=[];for(let r of iI(t)){let i="desc"===r.dir?"asc":"desc";n.push(new it(r.field,i))}let s=t.endAt?new r7(t.endAt.position,t.endAt.inclusive):null,a=t.startAt?new r7(t.startAt.position,t.startAt.inclusive):null;t._t=iv(t.path,t.collectionGroup,n,t.filters,t.limit,s,a)}}return t._t}function iS(e,t,n){return new i_(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ik(e,t){return iE(iC(e),iC(t))&&e.limitType===t.limitType}function iA(e){return`${iw(iC(e))}|lt:${e.limitType}`}function iN(e){var t;let n;return`Query(target=${n=(t=iC(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ii?`${t.field.canonicalString()} ${t.op} ${rY(t.value)}`:t instanceof is?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rY(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rY(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function iR(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rv.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of iI(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=r8(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,iI(e),t))&&(!e.endAt||!!function(e,t,n){let r=r8(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,iI(e),t))}function iO(e){return(t,n)=>{let r=!1;for(let i of iI(e)){let s=function(e,t,n){let r=e.field.isKeyField()?rv.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rX(r,i):n6()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return n6()}}(i,t,n);if(0!==s)return s;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rk(this.inner,(t,n)=>{for(let[r,i]of n)e(r,i)})}isEmpty(){return rA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iL=new rN(rv.comparator),iP=new rN(rv.comparator);function ix(...e){let t=iP;for(let n of e)t=t.insert(n.key,n);return t}function iM(e){let t=iP;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function iF(){return new iD(e=>e.toString(),(e,t)=>e.isEqual(t))}let iV=new rN(rv.comparator),iU=new rD(rv.comparator);function ij(...e){let t=iU;for(let n of e)t=t.add(n);return t}let iz=new rD(rc);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iB(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rC(t)?"-0":t}}function i$(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(){this._=void 0}}function iH(e,t){return e instanceof iJ?rZ(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iK extends iq{}class iG extends iq{constructor(e){super(),this.elements=e}}function iW(e,t){let n=iZ(t);for(let r of e.elements)n.some(e=>rW(e,r))||n.push(r);return{arrayValue:{values:n}}}class iQ extends iq{constructor(e){super(),this.elements=e}}function iX(e,t){let n=iZ(t);for(let r of e.elements)n=n.filter(e=>!rW(e,r));return{arrayValue:{values:n}}}class iJ extends iq{constructor(e,t){super(),this.serializer=e,this.gt=t}}function iY(e){return rU(e.integerValue||e.doubleValue)}function iZ(e){return r0(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class i0{constructor(e,t){this.version=e,this.transformResults=t}}class i1{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new i1}static exists(e){return new i1(void 0,e)}static updateTime(e){return new i1(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function i2(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class i4{}function i5(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new sn(e.key,i1.none()):new i6(e.key,e.data,i1.none());{let n=e.data,r=r3.empty(),i=new rD(ry.comparator);for(let s of t.fields)if(!i.has(s)){let a=n.field(s);null===a&&s.length>1&&(s=s.popLast(),a=n.field(s)),null===a?r.delete(s):r.set(s,a),i=i.add(s)}return new i7(e.key,r,new rP(i.toArray()),i1.none())}}function i9(e,t,n,r){return e instanceof i6?function(e,t,n,r){if(!i2(e.precondition,t))return n;let i=e.value.clone(),s=st(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof i7?function(e,t,n,r){if(!i2(e.precondition,t))return n;let i=st(e.fieldTransforms,r,t),s=t.data;return(s.setAll(i8(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):i2(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function i3(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&rh(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof iG&&r instanceof iG||n instanceof iQ&&r instanceof iQ?rh(n.elements,r.elements,rW):n instanceof iJ&&r instanceof iJ?rW(n.gt,r.gt):n instanceof iK&&r instanceof iK)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class i6 extends i4{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class i7 extends i4{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function i8(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function se(e,t,n){var r;let i=new Map;e.length===n.length||n6();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof iG?iW(o,l):o instanceof iQ?iX(o,l):r))}return i}function st(e,t,n){let r=new Map;for(let i of e){let s=i.transform,a=n.data.field(i.field);r.set(i.field,s instanceof iK?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&rz(t)&&(t=rB(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,a):s instanceof iG?iW(s,a):s instanceof iQ?iX(s,a):function(e,t){let n=iH(e,t),r=iY(n)+iY(e.gt);return rZ(n)&&rZ(e.gt)?i$(r):iB(e.serializer,r)}(s,a))}return r}class sn extends i4{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sr extends i4{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let i=this.mutations[r];if(i.key.isEqual(e.key)){var s;s=n[r],i instanceof i6?function(e,t,n){let r=e.value.clone(),i=se(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,s):i instanceof i7?function(e,t,n){if(!i2(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=se(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(i8(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,s):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,s)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=i9(n,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=i9(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iF();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=i5(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(rf.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ij())}isEqual(e){return this.batchId===e.batchId&&rh(this.mutations,e.mutations,(e,t)=>i3(e,t))&&rh(this.baseMutations,e.baseMutations,(e,t)=>i3(e,t))}}class ss{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||n6();let r=iV,i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ss(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.count=e,this.unchangedNames=t}}function sl(e){if(void 0===e)return n5("GRPC error has no .code"),n7.UNKNOWN;switch(e){case o.OK:return n7.OK;case o.CANCELLED:return n7.CANCELLED;case o.UNKNOWN:return n7.UNKNOWN;case o.DEADLINE_EXCEEDED:return n7.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return n7.RESOURCE_EXHAUSTED;case o.INTERNAL:return n7.INTERNAL;case o.UNAVAILABLE:return n7.UNAVAILABLE;case o.UNAUTHENTICATED:return n7.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return n7.INVALID_ARGUMENT;case o.NOT_FOUND:return n7.NOT_FOUND;case o.ALREADY_EXISTS:return n7.ALREADY_EXISTS;case o.PERMISSION_DENIED:return n7.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return n7.FAILED_PRECONDITION;case o.ABORTED:return n7.ABORTED;case o.OUT_OF_RANGE:return n7.OUT_OF_RANGE;case o.UNIMPLEMENTED:return n7.UNIMPLEMENTED;case o.DATA_LOSS:return n7.DATA_LOSS;default:return n6()}}(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sc}static getOrCreateInstance(){return null===sc&&(sc=new su),sc}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let sc=null,sh=new nJ([4294967295,4294967295],0);function sd(e){let t=(new TextEncoder).encode(e),n=new nX;return n.update(t),new Uint8Array(n.digest())}function sf(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new nJ([n,r],0),new nJ([i,s],0)]}class sp{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new sg(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new sg(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new sg(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=nJ.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(nJ.fromNumber(n)));return 1===r.compare(sh)&&(r=new nJ([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;let t=sd(e),[n,r]=sf(t);for(let i=0;i<this.hashCount;i++){let s=this.Et(n,r,i);if(!this.At(s))return!1}return!0}static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),i=new sp(r,e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.It)return;let t=sd(e),[n,r]=sf(t);for(let i=0;i<this.hashCount;i++){let s=this.Et(n,r,i);this.Rt(s)}}Rt(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class sg extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,sy.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new sm(rf.min(),r,new rN(rc),iL,ij())}}class sy{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new sy(n,t,ij(),ij(),ij())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class sw{constructor(e,t){this.targetId=e,this.Vt=t}}class sE{constructor(e,t,n=rM.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class sb{constructor(){this.St=0,this.Dt=sI(),this.Ct=rM.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ij(),t=ij(),n=ij();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:n6()}}),new sy(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=sI()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class s_{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=iL,this.zt=sT(),this.Wt=new rN(rc)}Ht(e){for(let t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(let n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{let n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:n6()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((e,n)=>{this.te(n)&&t(n)})}ne(e){var t;let n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){let s=i.target;if(ib(s)){if(0===r){let a=new rv(s.path);this.Yt(n,a,r6.newNoDocument(a,rf.min()))}else 1===r||n6()}else{let o=this.ie(n);if(o!==r){let l=this.re(e,o);0!==l&&(this.ee(n),this.Wt=this.Wt.insert(n,2===l?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null===(t=su.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,a,o,l;let u={localCacheCount:t,existenceFilterCount:n.count},c=n.unchangedNames;return c&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==c?void 0:c.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(a=null===(s=null===(i=null==c?void 0:c.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==a?a:0,padding:null!==(l=null===(o=null==c?void 0:c.bits)||void 0===o?void 0:o.padding)&&void 0!==l?l:0}),u}(l,o,e.Vt))}}}}re(e,t){let n,r;let{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;let{bits:{bitmap:a="",padding:o=0},hashCount:l=0}=i;try{n=rj(a).toUint8Array()}catch(u){if(u instanceof rx)return n9("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{r=new sp(n,o,l)}catch(c){return n9(c instanceof sg?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return 0===r.It?1:s!==t-this.oe(e.targetId,r)?2:0}oe(e,t){let n=this.Gt.getRemoteKeysForTarget(e),r=0;return n.forEach(n=>{let i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)}),r}ce(e){let t=new Map;this.Qt.forEach((n,r)=>{let i=this.se(r);if(i){if(n.current&&ib(i.target)){let s=new rv(i.target.path);null!==this.jt.get(s)||this.ae(r,s)||this.Yt(r,s,r6.newNoDocument(s,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}});let n=ij();this.zt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.jt.forEach((t,n)=>n.setReadTime(e));let r=new sm(e,t,this.Wt,this.jt,n);return this.jt=iL,this.zt=sT(),this.Wt=new rN(rc),r}Jt(e,t){if(!this.te(e))return;let n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;let r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){let t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new sb,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new rD(rc),this.zt=this.zt.insert(e,t)),t}te(e){let t=null!==this.se(e);return t||n4("WatchChangeAggregator","Detected inactive target",e),t}se(e){let t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new sb),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function sT(){return new rN(rv.comparator)}function sI(){return new rN(rv.comparator)}let sC={asc:"ASCENDING",desc:"DESCENDING"},sS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sk={and:"AND",or:"OR"};class sA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sN(e,t){return e.useProto3Json||null==t?t:{value:t}}function sR(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sO(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sD(e){return e||n6(),rf.fromTimestamp(function(e){let t=rV(e);return new rd(t.seconds,t.nanos)}(e))}function sL(e,t){return new rg(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sP(e){let t=rg.fromString(e);return s$(t)||n6(),t}function sx(e,t){return sL(e.databaseId,t.path)}function sM(e,t){let n=sP(t);if(n.get(1)!==e.databaseId.projectId)throw new n8(n7.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new n8(n7.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rv(sU(n))}function sF(e,t){return sL(e.databaseId,t)}function sV(e){return new rg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sU(e){return e.length>4&&"documents"===e.get(4)||n6(),e.popFirst(5)}function sj(e,t,n){return{name:sx(e,t),fields:n.value.mapValue.fields}}function sz(e){return{fieldPath:e.canonicalString()}}function sB(e){return ry.fromServerFormat(e.fieldPath)}function s$(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(e,t,n,r,i=rf.min(),s=rf.min(),a=rM.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new sq(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sq(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sq(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sq(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(e){this.fe=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(rU(e.integerValue));else if("doubleValue"in e){let n=rU(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),rC(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){let r=e.timestampValue;this.ye(t,20),"string"==typeof r?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(rj(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.ye(t,45),t.pe(i.latitude||0),t.pe(i.longitude||0)}else"mapValue"in e?r9(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):n6()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){let n=e.fields||{};for(let r of(this.ye(t,55),Object.keys(n)))this.Te(r,t),this.me(n[r],t)}Pe(e,t){let n=e.values||[];for(let r of(this.ye(t,50),n))this.me(r,t)}ve(e,t){this.ye(t,37),rv.fromName(e).path.forEach(e=>{this.ye(t,60),this.be(e,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}sK.Ve=new sK;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(){this.rn=new sW}addToCollectionParentIndex(e,t){return this.rn.add(t),r_.resolve()}getCollectionParents(e,t){return r_.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return r_.resolve()}deleteFieldIndex(e,t){return r_.resolve()}getDocumentsMatchingTarget(e,t){return r_.resolve(null)}getIndexType(e,t){return r_.resolve(0)}getFieldIndexes(e,t){return r_.resolve([])}getNextCollectionGroupToUpdate(e){return r_.resolve(null)}getMinOffset(e,t){return r_.resolve(rw.min())}getMinOffsetFromCollectionGroup(e,t){return r_.resolve(rw.min())}updateCollectionGroup(e,t,n){return r_.resolve()}updateIndexEntries(e,t){return r_.resolve()}}class sW{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rD(rg.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rD(rg.comparator)).toArray()}}new Uint8Array(0);class sQ{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sQ(e,sQ.DEFAULT_COLLECTION_PERCENTILE,sQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sQ.DEFAULT_COLLECTION_PERCENTILE=10,sQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sQ.DEFAULT=new sQ(41943040,sQ.DEFAULT_COLLECTION_PERCENTILE,sQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sQ.DISABLED=new sQ(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sX{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new sX(0)}static Mn(){return new sX(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sJ{constructor(){this.changes=new iD(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,r6.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?r_.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sY{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&i9(n.mutation,e,rP.empty(),rd.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ij()).next(()=>t))}getLocalViewOfDocuments(e,t,n=ij()){let r=iF();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ix();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=iF();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ij()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=iL,s=iF(),a=iF();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof i7)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),i9(a.mutation,t,a.mutation.getFieldMask(),rd.now())):s.set(t.key,rP.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new sY(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=iF(),r=new rN((e,t)=>e-t),i=ij();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||rP.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||ij()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,c=iF();u.forEach(e=>{if(!i.has(e)){let r=i5(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,c))}return r_.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return rv.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):r_.resolve(iF()),a=-1,o=i;return s.next(t=>r_.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?r_.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,ij())).next(e=>({batchId:a,changes:iM(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rv(t)).next(e=>{let t=ix();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=ix();return this.indexManager.getCollectionParents(e,r).next(s=>r_.forEach(s,s=>{var a;let o=(a=s.child(r),new i_(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,r6.newInvalidDocument(r)))});let n=ix();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&i9(s.mutation,i,rP.empty(),rd.now()),iR(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return r_.resolve(this.cs.get(t))}saveBundleMetadata(e,t){return this.cs.set(t.id,{id:t.id,version:t.version,createTime:sD(t.createTime)}),r_.resolve()}getNamedQuery(e,t){return r_.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,i,s,a,o,l;let u,c=function(e){let t=sP(e);return 4===t.length?rg.emptyPath():sU(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||n6();let p=h.from[0];p.allDescendants?f=p.collectionId:c=c.child(p.collectionId)}let g=[];h.where&&(g=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sB(e.unaryFilter.field);return ii.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sB(e.unaryFilter.field);return ii.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=sB(e.unaryFilter.field);return ii.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sB(e.unaryFilter.field);return ii.create(i,"!=",{nullValue:"NULL_VALUE"});default:return n6()}}(t):void 0!==t.fieldFilter?ii.create(sB(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return n6()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?is.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return n6()}}(t.compositeFilter.op)):n6()}(e);return n instanceof is&&io(t=n)&&ia(t)?n.getFilters():[n]}(h.where));let m=[];h.orderBy&&(m=h.orderBy.map(e=>new it(sB(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let y=null;h.limit&&(y=null==(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let v=null;h.startAt&&(v=function(e){let t=!!e.before,n=e.values||[];return new r7(n,t)}(h.startAt));let w=null;return h.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new r7(n,t)}(h.endAt)),n=c,r=f,i=m,s=g,a=y,o=v,l=w,new i_(n,r,i,s,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iS(t,t.limit,"L"):t}(t.bundledQuery),readTime:sD(t.readTime)}),r_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.overlays=new rN(rv.comparator),this.ls=new Map}getOverlay(e,t){return r_.resolve(this.overlays.get(t))}getOverlays(e,t){let n=iF();return r_.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.we(e,t,r)}),r_.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.ls.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ls.delete(n)),r_.resolve()}getOverlaysForCollection(e,t,n){let r=iF(),i=t.length+1,s=new rv(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&o.largestBatchId>n&&r.set(o.getKey(),o)}return r_.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new rN((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let a=s.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>n){let o=i.get(a.largestBatchId);null===o&&(o=iF(),i=i.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=iF(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=r)););return r_.resolve(l)}we(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let i=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new sa(t,n));let s=this.ls.get(t);void 0===s&&(s=ij(),this.ls.set(t,s)),this.ls.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.fs=new rD(s4.ds),this.ws=new rD(s4._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){let n=new s4(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ys(new s4(e,t))}ps(e,t){e.forEach(e=>this.removeReference(e,t))}Is(e){let t=new rv(new rg([])),n=new s4(t,e),r=new s4(t,e+1),i=[];return this.ws.forEachInRange([n,r],e=>{this.ys(e),i.push(e.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){let t=new rv(new rg([])),n=new s4(t,e),r=new s4(t,e+1),i=ij();return this.ws.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new s4(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class s4{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return rv.comparator(e.key,t.key)||rc(e.As,t.As)}static _s(e,t){return rc(e.As,t.As)||rv.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new rD(s4.ds)}checkEmpty(e){return r_.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new si(i,t,n,r);for(let a of(this.mutationQueue.push(s),r))this.Rs=this.Rs.add(new s4(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return r_.resolve(s)}lookupMutationBatch(e,t){return r_.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.bs(t+1),r=n<0?0:n;return r_.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return r_.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return r_.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new s4(t,0),r=new s4(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],e=>{let t=this.Ps(e.As);i.push(t)}),r_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rD(rc);return t.forEach(e=>{let t=new s4(e,0),r=new s4(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],e=>{n=n.add(e.As)})}),r_.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;rv.isDocumentKey(i)||(i=i.child(""));let s=new s4(new rv(i),0),a=new rD(rc);return this.Rs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.As)),!0)},s),r_.resolve(this.Vs(a))}Vs(e){let t=[];return e.forEach(e=>{let n=this.Ps(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ss(t.batchId,"removed")||n6(),this.mutationQueue.shift();let n=this.Rs;return r_.forEach(t.mutations,r=>{let i=new s4(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=n})}Cn(e){}containsKey(e,t){let n=new s4(t,0),r=this.Rs.firstAfterOrEqual(n);return r_.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,r_.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){let t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(e){this.Ds=e,this.docs=new rN(rv.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return r_.resolve(n?n.document.mutableCopy():r6.newInvalidDocument(t))}getEntries(e,t){let n=iL;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():r6.newInvalidDocument(e))}),r_.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=iL,s=t.path,a=new rv(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:l,value:{document:u}}=o.getNext();if(!s.isPrefixOf(l.path))break;l.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=rv.comparator(e.documentKey,t.documentKey))?n:rc(e.largestBatchId,t.largestBatchId)}(new rw(u.readTime,u.key,-1),n)||(r.has(u.key)||iR(t,u))&&(i=i.insert(u.key,u.mutableCopy()))}return r_.resolve(i)}getAllFromCollectionGroup(e,t,n,r){n6()}Cs(e,t){return r_.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new s3(this)}getSize(e){return r_.resolve(this.size)}}class s3 extends sJ{constructor(e){super(),this.os=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)}),r_.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e){this.persistence=e,this.xs=new iD(e=>iw(e),iE),this.lastRemoteSnapshotVersion=rf.min(),this.highestTargetId=0,this.Ns=0,this.ks=new s2,this.targetCount=0,this.Ms=sX.kn()}forEachTarget(e,t){return this.xs.forEach((e,n)=>t(n)),r_.resolve()}getLastRemoteSnapshotVersion(e){return r_.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return r_.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),r_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),r_.resolve()}Fn(e){this.xs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ms=new sX(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,r_.resolve()}updateTargetData(e,t){return this.Fn(t),r_.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,r_.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.xs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),r_.waitFor(i).next(()=>r)}getTargetCount(e){return r_.resolve(this.targetCount)}getTargetData(e,t){let n=this.xs.get(t)||null;return r_.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),r_.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),r_.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),r_.resolve()}getMatchingKeysForTargetId(e,t){let n=this.ks.Es(t);return r_.resolve(n)}containsKey(e,t){return r_.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(e,t){var n;this.$s={},this.overlays={},this.Os=new rI(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new s6(this),this.indexManager=new sG,this.remoteDocumentCache=(n=e=>this.referenceDelegate.Ls(e),new s9(n)),this.serializer=new sH(t),this.qs=new s0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new s5(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){n4("MemoryPersistence","Starting transaction:",e);let r=new s8(this.Os.next());return this.referenceDelegate.Us(),n(r).next(e=>this.referenceDelegate.Ks(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gs(e,t){return r_.or(Object.values(this.$s).map(n=>()=>n.containsKey(e,t)))}}class s8 extends rE{constructor(e){super(),this.currentSequenceNumber=e}}class ae{constructor(e){this.persistence=e,this.Qs=new s2,this.js=null}static zs(e){return new ae(e)}get Ws(){if(this.js)return this.js;throw n6()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),r_.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),r_.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),r_.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(e=>this.Ws.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ws.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return r_.forEach(this.Ws,n=>{let r=rv.fromPath(n);return this.Hs(e,r).next(e=>{e||t.removeEntry(r,rf.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return r_.or([()=>r_.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=ij(),r=ij();for(let i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new at(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next(i=>i||this.Gi(e,t,r,n)).next(n=>n||this.Qi(e,t))}Ki(e,t){if(iT(t))return r_.resolve(null);let n=iC(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=iC(t=iS(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=ij(...r);return this.Ui.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,iS(t,null,"F")):this.Wi(e,s,t,n)}))})))}Gi(e,t,n,r){return iT(t)||r.isEqual(rf.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next(i=>{let s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(n2()<=d.in.DEBUG&&n4("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iN(t)),this.Wi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=rf.fromTimestamp(1e9===r?new rd(n+1,0):new rd(n,r));return new rw(i,rv.empty(),-1)}(r,0)))})}ji(e,t){let n=new rD(iO(e));return t.forEach((t,r)=>{iR(e,r)&&(n=n.add(r))}),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return n2()<=d.in.DEBUG&&n4("QueryEngine","Using full collection scan to execute query:",iN(t)),this.Ui.getDocumentsMatchingQuery(e,t,rw.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new rN(rc),this.Yi=new iD(e=>iw(e),iE),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sZ(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}async function ai(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.tr(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=ij();for(let o of r)for(let l of(i.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let c of(s.push(u.batchId),u.mutations))a=a.add(c.key);return e.localDocuments.getDocuments(n,a).next(e=>({er:e,removedBatchIds:i,addedBatchIds:s}))})})}function as(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}async function aa(e,t,n){let r=e,i=r.Ji.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(s){if(!rT(s))throw s;n4("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function ao(e,t,n){let r=rf.min(),i=ij();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Yi.get(n);return void 0!==r?r_.resolve(e.Ji.get(r)):e.Bs.getTargetData(t,n)})(e,s,iC(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Bs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Hi.getDocumentsMatchingQuery(s,t,n?r:rf.min(),n?i:ij())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Xi.get(r)||rf.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Xi.set(r,s),{documents:n,ir:i}}))}class al{constructor(){this.activeTargetIds=iz}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class au{constructor(){this.Hr=new al,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new al,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let e of(n4("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))e(0)}no(){for(let e of(n4("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad=null;function af(){return null===ad?ad=268435456+Math.round(2147483648*Math.random()):ad++,"0x"+ad.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ap={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am="WebChannelConnection";class ay extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){let s=af(),a=this.To(e,t);n4("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={};return this.Eo(o,r,i),this.Ao(e,a,o,n).then(t=>(n4("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw n9("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+n0,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}To(e,t){let n=ap[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){let i=af();return new Promise((s,a)=>{let o=new nQ;o.setWithCredentials(!0),o.listenOnce(nq.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case n$.NO_ERROR:let t=o.getResponseJson();n4(am,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case n$.TIMEOUT:n4(am,`RPC '${e}' ${i} timed out`),a(new n8(n7.DEADLINE_EXCEEDED,"Request time out"));break;case n$.HTTP_ERROR:let n=o.getStatus();if(n4(am,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let r=o.getResponseJson();Array.isArray(r)&&(r=r[0]);let l=null==r?void 0:r.error;if(l&&l.status&&l.message){let u=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(n7).indexOf(t)>=0?t:n7.UNKNOWN}(l.status);a(new n8(u,l.message))}else a(new n8(n7.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new n8(n7.UNAVAILABLE,"Connection failed."));break;default:n6()}}finally{n4(am,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);n4(am,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Ro(e,t,n){let r=af(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nz(),a=nB(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new nG({})),this.Eo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let c=i.join("");n4(am,`Creating RPC '${e}' stream ${r}: ${c}`,l);let h=s.createWebChannel(c,l),d=!1,f=!1,p=new ag({ro:t=>{f?n4(am,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(n4(am,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),n4(am,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},oo:()=>h.close()}),g=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return g(h,nW.EventType.OPEN,()=>{f||n4(am,`RPC '${e}' stream ${r} transport opened.`)}),g(h,nW.EventType.CLOSE,()=>{f||(f=!0,n4(am,`RPC '${e}' stream ${r} transport closed`),p.wo())}),g(h,nW.EventType.ERROR,t=>{f||(f=!0,n9(am,`RPC '${e}' stream ${r} transport errored:`,t),p.wo(new n8(n7.UNAVAILABLE,"The operation could not be completed")))}),g(h,nW.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||n6();let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){n4(am,`RPC '${e}' stream ${r} received error:`,s);let a=s.status,l=function(e){let t=o[e];if(void 0!==t)return sl(t)}(a),u=s.message;void 0===l&&(l=n7.INTERNAL,u="Unknown error status: "+a+" with message "+s.message),f=!0,p.wo(new n8(l,u)),h.close()}else n4(am,`RPC '${e}' stream ${r} received:`,i),p._o(i)}}),g(a,nH.STAT_EVENT,t=>{t.stat===nK.PROXY?n4(am,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===nK.NOPROXY&&n4(am,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function av(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(e){return new sA(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();let t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&n4("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,n,r,i,s,a,o){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new aE(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===n7.RESOURCE_EXHAUSTED?(n5(t.toString()),n5("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===n7.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;let e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Fo===t&&this.Zo(e,n)},t=>{e(()=>{let e=new n8(n7.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)})})}Zo(e,t){let n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(e=>{n(()=>this.tu(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return n4("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(n4("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a_ extends ab{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:n6(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||n6(),rM.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||n6(),rM.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?n7.UNKNOWN:sl(e.code);return new n8(t,e.message||"")}(l);n=new sE(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let c=t.documentChange;c.document,c.document.name,c.document.updateTime;let h=sM(e,c.document.name),d=sD(c.document.updateTime),f=c.document.createTime?sD(c.document.createTime):rf.min(),p=new r3({mapValue:{fields:c.document.fields}}),g=r6.newFoundDocument(h,d,f,p),m=c.targetIds||[],y=c.removedTargetIds||[];n=new sv(m,y,g.key,g)}else if("documentDelete"in t){t.documentDelete;let v=t.documentDelete;v.document;let w=sM(e,v.document),E=v.readTime?sD(v.readTime):rf.min(),b=r6.newNoDocument(w,E),_=v.removedTargetIds||[];n=new sv([],_,b.key,b)}else if("documentRemove"in t){t.documentRemove;let T=t.documentRemove;T.document;let I=sM(e,T.document),C=T.removedTargetIds||[];n=new sv([],C,I,null)}else{if(!("filter"in t))return n6();{t.filter;let S=t.filter;S.targetId;let{count:k=0,unchangedNames:A}=S,N=new so(k,A),R=S.targetId;n=new sw(R,N)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return rf.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rf.min():t.readTime?sD(t.readTime):rf.min()}(e);return this.listener.nu(t,n)}su(e){let t={};t.database=sV(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=ib(r)?{documents:{documents:[sF(e,r.path)]}}:{query:function(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=sF(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=sF(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof ii?function(e){if("=="===e.op){if(r2(e.value))return{unaryFilter:{field:sz(e.field),op:"IS_NAN"}};if(r1(e.value))return{unaryFilter:{field:sz(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(r2(e.value))return{unaryFilter:{field:sz(e.field),op:"IS_NOT_NAN"}};if(r1(e.value))return{unaryFilter:{field:sz(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sz(e.field),op:sS[e.op],value:e.value}}}(t):t instanceof is?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:sk[t.op],filters:n}}}(t):n6()}(is.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:sz(e.field),direction:sC[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=sN(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=sO(e,t.resumeToken);let i=sN(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(rf.min())>0){n.readTime=sR(e,t.snapshotVersion.toTimestamp());let s=sN(e,t.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return n6()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){let t={};t.database=sV(this.serializer),t.removeTarget=e,this.Wo(t)}}class aT extends ab{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||n6(),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||n6(),t.map(e=>{let t;return(t=e.updateTime?sD(e.updateTime):sD(n)).isEqual(rf.min())&&(t=sD(n)),new i0(t,e.transformResults||[])})):[]),i=sD(e.commitTime);return this.listener.cu(i,r)}return e.writeResults&&0!==e.writeResults.length&&n6(),this.ru=!0,this.listener.au()}hu(){let e={};e.database=sV(this.serializer),this.Wo(e)}uu(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof i6)r={update:sj(e,t.key,t.value)};else if(t instanceof sn)r={delete:sx(e,t.key)};else if(t instanceof i7)r={update:sj(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sr))return n6();r={verify:sx(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof iK)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof iG)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof iQ)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof iJ)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw n6()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:sR(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:n6()),r})(this.serializer,e))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new n8(n7.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===n7.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new n8(n7.UNKNOWN,e.toString())})}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.vo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===n7.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new n8(n7.UNKNOWN,e.toString())})}terminate(){this.lu=!0}}class aC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(n5(t),this.mu=!1):n4("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(e=>{n.enqueueAndForget(async()=>{ax(this)&&(n4("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.vu.add(4),await aA(e),e.bu.set("Unknown"),e.vu.delete(4),await ak(e)}(this))})}),this.bu=new aC(n,r)}}async function ak(e){if(ax(e))for(let t of e.Ru)await t(!0)}async function aA(e){for(let t of e.Ru)await t(!1)}function aN(e,t){e.Au.has(t.targetId)||(e.Au.set(t.targetId,t),aP(e)?aL(e):aX(e).Ko()&&aO(e,t))}function aR(e,t){let n=aX(e);e.Au.delete(t),n.Ko()&&aD(e,t),0===e.Au.size&&(n.Ko()?n.jo():ax(e)&&e.bu.set("Unknown"))}function aO(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rf.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}aX(e).su(t)}function aD(e,t){e.Vu.qt(t),aX(e).iu(t)}function aL(e){e.Vu=new s_({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),aX(e).start(),e.bu.gu()}function aP(e){return ax(e)&&!aX(e).Uo()&&e.Au.size>0}function ax(e){return 0===e.vu.size}async function aM(e){e.Au.forEach((t,n)=>{aO(e,t)})}async function aF(e,t){e.Vu=void 0,aP(e)?(e.bu.Iu(t),aL(e)):e.bu.set("Unknown")}async function aV(e,t,n){if(e.bu.set("Online"),t instanceof sE&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(r){n4("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await aU(e,r)}else if(t instanceof sv?e.Vu.Ht(t):t instanceof sw?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(rf.min()))try{let i=await as(e.localStore);n.compareTo(i)>=0&&await function(e,t){let n=e.Vu.ce(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(rM.EMPTY_BYTE_STRING,r.snapshotVersion)),aD(e,t);let i=new sq(r.target,t,n,r.sequenceNumber);aO(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){n4("RemoteStore","Failed to raise snapshot:",s),await aU(e,s)}}async function aU(e,t,n){if(!rT(t))throw t;e.vu.add(1),await aA(e),e.bu.set("Offline"),n||(n=()=>as(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{n4("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ak(e)})}function aj(e,t){return t().catch(n=>aU(e,n,t))}async function az(e){let t=aJ(e),n=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ax(e)&&e.Eu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Eu.length&&t.jo();break}n=r.batchId,function(e,t){e.Eu.push(t);let n=aJ(e);n.Ko()&&n.ou&&n.uu(t.mutations)}(e,r)}catch(i){await aU(e,i)}aB(e)&&a$(e)}function aB(e){return ax(e)&&!aJ(e).Uo()&&e.Eu.length>0}function a$(e){aJ(e).start()}async function aq(e){aJ(e).hu()}async function aH(e){let t=aJ(e);for(let n of e.Eu)t.uu(n.mutations)}async function aK(e,t,n){let r=e.Eu.shift(),i=ss.from(r,t,n);await aj(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await az(e)}async function aG(e,t){t&&aJ(e).ou&&await async function(e,t){var n;if(function(e){switch(e){default:return n6();case n7.CANCELLED:case n7.UNKNOWN:case n7.DEADLINE_EXCEEDED:case n7.RESOURCE_EXHAUSTED:case n7.INTERNAL:case n7.UNAVAILABLE:case n7.UNAUTHENTICATED:return!1;case n7.INVALID_ARGUMENT:case n7.NOT_FOUND:case n7.ALREADY_EXISTS:case n7.PERMISSION_DENIED:case n7.FAILED_PRECONDITION:case n7.ABORTED:case n7.OUT_OF_RANGE:case n7.UNIMPLEMENTED:case n7.DATA_LOSS:return!0}}(n=t.code)&&n!==n7.ABORTED){let r=e.Eu.shift();aJ(e).Qo(),await aj(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await az(e)}}(e,t),aB(e)&&a$(e)}async function aW(e,t){e.asyncQueue.verifyOperationInProgress(),n4("RemoteStore","RemoteStore received new credentials");let n=ax(e);e.vu.add(3),await aA(e),n&&e.bu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.vu.delete(3),await ak(e)}async function aQ(e,t){t?(e.vu.delete(2),await ak(e)):t||(e.vu.add(2),await aA(e),e.bu.set("Unknown"))}function aX(e){var t,n,r;return e.Su||(e.Su=(t=e.datastore,n=e.asyncQueue,r={uo:aM.bind(null,e),ao:aF.bind(null,e),nu:aV.bind(null,e)},t.fu(),new a_(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ru.push(async t=>{t?(e.Su.Qo(),aP(e)?aL(e):e.bu.set("Unknown")):(await e.Su.stop(),e.Vu=void 0)})),e.Su}function aJ(e){var t,n,r;return e.Du||(e.Du=(t=e.datastore,n=e.asyncQueue,r={uo:aq.bind(null,e),ao:aG.bind(null,e),au:aH.bind(null,e),cu:aK.bind(null,e)},t.fu(),new aT(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ru.push(async t=>{t?(e.Du.Qo(),await az(e)):(await e.Du.stop(),e.Eu.length>0&&(n4("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aY{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new aY(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new n8(n7.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aZ(e,t){if(n5("AsyncQueue",`${t}: ${e}`),rT(e))return new n8(n7.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.comparator=e?(t,n)=>e(t,n)||rv.comparator(t.key,n.key):(e,t)=>rv.comparator(e.key,t.key),this.keyedMap=ix(),this.sortedSet=new rN(this.comparator)}static emptySet(e){return new a0(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof a0)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new a0;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.Cu=new rN(rv.comparator)}track(e){let t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):n6():this.Cu=this.Cu.insert(t,e)}xu(){let e=[];return this.Cu.inorderTraversal((t,n)=>{e.push(n)}),e}}class a2{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new a2(e,t,a0.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ik(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(){this.Nu=void 0,this.listeners=[]}}class a5{constructor(){this.queries=new iD(e=>iA(e),ik),this.onlineState="Unknown",this.ku=new Set}}async function a9(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new a4),r)try{i.Nu=await e.onListen(n)}catch(a){let s=aZ(a,`Initialization of query '${iN(t.query)}' failed`);return void t.onError(s)}e.queries.set(n,i),i.listeners.push(t),t.Mu(e.onlineState),i.Nu&&t.$u(i.Nu)&&a8(e)}async function a3(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let s=i.listeners.indexOf(t);s>=0&&(i.listeners.splice(s,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function a6(e,t){let n=!1;for(let r of t){let i=r.query,s=e.queries.get(i);if(s){for(let a of s.listeners)a.$u(r)&&(n=!0);s.Nu=r}}n&&a8(e)}function a7(e,t,n){let r=e.queries.get(t);if(r)for(let i of r.listeners)i.onError(n);e.queries.delete(t)}function a8(e){e.ku.forEach(e=>{e.next()})}class oe{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new a2(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),r=!0):this.qu(e,this.onlineState)&&(this.Uu(e),r=!0),this.Bu=e,r}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){return!e.fromCache||(!this.options.Ku||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;let t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=a2.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.key=e}}class on{constructor(e){this.key=e}}class or{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ij(),this.mutatedKeys=ij(),this.tc=iO(e),this.ec=new a0(this.tc)}get nc(){return this.Yu}sc(e,t){let n=t?t.ic:new a1,r=t?t.ec:this.ec,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=iR(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.rc(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.tc(c,o)>0||l&&0>this.tc(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let u="F"===this.query.limitType?s.last():s.first();s=s.delete(u.key),i=i.delete(u.key),n.track({type:1,doc:u})}return{ec:s,ic:n,zi:a,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;let i=e.ic.xu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return n6()}};return n(e)-n(t)})(e.type,t.type)||this.tc(e.doc,t.doc)),this.oc(n);let s=t?this.uc():[],a=0===this.Zu.size&&this.current?1:0,o=a!==this.Xu;return(this.Xu=a,0!==i.length||o)?{snapshot:new a2(this.query,e.ec,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new a1,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(e=>this.Yu=this.Yu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Yu=this.Yu.delete(e)),this.current=e.current)}uc(){if(!this.current)return[];let e=this.Zu;this.Zu=ij(),this.ec.forEach(e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))});let t=[];return e.forEach(e=>{this.Zu.has(e)||t.push(new on(e))}),this.Zu.forEach(n=>{e.has(n)||t.push(new ot(n))}),t}hc(e){this.Yu=e.ir,this.Zu=ij();let t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return a2.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class oi{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class os{constructor(e){this.key=e,this.fc=!1}}class oa{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new iD(e=>iA(e),ik),this._c=new Map,this.mc=new Set,this.gc=new rN(rv.comparator),this.yc=new Map,this.Ic=new s2,this.Tc={},this.Ec=new Map,this.Ac=sX.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function oo(e,t){let n,r;let i=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=oh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=oI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=of.bind(null,t),t.dc.nu=a6.bind(null,t.eventManager),t.dc.Pc=a7.bind(null,t.eventManager),t}(e),s=i.wc.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.lc();else{let a=await function(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Bs.getTargetData(e,t).next(i=>i?(r=i,r_.resolve(r)):n.Bs.allocateTargetId(e).next(i=>(r=new sq(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e})}(i.localStore,iC(t)),o=i.sharedClientState.addLocalQueryTarget(a.targetId);r=await ol(i,t,n=a.targetId,"current"===o,a.resumeToken),i.isPrimaryClient&&aN(i.remoteStore,a)}return r}async function ol(e,t,n,r,i){e.Rc=(t,n,r)=>(async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await ao(e.localStore,t.query,!1).then(({documents:e})=>t.view.sc(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return oE(e,t.targetId,a.cc),a.snapshot})(e,t,n,r);let s=await ao(e.localStore,t,!0),a=new or(t,s.ir),o=a.sc(s.documents),l=sy.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);oE(e,n,u.cc);let c=new oi(t,n,a);return e.wc.set(t,c),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function ou(e,t){let n=e.wc.get(t),r=e._c.get(n.targetId);if(r.length>1)return e._c.set(n.targetId,r.filter(e=>!ik(e,t))),void e.wc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await aa(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),aR(e.remoteStore,n.targetId),ov(e,n.targetId)}).catch(rb)):(ov(e,n.targetId),await aa(e.localStore,n.targetId,!0))}async function oc(e,t,n){let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=op.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=og.bind(null,t),t}(e);try{var i,s;let a;let o=await function(e,t){let n,r;let i=rd.now(),s=t.reduce((e,t)=>e.add(t.key),ij());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=iL,l=ij();return e.Zi.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let o of t){let l=function(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=iH(r.transform,i||null);null!=s&&(null===n&&(n=r3.empty()),n.set(r.field,s))}return n||null}(o,n.get(o.key).overlayedDocument);null!=l&&s.push(new i7(o.key,l,function e(t){let n=[];return rk(t.fields,(t,r)=>{let i=new ry([t]);if(r4(r)){let s=e(r.mapValue).fields;if(0===s.length)n.push(i);else for(let a of s)n.push(i.child(a))}else n.push(i)}),new rP(n)}(l.value.mapValue),i1.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:iM(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),i=r,s=o.batchId,(a=i.Tc[i.currentUser.toKey()])||(a=new rN(rc)),a=a.insert(s,n),i.Tc[i.currentUser.toKey()]=a,await o_(r,o.changes),await az(r.remoteStore)}catch(u){let l=aZ(u,"Failed to persist write");n.reject(l)}}async function oh(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var s;let a,o;let l=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=i.get(a);if(!l)return;u.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a)));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(rM.EMPTY_BYTE_STRING,rf.min()).withLastLimboFreeSnapshotVersion(rf.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),o=c,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(n.Bs.updateTargetData(e,c))});let c=iL,h=ij();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((s=t.documentUpdates,a=ij(),o=ij(),s.forEach(e=>a=a.add(e)),l.getEntries(e,a).next(e=>{let t=iL;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(rf.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):n4("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{nr:t,sr:o}})).next(e=>{c=e.nr,h=e.sr})),!r.isEqual(rf.min())){let d=n.Bs.getLastRemoteSnapshotVersion(e).next(t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r));u.push(d)}return r_.waitFor(u).next(()=>l.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,c,h)).next(()=>c)}).then(e=>(n.Ji=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.yc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||n6(),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?r.fc||n6():t.removedDocuments.size>0&&(r.fc||n6(),r.fc=!1))}),await o_(e,n,t)}catch(r){await rb(r)}}function od(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let i=[];r.wc.forEach((e,n)=>{let r=n.view.Mu(t);r.snapshot&&i.push(r.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let i of n.listeners)i.Mu(t)&&(r=!0)}),r&&a8(n)}(r.eventManager,t),i.length&&r.dc.nu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function of(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.yc.get(t),s=i&&i.key;if(s){let a=new rN(rv.comparator);a=a.insert(s,r6.newNoDocument(s,rf.min()));let o=ij().add(s),l=new sm(rf.min(),new Map,new rN(rc),a,o);await oh(r,l),r.gc=r.gc.remove(s),r.yc.delete(t),ob(r)}else await aa(r.localStore,t,!1).then(()=>ov(r,t,n)).catch(rb)}async function op(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=r_.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||n6(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ij();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});oy(e,r,null),om(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await o_(e,i)}catch(s){await rb(s)}}async function og(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||n6(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});oy(e,t,n),om(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await o_(e,i)}catch(s){await rb(s)}}function om(e,t){(e.Ec.get(t)||[]).forEach(e=>{e.resolve()}),e.Ec.delete(t)}function oy(e,t,n){let r=e,i=r.Tc[r.currentUser.toKey()];if(i){let s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function ov(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e._c.get(t)))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(t=>{e.Ic.containsKey(t)||ow(e,t)})}function ow(e,t){e.mc.delete(t.path.canonicalString());let n=e.gc.get(t);null!==n&&(aR(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),ob(e))}function oE(e,t,n){for(let r of n)r instanceof ot?(e.Ic.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(n4("SyncEngine","New document in limbo: "+n),e.mc.add(r),ob(e))}(e,r)):r instanceof on?(n4("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||ow(e,r.key)):n6()}function ob(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){var t;let n=e.mc.values().next().value;e.mc.delete(n);let r=new rv(rg.fromString(n)),i=e.Ac.next();e.yc.set(i,new os(r)),e.gc=e.gc.insert(r,i),aN(e.remoteStore,new sq(iC((t=r.path,new i_(t))),i,"TargetPurposeLimboResolution",rI.ct))}}async function o_(e,t,n){let r=[],i=[],s=[];e.wc.isEmpty()||(e.wc.forEach((a,o)=>{s.push(e.Rc(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let s=at.Li(o.targetId,t);i.push(s)}}))}),await Promise.all(s),e.dc.nu(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>r_.forEach(t,t=>r_.forEach(t.Fi,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>r_.forEach(t.Bi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!rT(r))throw r;n4("LocalStore","Failed to update sequence numbers: "+r)}for(let i of t){let s=i.targetId;if(!i.fromCache){let a=n.Ji.get(s),o=a.snapshotVersion,l=a.withLastLimboFreeSnapshotVersion(o);n.Ji=n.Ji.insert(s,l)}}}(e.localStore,i))}async function oT(e,t){let n=e;if(!n.currentUser.isEqual(t)){n4("SyncEngine","User change. New user:",t.toKey());let r=await ai(n.localStore,t);n.currentUser=t,n.Ec.forEach(e=>{e.forEach(e=>{e.reject(new n8(n7.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.Ec.clear(),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await o_(n,r.er)}}function oI(e,t){let n=e.yc.get(t);if(n&&n.fc)return ij().add(n.key);{let r=ij(),i=e._c.get(t);if(!i)return r;for(let s of i){let a=e.wc.get(s);r=r.unionWith(a.view.nc)}return r}}class oC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=aw(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new an,r=e.initialUser,i=this.serializer,new ar(t,n,r,i)}createPersistence(e){return new s7(ae.zs,this.serializer)}createSharedClientState(e){return new au}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oS{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>od(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oT.bind(null,this.syncEngine),await aQ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a5}createDatastore(e){var t,n,r;let i=aw(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new ay(t));return n=e.authCredentials,r=e.appCheckCredentials,new aI(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>od(this.syncEngine,e,0),s=ah.D()?new ah:new ac,new aS(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new oa(e,t,n,r,i,s);return a&&(o.vc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){n4("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await aA(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):n5("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nZ.UNAUTHENTICATED,this.clientId=ru.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{n4("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(n4("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new n8(n7.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=aZ(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function oN(e,t){e.asyncQueue.verifyOperationInProgress(),n4("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await ai(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function oR(e,t){e.asyncQueue.verifyOperationInProgress();let n=await oO(e);n4("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>aW(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>aW(t.remoteStore,n)),e._onlineComponents=t}async function oO(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){n4("FirestoreClient","Using user provided OfflineComponentProvider");try{await oN(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===n7.FAILED_PRECONDITION||t.code===n7.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;n9("Error using user provided cache. Falling back to memory cache: "+t),await oN(e,new oC)}}else n4("FirestoreClient","Using default OfflineComponentProvider"),await oN(e,new oC)}return e._offlineComponents}async function oD(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(n4("FirestoreClient","Using user provided OnlineComponentProvider"),await oR(e,e._uninitializedComponentsProvider._online)):(n4("FirestoreClient","Using default OnlineComponentProvider"),await oR(e,new oS))),e._onlineComponents}async function oL(e){let t=await oD(e),n=t.eventManager;return n.onListen=oo.bind(null,t.syncEngine),n.onUnlisten=ou.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ox=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(e,t,n){if(!n)throw new n8(n7.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function oF(e){if(!rv.isDocumentKey(e))throw new n8(n7.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oV(e){if(rv.isDocumentKey(e))throw new n8(n7.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oU(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":n6()}function oj(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new n8(n7.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oU(e);throw new n8(n7.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oz{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new n8(n7.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new n8(n7.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new n8(n7.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oP(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new n8(n7.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new n8(n7.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new n8(n7.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oB{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oz({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new n8(n7.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new n8(n7.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oz(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rn;switch(e.type){case"firstParty":return new ra(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new n8(n7.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ox.get(e);t&&(n4("ComponentProvider","Removing Datastore"),ox.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oH(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new o$(this.firestore,e,this._key)}}class oq{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new oq(this.firestore,e,this._query)}}class oH extends oq{constructor(e,t,n){super(e,t,new i_(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new o$(this.firestore,null,new rv(e))}withConverter(e){return new oH(this.firestore,e,this._path)}}function oK(e,t,...n){if(e=(0,f.m9)(e),oM("collection","path",t),e instanceof oB){let r=rg.fromString(t,...n);return oV(r),new oH(e,null,r)}{if(!(e instanceof o$||e instanceof oH))throw new n8(n7.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(rg.fromString(t,...n));return oV(i),new oH(e.firestore,null,i)}}function oG(e,t,...n){if(e=(0,f.m9)(e),1==arguments.length&&(t=ru.A()),oM("doc","path",t),e instanceof oB){let r=rg.fromString(t,...n);return oF(r),new o$(e,null,new rv(r))}{if(!(e instanceof o$||e instanceof oH))throw new n8(n7.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(rg.fromString(t,...n));return oF(i),new o$(e.firestore,e instanceof oH?e.converter:null,new rv(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oW{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new aE(this,"async_queue_retry"),this.Xc=()=>{let e=av();e&&n4("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};let e=av();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;let t=av();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});let t=new re;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!rT(e))throw e;n4("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){let t=this.Gc.then(()=>(this.Hc=!0,e().catch(e=>{let t;this.Wc=e,this.Hc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw n5("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Hc=!1,e))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);let r=aY.createAndSchedule(this,e,t,n,e=>this.na(e));return this.zc.push(r),r}Zc(){this.Wc&&n6()}verifyOperationInProgress(){}async sa(){let e;do await (e=this.Gc);while(e!==this.Gc)}ia(e){for(let t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{for(let t of(this.zc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.zc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){let t=this.zc.indexOf(e);this.zc.splice(t,1)}}function oQ(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class oX extends oB{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oW,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oZ(this),this._firestoreClient.terminate()}}function oJ(e,t){let n="object"==typeof e?e:(0,c.Mq)(),r=(0,c.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let i=(0,f.P0)("firestore");i&&function(e,t,n,r={}){var i;let s=(e=oj(e,oB))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&n9("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let o,l;if("string"==typeof r.mockUserToken)o=r.mockUserToken,l=nZ.MOCK_USER;else{o=(0,f.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new n8(n7.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nZ(u)}e._authCredentials=new rr(new rt(o,l))}}(r,...i)}return r}function oY(e){return e._firestoreClient||oZ(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oZ(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new rq(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,oP(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new oA(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this._byteString=e}static fromBase64String(e){try{return new o0(rM.fromBase64String(e))}catch(t){throw new n8(n7.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new o0(rM.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new n8(n7.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ry(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new n8(n7.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new n8(n7.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return rc(this._lat,e._lat)||rc(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o5=/^__.*__$/;class o9{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new i7(e,this.data,this.fieldMask,t,this.fieldTransforms):new i6(e,this.data,t,this.fieldTransforms)}}function o3(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw n6()}}class o6{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new o6(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return lr(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(o3(this.ca)&&o5.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class o7{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||aw(e)}ya(e,t,n,r=!1){return new o6({ca:e,methodName:t,ga:n,path:ry.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o8(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rd||e instanceof o4||e instanceof o0||e instanceof o$||e instanceof o2)}function le(e,t,n){if(!o8(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=oU(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}let lt=RegExp("[~\\*/\\[\\]]");function ln(e,t,n){if(t.search(lt)>=0)throw lr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new o1(...t.split("."))._internalPath}catch(r){throw lr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lr(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new n8(n7.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new o$(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new ls(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(la("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ls extends li{data(){return super.data()}}function la(e,t){return"string"==typeof t?ln(e,t):t instanceof o1?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new n8(n7.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ll{convertValue(e,t="none"){switch(rG(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rU(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rj(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw n6()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return rk(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new o4(rU(e.latitude),rU(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=rB(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(r$(e));default:return null}}convertTimestamp(e){let t=rV(e);return new rd(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=rg.fromString(e);s$(n)||n6();let r=new rH(n.get(1),n.get(3)),i=new rv(n.popFirst(5));return r.isEqual(t)||n5(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lc extends li{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(la("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lh extends lc{data(e={}){return super.data(e)}}class ld{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lh(this._firestore,this._userDataWriter,n.key,n,new lu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new n8(n7.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let n=0;return e._snapshot.docChanges.map(t=>{let r=new lh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new lh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return n6()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class lf extends ll{constructor(e){super(),this.firestore=e}convertBytes(e){return new o0(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new o$(this.firestore,null,t)}}function lp(e){e=oj(e,oq);let t=oj(e.firestore,oX),n=oY(t),r=new lf(t);return lo(e._query),(function(e,t,n={}){let r=new re;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new ok({next:n=>{t.enqueueAndForget(()=>a3(e,a)),n.fromCache&&"server"===r.source?i.reject(new n8(n7.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new oe(n,s,{includeMetadataChanges:!0,Ku:!0});return a9(e,a)})(await oL(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new ld(t,r,e,n))}function lg(e){return lv(oj(e.firestore,oX),[new sn(e._key,i1.none())])}function lm(e,t){var n,r;let i=oj(e.firestore,oX),s=oG(e),a=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return lv(i,[(function(e,t,n,r,i,s={}){let a,o;let l=e.ya(s.merge||s.mergeFields?2:0,t,n,i);le("Data must be an object, but it was:",l,r);let u=function e(t,n){let r={};return rA(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):rk(t,(t,i)=>{let s=function t(n,r){if(o8(n=(0,f.m9)(n)))return le("Unsupported field value:",r,n),e(n,r);if(n instanceof o2)return function(e,t){if(!o3(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,r),null;if(void 0===n&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),n instanceof Array){if(r.settings.la&&4!==r.ca)throw r._a("Nested arrays are not supported");return function(e,n){let r=[],i=0;for(let s of e){let a=t(s,n.wa(i));null==a&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,r)}return function(e,t){if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!rC(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?i$(r):iB(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let s=rd.fromDate(e);return{timestampValue:sR(t.serializer,s)}}if(e instanceof rd){let a=new rd(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sR(t.serializer,a)}}if(e instanceof o4)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof o0)return{bytesValue:sO(t.serializer,e._byteString)};if(e instanceof o$){let o=t.databaseId,l=e.firestore._databaseId;if(!l.isEqual(o))throw t._a(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:sL(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${oU(e)}`)}(n,r)}(i,n.ha(t));null!=s&&(r[t]=s)}),{mapValue:{fields:r}}}(r,l);if(s.merge)a=new rP(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let c=[];for(let h of s.mergeFields){let d=function(e,t,n){if((t=(0,f.m9)(t))instanceof o1)return t._internalPath;if("string"==typeof t)return ln(e,t);throw lr("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,h,n);if(!l.contains(d))throw new n8(n7.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(c,d)||c.push(d)}a=new rP(c),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new o9(new r3(u),a,o)})(function(e){let t=e._freezeSettings(),n=aw(e._databaseId);return new o7(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore),"addDoc",s._key,a,null!==e.converter,{}).toMutation(s._key,i1.exists(!1))]).then(()=>s)}function ly(e,...t){var n,r,i,s;let a,o,l;e=(0,f.m9)(e);let u={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||oQ(t[c])||(u=t[c],c++);let h={includeMetadataChanges:u.includeMetadataChanges};if(oQ(t[c])){let d=t[c];t[c]=null===(n=d.next)||void 0===n?void 0:n.bind(d),t[c+1]=null===(r=d.error)||void 0===r?void 0:r.bind(d),t[c+2]=null===(i=d.complete)||void 0===i?void 0:i.bind(d)}if(e instanceof o$)o=oj(e.firestore,oX),s=e._key.path,l=new i_(s),a={next:n=>{t[c]&&t[c](function(e,t,n){let r=n.docs.get(t._key),i=new lf(e);return new lc(e,i,t._key,r,new lu(n.hasPendingWrites,n.fromCache),t.converter)}(o,e,n))},error:t[c+1],complete:t[c+2]};else{let p=oj(e,oq);o=oj(p.firestore,oX),l=p._query;let g=new lf(o);a={next:e=>{t[c]&&t[c](new ld(o,g,p,e))},error:t[c+1],complete:t[c+2]},lo(e._query)}return function(e,t,n,r){let i=new ok(r),s=new oe(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>a9(await oL(e),s)),()=>{i.Dc(),e.asyncQueue.enqueueAndForget(async()=>a3(await oL(e),s))}}(oY(o),l,h,a)}function lv(e,t){return function(e,t){let n=new re;return e.asyncQueue.enqueueAndForget(async()=>oc(await oD(e).then(e=>e.syncEngine),t,n)),n.promise}(oY(e),t)}!function(e,t=!0){n0=c.Jn,(0,c.Xd)(new h.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new oX(new ri(e.getProvider("auth-internal")),new rl(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new n8(n7.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rH(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,c.KN)(nY,"3.13.0",void 0),(0,c.KN)(nY,"3.13.0","esm2017")}()},2920:function(e,t,n){"use strict";n.d(t,{Ix:function(){return _},Am:function(){return R}});var r=n(7294),i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r};let s=e=>"number"==typeof e&&!isNaN(e),a=e=>"string"==typeof e,o=e=>"function"==typeof e,l=e=>a(e)||o(e)?e:null,u=e=>(0,r.isValidElement)(e)||a(e)||o(e)||s(e);function c(e){let{enter:t,exit:n,appendPosition:i=!1,collapse:s=!0,collapseDuration:a=300}=e;return function(e){let{children:o,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d}=e,f=i?`${t}--${l}`:t,p=i?`${n}--${l}`:n,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)(()=>{let e=h.current,t=f.split(" "),n=r=>{r.target===h.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,r.useEffect)(()=>{let e=h.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}(e,c,a):c()};d||(u?t():(g.current=1,e.className+=` ${p}`,e.addEventListener("animationend",t)))},[d]),r.createElement(r.Fragment,null,o)}}function h(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let d={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},f=e=>{let{theme:t,type:n,...i}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...i})},p={info:function(e){return r.createElement(f,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(f,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(f,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(f,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function m(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){let{closeToast:t,theme:n,ariaLabel:i="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":i},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function v(e){let{delay:t,isRunning:n,closeToast:s,type:a="default",hide:l,className:u,style:c,controlledProgress:h,progress:d,rtl:f,isIn:p,theme:g}=e,m=l||h&&0===d,y={...c,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};h&&(y.transform=`scaleX(${d})`);let v=i("Toastify__progress-bar",h?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":f}),w=o(u)?u({rtl:f,type:a,defaultClassName:v}):i(v,u);return r.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:w,style:y,[h&&d>=1?"onTransitionEnd":"onAnimationEnd"]:h&&d<1?null:()=>{p&&s()}})}let w=e=>{let{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:a}=function(e){let[t,n]=(0,r.useState)(!1),[i,s]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,r.useRef)(e),{autoClose:c,pauseOnHover:h,closeToast:d,onClick:f,closeOnClick:p}=e;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",b),document.addEventListener("mouseup",_),document.addEventListener("touchmove",b),document.addEventListener("touchend",_);let n=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=g(t.nativeEvent),l.y=m(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(t){if(l.boundingRect){let{top:n,bottom:r,left:i,right:s}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=i&&l.x<=s&&l.y>=n&&l.y<=r?E():w()}}function w(){n(!0)}function E(){n(!1)}function b(n){let r=a.current;l.canDrag&&r&&(l.didMove=!0,t&&E(),l.x=g(n),l.y=m(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,r.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function _(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",_);let t=a.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return s(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,r.useEffect)(()=>{u.current=e}),(0,r.useEffect)(()=>(a.current&&a.current.addEventListener("d",w,{once:!0}),o(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),()=>{let e=u.current;o(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}),[]),(0,r.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",w),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);let T={onMouseDown:y,onTouchStart:y,onMouseUp:v,onTouchEnd:v};return c&&h&&(T.onMouseEnter=E,T.onMouseLeave=w),p&&(T.onClick=e=>{f&&f(e),l.canCloseOnClick&&d()}),{playToast:w,pauseToast:E,isRunning:t,preventExitTransition:i,toastRef:a,eventHandlers:T}}(e),{closeButton:l,children:u,autoClose:c,onClick:h,type:d,hideProgressBar:f,closeToast:p,transition:w,position:E,className:b,style:_,bodyClassName:T,bodyStyle:I,progressClassName:C,progressStyle:S,updateId:k,role:A,progress:N,rtl:R,toastId:O,deleteToast:D,isIn:L,isLoading:P,iconOut:x,closeOnClick:M,theme:F}=e,V=i("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":M}),U=o(b)?b({rtl:R,position:E,type:d,defaultClassName:V}):i(V,b),j=!!N||!c,z={closeToast:p,type:d,theme:F},B=null;return!1===l||(B=o(l)?l(z):(0,r.isValidElement)(l)?(0,r.cloneElement)(l,z):y(z)),r.createElement(w,{isIn:L,done:D,position:E,preventExitTransition:n,nodeRef:s},r.createElement("div",{id:O,onClick:h,className:U,...a,style:_,ref:s},r.createElement("div",{...L&&{role:A},className:o(T)?T({type:d}):i("Toastify__toast-body",T),style:I},null!=x&&r.createElement("div",{className:i("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},x),r.createElement("div",null,u)),B,r.createElement(v,{...k&&!j?{key:`pb-${k}`}:{},rtl:R,theme:F,delay:c,isRunning:t,isIn:L,closeToast:p,hide:f,type:d,style:S,className:C,controlledProgress:j,progress:N||0})))},E=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},b=c(E("bounce",!0)),_=(c(E("slide",!0)),c(E("zoom")),c(E("flip")),(0,r.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:c,isToastActive:f}=function(e){let[,t]=(0,r.useReducer)(e=>e+1,0),[n,i]=(0,r.useState)([]),c=(0,r.useRef)(null),f=(0,r.useRef)(new Map).current,g=e=>-1!==n.indexOf(e),m=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:g,getToast:e=>f.get(e)}).current;function y(e){let{containerId:t}=e,{limit:n}=m.props;!n||t&&m.containerId!==t||(m.count-=m.queue.length,m.queue=[])}function v(e){i(t=>null==e?[]:t.filter(t=>t!==e))}function w(){let{toastContent:e,toastProps:t,staleId:n}=m.queue.shift();b(e,t,n)}function E(e,n){var i,g;let{delay:y,staleId:E,..._}=n;if(!u(e)||!c.current||m.props.enableMultiContainer&&_.containerId!==m.props.containerId||f.has(_.toastId)&&null==_.updateId)return;let{toastId:T,updateId:I,data:C}=_,{props:S}=m,k=()=>v(T),A=null==I;A&&m.count++;let N={...S,style:S.toastStyle,key:m.toastKey++,...Object.fromEntries(Object.entries(_).filter(e=>{let[t,n]=e;return null!=n})),toastId:T,updateId:I,data:C,closeToast:k,isIn:!1,className:l(_.className||S.toastClassName),bodyClassName:l(_.bodyClassName||S.bodyClassName),progressClassName:l(_.progressClassName||S.progressClassName),autoClose:!_.isLoading&&(i=_.autoClose,g=S.autoClose,!1===i||s(i)&&i>0?i:g),deleteToast(){let e=h(f.get(T),"removed");f.delete(T),d.emit(4,e);let n=m.queue.length;if(m.count=null==T?m.count-m.displayedToast:m.count-1,m.count<0&&(m.count=0),n>0){let r=null==T?m.props.limit:1;if(1===n||1===r)m.displayedToast++,w();else{let i=r>n?n:r;m.displayedToast=i;for(let s=0;s<i;s++)w()}}else t()}};N.iconOut=function(e){let{theme:t,type:n,isLoading:i,icon:l}=e,u=null,c={theme:t,type:n};return!1===l||(o(l)?u=l(c):(0,r.isValidElement)(l)?u=(0,r.cloneElement)(l,c):a(l)||s(l)?u=l:i?u=p.spinner():n in p&&(u=p[n](c))),u}(N),o(_.onOpen)&&(N.onOpen=_.onOpen),o(_.onClose)&&(N.onClose=_.onClose),N.closeButton=S.closeButton,!1===_.closeButton||u(_.closeButton)?N.closeButton=_.closeButton:!0===_.closeButton&&(N.closeButton=!u(S.closeButton)||S.closeButton);let R=e;(0,r.isValidElement)(e)&&!a(e.type)?R=(0,r.cloneElement)(e,{closeToast:k,toastProps:N,data:C}):o(e)&&(R=e({closeToast:k,toastProps:N,data:C})),S.limit&&S.limit>0&&m.count>S.limit&&A?m.queue.push({toastContent:R,toastProps:N,staleId:E}):s(y)?setTimeout(()=>{b(R,N,E)},y):b(R,N,E)}function b(e,t,n){let{toastId:r}=t;n&&f.delete(n);let s={content:e,props:t};f.set(r,s),i(e=>[...e,r].filter(e=>e!==n)),d.emit(4,h(s,null==s.props.updateId?"added":"updated"))}return(0,r.useEffect)(()=>(m.containerId=e.containerId,d.cancelEmit(3).on(0,E).on(1,e=>c.current&&v(e)).on(5,y).emit(2,m),()=>{f.clear(),d.emit(3,m)}),[]),(0,r.useEffect)(()=>{m.props=e,m.isToastActive=g,m.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,r=Array.from(f.values());return e.newestOnTop&&r.reverse(),r.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:c,isToastActive:g}}(e),{className:g,style:m,rtl:y,containerId:v}=e;return(0,r.useEffect)(()=>{t&&(t.current=c.current)},[]),r.createElement("div",{ref:c,className:"Toastify",id:v},n((e,t)=>{let n=t.length?{...m}:{...m,pointerEvents:"none"};return r.createElement("div",{className:function(e){let t=i("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":y});return o(g)?g({position:e,rtl:y,defaultClassName:t}):i(t,l(g))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:i,props:s}=e;return r.createElement(w,{...s,isIn:f(s.toastId),style:{...s.style,"--nth":n+1,"--len":t.length},key:`toast-${s.key}`},i)}))}))}));_.displayName="ToastContainer",_.defaultProps={position:"top-right",transition:b,autoClose:5e3,closeButton:y,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let T,I=new Map,C=[],S=1;function k(e,t){return I.size>0?d.emit(0,e,t):C.push({content:e,options:t}),t.toastId}function A(e,t){return{...t,type:t&&t.type||e,toastId:t&&(a(t.toastId)||s(t.toastId))?t.toastId:""+S++}}function N(e){return(t,n)=>k(t,A(e,n))}function R(e,t){return k(e,A("default",t))}R.loading=(e,t)=>k(e,A("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),R.promise=function(e,t,n){let r,{pending:i,error:s,success:l}=t;i&&(r=a(i)?R.loading(i,n):R.loading(i.render,{...n,...i}));let u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(e,t,i)=>{if(null==t)return void R.dismiss(r);let s={type:e,...u,...n,data:i},o=a(t)?{render:t}:t;return r?R.update(r,{...s,...o}):R(o.render,{...s,...o}),i},h=o(e)?e():e;return h.then(e=>c("success",l,e)).catch(e=>c("error",s,e)),h},R.success=N("success"),R.info=N("info"),R.error=N("error"),R.warning=N("warning"),R.warn=R.warning,R.dark=(e,t)=>k(e,A("default",{theme:"dark",...t})),R.dismiss=e=>{I.size>0?d.emit(1,e):C=C.filter(t=>null!=e&&t.options.toastId!==e)},R.clearWaitingQueue=function(e){return void 0===e&&(e={}),d.emit(5,e)},R.isActive=e=>{let t=!1;return I.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},R.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,r=I.get(n||T);return r&&r.getToast(e)}(e,t);if(n){let{props:r,content:i}=n,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:""+S++};s.toastId!==e&&(s.staleId=e);let a=s.render||i;delete s.render,k(a,s)}},0)},R.done=e=>{R.update(e,{progress:1})},R.onChange=e=>(d.on(4,e),()=>{d.off(4,e)}),R.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},R.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},d.on(2,e=>{T=e.containerId||e,I.set(T,e),C.forEach(e=>{d.emit(0,e.content,e.options)}),C=[]}).on(3,e=>{I.delete(e.containerId||e),0===I.size&&d.off(0).off(1).off(5)})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);