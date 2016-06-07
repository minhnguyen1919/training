'use strict'

module.exports = function test() {
  class Animal {
    constructor (weight) {
      this.weight = weight;
    }

    info () {
      console.log('weight: ' + this.weight);
    }

    speed () {
      return this.weight / 10 + ' km/h';
    }

    eat () {
      return this.weight /20 + ' kg food';
    }

    // Note: Unlike object literals, there are no commas separating members in a class body! In fact, they’re not even allowed.

  }

  var dog = new Animal(25);

  console.log(dog.speed());
  console.log(dog.eat());

  // ---------------------------------------------------------------------------

  // In the constructor, super automatically refers to the “parent constructor”
  // In a method, it refers to the “parent object”

  // Tiger extends Animal mean to link the [[prototype]] of Tiger.prototype to Animal.prototype
  class Tiger extends Animal {
    constructor (weight, height) {
      super(weight);
      // super(..) means roughly to call new Animal(..) , but isn’t actually a usable reference to Animal itself.
      this.height = height;
    }

    info () {
      super.info();
      console.log('height: ' + this.height);
    }

  }


  var tiger = new Tiger(60, 130);
  tiger.info();
}
