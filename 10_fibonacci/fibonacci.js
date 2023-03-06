const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    
    let sequence = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            sequence.push(i);
        } else if (i === 2) {
            sequence.push(i-1);
        } else {
            sequence.push(sequence[i-3] + sequence[i-2]);
        }
    }
    return sequence[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
