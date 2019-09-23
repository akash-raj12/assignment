
let a=[1,2];
let b=[3,4];
let c=b[Symbol.iterator]();
let arr4 = a.map(x=> {
    a=[...a,c.next().value]
   
 })
 console.log(a);
;


