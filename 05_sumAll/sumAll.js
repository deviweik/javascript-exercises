const sumAll = function(start, end) {
    let sum = 0;

    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    } 

    if (end < 0 || start < 0){
        return "ERROR";
    }

    if (typeof end != "number" || typeof start != "number") {
        return "ERROR";
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
