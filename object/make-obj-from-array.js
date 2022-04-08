let keys=["name","age"]
let values=["sahil","25"]

function makeObj(keys, values) {
    let obj={}
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i]
    }
    return obj
}
console.log(makeObj(keys,values));
