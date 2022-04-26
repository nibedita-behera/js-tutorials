function p1(){
    new Promise(function(resolve,reject){
        resolve(console.log("p1 is executed"))
    })
} 

function p2(){

     new Promise(function(resolve,reject){
        resolve(console.log("p2 is executed"))
    })
}
    
    async function reply(){
       console.log("reply function")
       // the await key word cn only be used inside async 
       let wt1=await p2();
       p1();
   }
    

   reply()
