"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=d(function(g,s){
var l=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),x=require('@stdlib/ndarray-base-numel-dimension/dist'),c=require('@stdlib/ndarray-base-clip-upper-index/dist'),u=require('@stdlib/ndarray-base-stride/dist'),n=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),f=require('@stdlib/blas-ext-base-slast-index-equal/dist').ndarray;function o(e){var r,a,i,t;return i=e[0],t=e[1],r=l(e[2]),a=x(i,0),r=c(r,r<0?a:a-1),r<0?-1:f(r+1,v(i),u(i,0),n(i),v(t),u(t,0),n(t))}s.exports=o
});var p=q();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
