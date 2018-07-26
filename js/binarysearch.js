//BINARY SEARCH EXAMPLE
function findIndex(values, target) {
    return binarySearch(values, target, 0, values.length - 1);
};

function binarySearch(values, target, start, end) {
    if (start > end) {
        return -1;
    } //does not exist

    var middle = Math.floor((start + end) / 2);
    var value = values[middle];

    if (value > target) {
        return binarySearch(values, target, start, middle - 1);
    }
    if (value < target) {
        return binarySearch(values, target, middle + 1, end);
    }
    return middle; //found!
}
var ans = findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20);
alert(ans);
//BINARY SEARCH EXAMPLE TWO
var array = [55, 77, 62, 80, 32, 13, 68, 10, 23, 52];

function binarysearch(arr, value) {
    var high = arr.length - 1;
    var low = 0;
    var mid = 0;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (arr[mid] == value) {
            return arr[mid];
        } else if (value >= arr[mid]) {
            //move the low up in one
            low = mid + 1;
        } else {
            //move the high up one

            high = mid - 1;
        }
    }
    return -1;
}
var sorted = array.sort(function (a, b) return {
    a - b
});
var wasItFound = binarysearch(sorted, 32);
