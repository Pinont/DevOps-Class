function calculateTotalTime(startTimeHr: number, endTimeHr: number): number {
    return endTimeHr - startTimeHr;
}

function calculateTotalCost(totalTime: number, costPerHour: number): number {
    return totalTime * costPerHour;
}

interface RentCar {
    startTimeHr: number;
    endTimeHr: number;
    costPerHour: number;
}

let rentList: RentCar[] = [];

function AddRent(startTimeHr: number, endTimeHr: number, costPerHour: number = 50) {
    rentList.push({ startTimeHr, endTimeHr, costPerHour });
}

function Checkout() {
    let totalCost = 0;
    for (let rent of rentList) {
        totalCost += calculateTotalCost(calculateTotalTime(rent.startTimeHr, rent.endTimeHr), rent.costPerHour);
    }
    return totalCost;
}

export const carRentCost = {
    calculateTotalTime,
    calculateTotalCost,
    AddRent,
    Checkout
};