
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
var principle_highlighted = principle.fontcolor("red");

var rate = document.getElementById("rate").value;
var rate_highlighted = rate.fontcolor("red");

var years = parseInt(document.getElementById("years").value);

var interest = String(principle * years * rate / 100);
var interest_highlighted = interest.fontcolor("red");

var system_year = parseInt(new Date().getFullYear());
var No_of_years = String(system_year+ years);
var No_of_years_highlighted = No_of_years.fontcolor("red");

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

      document.getElementById("result").innerHTML = "If you deposit " + principle_highlighted + "," + "<br>"+
                                                    "at an interest rate of "+ rate_highlighted+ "%." +"<br>"+
                                                    "You will receive an amount of " + interest_highlighted + ","+"<br>" +
                                                    "in the year " + No_of_years_highlighted

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
