function bubbleSort(arr, order = "ascending") {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;

    // Start timing
    const startTime = performance.now();

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            comparisons++;

            // Determine condition for swapping based on order
            if ((order === "ascending" && arr[j] > arr[j + 1]) ||
                (order === "descending" && arr[j] < arr[j + 1])) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps++;
                swapped = true;
            }
        }

        // Optimization: Stop if no elements were swapped in this pass
        if (!swapped) break;
    }

    // End timing
    const endTime = performance.now();
    const timeTaken = (endTime - startTime); // Format time to 4 decimals

    return {
        sortedArray: arr,
        comparisons,
        swaps,
        timeTaken: timeTaken, // Return formatted time
    };
}
