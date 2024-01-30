// getElementByClassName returns collections
// getElementById returns single value

let col_change_btn = document.getElementById("btn-color-change");
let back_col_div = document.getElementById("bg-col");
let color_code = document.getElementById("color-code");

// let create array of different colors
let col_array = ["#7CB8B3", "#F5795D", "#324258", "#000000", "#D3C4B6"];

// console.log(col_array[0], col_array.length);
// creat function

let changeColorFun = function () {
  let index_number = Math.floor(Math.random() * col_array.length);
  //   console.log(index_number);
  //   console.log(typeof index_number);
  back_col_div.style.backgroundColor = col_array[index_number];
  color_code.innerHTML = col_array[index_number];
};

col_change_btn.addEventListener("click", () => changeColorFun());

back_col_div.style.backgroundColor = "#212121";
color_code.innerHTML = "#212121";
