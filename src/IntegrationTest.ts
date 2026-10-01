import { carRentCost } from './carRentCost';

const integrationTest = async () => {
    console.log('Running unit tests...');

    // Success case: both functions used together
    carRentCost.AddRent(10, 13);
    carRentCost.AddRent(8, 12);
    if (carRentCost.Checkout() === 150) {
        console.log('Test case 1 passed');
    } else {
        console.log('Test case 1 failed');
        process.exit(1);
    }

    // Failure case: invalid start time
    carRentCost.AddRent(-1, 13);
    if (carRentCost.Checkout() === -1) {
        console.log('Test case 2 passed');
    } else {
        console.log('Test case 2 failed');
        process.exit(1);
    }

    // Failure case: invalid end time
    carRentCost.AddRent(10, 25);
    if (carRentCost.Checkout() === -1) {
        console.log('Test case 3 passed');
    } else {
        console.log('Test case 3 failed');
        process.exit(1);
    }

    // Failure case: invalid cost per hour
    carRentCost.AddRent(10, 13, -1);
    if (carRentCost.Checkout() === -1) {
        console.log('Test case 4 passed');
    } else {
        console.log('Test case 4 failed');
        process.exit(1);
    }
};

integrationTest();
