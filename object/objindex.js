// // let obj = {
// //     sahil:'anupam',
// //     saahil:'kumar',
// //     sahhil: 'rai'
// // }
// // console.log(Object.keys(name));
// // console.log(Object.values(name));

// // let student ={
// //     name:'anoop',
// //     class: "10",
// //     rollno: 11
// // }
// // function detail(student) {
    
// // }
// //do obj ko check karna hai ki barabar hai ki nahi
// // ek object check karna hai ki null true/false hai ki nahi
// // const obj1 = {
// //     name: 'sahil',
// //     age: 21
// // };

// // const obj2 = {
// //     name: 'sahil',
// //     age: 21
// // };



// // const haveSameData = function (obj1, obj2) {
// //     const obj1Length = Object.keys(obj1).length;
// //     const obj2Length = Object.keys(obj2).length;

// //     if (obj1Length === obj2Length) {
// //         return Object.keys(obj1).every(key => obj2[key]&& obj2[key] === obj1[key]);
// //     }
// //     return false;
// // }
// // console.log(haveSameData(obj1,obj2));

// // let result= keys.forEach((key,i) => obj[key] = values[i])
// // console.log(obj);



// // let anything="addition"
// // function returnFun(anything) {
// //     let result=[]
// //     function addition(num,num2) {
// //         let sum=num + num2
// //         return sum
// //     }
// //     function subtraction(num,num2) {
// //         let sub= num - num2
// //         return sub
// //     }
// //     function multiplication(num,num2) {
// //         let mul= num * num2
// //         return mul
// //     }
// //     function divide(num,num2) {
// //         let div= num/num2
// //         return div
// //     }
// // }

// // console.log(returnFun(anything));
// function findIndex(person) {
//     let oldest=0
//     for (let i = 0; i < person.length; i++) {
//         let element = person[i];
//         if (element.age > oldest) {
//             oldest=element
//         }
//         if (oldest.age/2 == element.age[i]) {
//             oldest=element
//         }
//         else{
//             oldest=-1
//         }
//     }
//     return oldest
// }
// //1. in an array object oldest person should be atleast double of the 
// // -everyone then return index of oldest person
// //2. oldest person is not double or greater than return -1
// let person=[
//     {
//         name:'anoop',
//         age:19
//     },
//     {
//         name:'sahil',
//         age:4
//     },
//     {
//         name:'anupam',
//         age:20
//     }
// ]
// function findIndex(person) {
//     let oldest=0
//     let oldeestIndex = -1
//     for (let i = 0; i < person.length; i++) {
//         let element = person[i];
//         if (element.age > oldest) {
//             oldest=element.age
//             oldeestIndex = i
//         }
//     }
    
//     let doubleAgeCondition = true

//     console.log(oldest,'ind', oldeestIndex )

//     for(let i = 0; i<person.length; i++){
//         let element = person[i];
//         let age = element.age
//         if(age*2 > oldest && age != oldest){
//             doubleAgeCondition = false
//         }
//     }

//     return doubleAgeCondition ? oldeestIndex: -1

// }

// console.log(findIndex(person));

// // person.forEach(element => {
//     //     result.push(element.name)
//     // });



// var arr = [
//     { date: 1436796000000, value: ["Task1","Task2"] },
//     { date: 1437400800000, value: ["Task4","Task8"] },
//     { date: 1436968800000, value: ["Task3","Task2"] },
//     { date: 1436882400000, value: ["Task5","Task6"] }
//   ]

//   arr.sort(( a, b ) =>b.date - a.date )
//   console.log(arr);

// Check for pair in an array with a given sum


// if (element.age > result) {
//     resultindex=i
//     result=element.age
// }

let obj1={
    name:"anupam",
    age:25
}
let obj2={
    village:"daniari",
    po:'vendupar'
}
let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let city=['bombay','banaras','bharatpur','Bhopal','delhi','gorakhpur','gangtok']
let person=[
    {
        name:"anupam",
        age:12
    },
    {
        name:"sahil",
        age:16
    },
    {
        name:"anoop",
        age:14
    },
    {
        name:"anuj",
        age:20
    },
    {
        name:"karteek",
        age:24
    },
    {
        name:"kamlesh",
        age:22
    },
    {
        name:"manu",
        age:26
    },
    {
        name:"koohu",
        age:32
    },
    {
        name:"shalu",
        age:30
    }
]

function highestAge(person) {
    let resultindex=[]
    if (person.length > 2) {
        for (let i = 0; i < person.length; i++) {
            const element = person[i];
            if (i != 0  && i != person.length -1) {
                let forwardele=person[i - 1].age
                let backwardele=person[i + 1].age
                if (forwardele < element.age && backwardele < element.age) {
                    resultindex.push(i)
                }
            }
        }
    }
    return  resultindex
}
console.log(highestAge(person));

function findName(person){
    let resultName=[]
    for (let i = 0; i < person.length; i++) {
        const element = person[i];
        resultName.push(element.name)
    }
    return  resultName
}
console.log(findName(person));

function findAge(person){
    let resultage=[]
    for (let i = 0; i < person.length; i++) {
        const element = person[i];
        resultage.push(element.age)
    }
    return  resultage
}
console.log(findAge(person));

function productOfThree(person) {
    let result=1
    let ages=person.map((i)=>i.age)
    let sortage=ages.sort((a,b)=>b-a).slice(0,3)
    for (let i = 0; i < sortage.length; i++) {
        let element = sortage[i];
        result *=element
    }
    return result
}
console.log(productOfThree(person));

function findCityName(city) {
    let result=[]
    for (let i = 0; i < city.length; i++) {
        const element = city[i];
        if (element[0].toLowerCase() == 'b') {
            result.push(element)
        }
    }
    let objresult={
        cityName:result
    }
    return objresult
}
console.log(findCityName(city));

function mergeElement(obj1, obj2) {
    let key=Object.keys(obj2)
    for (let i = 0; i < key.length; i++) {
        let element = key[i];
        obj1[element]=obj2[element]
    }
    return obj1
}
console.log(mergeElement(obj1,obj2));

function findIndex(person) {
    let result=0
    let oldeestIndex=-1
    for (let i = 0; i < person.length; i++) {
        let element = person[i];
        if (element.age > result) {
            result=element.age
            oldeestIndex=i
        }
    }
    let doubleAge=true
    console.log(result,'index',oldeestIndex);
    for (let i = 0; i < person.length; i++) {
        let element = person[i];
        let age=element.age
        if (age*2 > result && age != result) {
            doubleAge=false
        }
    }
    return doubleAge ? oldeestIndex: -1
}
console.log(findIndex(person));

function findEvenOdd(num) {
    let even=[]
    let odd=[]
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        if (element %2 === 0) {
            even.push(element)
        }else{
            odd.push(element)
        }
    }
    let result={
        even,
        odd
    }
    return result
}
console.log(findEvenOdd(num));

function countUniqueElement(city) {
    let result={}
    for (let i = 0; i < city.length; i++) {
        let element = city[i];
        result[element] = result[element] > 0 ? result[element]+1 : 1
    }
    let keys=Object.keys(result)
    // return result
    return keys
}
console.log(countUniqueElement(city));

for (var i = 0; i < 3; i++) {
    late(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
    late(() => console.log(i), 1);
}