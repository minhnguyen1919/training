function test() {
  let str: String = 'sub1';
  let list1: Number[] = [1, 2, 3];
  let list2: Array<number> = [1, 2, 3];

  console.log(str);


  // Tuple

  let arr: [string, number, boolean, string];
  arr = ['hello', 1, true, 'word'];


  // Enum

  enum Color {Red, Green, Blue};
  let c: Color = Color.Red;

  enum Color2 {Red = 1, Green, Blue = 4};
  let c2: Color2 = Color2.Green;

  // Any

  let notSure: any;
  notSure = true;
  notSure = 10;
  notSure = 'string';

  // void

  let unusable: void = undefined;

  function dontReturn ():void {
    console.log('can not return data');
  }

}

export = test;
