class InvalidCouponCode extends Error {
    constructor(message) {
        super(message)
        this.name ="Invalid Coupon"
    }
}
function couponcode(n) {
        try {
            if (n<0) {
                throw new InvalidCouponCode("Invalid coupon")
            } else {
               console.log("Coupon code is correct");
                
            }
        } catch (error) {
            console.log(error.name+","+error.message);
        } 
    }
    couponcode(-1)