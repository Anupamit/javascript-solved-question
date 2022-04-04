// let num = [1,2,3,4,7,8,9, 11, 14, 15, 16]
// function rangeFind(ranges) {
//     let result=[]
//     let rangeFD = 0
//     let rangeLD = 0

// for(let j = 0; j < ranges.length; j++){
//     const element = ranges[j];
//         if(j== 0){
//             rangeFD = element
//         }else if(j == ranges.length -1 &&  rangeLD+1 == element){
//             rangeLD = element
//             result.push(rangeFD+'->'+rangeLD)
//         }else if(rangeLD +1 != element){
//             console.log(j, rangeFD, rangeLD)
//             if(rangeFD != rangeLD){
//                 result.push(rangeFD+'->'+rangeLD)
//             }
//             rangeFD = element
//         }
//         rangeLD = element
//     }
//     return result
// }

// console.log(rangeFind(num));


// // 3- store range first digit
// // check for next consecutive digits in the loop till you find the end
// // store last digit
// // if current digit is not consucutive then push first and last digit and range

function rangeFeild(num) {
    let result=[]
    let firstentry=0;
    let lastentry=0;
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        if (i == 0) {
            firstentry = element
        }
        else if (i == num.length - 1 && lastentry + 1 == element) {
            lastentry = element
            result.push(firstentry + "->" + lastentry)
        }
        else if (lastentry+1 != element) {
            if (firstentry != lastentry) {
                result.push(firstentry + "->" + lastentry)
            }
            firstentry=element
        }
        lastentry=element
    }
    return result
}

let arr=[1,2,3,4,5,7,8,9,10,13,16,17,18,20]
console.log(rangeFeild(arr));
