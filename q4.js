/*string literal use single, double quotes and + sign for joinin string
and template literal are new type of string literal that supprt for interpolatin(${...}) 
and multiple lines by the use of back tic(`,`)*/



let user = {name: 'tom holland'};   
let tpl = `My name is ${user.name}.`; //template literal using(` `);   
let MyVar="My name is "+ user.name+".";//string literal using (" ");

console.log("template literal= "+tpl);  
console.log("string literal = "+MyVar);