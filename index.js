// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
}
const selectingDrivers = [];
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

function createFareMultiplier(multiplier) {
    return function(fare){
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2);
fareDoubler(10);

const fareTripler = createFareMultiplier(3);
fareTripler(12);

const selectDifferentDrivers = function(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
};
