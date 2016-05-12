// Set the temperature to some celsius value

// Convert the temperature to Fahrenheit
// Set a threshold temperature in Fahrenheit

// If the F temperature is below the threshold, set the background color to gray for the body

function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else  {
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}
var threshold = 50;
  // Why won't gray show up?!!
  if ("c" > 50) {
    document.body.style.backgroundColor = "gray";
  }
  else  {
    document.body.style.backgroundColor = "yellow";
  }
