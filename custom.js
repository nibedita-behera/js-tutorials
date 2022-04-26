// create own objects 

// let mt={};
// console.log(mt)


// let obj={
//     name:'john',
//     id:303,
//     age:40,
//     adress:"England"
//     //functions as property
// }

// console.log(obj)
// console.log(Object.values(obj))

// console.log(obj.name)
// console.log(obj["name"])  //litreal notationto get the value of an object


// let empname="sagar"
// let empid=401
// let empsal=10000

// let emp={
//     name:empname,
//     id:empid,
//     salary:empsal
// }

// let emp={
//     empname,
//     empid,
//     empsal
// }

// Object.keys(emp).forEach((element)=>{
//     console.log(element,"---", emp[element])
// })

// Object.values(emp).forEach((element)=>{
//     console.log(element)
// })


// Object.entries(emp).forEach((element)=>{
//     console.log(element[0],"---",element[1])
// })




// console.log(emp)
let math=90
let eng=80
let science=50
let student={
    math:70,
    eng:75,
    science:65,
    totalmarks: function(){
        let total=this.math+this.eng+this.science
        return total
    }
                  //a function inside a object as property is called object method

}
console.log(student.totalmarks())



