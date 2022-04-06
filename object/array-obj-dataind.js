let arr=[
    {
        name:'Anupam',
        email:"anupamit@gmail.com"
    },
    {
        name:"Anoop Rai",
        email:'Anoop@gmail.com'
    },
    {
        name:'shalu',
        email:'shalu@gmail.com'
    },
    {
        name:'ekta',
        email:'ekta@gmail.com'
    }
]
// function dataFind(arr) {
//     let result=[]
//     for (let i = 0; i < arr.length; i++) {
//         let person = arr[i];
//         if (person.email.startsWith('a')) {
//             result.push(person.email)
//         }
//     }
//     return result
// }

// function dataFind(arr) {
//     let result=[]
//     for (let i = 0; i < arr.length; i++) {
//         let person = arr[i];
//         if (person.email.startsWith('a') || person.email.startsWith('A')) {
//             result.push(person.email)
//         }
//     }
//     return result
// }

function dataFind(arr) {
    let result=[]
    for (let i = 0; i < arr.length; i++) {
        let person = arr[i];
        if ( person.email[0].toLowerCase()=='a') {
            result.push(person.email)
        }
    }
    return result
}
console.log(dataFind(arr));