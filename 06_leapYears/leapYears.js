const leapYears = function(year) {
    let output = false;

    if (year % 4 == 0) {
        output = true;
        if (year % 100 == 0) {
            output = false;
            if (year % 400 == 0) {
                output = true;
            }
        }
    }

    return output;
};

// Do not edit below this line
module.exports = leapYears;
