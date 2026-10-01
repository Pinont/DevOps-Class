"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const carRentCost_1 = require("./carRentCost");
const integrationTest = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Running unit tests...');
    // Success case: both functions used together
    carRentCost_1.carRentCost.AddRent(10, 13);
    carRentCost_1.carRentCost.AddRent(8, 12);
    if (carRentCost_1.carRentCost.Checkout() === 150) {
        console.log('Test case 1 passed');
    }
    else {
        console.log('Test case 1 failed');
        process.exit(1);
    }
    // Failure case: invalid start time
    carRentCost_1.carRentCost.AddRent(-1, 13);
    if (carRentCost_1.carRentCost.Checkout() === -1) {
        console.log('Test case 2 passed');
    }
    else {
        console.log('Test case 2 failed');
        process.exit(1);
    }
    // Failure case: invalid end time
    carRentCost_1.carRentCost.AddRent(10, 25);
    if (carRentCost_1.carRentCost.Checkout() === -1) {
        console.log('Test case 3 passed');
    }
    else {
        console.log('Test case 3 failed');
        process.exit(1);
    }
    // Failure case: invalid cost per hour
    carRentCost_1.carRentCost.AddRent(10, 13, -1);
    if (carRentCost_1.carRentCost.Checkout() === -1) {
        console.log('Test case 4 passed');
    }
    else {
        console.log('Test case 4 failed');
        process.exit(1);
    }
});
integrationTest();
