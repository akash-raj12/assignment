var arr1=[1,2,3];
var arr2=[4,5,6,];
 var arr3=arr2[Symbol.iterator]();
 arr2.map(x=>{
 arr1=[...arr1,arr3.next().value];

})
console.log(arr1);


