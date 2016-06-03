'use strict';

module.exports = function test() {

  var f1 = () => 12;

  var f2 = x => x * 2;

  var f3 = (x,y) => {
    var z = x * 2 + y;
    y++;
    x *= 3;

    return (x + y + z) / 2;
  };

  console.log(f1());
  console.log(f2(20));
  console.log(f3(1, 2));

}

