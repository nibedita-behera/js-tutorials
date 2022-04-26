let arr=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<10;i++){
    setTimeout(()=>{console.log(i)},5000)

}
for(var i=0;i<10;i++){
    setTimeout(()=>{console.log(i)},1000)

}