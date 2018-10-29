  swap(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }
  shiftOne(arr, direction) {
    // dont forget to create a copy of the array before if you dont want sideEffects
    direction > 0 ? arr.unshift(arr.pop()) : arr.push(arr.shift())
  }
