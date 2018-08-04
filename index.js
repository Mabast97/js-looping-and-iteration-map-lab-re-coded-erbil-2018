// Code your solution in this file.
function lowerCaseDrivers (array)
{
  return array.map(function(items){
    return items.toLowerCase();
  });
}

function nameToAttributes (array)
{
  return array.map(function(items){
    const first = items.split(' ')[0];
    const second = items.split(' ')[1];
    
    return {firstName: first, secondName: second };
  });
}
function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}