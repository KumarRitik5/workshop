// for(let i = 0 ; i < 10;i++){
//     console.log(i)
// }
// let num = 10;
// do{
//     console.log("Hello");
//     num++;
// }
// while(num<20){
//     console.log(i);
    
// }
// let age=["29"54,"65"65]
// console.log()

// let age = 29
// let num ="19"
// console.log(num+age)

// explicit conversion

// let age ="20.5"
// console.log(typeof Number(age))

// let age ="20.5"
// console.log(parseInt(age))

// let name="Ritik"
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.trim())
// console.log(name.charAt(1));
// console.log(name.indexOf("i"))
// console.log(name.lastIndexOf("i"))
// console.log(name.includes("Y"))
// console.log(name.slice(1,3))
// console.log(name.substring(1,3))
// console.log(name.substr(1,3))
// console.log(name.replace("R","V"))
// console.log(name.replaceAll("R","V"))

// for (let i=name.length;i>=0;i--){
//     console.log(name.charAt(i));
// }


let name = "MadaM";
let reversedName = "";
console.log(name.includes("Y"))

for (let i = name.length - 1; i >= 0; i--) {
  reversedName += name.charAt(i);
}

console.log(name == reversedName);