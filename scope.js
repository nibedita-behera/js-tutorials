// scope defines the visibility
// Global,Local,Block

let globalvar=1000   // global variables can be accessed anywhere in the code
let blockvar=2000
function scope(){
    let loccal=100   // local variables can be accessed inside the function only
    let globalvar=5000
    if(true){
         let blockvar=10 // block scoped var can be accessed only inside the block
         console.log(blockvar)
    }

    console.log(globalvar)
}
scope()




