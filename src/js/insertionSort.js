function insertionSort(arr, order = "ascending") {
    let comparisons = 0;
    let swaps = 0;

    const startTime = performance.now(); // Start timing

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        if (order === "ascending") {
            // Ascending order logic
            while (j >= 0 && arr[j] > key) {
                comparisons++;
                arr[j + 1] = arr[j];
                j--;
                swaps++;
            };
        } else {
            // Descending order logic
            while (j >= 0 && arr[j] < key) {
                comparisons++;
                arr[j + 1] = arr[j];
                j--;
                swaps++;
            };
        };
        arr[j + 1] = key;
        if (j >= 0) comparisons++; // Count the failed comparison
    };

    const endTime = performance.now(); // End timing
    const timeTaken = (endTime - startTime); // Calculate time taken

    return { 
        sortedArray: arr, 
        comparisons, 
        swaps, 
        timeTaken: timeTaken,
    };
};