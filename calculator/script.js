
let reuslt = document.getElementById('display').value;

//Function to calculate
function calculate() {
    result = eval(result); 
    document.getElementById('display').value = numbWidthCommas(result);
}