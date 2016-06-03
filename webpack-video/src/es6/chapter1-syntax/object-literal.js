'use strict';

module.exports = function test() {


  //------------Concise Properties/ Method--------------------------------------

  var x = 3,
      y = 4;

  var o1 = {
    x,
    y(a, b) {
      console.log(a + b);
    }
  }

  console.log(o1);

  o1.y(2, 3);

  //-------------ES5 Getter/Setter----------------------------------------------

  var o = {
    __id: 10,
    get id() { return this.__id++; },
    set id(v) { this.__id = v; }
  };

  o.id;       // 10
  o.id;       // 11
  o.id = 20;
  o.id;       // 20
  o.__id;       // 21
  o.__id;       // 21


  //----------Computed Property Names-------------------------------------------

  var propname = 'user';

  var o2 = {
    [propname]: 'minhnguyen',
    [propname + 'func']() {
      console.log('minhnguyen');
    }
  };

  console.log(o2[propname]);

  o2[propname + 'func']();

}
