//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let groups = [0, 0, 0, 0, 0, 0];
  let sum = 0;
  let fivetochange;
  let threetochange;

  for (let i = 1; i < 6; i++){
    for (let j = 0; j < frequence(i, books); j++){
      groups[j]++;
    } 
  }

  //if (groups.includes(5) && groups.includes(3)){
  //  fivechanged = Math.min(frequence(5, groups), frequence(3, groups));
  //  threechanged = fivechanged
  //  groups.forEach(book => {
  //      if (book === 5 && fivechanged > 0){
  //        book = 4;
  //        fivechanged--;
  //      } else if (book === 3 && threechanged > 0){
  //        book = 4;
  //        threechanged--;
  //      }
  //    });
  //}

  if (groups.includes(5) && groups.includes(3)){
    fivetochange = Math.min(frequence(5, groups), frequence(3, groups));
    threetochange = fivetochange;
    for (let i = 0; i < groups.length; i++){
      if (groups[i] === 5 && fivetochange > 0){
        groups[i] = 4;
        fivetochange--;
      }
      else if (groups[i] === 3 && threetochange > 0){
        groups[i] = 4;
        threetochange--;
      }
    }
  }

  groups.forEach(book => {
      switch(book){
        case 1:
          sum += 800
          break;
        case 2:
          sum += 1520
          break;
        case 3:
          sum += 2160
          break;
        case 4:
          sum += 2560
          break;
        case 5:
          sum += 3000
          break;
      }
    });

  //if (groups[0] === 5 && groups[1] === 3){
  //  sum = 5120
  //}
  //else{
  //  groups.forEach(book => {
  //    switch(book){
  //      case 1:
  //        sum += 800
  //        break;
  //      case 2:
  //        sum += 1520
  //        break;
  //      case 3:
  //        sum += 2160
  //        break;
  //      case 4:
  //        sum += 2560
  //        break;
  //      case 5:
  //        sum += 3000
  //        break;
  //    }
  //  });
  //}
  //let group1 = [];
  //let group2 = [];
  //let group3 = [];
  //let group4 = [];
  //let sums = [];
//
  //books.forEach(book => {
  //  if (!group1.includes(book)){
  //    group1.push(book)
  //  }
  //  else if (!group2.includes(book)){
  //    group2.push(book)
  //  }
  //  else if (!group3.includes(book)){
  //    group3.push(book)
  //  }
  //  else {
  //    group4.push(book)
  //  }
  //});
//
  //for (let i = 1; i < 5; i++){
  //  switch (group[i].length){
  //  case 1:
  //    sum[i] = 800
  //    break;
  //  case 2:
  //    sum[i] = 1520
  //    break;
  //  case 3:
  //    sum[i] = 2160
  //}
  //}

  return sum;
};

const frequence = (num, list) => {
    let count = 0;
    for (let i = 0; i < list.length; i++){
      if (list[i] === num){
        count++;
      }
    }
    return count;
}