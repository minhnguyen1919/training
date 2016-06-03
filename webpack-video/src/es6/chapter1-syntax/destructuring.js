'use strict';

module.exports = function test() {
  function t1() {
    return [1, 2, 3];
  }

    function t2() {
    return {
      x: 1,
      y: 2,
      z: 3,
      k: 0
    };
  }



  var [a, , c] = t1();

  console.log(a, c);

  //----------------------------------------------------------------------------

  var {x: d, z: e} = t2();

  console.log(d, e);

  var {x, y, z} = t2();

  console.log(x, y, z);



  //----------------------------------------------------------------------------

  var a, b, c, x, y, z;
  [a,b,c] = t1();
  ( { x, y, z } = t2() );

  console.log( a, b, c );
  console.log( x, y, z );

  //----------------------------------------------------------------------------

  var o1 = {};

  ( {x: o1.x, z: o1.z, y: o1.y} = t2() );

  console.log(o1);

  //----------------------------------------------------------------------------

  var which = 'k';

  ({[which]: o1[which]} = t2());

  console.log(o1);

  //------------default value---------------------------------------------------

  var [ a = 3, b = 6, c = 9, d = 12 ] = t1();
  var { x = 5, y = 10, z = 15, w = 20 } = t2();

  console.log( a, b, c, d ); // 1 2 3 12
  console.log( x, y, z, w ); // 4 5 6 20

  //------------Nested destructuring--------------------------------------------

  var a1 = [ 1, [2, 3, 4], 5 ];
  var o1 = { x: { y: { z: 6 } } };

  var [ a, [ b, c, d ], e ] = a1;
  var { x: { y: { z: w } } } = o1;

  console.log( a, b, c, d, e );   // 1 2 3 4 5
  console.log( w );               // 6


  //------------Destructuring Parameters----------------------------------------

  function foo( [ x, y ] ) {
    console.log( x, y );
  }

  foo( [ 1, 2 ] );    // 1 2
  foo( [ 1 ] );       // 1 undefined
  foo( [] );          // undefined undefined


  //-----------Destructuring Defaults + Parameter Defaults----------------------

  function f6({ x = 10 } = {}, { y } = { y: 10 }) {
    console.log( x, y );
  }

  f6();                               // 10 10
  f6( undefined, undefined );         // 10 10
  f6( {}, undefined );                // 10 10

  f6( {}, {} );                       // 10 undefined
  f6( undefined, {} );                // 10 undefined

  f6( { x: 2 }, { y: 3 } );           // 2 3


  // more example
  // function f1([ x=2, y=3, z ]) { .. }
  // function f2([ x, y, ...z], w) { .. }
  // function f3([ x, y, ...z], ...w) { .. }
  // function f4({ x: X, y }) { .. }
  // function f5({ x: X = 10, y = 20 }) { .. }
  // function f6({ x = 10 } = {}, { y } = { y: 10 }) { .. }


  //----------------------------------------------------------------------------

  // You can use the general assignments to create object mappings/transformations, such as:
  var o1 = { a: 1, b: 2, c: 3 },
      o2 = {};

  ( { a: o2.x, b: o2.y, c: o2.z } = o1 );
  console.log( o2.x, o2.y, o2.z );
  // 1 2 3


  // Or you can map an object to an array, such as:
  var o1 = { a: 1, b: 2, c: 3 },
      a2 = [];

  ( { a: a2[0], b: a2[1], c: a2[2] } = o1 );
  // [1,2,3]
  console.log( a2 );


  // Or the other way around:
  var a1 = [ 1, 2, 3 ],
      o2 = {};

  [ o2.a, o2.b, o2.c ] = a1;
  console.log( o2.a, o2.b, o2.c );
  // 1 2 3


  // Or you could reorder one array to another:
  var a1 = [ 1, 2, 3 ],
  a2 = [];

  [ a2[2], a2[0], a2[1] ] = a1;
  console.log( a2 );
  // [2,3,1]

  // You can even solve the traditional “swap two variables” task without a temporary variable:
  var x = 10, y = 20;

  [ y, x ] = [ x, y ];
  console.log( x, y );
  // 20 10

  //----------------------------------------------------------------------------
}
