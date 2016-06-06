'use strict';

module.exports = function test () {

  // ------Two way com­mu­ni­ca­tion using yield and next---------------------------

  function* doSomething() {
    // This sends 'hello' to the caller and pauses execution
    // of this function until next() is invoked
    yield 'hello';

    // This sends 'world' to the caller and pauses execution
    // of this function until next() is invoked
    // Notice the two-way communication happening at this point
    var lastInput = yield 'world';

    console.log(lastInput);
  }

  var gen2 = doSomething();
  // This prints out the value returned at the first yield and pauses
  console.log(gen2.next().value); // Prints 'hello'

  // This resumes execution after the first yield until the next
  // yield is encountered
  console.log(gen2.next().value); // Prints 'world'

  // This resumes execution after the second yield but there is
  // nothing more to execute
  gen2.next('The end.');


  // ---------------------Yield mul­ti­ple values---------------------------------
  console.log('---------------------Yield mul­ti­ple values--------------------');

  function* yieldMultiValue() {
    // Within a gen­er­a­tor func­tion yield* can be used to recur­sively iter­ate over an iterable.
    yield* ['one', 'two'];

    console.log('three');
  }

  var gen3 = yieldMultiValue();

  console.log(gen3.next().value);   // one

  console.log(gen3.next().value);   // two

  console.log(gen3.next());         // three


};
