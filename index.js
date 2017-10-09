// Code your solution in this file!
function logDriverNames(array) {
  return array.forEach(function(element) {
    console.log(element['name'])
  })
};

function logDriversByHometown(array, hometown) {
  const filtered = array.filter(function (element) {
    return element['hometown'] === hometown
  });
  filtered.forEach(function(element) {
    console.log(element['name'])
  })
}

function driversByRevenue(array) {
  return array.slice(0).sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(array) {
  return array.slice(0).sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(array) {
  return array.reduce(function(acc, el) {
    return acc + el.revenue
  }, 0);
};

function averageRevenue(array) {
  return totalRevenue(array) / array.length
};
