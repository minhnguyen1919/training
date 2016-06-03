module.exports = function test() {
  const pi = 3.14;
  console.log('PI: ', pi);

  // ERROR
  // pi = 10;

  //----------------------------------------------------------------------------

  const arr = [1, 2, 3];

  console.log(arr);

  arr.push(4);

  console.log(arr);

  // ERROR change type/value of constant
  // arr = 'new value';

  //----------------------------------------------------------------------------

  const obj = {
    name: 'Minh',
    age: 27
  }

  console.log(obj);

  obj.name = 'Nguyen Quang';

  console.log(obj);

  // ERROR change type/value of object constant
  obj = 'new value';
}
