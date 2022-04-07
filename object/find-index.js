//1. in an array object oldest person should be atleast double of the 
// -everyone then return index of oldest person
//2. oldest person is not double or greater than return -1
let person=[
    {
        name:'anoop',
        age:19
    },
    {
        name:'sahil',
        age:4
    },
    {
        name:'anupam',
        age:38
    }
]
function findIndex(person) {
    let oldest=0
    let oldeestIndex = -1
    for (let i = 0; i < person.length; i++) {
        let element = person[i];
        if (element.age > oldest) {
            oldest=element.age
            oldeestIndex = i
        }
    }
    
    let doubleAgeCondition = true

    console.log(oldest,'ind', oldeestIndex )

    for(let i = 0; i<person.length; i++){
        let element = person[i];
        let age = element.age
        if(age*2 > oldest && age != oldest){
            doubleAgeCondition = false
        }
    }

    return doubleAgeCondition ? oldeestIndex: -1

}

console.log(findIndex(person));
