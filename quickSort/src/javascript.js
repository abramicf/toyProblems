swap = (items, left, right) => {
  let saved = items[left];
  items[left] = items[right];
  items[right] = saved;
  // return items;  //this return used for testing purposes
};

partition = (items, left, right) => { //[ 5, 6, 7, 4, 1, 2, 3 ], 0, 6

  let pivot = Math.floor((left + right) / 2);
  let i = left;  //0
  let j = right; //6

  while (i <= pivot || j >= pivot) {
    while (items[i] <= pivot) {
      i++;
    }
    while (items[j] >= pivot) {
      j--;
    }

    swap(items, i, j);
    i++;
    j--;

  }
  return items;
};
