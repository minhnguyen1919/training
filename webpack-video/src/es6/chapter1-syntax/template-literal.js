'use strict';

module.exports = function test() {


  //--------------------------------------------------

  function upper(str) {
    return str.toUpperCase();
  }

  var name = 'minhnguyen';

  console.log(`hello ${name}`);

  console.log(`
    Hi ${name}
    You are ${name}
    ${upper(`Welcome`)}!
  `);

}
