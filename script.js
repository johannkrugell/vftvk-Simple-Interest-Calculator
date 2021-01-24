
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
    document.getElementById("result").innerHTML = "If you deposit " + principle + ","
                                                   "at an interest rate of "+ rate + "."
                                                    "You will receive an amount of " + interest+","
                                                        "in the year" + No_of_years
}

//range slider
//create variables input and output of range value
var slider = document.getElementById("rate");
var output = document.getElementById("slider_value");
output.innerHTML = slider.value;

function slider_change() {
  document.getElementById("rate").value.innerHTML =this.value
} 