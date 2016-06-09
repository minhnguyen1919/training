"use strict";
function wrapper() {
    function setUser(user) {
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
    function createSquare(config) {
    }
    var mySquare = createSquare({ colour: "red", width: 100 });
}
module.exports = wrapper;
