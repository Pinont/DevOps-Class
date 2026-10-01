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
const unitTest = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Running unit tests...');
    // Unit test case1
    if (carRentCost_1.carRentCost.calculateTotalTime(10, 13) === 3) {
        console.log('Test case 1 passed');
    }
    else {
        console.log('Test case 1 failed');
        process.exit(1);
    }
    // Unit test case2
    if (carRentCost_1.carRentCost.calculateTotalCost(3, 50) === 150) {
        console.log('Test case 2 passed');
    }
    else {
        console.log('Test case 2 failed');
        process.exit(1);
    }
    // Unit test case3
    const rentList = carRentCost_1.carRentCost.AddRent(10, 13);
    if (rentList !== undefined) {
        console.log('Test case 3 passed');
    }
    else {
        console.log('Test case 3 failed');
        process.exit(1);
    }
});
unitTest();
