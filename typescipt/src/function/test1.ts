let myAdd: (baseValue:number, increment:number) => number =
  function(x: number, y: number): number {
    return x + y;
  };

let myAdd: (baseValue:number, increment:number) => void =
  function(x: number, y: number): number {
    console.log(x + y);
  };



  function buildName1(firstName: string, lastName?: string) {
      if (lastName)
          return firstName + " " + lastName;
      else
          return firstName;
  }

  let result11 = buildName1("Bob");                  // works correctly now
  let result21 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
  let result31 = buildName1("Bob", "Adams");         // ah, just right



  function buildName2(firstName: string, lastName = "Smith") {
      return firstName + " " + lastName;
  }

  let result12 = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
  let result22 = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
  // let result32 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
  let result42 = buildName2("Bob", "Adams");         // ah, just right
