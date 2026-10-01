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

function AddRent(startTimeHr: number, endTimeHr: number, costPerHour: number = 50): RentCar[] | undefined {
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

export const carRentCost = {
    calculateTotalTime,
    calculateTotalCost,
    AddRent,
    Checkout
};