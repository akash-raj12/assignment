/* Destructuring assignment syntax is a JavaScript expression that makes
 it possible to unpack values from arrays, or properties from objects, into distinct variables.


*/
//assign variable from object

var sid = {x:3,y:7,z:6};
const {x,y,z}= sid;
console.log(x);

//assign varible fron nested objects

const akash = {
    start:{x:1,y:2},
    end:{x:-1,y:-2}
};
const { start : {x: startX,y:startY}} = akash;
console.log(startX);

//assign variable from Arrays

const[c,,,d]=[1,2,3,4,5,6];
console.log(c,d);

// rest operator to reassign array element
const[a,b,...rest]=[1,2,3,4,5,6,7,8,9];
console.log(a,b);
console.log(rest);
