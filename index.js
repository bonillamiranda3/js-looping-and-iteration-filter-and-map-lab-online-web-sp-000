// Code your solution here:

function driversWithRevenueOver(arrayOfDriversObjects, revenueNumber) {
  return arrayOfDriversObjects.filter(function(driverObject) {
    return driverObject.revenue > revenueNumber
  })
}

function driverNamesWithRevenueOver(arrayOfDriversObjects, revenueNumber) {
  return driversWithRevenueOver(arrayOfDriversObjects, revenueNumber).map(function(driverObject) {
    return driverObject.name
  })
}

fucntion exactMatch (arrayOfDriversObjects, unknownObject) {
  return arrayOfDriversObjects.filter(function(driverObject) {
    let matches
    for (const key in unknownObject) {
      matches = driverObject[key] === unknownObject[key]
    }
    return matches
  })
}

function exactMatchToList(arrayOfDriversObjects, unknownObject) {
  return exactMatch (arrayOfDriversObjects, unknownObject).map (function(driverObject) {
    return driverObject.name;
  });
}
