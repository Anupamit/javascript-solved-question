// input argument ke liye sabse pahle ek string bana hai jis mai add,sub mul and div  lena hai
// output mai ekfunction return karna hai

// function returnFun(anystring) {
    
//     function addition(a, b){
//         return a+b
//     }    
//     function substraction(a, b){
//         return a-b
//     }    
//     function multiplication(a, b){
//         return a*b
//     }    
//     function division(a, b){
//         return a/b
//     }

//     if( anystring == 'addition'){
//         return addition
//     }    
//     if( anystring == 'substraction'){
//         return substraction
//     }    
//     if( anystring == 'multiplication'){
//         return multiplication
//     }    
//     if( anystring == 'division'){
//         return division
//     }

// }

// let anystring="division"
// let result = returnFun(anystring)
// console.log(result(10, 5));

// const returnFun = (anystring)=>{
//     const addition = (a,b)=> a+b
//     const multiplication = (a,b)=> a*b
//     const substraction = (a,b)=> a-b
//     const division = (a,b)=> a/b
//     switch(anystring){
//     case 'addition':
//         return addition
//         break;   
//     case 'multiplication':
//         return multiplication
//         break;  
//     case 'substraction':
//         return substraction
//         break;    
//     case 'division':
//         return division
//         break;
//     }
// }

const name = 'anoop'
const age = 11
const arr = [age, age, (a)=>a*a, name]
const fn = (a, b)=>a+b
const nFn = arr[2]
nFn(6)
const returnFun =(anyString)=>{
    const obj = {
        addtion:fn,
        substraction:(a, b)=>a-b,
        multiplication:(a, b)=>a*b,
        division:(a, b)=>a/b,
    }
    return obj[anyString]

}