'use strict'

module.exports = function test() {

  // for... of    -  loops over the set of values produced by an iterator


  var arr = ['A', 'B', 'C', 'D'];

  for (var idx in arr) {
    console.log(idx);
  }

  for (var val of arr) {
    console.log(val);
  }



  for (var val of 'hello') {
    console.log(val);
  }
}
