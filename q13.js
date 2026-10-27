function inventory(n) {
    try {
        if (n<7) {
            throw new Error("Invalid")
        }else{
            console.log(n);
            
        }
    } catch (error) {
        console.log(error.name+","+error.message);
    }
}
inventory(3)