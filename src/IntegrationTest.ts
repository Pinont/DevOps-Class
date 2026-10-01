import { carRentCost } from './carRentCost';

const integrationTest = async () => {
    console.log('Running unit tests...');

    // Success case: both functions used together
    carRentCost.AddRent(10, 13); // [10, 13, 50]
    carRentCost.AddRent(8, 12); // [10, 13, 50], [8, 12, 50]
    if (carRentCost.Checkout() === 350) { // 3 * 50 + 2 * 50 = 350
        console.log('Test case 1 passed');
    } else {
        console.log('Test case 1 failed');
        process.exit(1);
    }

    // Failure case: invalid end time
    try {
        carRentCost.AddRent(10, 25); // [10, 25, 50]
        console.log('Test case 2 failed');
        process.exit(1);
    } catch {
        console.log('Test case 2 passed');
    }
};
integrationTest();
