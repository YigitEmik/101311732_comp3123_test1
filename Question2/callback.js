function resolvedPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            let success = {'message' : 'delayed success!'};
            resolve(success);

        },500);
    })

}

function rejectPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = {'error' : 'delayed exception!'};
            reject(error);
        },500);
    })
    
}

resolvedPromise()
.then(result=>console.log(result))
.catch(error=>console.log(error));

rejectPromise()
.then(result=>console.log(result))
.catch(error=>console.log(error));