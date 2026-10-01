"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRentCost = void 0;
function calculateTotalTime(startTimeHr, endTimeHr) {
    return endTimeHr - startTimeHr;
}
function calculateTotalCost(totalTime, costPerHour) {
    return totalTime * costPerHour;
}
exports.carRentCost = {
    calculateTotalTime,
    calculateTotalCost
};
