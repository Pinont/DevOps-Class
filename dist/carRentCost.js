"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRentCost = void 0;
function calculateTotalTime(startTimeHr, endTimeHr) {
    return endTimeHr - startTimeHr;
}
function calculateTotalCost(totalTime, costPerHour) {
    return totalTime * costPerHour;
}
let rentList = [];
function AddRent(startTimeHr, endTimeHr, costPerHour = 50) {
    if (startTimeHr < 0 || endTimeHr < 0) {
        throw new Error('Invalid start time');
    }
    if (startTimeHr >= 24 || endTimeHr >= 24) {
        throw new Error('Invalid end time');
    }
    if (costPerHour < 0) {
        throw new Error('Invalid cost per hour');
    }
    rentList.push({ startTimeHr, endTimeHr, costPerHour });
    return rentList;
}
function Checkout() {
    let totalCost = 0;
    for (let rent of rentList) {
        totalCost += calculateTotalCost(calculateTotalTime(rent.startTimeHr, rent.endTimeHr), rent.costPerHour);
    }
    return totalCost;
}
exports.carRentCost = {
    calculateTotalTime,
    calculateTotalCost,
    AddRent,
    Checkout
};
