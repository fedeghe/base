/*
The MIT License (MIT)

Copyright (c) 2019 <Federico Ghedina <federico.ghedina@gmail.com>>

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
!function(n,t){"use strict";var r={};!function(){function n(t,r,e){t=t.replace(/^\//,"");var i,c=t.split(/\.|\//),o=c.length;return void 0===e&&(e=this),void 0===r&&(r={}),"function"==typeof r&&(r=r()),e[c[0]]||(e[c[0]]=1===o?r:{}),i=e[c[0]],o>1?n(c.slice(1).join("."),r,e[c[0]]):i}function t(){var n=Array.prototype.slice.call(arguments,0);return function(t){return n.reduceRight(function(n,t){return t(n)},t)}}function e(){var n=Array.prototype.slice.call(arguments,0);return function(t){return n.reduce(function(n,t){return t(n)},t)}}r.makens=n,r.compose=t,r.pipe=e}(),t.BASE=r}(0,this);