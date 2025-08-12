// destructuring
// const arr ={"one":"hello","two":"two","three":"three","four":"four"}
// const one=arr[0]
// const {one, two, three, four} = arr
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

// const hello = [1,2,5]
// const [d,f] = hello

// console.log(d);
// console.log(f);

// const obj = {"Student": "RBMI",
//     "Marks":{
//         "Maths": 90,
//         "English": 85,
//         "Science": 95
//     },
//     "location":"UP"
// }
// const{Student,Marks:{Maths,English,Science},location} = obj
// console.log(Student);
// console.log(Maths);
// console.log(English);
// console.log(Science);
// console.log(location);

// const fun=({...ages})=>{//...rest operator
//     console.log(ages)
// }
// fun({"age":"20","age1":24})


// Spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log([...arr1, ...arr2]);

// const arr = [1, 2, 3];
// const arr1={1:"r",2:"r",3:"fd"}
// const copy=[...arr];
// console.log(copy);
// copy[0]=10;
// copy[1]=20;
// copy[2]=30;
// console.log(copy);
// console.log(arr);

// const arr1={1:"r",2:"r",3:{"fd":"jh"}}
// const copy1={...arr1};
// console.log(copy1);
// copy1[1]="changed";
// console.log(copy1);
// console.log(arr1);

const arr1=[{1:"one",2:"two"},
    {3:"three",4:"four"}
]

const co=JSON.parse(JSON.stringify(arr1)); // Deep copy using JSON methods
// const co=[...arr1];
// console.log(co);
// console.log(arr1);

co[0]["1"]="three"
console.log(co[0]["1"]);
console.log(arr1);