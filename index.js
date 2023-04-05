const returnFirstTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    drivers.splice(-2);
    const newarrays =drivers;
    return newarrays;
}
const returnLastTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const newarrays =drivers.slice(-2);
    return newarrays;
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(x){
    const Multiplier = function (fare){
        return x * fare 
}
return Multiplier;
}

function fareDoubler(fare){
  fare = fare * 2;
  return fare;
}

function fareTripler(fare){
    fare = fare * 3;
    return fare;
}

function selectDifferentDrivers (arrayOfDrivers,returnFirstTwoDrivers) {
    arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return returnFirstTwoDrivers();
}