'use strict';

require(['./src/bear/bear'], function (bear) {
  document.body.appendChild(bear[0]);
});

var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
console.log(a, b);
