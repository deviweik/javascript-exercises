const caesar = function(str, shift) {
    const newStrArr = [];
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      let char = '';
      if (charCode >= 65 && charCode <= 90){  // uppercase letters
          char = String.fromCharCode((charCode - 65 + shift + 26) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) { // lowercase letters) 
          char = String.fromCharCode((charCode - 97 + shift + 26) % 26 + 97);
      } else {
          char = String.fromCharCode(charCode);
      }
      newStrArr.push(char);
    }
    return newStrArr.join("");
  };

// Do not edit below this line
module.exports = caesar;
