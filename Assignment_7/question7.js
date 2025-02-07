function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        return "No second largest number (all numbers are the same).";
    }

    return secondLargest;
}

console.log(secondLargest([10, 5, 8, 20, 20])); // Example usage
