// Code your solution here:

function driversWithRevenueOver(arrayOfDriverObjects, revenueNumber) {
  return arrayOfDriverObjects.filter(function(driverObject) {
    return driverObject.revenue > revenueNumber
  })
}

function driverNamesWithRevenueOver(arrayOfDriverObjects, revenueNumber) {
  return driversWithRevenueOver(arrayOfDriverObjects, revenueNumber).map(function(driverObject) {
    return driverObject.name
  })
}

function exactMatch (arrayOfDriverObjects, unknownObject) {
  return arrayOfDriverObjects.filter(function(driverObject) {
    let matches
    for (const key in unknownObject) {
      matches = driverObject[key] === unknownObject[key]
    }
    return matches
  })
}

function exactMatchToList (arrayOfDriverObjects, unknownObject) {
  return exactMatch (arrayOfDriverObjects, unknownObject)
    .map(function (driverObject) {
      return driverObject.name;
    });
}  
