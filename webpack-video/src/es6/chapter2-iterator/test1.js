'use strict';

module.exports = function test() {

  function log(it, time) {
    for (let i = 0; i < time; i++) {
      console.log(it.next());
    }
  }

  //----------------------------------------------------------------------------

  var arr = [1, 2, 3, 4];

  var it = arr[Symbol.iterator]();

  log(it, 5);

  //----------------------------------------------------------------------------

  var str = 'Hello';

  var it2 = str[Symbol.iterator]();

  log(it2, 6);

  //----------------------------------------------------------------------------

  /*
    In fact, most iterators implement the Iterable interface. That is, most of
    them have a [Symbol.iterator] method, but note that
    iterators' [Symbol.iterator] method usually returns the iterator itself
    instead of a new iterator
  */

  let iterable = [1, 2];
  let iterator = iterable[Symbol.iterator]();
  iterator[Symbol.iterator]() === iterator; // true

  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
}
