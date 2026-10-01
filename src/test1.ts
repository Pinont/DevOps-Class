import { utils } from './utils';

const unitTest = async() => {
    console.log('Running unit tests...');

    // Unit test case1
    if (utils.add(2, 2) === 4) {
        console.log('Test case 1 passed');
    } else {
        console.log('Test case 1 failed: if (utils.add(2, 2) === 4)');
        process.exit(1);
    }

    // Unit test case2
    if(utils.add(3, 3) === 6) {
        console.log('Test case 2 passed');
    } else {
        console.log('Test case 2 failed: if(utils.add(3, 3) === 6)');
        process.exit(1);
    }

};

unitTest();