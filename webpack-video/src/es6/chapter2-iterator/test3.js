// http://jsrocks.org/2015/09/javascript-iterables-and-iterators/

'use strict';

module.exports = function test() {

  //----------------------------------------------------------------------------

  let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
  };

  for (let item of iterable) {
      console.log(item); // 'a', 'b', 'c'
  }

  //----------------------------------------------------------------------------

  let arr = ['a', 'b'];
  let keysIterator = arr.keys(); // an alternative iterator for the data source

  console.log(keysIterator);
  console.log(keysIterator[Symbol.iterator]() === keysIterator);  // true // `keysIterator` is an Iterable iterator

  // The for-of will implicitly call `keysIterator[Symbol.iterator]()` and get back the `keysIterator`,
  // and then iterate over it.
  for (let key of keysIterator) {
    console.log(key); // 0, 1 (the array indexes)
  }

  // Another example using the entries iterator, which returns `[key, value]` iteration values.
  // We can destructure the entries iterator's iteration values for commodity.
  for (let [key, value] of arr.entries()) {
    console.log(`${key}: ${value}`); // '0: a', '1: b'
  }

  //----------------------------------------------------------------------------

  let iterable = [1, 2, 3, 4];
  let iterator1 = iterable[Symbol.iterator]();
  let iterator2 = iterable[Symbol.iterator]();

  iterator1.next(); // { value: 1, done: false }

  iterator2.next(); // { value: 1, done: false }
  iterator2.next(); // { value: 2, done: false }
  iterator2.next(); // { value: 3, done: false }

  iterator1.next(); // { value: 2, done: false }

  //----------------------------------------------------------------------------

  let iterator = [1, 2, 3, 4][Symbol.iterator]();

  iterator.next();
  iterator.next();
  for (let item of iterator) {
    console.log(item); // 3, 4
  }

  // This happens because the Iterable iterator's [Symbol.iterator] method
  // returns itself instead of a new iterator, as previously mentioned.
}
