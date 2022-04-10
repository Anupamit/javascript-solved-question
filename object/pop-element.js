let city=["gorkhpur",'Banarash', 'bhuwneshwar','lucknow','banglore','mirzapur','delhi','bhopal',]
// let result=city.filter(city=>city.startsWith('b'))
// console.log(result);

function findPlace(city) {
    let result=[]
    for (let i = 0; i < city.length; i++) {
        let element = city[i];
        if(element[0].toLowerCase() == 'b'){
            result.push(element)
        }

        // if(element[0] == 'b' || element[0] == 'B'){
        //    result.push(element)
        // }

        // if(element.startsWith('b') || element.startsWith('B')){
        //     result.push(element)
        // }
        
        // else if (element.startsWith('B')) {
        //     result.push(element)
        // }
    }
    let obj = {
        cityName: result
    }
    return obj
}
console.log(findPlace(city));

// In this program we have to find the cityname which is starting from 'b' and also 'B' and return in object form.