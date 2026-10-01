import { carRentCost } from './carRentCost';

const unitTest = async() => {
    console.log('Running unit tests...');

    // Unit test case1
    if (carRentCost.calculateTotalTime(10, 13) === 3) {
        console.log('Test case 1 passed');
    } else {
        console.log('Test case 1 failed');
        process.exit(1);
    }

    // Unit test case2
    if (carRentCost.calculateTotalCost(3, 50) === 150) {
        console.log('Test case 2 passed');
    } else {
        console.log('Test case 2 failed');
        process.exit(1);
    }

    // Unit test case3
    const rentList = carRentCost.AddRent(10, 13);
    if (rentList !== undefined) {
        console.log('Test case 3 passed');
    } else {
        console.log('Test case 3 failed');
        process.exit(1);
    }
};

unitTest();