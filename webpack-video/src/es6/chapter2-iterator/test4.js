'use strict';

module.exports = function test() {

  function countdownIterator(max) {
    // This function returns an object that implements the next() function
    // The next function is expected to return data in a specific format
    // as you can see below
    return {
      next() { // This function is automatically invoked by for-of loops
        if (max > -1) {
          return {value: max--}; // As long as you have a value
        } else {
          return {done: true}; // When you are out of values
        }
      }
    };
  }

  var countdown = {
    max: 3,
    [Symbol.iterator]() { // This key is the magic glue
      // We invoke the function to get an object with the next() function and return it
      return countdownIterator(this.max);
    }
  };

  for (let val of countdown) {
    console.log(val);
  }


  //--------------better way----------------------------------------------------

  var countdown2 = {
    max: 3,
    [Symbol.iterator]() {
      // Its ok to return 'this' because it implements the next function.
      return this;
    },
    next() {
      if (this._max === undefined) {
        this._max = this.max;
      }
      if (this._max > -1) {
        return {value: this._max--}; // As long as you have a value
      } else {
        return {done: true}; // When you are out of values
      }
    },
    // return () {
    //   this._max = undefined;
    //   return {done: true};
    // }
  };



  for (let i of countdown2) {
    console.log(i);
    break;
  }
  // Prints 3


  // this for...of continue previous for...of when break, to reset it use return()
  for (let i of countdown2) {
    console.log(i);
    break;
  }
  // Prints 2


  //----------------------------------------------------------------------------
}
