// swap = (items, left, right) => {
//   let saved = items[left];
//   items[left] = items[right];
//   items[right] = saved;
//   // return items;  //this return used for testing purposes
// };

// partition = (items, left, right) => { //[ 3, 2, 7, 4, 1, 6, 5 ]
//   let pivot = Math.floor((left + right) / 2); //3
//   let i = left;  //2
//   let j = right; //4

//       //2 < 3          4 > 3    true
//   while (i <= j) {
//     while (items[i] <= items[pivot]) {  //items[2] = 7 and items[3] = 4.  Stop loop
//       i++;
//     }
//     while (items[j] >= items[pivot]) { //items[4] = 1 and items[3] = 4
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j);
//       i++;
//       j--;
//     }
//   }
//   // return items;  //used for testing purposes
//   return i;
// };

// quickSort = (items, left, right) => {
//   let separator;
//   //break it into a left and right partition
//   //call quick sort on the left partition and call it on the right partition!  And keep calling it until the items length is equal to one
//   if (left - right > 1) {
//     separator = partition(items, left, right);
//     if (left < separator - 1) {
//       quickSort(items, left, separator - 1);
//     }
//     if (right > separator) {
//       quickSort(items, separator, right);
//     }
//   }
//   return items;
// };

//[7, 3, 10, 12, 8, 15, 1];

//[20, 3, 101, 17, 12, 8, 15, 2, 10, 1];
                      //pivot

//first round: [1, 3, 2, 8, 12, 17, 15, 101, 10, 20];
                                //pivot
               //[20, 3, 101, 17, 12, 8, 15, 2, 10, 1];


function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}



