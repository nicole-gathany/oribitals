function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  //this works
  let orbitalArr = arr.map(a =>
    Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + a.avgAlt, 3) / GM)
    )
  );
  console.log(orbitalArr);
  let resultArr = [];
  for (let i = 0; i < orbitalArr.length; i++) {
    resultArr.push({ name: arr[i].name, orbitalPeriod: orbitalArr[i] });
  }
  return resultArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
); //should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
