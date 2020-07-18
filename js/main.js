let numberOfDays = Math.ceil((Math.random()*10)*(Math.random()*10));
numberOfDays += " ";
numberOfDays += (Math.random()>0.5) ? "month(s)" : "year(s)";
let text = document.getElementById("noOfDays");
text.innerHTML = numberOfDays;