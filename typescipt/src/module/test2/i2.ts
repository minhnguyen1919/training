
// import all
import * as e2 from './e2';

console.log(e2);





// import default
import fdefault from './e2';

console.log(fdefault);




// import func2 only
import {func2 as f2} from './e2';

console.log(f2);




// import func1 and func3
import {func1 as f1, func3 as f3} from './e2';

console.log(f1);
console.log(f3);
