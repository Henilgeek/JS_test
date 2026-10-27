const studentA =[20,91,40,80,77,33,67,81]
const studentMarks = studentA.filter((n)=>{
    if(n>80){
        return n
    }
})
console.log(...studentMarks);
