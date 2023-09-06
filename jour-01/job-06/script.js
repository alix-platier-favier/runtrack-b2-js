function mySquareArray(array) {
    let squaredArray = [];
    for (let i = 0; i < array.length; i++) {
        let squaredValue = array[i] * array[i];
        squaredArray[i] = squaredValue;
    }
    return squaredArray;
}


console.log(mySquareArray([3, 8, 4, 2, 5])); 