const inputNumber = document.getElementById('inputNumber');
const convertButton = document.getElementById('convertButton');
const outputContainer = document.getElementById('outputContainer');

// Function to convert number to Roman numeral
function stringToRoman(num) {
    let roman = {
        M: 1000, CM: 900, D: 500,
        CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10,
        IX: 9, V: 5, IV: 4, I: 1
    };
    let str = '';

    for (let i of Object.keys(roman)) {
        let q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}


convertButton.addEventListener('click', () => {
   
    const inputValue = parseInt(inputNumber.value);

    const convertedValue = stringToRoman(inputValue);

    if (!isNaN(inputValue) && inputValue >= 1) {
        outputContainer.textContent = convertedValue;
        outputContainer.style.display = 'block'; 
    } else {
        outputContainer.style.display = 'none'; 
    }
});
