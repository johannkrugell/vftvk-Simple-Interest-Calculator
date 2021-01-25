
//create the variables for function//
var principle = document.getElementById("principal"); //amount//
var rate = document.getElementById("rate"); //rate//
var years = document.getElementById("years"); //years//
var interest = principle * years * rate / 100 //interest earned calc//

// convert No of Years to actual year in future//
let No_of_years = new Date().getFullYear();
console.log(date);

//compute interest earned
function compute() {

//create the variable principle assign html element to variable//
var principle = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principle * years * rate / 100

    if(principle== 0){
            alert("Enter a number");
            principle.focus();
            return false;
      }
    if(principle < 0){
            alert("Enter a positive number");
            principle.focus();
            return false;
      }

    document.getElementById("result").innerHTML = "If you deposit " + principle + "," +
                                                   "at an interest rate of "+ rate + "." +
                                                   "You will receive an amount of " + interest + "," +
                                                   "in the year " + No_of_years
}

//range slider
//create variables input and output of range value
var slider = document.getElementById("rate");
var output = document.getElementById("slider_value");
output.innerHTML = slider.value;

function slider_change() {
    var slider = document.getElementById("rate").value;
    var output = document.getElementById("slider_value");
    output.innerHTML = slider.value;
    
} 