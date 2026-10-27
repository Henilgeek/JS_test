function fetchOrderHistory() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Laptop", "Mobile", "Headphones"]);
        }, 2000);
    });
}

async function displayOrderHistory() {
    console.log("Fetching order history...");

    let orders = await fetchOrderHistory();

    console.log("Customer Order History:");
    console.log(orders);
}

displayOrderHistory();