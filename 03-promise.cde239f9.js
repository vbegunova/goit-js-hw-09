var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var o=i("iQIUW");const r=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]'),a=document.querySelector('button[type="submit"');let d,s;function c(e,t){const n=Math.random()>.3;return new Promise(((i,o)=>{n?i({position:e,delay:t}):o({position:e,delay:t})})).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{timeout:1e4})})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{timeout:1e4})}))}a.addEventListener("click",(function(e){e.preventDefault();const t=Number(r.value),n=Number(l.value),i=Number(u.value);d=0,s=0,t<0||n<0||i<=0?alert("Please, fill the fields with valid values"):(i&&(a.disabled=!0),setTimeout((()=>{if(d+=t,s+=1,c(s,d),s===i)return;const e=setInterval((()=>{d+=n,s+=1,s===i&&(a.disabled=!1,clearInterval(e)),c(s,d)}),n)}),t))}));
//# sourceMappingURL=03-promise.cde239f9.js.map
