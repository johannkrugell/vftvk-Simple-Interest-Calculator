//compute interest earned
function compute() {

//create the variable principle assign html element to variable//
var principle = document.getElementById("principal").value; //amount value and var
var principle_highlighted = principle.fontcolor("yellow"); //new var that updates font color

var rate = document.getElementById("rate").value;
var rate_highlighted = rate.fontcolor("yellow");

var years = parseInt(document.getElementById("years").value); // parse years as integer to add up

var interest = String(principle * years * rate / 100); // parse the result to String to color the font
var interest_highlighted = interest.fontcolor("yellow");

var system_year = parseInt(new Date().getFullYear()); //parse as interger
var No_of_years = String(system_year+ years); //parse as string to color the font
var No_of_years_highlighted = No_of_years.fontcolor("red");

    if(principle== 0){ //funtion to check amount is not zero
            alert("Enter a positive number");
            document.getElementByIdprinciple("principle").focus();
            return false;
      }
    if(principle < 0){ //function to check amount is not negative
            alert("Enter a positive number");
            document.getElementByIdprinciple("principle").focus();
            return false;
      }
      
      // the result output of the calculation
      document.getElementById("result").innerHTML = "If you deposit " + principle_highlighted + "," + "<br>"+
                                                    "at an interest rate of "+ rate_highlighted+ "%." +"<br>"+
                                                    "You will receive an amount of " + interest_highlighted + ","+"<br>" +
                                                    "in the year " + No_of_years_highlighted

    function newFunction() {
        return principle.style.color = "red";
    }
}

//range slider
//create variables input and output of range value

function slider_change() {
    var slider = document.getElementById("rate").value; //get the interest rate value
    document.getElementById("slider_value").innerHTML = slider + "%"; //set the slider <span> to interest rate selected

    
} 
