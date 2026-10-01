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
    // 10:00–13:00 at 50 per hour => 3 hours * 50 = 150
    const totalTime = carRentCost_1.carRentCost.calculateTotalTime(10, 13);
    const totalCost = carRentCost_1.carRentCost.calculateTotalCost(totalTime, 50);
    if (totalCost === 150) {
        console.log('Test case 1 passed');
    }
    else {
        console.log(`Test case 1 failed: expected 150, got ${totalCost}`);
        process.exit(1);
    }
    // Another success case: 8:00–12:00 at 25 per hour => 4 * 25 = 100
    const totalTime2 = carRentCost_1.carRentCost.calculateTotalTime(8, 12);
    const totalCost2 = carRentCost_1.carRentCost.calculateTotalCost(totalTime2, 25);
    if (totalCost2 === 100) {
        console.log('Test case 2 passed');
    }
    else {
        console.log(`Test case 2 failed: expected 100, got ${totalCost2}`);
        process.exit(1);
    }
    // Failure case: 10:00–12:00 at 50 per hour => 2 hours * 50 = 100
    const totalTime3 = carRentCost_1.carRentCost.calculateTotalTime(10, 12);
    const totalCost3 = carRentCost_1.carRentCost.calculateTotalCost(totalTime3, 50);
    if (totalCost3 === 100) {
        console.log('Test case 3 passed');
    }
    else {
        console.log(`Test case 3 failed: expected 100, got ${totalCost3}`);
        process.exit(1);
    }
    // Failure case: 10:00–12:00 at 50 per hour => 2 hours * 50 = 100
    const totalTime4 = carRentCost_1.carRentCost.calculateTotalTime(10, 12);
    const totalCost4 = carRentCost_1.carRentCost.calculateTotalCost(totalTime4, 50);
    if (totalCost4 === 100) {
        console.log('Test case 4 passed');
    }
    else {
        console.log(`Test case 4 failed: expected 100, got ${totalCost4}`);
        process.exit(1);
    }
});
unitTest();
