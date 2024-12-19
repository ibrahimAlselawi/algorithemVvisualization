function quickSort(arr, order = 'ascending') {
    let comparisons = 0;
    let swaps = 0;

    // Record the start time
    const startTime = performance.now();

    // Call the helper function with low and high indices
    const result = quickSortHelper(arr, 0, arr.length - 1, order);
    
    comparisons = result.comparisons;
    swaps = result.swaps;

    // Record the end time and calculate time taken
    const endTime = performance.now();
    const timeTaken = endTime - startTime;  // Time in milliseconds
    updateChartData("Quick",  timeTaken, comparisons, swaps);

    return { 
        sortedArray: arr, 
        comparisons, 
        swaps, 
        timeTaken // The time taken for the sorting process
    };
}

function quickSortHelper(arr, low, high, order) {
    let comparisons = 0;
    let swaps = 0;

    if (low < high) {
        let pivot = partition(arr, low, high, order);
        
        comparisons += high - low;  // Add comparisons for this partition
        swaps++;  // Add swap for partitioning step

        // Recursive calls for left and right subarrays
        const leftResult = quickSortHelper(arr, low, pivot - 1, order);
        const rightResult = quickSortHelper(arr, pivot + 1, high, order);

        comparisons += leftResult.comparisons + rightResult.comparisons;
        swaps += leftResult.swaps + rightResult.swaps;
    }

    return { comparisons, swaps };
}

function partition(arr, low, high, order) {
    let pivot = arr[high];
    let i = low - 1;
    let swaps = 0;

    for (let j = low; j <= high - 1; j++) {
        // Compare based on the order
        const compareCondition = order === 'ascending' ? arr[j] < pivot : arr[j] > pivot;
        if (compareCondition) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap
            swaps++;
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  // Swap pivot
    swaps++;

    return i + 1;
}
