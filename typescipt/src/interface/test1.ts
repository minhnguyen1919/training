function wrapper() {
  interface User {
    name: string;
    id: number;
    role?: number;
  }

  function setUser (user: User) {
    console.log(user.id);
    console.log(user.name);

    // Error: Property 'namee' does not exist on type 'User'
    // console.log(user.namee);
  }

  var obj = {
    name: 'minh',
    id: 12,
    age: 'asd'
  };

  setUser(obj);


  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }

  function createSquare(config: SquareConfig) {

  }

  let mySquare = createSquare({ colour: "red", width: 100 });

}

export = wrapper;
