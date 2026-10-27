function getStudentInfo<T>(info: T): T {
    return info;
}

console.log(getStudentInfo<string>("Henil"));
console.log(getStudentInfo<number>(101));
console.log(getStudentInfo<string>("A Grade"));