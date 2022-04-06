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
        name:'kuhu',
        age:-4
    },
    {
        name:'ekta',
        age:18
    },
    {
        name:'bhola',
        age:6
    },
    {
        name:'shalu',
        age:9
    }
]
function addProperty(person,number) {
    let sum=[]
    for (let i = 0; i < person.length; i++) {
        const element = person[i];
        for (let j = i+1; j < person.length; j++) {
            const element2 = person[j];
            if (element.age + element2.age === number) {
                sum.push([element,element2])
            }
        }
    }
    return sum
}
console.log( addProperty(person,14));


// [ [{}, {}], [{}, {}]]
