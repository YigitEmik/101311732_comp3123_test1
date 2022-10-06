let lowerCaseWords = new Promise((resolve, reject) => {

    let mixedArray = ["PIZZA", 10, true, 25, false, "WINGS"]

    if(mixedArray){
        resolve('Success')
    } else{
        reject('Failure')
    }

    mixedArray = mixedArray.filter(i => typeof i == "string");

    const lower = mixedArray.map(item => { return item.toLowerCase(); });
    console.log(lower)

})

lowerCaseWords.then((message) => { console.log('Promise is ' + message) }).catch((message) =>
    { console.log('Promise is ' + message)
})



