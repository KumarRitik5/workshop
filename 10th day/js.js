// operator
// Arithmetic operato
// +,-,/,*,**,%

// comparision
// ==,===,<,>,!=

//assignment operator
//=,+=,-=,/=,**==,*=

// let age=40
// let roll_num="40"
// console.log(age===roll_num)
// let age=10
// if (age>18){
//     console.log("greate than 18")
// }
// else if(age<20){
//     console.log("age between 18 and 20")
// }

// else{
//     console.log("less than 18")
// }



// marks equal to 35 fail
// marks morethan  35 pass and grade b
// marks equal to  70 pass and grade b
// marks more than  70 pass and grade a
// marks more than  90 pass and grade a
// marks more than  90 pass and grade o

// for(let i=0;i<10;i++){
//     console.log(i)
// }
// let num=0
// do{
//     console.log("hello")
//     num++;
// }while(num>10).

// let age={"29":54,"65":65}
// console.log(typeof age)

// let age=29
// let num="10"
// console.log(num+age)


// explicit conversion
// let age=20.5
// console.log(typeof parseInt(age))
// console.log(typeof String(age))

// let name="praveen  "
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.trim())
// console.log(name.charAt(1));
// console.log(name.indexOf("e"));
// console.log(name.lastIndexOf("e"));

// console.log(name.slice(1,5))
// console.log(name.substring(1, 5))
// console.log(name.substr(1,5));
// console.log(name.replace("e","i"))
// console.log(name.replaceAll("e","i"))

// console.log(name.includes("y"))
// let name="praveen"
// for (let i=0;i<=name.length;i++){
//    console.log(name.charAt(i))
// }
// "madam"


// find the count of vowels inside string???
// let count=0
// let vowels="aeiouAEIOU"
// for(let i=0;i<=name.length;i++){
//     if(vowels.includes(name[i])){
//         count++
//     }
// }
// console.log(count);

// let sentence="praveen kumar hello world"
// // Praveen Kumar Hello World
// let word="" 
// let result=""
// for (let i=0;i<sentence.length;i++){
//     if(sentence[i]!=" "){
//         word+=sentence[i]
//     }
//     else{
//         result+=word.charAt(0).toUpperCase()+word.slice(1)+" "
//         word=""
//     } 
// }
// if (word){
//     result+=word.charAt(0).toUpperCase()+word.slice(1)
// }

// console.log(result)



// Questions
//1.  Check if Two Strings are Anagrams
// Input: "listen", "silent"
// Output: true


// let word1="listen"
// let word2="silent"

// if (word1.length!=word2.length){
//     console.log("not anagram")
// }
// else{
//     for (let i of word1){
//         if(word2.includes(i)){
//             // anagram=true
//             continue
//         }
//         else{
//             console.log("not anagram")
//             break;
//         }
//     }
// }
// console.log("its a anagram")





// 2 Find the First Non-Repeating Character
// Input: "aabbcde"
// Output: "c"

// let word="aabbcde"
// for (let i of word){
//    if( word.indexOf(i)==word.lastIndexOf(i)){
//     console.log(i)
//     break
//    }
// }




//  3.Find the Most Frequent Character
// Input: "javascript"
// Output: "a" (depending on implementation)


// let word="javascript"
// let count=0
// let letter=""
// for(let i of word){
//     let ltr_count=0

//     for (let ij of word){
//        if( i==ij){
//         ltr_count++
//        }
//     }
//     if(count<ltr_count){
//         count=ltr_count
//         letter=i
//     }
// }
// console.log(letter,"repeated",count,"times")



// 5. Remove All Digits From a String

// INPUT="BHDS2HD5443"
// let result=""
// let word="BHDS2HD5443"
// for(let i of word){
//    if( i.toLowerCase() ==i.toUpperCase()){
//     continue
//    }
//    else{
//     result+=i
//    }
// }
// console.log(result)

// 6. Count Number of Words (without .split())
// Input: "I am learning JS" → Output: 4

// let sentence="I  am learning JS"
// let word=""
// let w_count=0
// for(let i of sentence){
//     if(i!=" "){
//         word+=i
//         // console.log(i);
//     }
//     else if(word){
        
//         w_count++
//         word=""
//     }
// }
// if(word){
//     w_count++
// }
// console.log(w_count)
// 7.Replace All Spaces with Dashes
// Input: "hello world again" → "hello-world-again"

// word="hello world again"
// console.log(word.replaceAll(" ","-"));

// 8.Check if One String is Rotation of Another 

// let w1="hello"
// let w2="elloh"
// let combine_w1=w1+w1
// console.log( combine_w1.includes(w2))
// 9. countPalindromes  INPUT= ("aaa")); // Output: 6

// let word="aaa"
// let count=0
// for(let i=0;i<word.length;i++){
//     for (j=i;j<=word.length;j++){
//         // console.log(i,j)
//         if(word.slice(i,j)){
//             if(word.slice(i,j)==word.slice(i,j).split().reverse().join()){
//             count++
//         }
//         }
        
//     }
// }
// console.log(count);

//10. Remove All Adjacent Duplicates in JavaScript

// let word="aabbaccad"
// let result=""//d
// for(let i of word){
//     if (result && result[result.length-1]==i){
//         result=result.slice(0,result.length-1)
//     }

//     else result+=i
// }
// console.log(result)

// 11.runLengthEncode("aaabbcddd"));  // Output: "a3b2c1d3"
    //    012345678
// let w="aaabbcddd"
// let result=""
// let count=1

// for (let i=1;i<w.length;i++){
//    if( w[i]==w[i-1]){
//     count++
//    }
//    else{
//     result+=w[i-1]+count
//     count=1
//    }
// }
// result+=w[w.length-1]+count
// console.log(result)

// 12."a-bC-dEf-ghIj"--->>output  // "j-Ih-gfE-dCba"

// let w="a-bC-dEf-ghIj"
// let result=""
// let alpha=""
// for (let i of w){
//     if(i!="-"){
//         alpha=i+alpha
//     }
// }
// for(let i of w){
//     if(i!="-"){
//         result+=alpha[0]
//         alpha=alpha.slice(1)
//     }
//     else result+=i
// }
// console.log(result)

// 13 longestUniqueSubstring
// "abcabcbb"===>output->"abc"


// let w="abcabcbb"
// let substring=""
// let count=0

// for(let i=0;i<w.length;i++){
//     let sub=""
//     for (let j=i;j<w.length;j++){
//         if(!sub.includes(w[j])){
//             sub+=w[j]
//         }
//         else{
//             break
//         }
//     }
//     if(count<sub.length){
//         substring=sub
//         count=sub.length
//     }
// }
// console.log(substring);
//////////////////////////////////////


//14.reverse words in a sentence
//input->Hello world--->output==>world Hello

// let word="Hello world"
// let v=word.split(" ").reverse().join(" ")
// console.log(v)

// Input: "John Ronald Reuel Tolkien"
// Output: "J.R.R. Tolkien"

// let w="John Ronald Reuel Tolkien"
// let v=w.split(" ")
// let last=v.pop()
// let result=""
// for(let i of v){
//     result+=i[0]+"."
// }
// result+=last
// console.log(result);

// . Interleave Two Strings
// Input: "abc", "123456"
// Output: "a1b2c3456"


// let v1="abc"
// let v2="123456"
// let result=""
// for(let i=0;i<Math.max(v1.length,v2.length);i++){
//     if(i<v1.length) result+=v1[i]
//     if(i<v2.length) result+=v2[i]
// }
// console.log(result);



// Reverse Vowels Only
// Input: "hello"
// Output: "holle"

// let word="hello"
// let vow=""
// let result=""
// let vowels="aeiouAEIOU"
// for(let i of word){
//     if(vowels.includes(i)) {
//         vow=i+vow
//     }
// }
// for (let i of word){
//     if(vowels.includes(i)){
//         result+=vow[0]
//         vow=vow.slice(1)
//     }
//     else result+=i
// }
// console.log(result);



// function hello(){
//     return "hello"
// }
// console.log(hello())

// const hii=function(){
//     return "hii"
// }
// console.log( hii())


// const world=()=>{
//     return "world"
// }
// // world()
// console.log(world());

// (function(){
//     console.log("heyyyyy");
// })()


// const addition=(a=5,b=5)=>{
//     return a+b
// }
// console.log(addition(4,3))



// global variable
// const hii="hlo"
// const print=()=>{
//     const local ="im local variable"
//     console.log(hii);
//     console.log(local);
// }
// print()

// console.log(local);

// Number based problems
// let number=1234
// console.log(number%10);

// number=Math.floor(number/10)
// console.log( number)


// let number=1234
// let count=0
// while(number>0){
//     number=Math.floor(number/10)
//     count++
// }
// console.log(count);

// find sum of digits
// number=1234 ==>1+2+3+4=>10


// let number=1234
// let sum=0
// while(number>0){
//     let l_digit=number%10
//     sum+=l_digit
//     number=Math.floor(number/10)
// }
// console.log(sum);


// check given number is palindrome or not

// let number=121
// let reverse=0

// let temp=number
// while(temp>0){
//     let l_digit=temp%10
//     reverse=reverse*10+l_digit
//     temp=Math.floor(temp/10)
// }
// console.log( (number==reverse) ?"palindrome":"not palindrome")



// -------------------------
// | Method                | Description                                 | Example                         |
// | --------------------- | ------------------------------------------- | ------------------------------- |
// | `Math.floor()`        | Rounds down                                 | `Math.floor(4.9) → 4`           |
// | `Math.ceil()`         | Rounds up                                   | `Math.ceil(4.1) → 5`            |
// | `Math.round()`        | Rounds to nearest                           | `Math.round(4.6) → 5`           |
// | `Math.max(a, b, ...)` | Max of values                               | `Math.max(1, 5, 3)`             |
// | `Math.min(a, b, ...)` | Min of values                               | `Math.min(1, 5, 3)`             |
// | `Math.pow(base, exp)` | Power                                       | `Math.pow(2, 3) → 8`            |
// | `Math.sqrt(n)`        | Square root                                 | `Math.sqrt(25) → 5`             |
// | `Math.abs(n)`         | Absolute value                              | `Math.abs(-5) → 5`              |
// | `Number.isInteger()`  | Checks if number is integer                 | `Number.isInteger(5.0)`         |
// | `Number.toFixed(n)`   | Rounds to n decimal places (returns string) | `(3.14159).toFixed(2) → "3.14"` |

// -----------------------------------------------------------------------------------------------------------



// repeatedly sums the digits of a number until a single-digit result:

// let number=1223543

// sum=0
// while(number>9){
//     sum=0
//     while(number>0){
//         sum+=number%10
//         number=Math.floor(number/10)
//     }
//     number=sum
// }
// console.log(number);


// Harshad Number
// Divisible by sum of its digits.


// Armstrong number
// 123=>   1**3+2**3+3**3===123

// find sum of even numbers and odd numbers from given number
// 12345678==>even=2+4+6+8;odd=1+3+5+7

// find given number is prime or not

// const prime=(number)=>{
//     for(i=2;i<(number/2)+1;i++){
//         if(number%i==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(13))

// let count=10
// let number=2
// while(count>=0){
//     if(prime(number)){
//         console.log(number);
//         count--
//     }
//     number++
// }
// find factorial of given number
// 4=>>4*3*2*1



// Perfect Number
// A number is perfect if the sum of its proper divisors (excluding itself) 
// equals the number.

// const perfec=(number)=>{
//     let sum=0
//     for(i=0;i<number;i++){
//         if(number%i==0){
//             sum+=i
//         }
//     }
//     if(sum==number) {
//         return "perfect number"
//     }
// }
// console.log(perfec(6))

// Strong Number
// # Sum of digit factorials equals the number

// const factorial=(number)=>{
//     let fact=1
//     for(let i=1;i<=number;i++){
//         fact*=i
//     }
//     return fact
// }
// const strong=(number)=>{
//     let temp=number
//     let sum=0
//     while(temp>0){
//        sum+=factorial(temp%10)
//         temp=Math.floor(temp/10)
//     }
//     return number==sum
// }
// console.log(strong(143));


// numbers.forEach((element,index)=>console.log(element,index))

// let changed=numbers.map((number)=>number*number)
// console.log(changed);

// reduce

// let sum = numbers.reduce((some,element)=>some+element)
// some=0; element=1

// console.log(sum);

// some

// console.log(numbers.some((n)=>n%2==0))

// every

// let positive=numbers.every((n)=>n>0)
// console.log(positive)

// filter
// let numbers = [1,3,5,6,7]

// console.log(numbers.filter((n)=> n%2==0))

// let greater = numbers.find((n)=>n>5)
// console.log(greater);

// find index

// let greater = numbers.findIndex((n)=>n>5)
// console.log(greater);

// numbers.push(66)
// console.log(numbers);
// numbers.pop()
// console.log(numbers);
// numbers.unshift(4)
// console.log(numbers);

// let content=["hello","hii","world"]
// content.splice(1,1,"bye")
// console.log(content);
// content.splice(1,"Hii")
// console.log(content);

// let arr1=[2,4,6,7]
// let arr2=[3,345,6,7]
// let arr3=arr1.concat(arr2)
// console.log(arr3)

// 1.find the missing from given array
// let numbers=[1,2,3,4,6,7,8,9]
// for(i=1;i<numbers.length+1;i++){
//     if(i==numbers[i-1]){
//         continue
//     }
//     else
//         console.log(i);
//         break
// }

// 2.find the 2 missing from given array
// let numbers=[1,3,5,6]
// let missing=[]
// for (i=1;i<=numbers.length+2;i++){
//     if(!numbers.includes(i)){
//         missing.push(i)
//     }
// }
// console.log(missing);

// two sum
// input [1,2,4,5,6,8],10

// const twoSum=(list,sum)=>{
//     for (let i=0;i<list.length;i++){
//         for(let j=i+1;j<list.length;j++){
//             if(list[i]+list[j]==sum){
//                 return [i,j]
//             }
//         }
//     }
//     return []
// }
// console.log(twoSum([1,2,4,5,6,8],10));

// move all the zeroes to the end 
// input : [1,32,0,0,42,44,2,5,2,0]
// function moveZeroesToEnd(arr) {
//     let result = [];
//     let zeroCount = 0;
//     for (let num of arr) {
//         if (num == 0) {
//             zeroCount++;
//         } else {
//             result.push(num);
//         }
//     }
//     while (zeroCount) {
//         result.push(0);
//         zeroCount--;
//     }
//     return result;
// }

// const input = [1,32,0,0,42,44,2,5,2,0];
// console.log(moveZeroesToEnd(input));

// [2,-4,-4,6,-5,0,-3,5,9]
// find the max sum from the two numbers of the array 
// [2,-4,-4,,6,-5,0,-3,5,9]
// if the sum is the negative make it the zero 

// let numbers = [2,-4,-4,,6,-5,0,-3,5,9]


// function findMaxSum(numbers){
//     let maxSum = Number.NEGATIVE_INFINITY;
//     for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] !== undefined && numbers[j] !== undefined) {
//             let sum = numbers[i] + numbers[j];
//             if (sum > maxSum) {
//                 maxSum = sum;
//             }
//         }
//     }
// }
//     if (maxSum < 0) {
//     maxSum = 0;
// }
//     return maxSum
// }



// console.log(findMaxSum(numbers));