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
const utils_1 = require("./utils");
const unitTest = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Running unit tests...');
    // Unit test case1
    if (utils_1.utils.add(2, 2) === 4) {
        console.log('Test case 1 passed');
    }
    else {
        console.log('Test case 1 failed: if (utils.add(2, 2) === 4)');
        process.exit(1);
    }
    // Unit test case2
    if (utils_1.utils.add(3, 3) === 6) {
        console.log('Test case 2 passed');
    }
    else {
        console.log('Test case 2 failed: if(utils.add(3, 3) === 6)');
        process.exit(1);
    }
});
unitTest();
