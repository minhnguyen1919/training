'use strict';

module.exports = function test() {

  function log(it, time) {
    for (let i = 0; i < time; i++) {
      console.log(it.next());
    }
  }

  //----------------------------------------------------------------------------

  var m = new Map();
  m.set('foo', 1);
  m.set({id: 1}, 'asnet');

  var it1 = m[Symbol.iterator]();

  var it2 = m.entries();

  log(it1, 3);

  console.log(it2);


  for (var val of m) {
    console.log(val);
  }

  //----------------------------------------------------------------------------

  let fibonacy = {
    [Symbol.iterator]() {
      let pre = 0, cur = 1;
      return {
        next(){
          [pre, cur] = [cur, cur + pre];
          return {done: false, value: cur};
        },
        return(v) {
          console.log("Fibonacci sequence abandoned.");
          return { value: v, done: true };
        }
      }
    }
  }

  for (let n of fibonacy) {
    if (n > 1000) {
      break;
    }

    console.log(n);
  }

  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
}
