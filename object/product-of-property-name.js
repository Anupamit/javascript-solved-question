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

function productProperty(person) {
    let nameArr=[]
    let psort=person.sort((a,b)=> b.age - a.age)
    for (let i = 0; i < psort.length; i++) {
        const element = psort[i];
        nameArr.push(element.name)
    }
    return nameArr.slice(0,3)
}
console.log(productProperty(person));

// add two object and the age is equalto to sechond input
// return  added obj