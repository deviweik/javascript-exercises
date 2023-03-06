const reverseString = function(string) {
    let arr = [];

    for (let i = string.length; i >= 0; i--) {
        arr.push(string[i]);
    } 

    const output = arr.join("");

    return output;

};

// Do not edit below this line
module.exports = reverseString;
