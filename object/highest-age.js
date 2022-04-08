let person=[
    {
        age:22
    },
    {
        age:24
    },
    {
        age:23
    },
    {
        age:22
    },
    {
        age:30
    },
    {
        age:29
    },
]
function mostAged1(person) {
    let resultindex=[]
    if(person.length <= 2){
        return resultindex
    }
    for (let i = 0; i < person.length; i++) {
        let element = person[i];
        if(i == 0 || i == person.length -1){
            console.log('do nothing')
        }else{
            let preAge = person[i-1].age
            let nextAge = person[i+1].age
            if(preAge < element.age && nextAge < element.age){
                resultindex.push(i)
            }
        }
    }
    return resultindex
}

function mostAged(person) {
    let resultindex=[]
    if(person.length > 2){
        for (let i = 0; i < person.length; i++) {
            let element = person[i];
            if(i != 0 && i != person.length -1){
                let preAge = person[i-1].age
                let nextAge = person[i+1].age
                if(preAge < element.age && nextAge < element.age){
                    resultindex.push(i)
                }            
            }
        }
    }
    return resultindex
}

console.log(mostAged(person));