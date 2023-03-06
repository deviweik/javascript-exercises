const removeFromArray = function(arr, remove) {
    let toRemove = [];
    
    for (let i = 1; i < arguments.length; i++) {
        toRemove.push(arguments[i]);
    }

    for (let i = arr.length; i >= 0; i--) {
        for (const item of toRemove) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
