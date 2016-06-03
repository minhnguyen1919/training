'use strict';

module.exports = function test() {
  function t1(x = 10, y = 20) {
    console.log('x + y = ', x + y);
  }

  // undefined is missing
  // null is 0

  t1(1, 2);
  t1();
  t1(1);
  t1(2, undefined);
  t1(3, null);
  t1(undefined, 2);
  t1(null, 3);
  // t1(, 2);  // ERROR

  //----------------------------------------------------------------------------

  function bar(val) {
    console.log( "bar called!" );
    return y + val;
  }

  function foo(x = y + 3, z = bar( x )) {
    console.log( x, z );
  }

  var y = 5;

  foo();                  // "bar called"
                          // 8 13

  foo( 10 );              // "bar called"
                          // 10 15
  y = 6;

  foo( undefined, 10 );   // 9 10

  //----------------------------------------------------------------------------

  var w = 1, z = 2;

  function foo( x = w + 1, y = x + 1, z = z + 1 ) {
    console.log( x, y, z );
  }

  foo(); // ReferenceError

  // the z in z + 1 finds z as a not-yet-initialized-at-that-moment parameter
  // variable, so it never tries to find the z from the outer scope.

}
