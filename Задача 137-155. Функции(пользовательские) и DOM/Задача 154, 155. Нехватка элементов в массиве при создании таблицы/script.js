let div = document.querySelector('.container');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
div.appendChild(generateTable(arr));

function generateTable(arr) {
   let table = document.createElement('div');
   table.className = 'table';
   for (let i=0; i<arr.length; i++) {
    let tr = document.createElement('div');
    tr.className = 'tr';    
    for (let j=0; j<arr[i].length; j++) {
      let td = document.createElement('div');
      td.className = 'td'; 
      td.innerHTML = arr[i][j];
      tr.appendChild(td);
    } 
    table.appendChild(tr);
  }
  return table; 
}

// Задача 2. Преобразование одномерного массива в двухмерный и создание таблицы

let elem = document.querySelector('.elem');
let arrItem = [1, 2, 3, 4, 5, 6, 7, 8];
let cols = 3; // Количество колонок в одном ряду (или элементов в одном подмасиве)
let twoDimArr = convertArr(arrItem, cols);

function convertArr(arr, cols) {
  let arrays = [];
  let k = 0;
  for (let i=0; i<((arr.length+1)/cols); i++) {
     arrays[i] = [];
     for (let j=0; j<cols; j++) {
       arrays[i][j] = arr[k];  
       k++;
     }
  } 
//  arrays.filter(n => n.some(m => m !== '')); если в массиве пустые значения фильтрует
//  return arrays.filter(n => n !== ''); // Если в массиве пустые подмассивы фильтрует
//  return arrays.slice(1);
  return arrays;
}

// Задача 3. Если есть хотя бы 1 ячейка в ряду(подмассиве), оставить этот ряд и в пустые значения 
// передать что-то

function normalizeArr(twoDimArr, cols, symbol1) {
  let result = twoDimArr.map((values) => {
    return values.map((m) => {
      if (m === undefined) return m = symbol1;
      return m;
    })
  });   
  return result;
}

let normalTwoDimArr = normalizeArr(twoDimArr, cols, '!');

elem.appendChild(generateTable(normalTwoDimArr));
