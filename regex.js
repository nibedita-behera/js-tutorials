// let reg=new RegExp("[^0-9]+[a-z,A-Z]+@['gmail'|'yahoo']+$")
 let ptrn= /llow/
   let text='welcome hi hello to js yello'
let res=ptrn.exec(text)
console.log(res)

console.log(ptrn.toString())
let ans=ptrn.test(text)
console.log(ans)
