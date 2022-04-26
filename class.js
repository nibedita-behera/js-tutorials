class college{

    constructor(student_name,dept){
        this.student_name=student_name
        this.dept=dept
    }
      static details(){
         console.log("The student name is "+this.student_name+"dept is "+ this.dept)
     }
}

class student1 extends college{
    constructor(student_name,dept,marks){
        super(student_name,dept)  //super should be always in the first line of the cons or before this
        this.marks=marks
        

    }
    student_data(){
        this.details()
    }
}

let id_303=new college("vikash","Science")
let id_404=new student1("sameer","commerce",400)
// console.log(id_303)
// console.log(id_404)
// id_303.details()
college.details()

//Inherritance- inherit properties from the parent class