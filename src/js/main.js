// UI Hook for Sorting
// document.getElementById("sortingChart").addEventListener("DOMContentLoaded",showMostEfficiency())
const selectedAlgorithms = [];  
const chooseAlgoritem = function(){
    function updateHtml(selectedAlgorithms){
        document.getElementById("selectDiv").classList.add("hidden");
        document.getElementById("mainDiv").classList.remove("hidden");
        selectedAlgorithms.forEach(algorithm => {
            const divElement = document.getElementById(algorithm.divId);
            if (algorithm.isChecked) {
                divElement.classList.remove("hidden");
            } else {
                if(fivElement.classList.contains("hidden")){
                divElement.classList.add("hidden");
                };
            };
        });
    };

    // Declare selectedAlgorithms once
    const algorithms = [
        { name: "selection", checkboxId: "SelectionCheckBox", divId: "SelectionSortDiv",comparisonsResult: "selectionComparisons", swapsResult :"selectionSwaps",timeResult:"selectionTime" },
        { name: "insertion", checkboxId: "InsertionCheckBox", divId: "InsertionSortDiv",comparisonsResult: "insertionComparisons", swapsResult :"insertionSwaps",timeResult:"insertionTime" },
        { name: "bubble", checkboxId: "BubbleCheckBox", divId: "BubbleSortDiv",comparisonsResult: "bubbleComparisons", swapsResult :"bubbleSwaps",timeResult:"bubbleTime" },
        { name: "quick", checkboxId: "QuickCheckBox", divId: "QuickSortDiv",comparisonsResult: "quickComparisons", swapsResult :"quickSwaps",timeResult:"quickTime" },
    ];
    algorithms.forEach(algorithm => {
        const isChecked = document.getElementById(algorithm.checkboxId).checked;
        if (isChecked) {
            selectedAlgorithms.push({
                name : algorithm.name,
                divId: algorithm.divId,
                isChecked: isChecked,
                ComparisonsResult:algorithm.ComparisonsResult,
                swapsResult:algorithm.swapsResult,
                timeResult:algorithm.timeResult,
            });
        };
    });

    // Check if no algorithm was selected
    if (selectedAlgorithms.length === 0) {
        alert("Please select at least one algorithm to sort!");
    } else {
        updateHtml(selectedAlgorithms);
    };
    updateChart();
};
const performSort =  function()  {
    document.getElementById("ChartDiv").classList.remove("hidden");
    var results = document.getElementsByClassName("results");
    for (var i = 0; i < results.length; i++) {
     results[i].classList.remove("hidden");
    };

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
    const QuickOrder = document.getElementById("QuickOrder").value;
    
    selectedAlgorithms.forEach(algorithm => {
        if (algorithm.isChecked) {
            const arrayCopy = [].concat(array); // Copy the original array to avoid modifying it
            const order = {
                Insertion: insertionOrder,
                Bubble: bubbleOrder,
                Selection: SelectionOrder,
                Quick: QuickOrder
            }[algorithm.name];
        // Call the execute function with the appropriate parameters
          executeSortAndDisplayResult(algorithm.name, arrayCopy, order, `${algorithm.name.toLowerCase()}Result`);
        };
    });
    
    
};

//#region  executeSortAndDisplayResult
function executeSortAndDisplayResult(algorithmName, array, order, resultDivId) {
    let result;

    // Run the corresponding sorting algorithm
    switch (algorithmName.toLowerCase()) {
        case "insertion":
            result = insertionSort(array, order);
            break;
        case "bubble":
            result = bubbleSort(array, order);

            break;
        case "selection":
            result = selectionSort(array, order);
            break;
        case "quick":
            result = quickSort(array, order);
            break;
        default:
            alert("something went wrong relode the page");
            return;
    };
    const resultDiv = document.getElementById(resultDivId);
    resultDiv.innerHTML = `
        <p id=${algorithmName+"Comparisons"}>Comparisons: ${result.comparisons}</p>
        <p id=${algorithmName+"Swaps"}>Swaps: ${result.swaps}</p>
        <p id=${algorithmName+"Time"}>Time Taken: ${result.timeTaken}ms</p>
    `;
};
//#endregion

//#region showMostEfficiency
function showMostEfficiency(selectedAlgorithms) {
    let leastComparisons = Infinity; // Start with a very high value
    let leastComparisonsAlgorithm = null; // To store the algorithm with the least comparisons
    let leastSwaps = Infinity; // Start with a very high value
    let leastSwapsAlgorithm = null; // To store the algorithm with the least comparisons
    selectedAlgorithms.forEach(algorithm => {
        const comparisonsElement = document.getElementById(algorithm.comparisonsResult);
        const SwapesElement = document.getElementById(algorithm.swapsResult);

        if (comparisonsElement) {
            const comparisons = parseInt(comparisonsElement.textContent, 10); // Get the comparisons value
            if (comparisons < leastComparisons) {
                leastComparisons = comparisons;
                leastComparisonsAlgorithm = algorithm.name; // Store the algorithm name
            };
        };

        if (SwapesElement) {
            const swaps = parseInt(SwapesElement.textContent, 10); // Get the comparisons value
            if (swaps < leastSwaps) {
                leastSwaps = swaps;
                leastSwapsAlgorithm = algorithm.name; // Store the algorithm name
            };
        };
    });
    if (leastComparisonsAlgorithm) {
        console.log(`Algorithm with the least comparisons: ${leastAlgorithm} (${leastComparisons} comparisons)`);
        const leastComparisonsAlgorithmElement = document.getElementById(leastAlgorithm.comparisonsResult);
        leastComparisonsAlgorithmElement.classList.add("text-green-500	");
    } else {
        console.log("No comparisons found for the selected algorithms.");
    };
    if (leastSwapsAlgorithm) {
        console.log(`Algorithm with the least comparisons: ${leastAlgorithm} (${leastComparisons} comparisons)`);
        const leastSwapsAlgorithmElement = document.getElementById(leastAlgorithm.swapsResult);
        leastSwapsAlgorithmElement.classList.add("text-green-500	");
    } else {
        console.log("No swaps found for the selected algorithms.");
    };


};

//#endregion
//#region generateRandomInput
const generateRandomInput = function(){
    const inputElement = document.getElementById("arrayInput");
        const randomArray = [];
        // Generate an array of random integers
        for (let i = 0; i < 1000; i++) {
            randomArray.push(Math.floor(Math.random() * 1000)); // Random number between 0 and maxNumber-1
        };
        inputElement.value = randomArray.join(", ");
};
//#endregion