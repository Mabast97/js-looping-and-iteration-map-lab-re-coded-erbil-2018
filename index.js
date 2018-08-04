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
    let first = items.split(' ')[0];
    let second = items.split(' ')[2];
    
    return {firstName: first, secondName: second };
  });
}