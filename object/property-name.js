let person=[
    {
        name:'anoop',
        age:8
    },
    {
        name:'sahil',
        age:40
    },
    {
        name:'anupam',
        age:6
    },
    {
        name:'bhola',
        age:7
    },
    {
        name:'shalu',
        age:9
    }
]

function propertyName(person) {
    let result=[]
    for (let i = 0; i < person.length; i++) {
        const element = person[i];
        result.push(element.name)
    }
    return result
}
console.log(propertyName(person));

// in this problem we have to find the all name of person into an array