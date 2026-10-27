type Student = {
    name: string;
    age: number;
    grade: string;
};

class School {
    static totalStudents: number = 0;
    studentList: Student[] = [];

    incrementTotalStudents(): void {
        School.totalStudents++;
    }

    addStudentDetails(student: Student): void {
        this.studentList.push(student);
        this.incrementTotalStudents();
    }
}
