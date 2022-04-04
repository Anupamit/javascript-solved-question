let num=[1,2,3,4,5,7,8,9,11,12,15,16,17,18,20,25]
function remaingElement(num) {
    let result=[]
    // for (let i = 0, returnvalue = num[0]; returnvalue <= num[num.length - 1]; returnvalue++) {
    //     const element = num[i];
    //     if (element != returnvalue) {
    //         result.push(returnvalue)
    //     }
    //     else{
    //         i++
    //     }
    // }

    count=num[num.length -1]

	for (let i = 1; i < count; i++) {
		if (!num.includes(i)){
			result.push(i);
		} 
	}
    
    // for (let i = 1; i < count; i++) {
	// 	if (num.indexOf(i) == -1){
	// 		result.push(i);
	// 	} 
	// }
    return result
}
console.log(remaingElement(num));