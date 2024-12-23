// const greet = ()=>{
//     console.log("Hi")
//     return "Boy"
//     console.log("Welcome")
// }
// greet()
// console.log(greet())


// const greet = () => {
//     for (i=0; i<=10;i++){
//         if (i>5){
//             // console.log("i Value is greater than 5")
//             return "i Value is greater than 5"
//         }else{
//             // continue Looping Conditional Statement
//             continue
//         }
//     }
// }
// console.log(greet())

let m1 = parseInt(prompt("Enter m1 marks:" ))
let m2 = parseInt(prompt("Enter m2 marks:" ))
let m3 = parseInt(prompt("Enter m3 marks:" ))
let m4 = parseInt(prompt("Enter m4 marks:" ))
let m5 = parseInt(prompt("Enter m5 marks:" ))
let m6 = parseInt(prompt("Enter m6 marks:" ))
let ans = m1+m2+m3+m4+m5+m6    
console.log(ans) 
let percentage =ans/600*100
console.log(percentage)
if (percentage < 35){
    console.log("fail")
}else if(percentage>35 && percentage < 50){
    console.log("third class")
}else if(percentage>35 && percentage < 60){
    console.log("second class")
}else if(percentage>35 && percentage < 70){
    console.log("first class")
}else if(percentage>35 && percentage < 80){
    console.log("distinction")
}else{
    console.log("invalid") 
}
