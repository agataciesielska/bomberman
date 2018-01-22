var score = 1;
function strongCounting(parameter) {
       score *= parameter
           parameter = parameter - 1;
       if (parameter > 1) {
        strongCounting(parameter)
}
        else {
       return score;
        }
}

strongCounting(3);
