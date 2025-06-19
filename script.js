function mincost(arr) {
  // Helper to build a min-heap
  const heapify = (arr) => {
    arr.sort((a, b) => a - b);
  };

  heapify(arr);
  let totalCost = 0;

  while (arr.length > 1) {
    let first = arr.shift();   // Remove smallest
    let second = arr.shift();  // Remove next smallest

    let cost = first + second;
    totalCost += cost;

    // Insert and re-heapify
    arr.push(cost);
    heapify(arr);
  }

  return totalCost;
}

console.log(mincost([4, 3, 2, 6])); // Output: 29
