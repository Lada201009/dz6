let n = +prompt("Введите номер задания от 1 до 8", 8);

function task1() {
  let myArray = [4, -5, 0, 2, -67, 8, 10, -34];
  function getPositiveNumbers(array) {
    let positiveNum = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 0) {
        positiveNum.push(array[i]);
      }
    }
    return positiveNum;
  }
  console.log(getPositiveNumbers(myArray));
}

function task2() {
  let arr = [189, 15, 34, 432, 100, 123, 56, 124, 35];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 100) {
      sum += arr[i];
    }
  }
  console.log(arr);
  return console.log(sum);
}

function task3() {
  let arr2 = [189, 15, 34, 432, 100, 123, 56, 124, 35];
  for (let i = 0; i < arr2.length; i++) {
    console.log((arr2[i] = arr2[i] - (arr2[i] / 100) * 3));
  }
}

function task4() {
  let arr3 = [186, 115, 134, 431, 103, 126];
  console.log(arr3);
  let arr4 = [19, 15, 34, 42, 10, 13];
  console.log(arr4);
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < 100) {
      console.log((arr3[i] = arr3[i] + (arr3[i] / 100) * 5));
    } else console.log("Array 1 does not fit");
  }
  for (let j = 0; j < arr3.length; j++) {
    if (arr4[j] < 100) {
      console.log((arr4[j] = arr4[j] + (arr4[j] / 100) * 5));
    } else console.log("Array 2 does not fit");
  }
}

function task5(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

function task6() {
  let array1 = ["a", "b", "c"];
  let array2 = ["d", "e", "f"];
  let array3 = array1.concat(array2);
  console.log(array3);
  for (let i = array3.length; i >= 0; i--) {
    console.log(array3[i]);
  }
}

function task7(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

function task8(array) {
  let minIndex = 0;
   let min = array[0];
   for (let i = 0; i < array.length; i++) {
     if (array[i] < min) {
       min = array[i];
       minIndex = i;
     }
   }
   return minIndex;
 }

switch (n) {
  case 1:
    task1();
    break;
  case 2:
    task2();
    break;
  case 3:
    task3();
    break;
  case 4:
    task4();
    break;
  case 5:
    const string = prompt("Enter a string: ");
    const value = task5(string);
    console.log(value);
    task5(string);
    break;
  case 6:
    task6();
    break;
  case 7:
    let str = prompt("Enter text ");
    console.log(task7(str));
    task7(str);
    break;
  case 8:
    console.log(task8(array=[22, 4, 92, 5, 9, 5]));
    task8(array);
    break;
}
