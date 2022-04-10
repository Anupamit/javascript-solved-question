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

function productOfThree(person) { 
    let product=1
    let ages=person.map((item)=>item.age)
    console.log(ages);
    let sort=ages.sort((a,b)=>{
        if(a>b){return -1}
        if(a<b){return 1}
        if(a==b){return 0}
    }).slice(0,3)
    // let sort=ages.sort().reverse().slice(0,3)
    console.log(sort);
    for (let i = 0; i < sort.length; i++) {
        product *= sort[i];
    }
    return product
}
console.log(productOfThree(person));
// in this program we are doing yhe product of three highest number