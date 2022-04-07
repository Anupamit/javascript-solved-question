let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function evenOrOdd(numbers) {
    let  odd=[]
    let  even=[]
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number % 2 === 0) {
            even.push(number)
        }else{
            odd.push(number)
        }
    }
    let oddEven={
        even:even,
        odd:odd
    }
    return oddEven
}
console.log(evenOrOdd(numbers));