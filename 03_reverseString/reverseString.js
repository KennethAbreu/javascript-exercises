const reverseString = function(str) {
    //Split string into an array separated by a space
    let splitString = str.split('');
    //Reverse the array
    let reverseArray = splitString.reverse();
    //Combines array elements into a string
    let joinArray = reverseArray.join('');

    return joinArray
};


// Do not edit below this line
module.exports = reverseString;
