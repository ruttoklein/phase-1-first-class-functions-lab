// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    if (drivers.length >= 2) {
      return drivers.slice(-2);
    } else {
      return drivers;
    }
  };
  

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  
  const fareDoubler = createFareMultiplier(2);
  
  
  const fareTripler = createFareMultiplier(3);
  
  
  function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
  }
  
  const driversArray = ["Driver1", "Driver2", "Driver3", "Driver4"];
  const firstTwoDrivers = selectDifferentDrivers(driversArray, returnFirstTwoDrivers);
  const lastTwoDrivers = selectDifferentDrivers(driversArray, returnLastTwoDrivers);
  const doubledFare = fareDoubler(10);
  const tripledFare = fareTripler(10);
  
  console.log(firstTwoDrivers); 
  console.log(lastTwoDrivers);  
  console.log(doubledFare);     
  console.log(tripledFare); 
