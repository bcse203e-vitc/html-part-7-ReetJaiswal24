function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            duplicates.add(arr[i]);
        } else {
            seen.add(arr[i]);
        }
    }

    if (duplicates.size > 0) {
        console.log("Duplicates found: " + Array.from(duplicates).join(", "));
    } else {
        console.log("No duplicates found.");
    }
}

findDuplicates([1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 3]); // Example usage
