
//create the variable principle assign html element to variable
var principle = document.getElementById("principal").value

//create the variable rate assign html element to variable
var rate = document.getElementById("rate").value

//create the variable years assign html element to variable
var years = document.getElementById("years").value

//create the variable interest
var interest = principle * years * rate / 100

// convert No of Years to actual year in future
let No_of_years = new Date().getFullYear();
console.log(date);

//compute interest earned
function compute() {
    document.getElementById("result").innerHTML = "if you deposit"
}

//range slider
//create variables input and output of range value
var slider = document.getElementById("rate")

function show_value(slider) {
  document.getElementById("slider_value").innerHTML = slider
} 
 