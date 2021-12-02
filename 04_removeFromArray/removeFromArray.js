const removeFromArray = function(array, num1, ...infiniteNum) {

    for (i = 0; i < array.length; i++) {
        if (array[i] === num1) {
            array.splice(i, 1);
        }
        else if (array[i] === infiniteNum[i]) {
            // array.splice(i, 1);
            // return array
            console.log(infiniteNum[i])
        }
    }
};

let myArray = [1, 2, 3, 4, 5];
console.log(removeFromArray(myArray, 2, 4));


// Do not edit below this line
module.exports = removeFromArray;
