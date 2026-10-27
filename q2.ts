class Student {
    name: string;
    studentId: number;
    grade: string;
    address: string;

    constructor(name: string, studentId: number, grade: string, address: string) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }
     displayInfo() {
    console.log("Name:",this.name);
    console.log("studentId:",this.studentId)
    console.log("Grade:",this.grade);
    console.log("Address:",this.address);
    }
}
const stu = new Student("Tom",1,"A","Malad")
stu.displayInfo()