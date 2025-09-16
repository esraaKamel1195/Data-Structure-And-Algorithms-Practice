const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(linearSearch([10, 20, 30, 60, 70, 80, 90 , 40, 50], 100));
