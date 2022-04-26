// //    function display(){
// //        console.log("will execute after 5000")
// //    }
// // // setTimeout(display,15000)
// // setInterval(display,5000)


// let complete= true;

// function onComplete(complete){
//     return new Promise(function(resolve,reject){
//         if(complete){
//             let viewer={
//                 level:'indermediate',
//                 nextt :'react'           
//             }
//             resolve(viewer)
//         }
//         else{
//             reject(new Error("JS ES6 need to be completed"))
//         }

//     })
// }

// let course=onComplete(complete)
// // console.log(course) 

// course.then(function(successresponse){
//     console.log(successresponse)
// }).catch(function(errorresponse){
//     console.log(errorresponse)
// })


function fst(){
    return new Promise(function(resolve,reject){
        resolve("I am the first promise")
    })
}

function snd(fst){
    return new Promise(function(resolve,reject){
        resolve(fst+"----I am the snd promise")

    })

}



// fst().then(function(fstresponse){
//     return snd(fstresponse)
// }).then(function(sndresponse){
//     console.log(sndresponse)
// }).finally(function(){
//     console.log("no matter what finally will always executed")
// })

async function result(){
    let first =  await fst();    //await keyword can only be used inside async functions
    let second =  await snd(first);
    console.log(second)
}

result()