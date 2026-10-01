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
    carRentCost_1.carRentCost.AddRent(10, 13); // [10, 13, 50]
    carRentCost_1.carRentCost.AddRent(8, 12); // [10, 13, 50], [8, 12, 50]
    if (carRentCost_1.carRentCost.Checkout() === 350) { // 3 * 50 + 2 * 50 = 350
        console.log('Test case 1 passed');
    }
    else {
        console.log('Test case 1 failed');
        process.exit(1);
    }
    // Failure case: invalid end time
    try {
        carRentCost_1.carRentCost.AddRent(10, 25); // [10, 25, 50]
        console.log('Test case 2 failed');
        process.exit(1);
    }
    catch (_a) {
        console.log('Test case 2 passed');
    }
});
integrationTest();
