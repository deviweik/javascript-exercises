const palindromes = function (string) {
    let checkArr = [];
    let stringArr = [];
    let charCodes = [];
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        
        if ((charCode >= 48 && charCode <= 57) ||  // digits
            (charCode >= 65 && charCode <= 90) ||  // uppercase letters
            (charCode >= 97 && charCode <= 122)) { 
                stringArr.push(string[i]);
            }
    }

    const newString = stringArr.join("");

    for (let i = 0; i < newString.length / 2; i++) {
        if (newString[i] === newString[newString.length - 1 - i]){
            checkArr.push(1);
        } else {
            checkArr.push(0);
        }
    }

    let output = false;

    for (const item of checkArr) {
        if (item === 1) {
            output = true;
        } else {
            output = false;
            break;
        }
    }

    return output;
};


// Do not edit below this line
module.exports = palindromes;
