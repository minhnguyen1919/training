'use strict'

module.exports = function test() {

  // class coolArray extends Array {
  //   first () {
  //     return this[0];
  //   }

  //   last () {
  //     return this[this.length];
  //   }
  // }

  // var a = new coolArray(1, 2, 3, 4);

  // console.log(a.length);

  // console.log(a);

  // console.log(a.first());

  // console.log(a.last());


  class user {
    // static count = 1;

    static log () {
      console.log('This is user class');
    }
  }

  user.log();

}
