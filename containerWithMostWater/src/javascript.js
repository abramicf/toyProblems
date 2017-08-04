//SECOND PASS

//storage object, logging all of the containers first
  //start and end indicies and arrays

getArea = (array, comparison) => {
  let area = 0;
  for (let i = 0; i < array.length; i++) {
    let diff = comparison - array[i];
    area += diff;
  }
  return area;
};

containerWithMostWater = (lines) => {
    //create a storage object
  let storage = [];
  let greatestArea;
  //use indicies to do this
  let highest = 0;
  let lowest;
  //for loop starting at 2
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] < lines[highest] && lowest === undefined) {
      lowest = lines[i];
      continue;
    }
    if (lines[i] < lines[lowest]) {
      lowest = i;
      continue;
    }
    console.log(lowest);
    if (lines[i] > lines[lowest] && lines[i] < lines[highest]) {
      let sub = lines.slice(highest + 1, i);
      let area = getArea(sub, lines[i]);
      storage.push({
        area: area,
        start: highest,
        end: i
      });
    }
    if (lines[i] >= lines[highest]) {
      let sub = lines.slice(highest + 1, i);
      let area = getArea(sub, lines[highest]);
      storage.push({
        area: area,
        start: highest,
        end: i
      });
      highest = i;
      lowest = undefined;
    }
  }

  greatestArea = storage[0];

  for (let i = 1; i < storage.length; i++) {
    if (storage[i].area > greatestArea.area) {
      greatestArea = storage[i];
    }
  }
  // console.log(storage);
  // console.log(greatestArea);
  return [greatestArea.start, greatestArea.end];
};


//FIRST PASS

// containerWithMostWater = (lines) => {
//     //create a storage object
//   let storage = [];
//   //storage object will storage objects itself, including the following props:
//     //start indicy
//     //end indicy
//     //area

//   //need a 'tallest so far' variable
//   let tallestSoFar = {
//     index: 0,
//     height: lines[0]
//   };
//   let area = 0;
//   //need an 'area' variable that we'll keep adding to
//   //if line at i is taller than tallest so far, then create an object with the area, set tallest so far to i and
//   for (let i = 1; i < lines.length; i++) {
//     let currentLine = lines[i];
//     if (currentLine < tallestSoFar.height) {
//       area += (tallestSoFar.height - currentLine);
//     } else {
//       //tallest so far gets reset
//       storage.push({
//         startIndex: tallestSoFar.index,
//         endIndex: i,
//         area: area
//       });
//       tallestSoFar.height = currentLine;
//       tallestSoFar.index = i;
//       area = 0;
//     }
//   }

//   let greatestArea = storage[0].area;
//   let result = storage[0];

//   for (let i = 1; i < storage.length; i++) {
//     if (storage[i].area > greatestArea) {
//       result = storage[i];
//     }
//   }
//   //loop through the storage object at the end and pull out the one with the greatest value
//   return [result.startIndex, result.endIndex];
// };

