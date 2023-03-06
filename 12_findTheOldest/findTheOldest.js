const findTheOldest = function(people) {
    const birthYear = people.map(year => year.yearOfBirth);
    const deathYear = people.map(year => year.yearOfDeath);

    for (let i = 0; i < deathYear.length; i++) {
        if (typeof deathYear[i] === 'undefined') {
            deathYear[i] = new Date().getFullYear();
        }
    }

    let maxAgeIndex = 0;
    
    for (let i = 0; i < deathYear.length; i++) {
        if ((deathYear[i] - birthYear[i]) > (deathYear[maxAgeIndex] - birthYear[maxAgeIndex])) {
            maxAgeIndex = i;
        }
    }

    return people[maxAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
