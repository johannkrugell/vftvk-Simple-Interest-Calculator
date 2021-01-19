
//create variable to beused in the compute function
    //create the variable principle assign html element to variable
    var principle = document.getElementById("principal").value 

    //create the variable rate assign html element to variable
    var rate = document.getElementById("rate").value 

    //create the variable years assign html element to variable
    var years = document.getElementById("years").value 

// convert No of Years to actual year in future
let No_of_years =  new Date().getFullYear();
console.log(date);

//compute interest earned
function compute()
{ 
    //interest calculation
    var interest = principle * years * rate / 100
}


function rangeslider()
{


}

var rangeslider = document.getElementById("result");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 