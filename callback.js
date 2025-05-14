// solve flow control problem with 'callback'

function takeOrder(customer, callback) {
    console.log(`Take order from ${customer}`);
    callback(customer);
}

function processOrder(customer, callback) {
    console.log(`Processing order for ${customer}`);

    // blocking 3s delay
    setTimeout(() => {
        console.log("Cooking done!");
        console.log(`Processed order for ${customer}`);
        callback(customer);
    }, 3000);
}

function completeOrder(customer) {
    console.log(`Completed order for ${customer}`);
}

// callback pattern
takeOrder("Md Fazle Hasan order in food", (customer) => {
    processOrder(customer, () => {
        completeOrder(customer, () => {
            completeOrder(customer);
        });
    });
});