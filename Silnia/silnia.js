var score = 1;
new function strongCounting(parameter) {
       var score = score * parameter
           parameter = parameter - 1;
       if (parameter != 1) {
        strongCounting(parameter)
}
        else {
       console.log(score)}
}

strongCounting(3);
