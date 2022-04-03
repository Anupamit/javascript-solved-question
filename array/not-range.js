let num = [1,2,3,4,8,9, 10, 14, 15, 16]
function notRange(num) {
    let result=[]
    let firstentry=0
    let lastentry=0
    let missingnum=[]
	for (let i = 1; i < num[num.length -1]; i++) {
		if (!num.includes(i)){
			missingnum.push(i);
		} 
	}
    for (let i = 0; i < missingnum.length; i++) {
        let element = missingnum[i];
        if (i == 0) {
            firstentry = element
        }
        else if (i == missingnum.length - 1 && lastentry + 1 == element) {
            lastentry = element
            result.push(firstentry + "->" + lastentry)
        }
        else if (lastentry+1 != element) {
            if (firstentry != lastentry) {
                result.push(firstentry + "->" + lastentry)
            }
            firstentry=element
        }
        lastentry=element
    }
    return result
}
console.log(notRange(num));

