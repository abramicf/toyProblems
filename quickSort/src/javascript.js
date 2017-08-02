swap = (items, left, right) => {
  let saved = items[left];
  items[left] = items[right];
  items[right] = saved;
  // return items;  //this return used for testing purposes
};

partition = (items, left, right) => { //[ 3, 2, 7, 4, 1, 6, 5 ]
  let pivot = Math.floor((left + right) / 2); //3
  let i = left;  //2
  let j = right; //4

      //2 < 3          4 > 3    true
  while (i < pivot || j > pivot) {
    while (items[i] <= items[pivot]) {  //items[2] = 7 and items[3] = 4.  Stop loop
      i++;
    }
    while (items[j] >= items[pivot]) { //items[4] = 1 and items[3] = 4
      j--;
    }
    swap(items, i, j);
    i++;
    j--;

  }
  return items;
};


