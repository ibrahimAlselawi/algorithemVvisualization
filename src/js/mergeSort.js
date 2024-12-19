 function mergeSort(arr, order = "ascending") {
    let comparisons = 0;
    let swaps = 0;

    // Helper function to merge two halves of the array
    function merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            comparisons++;
            if ((order === "ascending" && left[i] < right[j]) || (order === "descending" && left[i] > right[j])) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
            swaps++; // Increment swaps for each move
        }

        // Concatenate any remaining elements from the left or right array
        while (i < left.length) {
            result.push(left[i]);
            i++;
            swaps++; // Increment swaps for each move
        }
        while (j < right.length) {
            result.push(right[j]);
            j++;
            swaps++; // Increment swaps for each move
        }

        return result;
    }

    // Recursive merge sort function
    function sort(arr) {
        if (arr.length <= 1) return arr;

        // Split the array into two halves
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        // Recursively sort the left and right halves
        return merge(sort(left), sort(right));
    }

    const startTime = performance.now(); 
    const sortedArray =  sort(arr);
    const endTime = performance.now(); 
    const timeTaken = endTime - startTime; 

    return {
        sortedArray,
        comparisons,
        swaps,
        timeTaken
    };
}
