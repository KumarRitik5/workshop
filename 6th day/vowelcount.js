// let Vowels = "aeiouAEIOU"
// let Vowcount = 0;
// let ConstCounts = 0;
// let Str = "Rtitk"
// for(let i = 0 ;  i< Str.length;i++){
//     if( Vowels.includes(Str[i])){
//         Vowcount += 1;
//     }
//     else{
//         ConstCounts+=1;
//     }
// }

// console.log(Vowcount);
// console.log(ConstCounts);

let sentence="Ritik kumar hello world"

words =''
for(let i =0 ; i < sentence.length;i++){
    if(sentence[i] != " "){
        words += sentence[i]
    }
    else{
        words += sentence
    }
}
