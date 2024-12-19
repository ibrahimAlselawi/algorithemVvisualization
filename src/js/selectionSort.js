function selectionSort(arr, order = "ascending") {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;

    // Start timing the sorting process
    const startTime = performance.now();

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the index of the minimum (or maximum) element in the unsorted part of the array
        let extremeIndex = i;
        for (let j = i + 1; j < n; j++) {
            comparisons++; // Increment the comparison count
            if ((order === "ascending" && arr[j] < arr[extremeIndex]) || 
                (order === "descending" && arr[j] > arr[extremeIndex])) {
                extremeIndex = j;
            }
        }

        // Swap the found minimum (or maximum) element with the first element of the unsorted part
        if (extremeIndex !== i) {
            // Swap the elements
            [arr[i], arr[extremeIndex]] = [arr[extremeIndex], arr[i]];
            swaps++; // Increment the swap count
        }
    }

    // End timing the sorting process
    const endTime = performance.now();
    const timeTaken = endTime - startTime; // Calculate the time taken for sorting

    return {
        sortedArray: arr,
        comparisons,
        swaps,
        timeTaken: timeTaken, // Return time taken with 4 decimal places
    };
}
