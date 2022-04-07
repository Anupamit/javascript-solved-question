// let person=[{
//     name:'anoop',
//     age:25,
//     visitedcity:'blr',
//     biodata:'hardworking'
// },
// {
//     name:'anupam',
//     age:32,
//     visitedcity:'gkp',
//     biodata:'nothardworking'
// },
// {
//     name:'sahil',
//     age:30,
//     visitedcity:'lko',
//     biodata:'nothardworking'
// },
// {
//     name:'sahil',
//     age:30,
//     visitedcity:'lko',
//     biodata:'hardworking'
// },
// {
//     name:'sahil',
//     age:30,
//     visitedcity:'blr',
//     biodata:'hardworking'
// },
// {
//     name:'aayush',
//     age:35,
//     visitedcity:'lko',
//     biodata:'hardworking'
// }]

// // for (let i = 0; i < person.length; i++) {
// //     let element = person[i];
// //     if (element.age <= 30 && element.biodata === 'hardworking' && element.visitedcity === 'blr') {
// //         console.log(element);
// //     }
// //     // else{
// //     //     console.log("nahi hai koi");
// //     // }
// // }



// function findPerson(person) {
//     let result=[]
//     for (let i = 0; i < person.length; i++) {
//         let element = person[i];
//         if (element.age <= 30 && element.biodata === 'hardworking' && element.visitedcity === 'blr') {
//             result.push(element.name)
//         }
//     }
//     return result.join(', ')
// }
// console.log(findPerson(person));



let person=[{
    name:'anoop',
    age:25,
    biodata:'anoop is hardworking guy',
    visitedcity:['blr','gkp','lko','bhu']
},
{
    name:'anupam',
    age:32,
    biodata:'aayush is nothardworking guy',
    visitedcity:['blr','gkp','lko','bhu']
},
{
    name:'sahil',
    age:30,
    biodata:'sahil is nothardworking guy',
    visitedcity:['blr','gkp','lko','bhu']
},
{
    name:'kartik',
    age:30,
    biodata:'kartik is hardworking guy',
    visitedcity:['gkp','lko','bhu']
},
{
    name:'jane',
    age:30,
    biodata:'jane is nothardworking guy',
    visitedcity:['gkp','lko','bhu']
},
{
    name:'aayush',
    age:35,
    biodata:'aayush is hardworking guy',
    visitedcity:['blr','gkp','lko','bhu']
}]

function findPerson(person) {
    let result=[]
    for (let i = 0; i < person.length; i++) {
        let element = person[i];
        if (element.age <= 30 && element.biodata.includes('hardworking') && element.visitedcity.includes('blr')) {
            result.push(element.name)
        }
    }
    return result.join(', ')
}
console.log(findPerson(person));