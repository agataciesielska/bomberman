var score = 1;
function strongCounting(parameter) {
       score *= parameter;
           parameter -= 1;
       if (parameter > 1) {
        strongCounting(parameter)
        }
        else {
           document.getElementById("strong").innerHTML = score;
        }
}

strongCounting(4);


