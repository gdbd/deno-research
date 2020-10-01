import { add, multiply } from './deps.ts'
import {add0, hello, multiply0} from './ext.ts'


console.log(hello("john"));
console.log(hello("Sarah"));
console.log(hello("kai"));


console.log(add(1,3));
console.log(add0(1,3));