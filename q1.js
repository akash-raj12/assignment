const isEqual=(obj1,obj2) => {
    const obj1keys= Object.keys(obj1); //store the keys of obj1
    const obj2keys=Object.keys(obj2);// store the keys of obj2


    if(obj1keys.length !== obj2keys.length){//check for length
        return false;
    }
    for(let objkey of obj1keys){
        if(obj1[objkey] !== obj2[objkey]){ //check for value
            return false;
        }
    }
    return true;
};

var obj1={
    name:'akash',
    age:13
}
var obj2={
    name:'akash',
    age:13
}

console.log(isEqual(obj1,obj2));

