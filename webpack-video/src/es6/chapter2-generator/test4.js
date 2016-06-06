'use strict';

module.exports = function test () {

  // ------Gen­er­a­tor invo­ca­tion and arguments-----------------------------------

  /*
    There are 2 tricky aspects when deal­ing with gen­er­a­tors that lend it some spe­cial behaviour.

    –Invok­ing a gen­er­a­tor func­tion doesn’t exe­cute the func­tion right away.
    –The first invo­catin of next() on a gen­er­a­tor object does not accept any arguments.

    These two aspect directly impact how and when you pass argu­ments to a generator.
  */


  function* player(name) {
    console.log('name received'); // (A)
    var life = 1000;
    yield 'Hello' + name; // (B)
    yield 'You have a life of a ' + life + ' years'; // (C)
  }

  // Lets create our generator object
  // Since our function acceps a name, we need
  // to pass this name right away
  var p = player('Goku');
  // Notice that although it seems like you executed
  // the function above, it does not print the console statement
  // at line (A)


  // Invoking next() for the first time causes
  // line (A) to be printed and then
  // pauses at line (B).
  // Notice how the first next() does not take any argument
  console.log(p.next().value); // Prints 'name received'

  // Line (C) gets printed then paused
  console.log(p.next().value); // Prints 'Hello Goku'

  // Nothing more to execute
  console.log(p.next().value); // Prints 'You have a life of a 1000 years'









  // --------Yield’ and gen­er­a­tor scope-----------------------------------------

  /*
    Last but not the least, yield can only be used when its in the scope of
    gen­er­a­tor. For exam­ple, the fol­low­ing code will not work.
  */

  function* generatorFoo() {
    [1, 2].forEach(function (item) {
      // yield item; // This wont work because the scope has changed
    });
  }

};
