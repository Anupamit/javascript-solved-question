// { b: [ 'Banarash', 'bhuwneshwar', 'banglore', 'bhopal' ] }
let city=["gorkhpur",'Banaras', 'bhuwneshwar','lucknow','banglore','lahore','gonda','bhopal',]

// function findPlace(city) {
//     let result=[]
//     let secresult=[]
//     let requiredResult=[]
//     for (let i = 0; i < city.length; i++) {
//         let element = city[i];
//         if(element[0] == 'b' || element[0] == 'B'){
//             result.push(element)
//         }else if (element[0] == 'g') {
//             secresult.push(element)
//         }else if (element[0]== 'l') {
//             requiredResult.push(element)
//         }
//     }
//     let obj={b:result,g:secresult,l:requiredResult}
//     return obj
// }


function findPlace(cities){
let cityMap = {}
    for(let i = 0; i<cities.length; i++){
        let city = cities[i]
        let startingWith = city[0].toLowerCase()
        if(Array.isArray(cityMap[startingWith])){
            cityMap[startingWith].push(city)
        }else{
            cityMap[startingWith] = [city]
        }
    }
return cityMap
}

console.log(findPlace(city));