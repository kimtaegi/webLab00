"use strict"
window.onload = function () {
    var stack = [];
    var displayVal = "0";
    for (var i in $$('button')) {
        $$('button')[i].onclick = function () {
            var value = this.innerHTML;
            if (!isNaN(parseInt(value))) {
                if (displayVal == "0") {
                    displayVal = value;
                }
                else {
                    displayVal += value;
                }
            }
            else if (value == 'AC') {
                document.getElementById('expression').innerHTML = "0";
                displayVal = "0";
            }
            else if (value == ".") {
                stack.push(".");
            }
            else {
                document.getElementById('expression').innerHTML += displayVal + value;
                displayVal = "0";
                
                if(value == "*" || value == "^" || value == "/") {
                    highPriorityCalculator(s, val);
                }
                else {
                    stack.push(parseFloat(displayVal));
                }
                stack.push(value);
            }
            document.getElementById('result').innerHTML = displayVal;
        };
    }
};


function factorial (x) {

}
function highPriorityCalculator(s, val) {

}
function calculator(s) {
    var result = 0;
    var operator = "+";
    for (var i=0; i< s.length; i++) {
        
    }
    return result;
}
