function insertionSort(arr, order = "ascending") {
    let comparisons = 0;
    let swaps = 0;

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
            }
        } else {
            // Descending order logic
            while (j >= 0 && arr[j] < key) {
                comparisons++;
                arr[j + 1] = arr[j];
                j--;
                swaps++;
            }
        }

        arr[j + 1] = key;
        if (j >= 0) comparisons++; // Count the failed comparison
    }

    return { sortedArray: arr, comparisons, swaps };
}

// UI Hook for Sorting
function performSort() {
    // Get inputs from the UI
    const arrayInput = document.getElementById("arrayInput").value.trim();
    const order = document.getElementById("order").value;

    if (!arrayInput) {
        alert("Please enter an array of numbers!");
        return;
    }

    // Parse the input array
    const array = arrayInput.split(",").map(num => parseFloat(num.trim()));
    if (array.some(isNaN)) {
        alert("Please enter a valid list of numbers!");
        return;
    }

    // Perform the sort
    const result = insertionSort(array, order);

    // Display results in the UI
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h3>Results:</h3>
        <p><strong>Sorted Array (${order}):</strong> [${result.sortedArray.join(", ")}]</p>
        <p><strong>Comparisons:</strong> ${result.comparisons}</p>
        <p><strong>Swaps:</strong> ${result.swaps}</p>
    `;
}
