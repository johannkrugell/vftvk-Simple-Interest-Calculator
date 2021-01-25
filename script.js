
//create the variables for function//
var principle;  //amount//

var rate ; //rate//
var years; //years//var interest = principle * years * rate / 100; //interest earned calc//
var No_of_years;
var system_year;

// convert No of Years to actual year in future//
//let No_of_years = new Date().getFullYear(); + 
//console.log(date);

//compute interest earned
function compute() {

//create the variable principle assign html element to variable//
//document.getElementById("principal").value.innerHTML = principle;
var principle = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principle * years * rate / 100
var system_year = parseInt(new Date().getFullYear());
var No_of_years = system_year+ years;

    if(principle== 0){
            alert("Enter a positive number");
            principle.focus();
            return false;
      }
    if(principle < 0){
            alert("Enter a positive number");
            principle.focus();
            return false;
      }

      document.getElementById("result").innerHTML = "If you deposit " + principle + "," +
                                                   "at an interest rate of "+ rate + "%." +
                                                   "You will receive an amount of " + interest + "," + 
                                                   "in the year " + No_of_years

    function newFunction() {
        return principle.style.color = "red";
    }
}

function newFunction_1(newFunction) {
    return newFunction();
}

//range slider
//create variables input and output of range value

function slider_change() {
    var slider = document.getElementById("rate").value;
    document.getElementById("slider_value").innerHTML = slider + "%";
    
    
} 
