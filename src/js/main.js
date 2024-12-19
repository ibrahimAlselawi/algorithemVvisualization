// UI Hook for Sorting
const chooseAlgoritem = function(){
    const selectedAlgorithms = [];
    if (document.getElementById("SelectionCheckBox").checked) {
        selectedAlgorithms.push("Selection");
    }
    if (document.getElementById("InsertionCheckBox").checked) {
        selectedAlgorithms.push("Insertion");

    }
    if (document.getElementById("BubbleCheckBox").checked) {
        selectedAlgorithms.push("Bubble");
    }

    if (selectedAlgorithms.length === 0) {
        alert("Please select at least one algorithm to sort!");
    }

}
const performSort = function () {
    // Get inputs from the UI
    const arrayInput = document.getElementById("arrayInput").value.trim();
    if (!arrayInput) {
        alert("Please enter an array of numbers!");
        return;
    };
    // Parse the input array
    const array = arrayInput.split(",").map(num => parseInt(num.trim()));
    if (array.some(isNaN)) {
        alert("Please enter a valid list of numbers!");
        return;
    };


    const insertionOrder = document.getElementById("insertionOrder").value;
    const bubbleOrder = document.getElementById("bubbleOrder").value;
    const SelectionOrder = document.getElementById("SelectionOrder").value;

    

    

    //#region insertionSort 
    // Perform the sort
    const insertionNewArr = [].concat(array);
    const insertionResult = insertionSort(insertionNewArr, insertionOrder);
   

    // Display results in the UI
    const insertionResultsDiv = document.getElementById("insertionResults");
    insertionResultsDiv.innerHTML = `
        
        <p>Comparisons: ${insertionResult.comparisons}</p>
        <p>Swaps: ${insertionResult.swaps}</p>
        <p>Time Taken: ${insertionResult.timeTaken}ms</p>
    `;
    //#endregion

    //#region bubbleSort 
    // Perform the sort
    const bubbleNewArr = [].concat(array);
    const bubbleResult = bubbleSort(bubbleNewArr, bubbleOrder);
    // Display results in the UI
    const bubbleResultsDiv = document.getElementById("bubbleResult");
    bubbleResultsDiv.innerHTML = `
        <p>Comparisons: ${bubbleResult.comparisons}</p>
        <p>Swaps: ${bubbleResult.swaps}</p>
        <p>Time Taken: ${bubbleResult.timeTaken}ms</p>
    `;
    //#endregion


    //#region selectionSort 
    // Perform the sort
    const SelectionNewArr = [].concat(array);
    const SelectionResult = selectionSort(SelectionNewArr, SelectionOrder);
    // Display results in the UI
    const SelectionResultDiv = document.getElementById("SelectionResults");
    SelectionResultDiv.innerHTML = `
        <p>Comparisons: ${SelectionResult.comparisons}</p>
        <p>Swaps: ${SelectionResult.swaps}</p>
        <p>Time Taken: ${SelectionResult.timeTaken}ms</p>
    `;
    //#endregion



}





const generateRandomInput = function(){
    const inputElement = document.getElementById("arrayInput");
        const randomArray = [];
        // Generate an array of random integers
        for (let i = 0; i < 1000; i++) {
            randomArray.push(Math.floor(Math.random() * 1000)); // Random number between 0 and maxNumber-1
        };
        inputElement.value = randomArray.join(", ");
};