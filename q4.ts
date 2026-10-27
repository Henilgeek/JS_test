abstract class Person {
    abstract getDetails(): string;
    abstract getRole(): string;
}

class Students extends Person {
    getDetails(): string {
        return "Name: Henil, ID: 101";
    }

    getRole(): string {
        return "Student";
    }
}

class Teacher extends Person {
    getDetails(): string {
        return "Name: Amit, ID: 201";
    }

    getRole(): string {
        return "Teacher";
    }
}

let s = new Students();
let t = new Teacher();

console.log(s.getDetails());
console.log(s.getRole());

console.log(t.getDetails());
console.log(t.getRole());