function mincost(arr) {
  // Sort the array initially
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    // Take the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let cost = first + second;
    totalCost += cost;

    // Insert the combined rope and sort again
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}

console.log(mincost[4,3,2,6])
