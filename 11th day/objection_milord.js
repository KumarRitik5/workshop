// object
// -----------------------------------------
// let details={"age":20,
//     "college":"RBMI",
//     "name":"ritik"
// }
// let data={"age":25,
//     "college":"RBMI",
//     "name":"ritik"
// }
// console.log(data,details);
// console.log(details["name"]);
// details["location"]="Bareilly"

// console.log(details);
// details["location"]="UP"

// console.log(details);

// delete details["location"];
// console.log(details);

// console.log("school" in details);

// for (let key in details){
//     console.log(key, details[key]);
// }
// console.log(Object.keys(details));
// console.log(Object.values(details));

numbers = [1,3,4,3,5,1,3,5,2,23,4,1,2];
// find frequency of each element from array
let data = {};
for (let num of numbers) {
    data[num] = (data[num] || 0) + 1;
}
console.log(data);

// find first non repeating element from array
for (let key in data) {
    if (data[key] == 1) {
        console.log("First non-repeating element is:", key);
        break;
    }
}

// invert the object (reverse key value)
let reverse={}
for (let key in data){
    reverse[data[key]]=key
}
console.log(reverse);
// merge two objects
let data1={1:5,2:10,3:15}
let data2={1:7,4:10,3:10}

let result={};
for(let key in data1){
    result[key]=(data1[key] || 0) + (data2[key] || 0);
}
console.log(result);