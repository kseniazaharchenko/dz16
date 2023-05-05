function createSum() {
    let sum = 0;
    return function(num) {
      if (!num) {
        return sum;
      }
      sum += num;
      return sum;
    }
  }
  
  const sum = createSum();
  
  console.log(sum(3)); // 3
  console.log(sum(5)); // 8
  console.log(sum(20)); // 28
  console.log(sum()); // 28 - повертає поточний результат суми
  console.log(sum(10)); // 38 - додає до попередньої суми
  console.log(sum()); // 38 - повертає поточний результат суми