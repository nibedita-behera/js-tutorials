// way oof using another function to reuse it as an parameter or argument
// when a function takes another function as an argument

function deposit(){
  let deposit=1000
  return deposit

}

function total(dep)
{
        let exitingamt=1000
        console.log("TOtal amount is "+ exitingamt+dep)
    
}
     
total(deposit())