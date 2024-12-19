let sortingResults = {
    "Selection": { time: 0, comparisons: 0, swaps: 0 },
    "Insertion": { time: 0, comparisons: 0, swaps: 0 },
    "Bubble": { time: 0, comparisons: 0, swaps: 0 },
    "Quick": { time: 0, comparisons: 0, swaps: 0 },
};
// Example: When a sorting algorithm finishes, capture the time and update the chart
function updateChartData(algorithm, time, comparisons, swaps) {
    sortingResults[algorithm] = { time, comparisons, swaps };
    if(comparisons > 10000){
        updateChartStepSize(5000);
    };
    updateChart();
}
// Chart setup
const ctx = document.getElementById('sortingChart').getContext('2d');
const sortingChart = new Chart(ctx, {
    type: 'bar',  // Bar chart to compare sorting algorithms
    data: {
        labels: ['Selection', 'Insertion', 'Bubble', 'Quick'],
        datasets: [
            // {
            //     label: 'Sorting Time (ms)',
            //     data: [0, 0, 0, 0], // Default time values
            //     backgroundColor: '#4CAF50',
            //     borderColor: '#388E3C',
            //     borderWidth: 1
            // },
            {
                label: 'Comparisons',
                data: [0, 0, 0, 0], // Default comparisons count
                backgroundColor: '#FF9800',
                borderColor: '#F57C00',
                borderWidth: 1
            },
            {
                label: 'Swaps',
                data: [0, 0, 0, 0], // Default swaps count
                backgroundColor: '#2196F3',
                borderColor: '#1976D2',
                borderWidth: 1
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5,
                },
                callback: function(value) {
                    if (value <= 2) {
                        return value.toFixed(6); 
                    }
                    return value; 
                }
            },
        },
    },
});
// Function to update the chart
// function updateChart() {
//     // Update the sortingResults object with new data
//     // sortingChart.data.datasets[2].data = [
//     //     sortingResults["Selection"].time,
//     //     sortingResults["Insertion"].time,
//     //     sortingResults["Bubble"].time,
//     //     sortingResults["Quick"].time,
//     // ];
//     sortingChart.data.datasets[0].data = [
//         sortingResults["Selection"].comparisons,
//         sortingResults["Insertion"].comparisons,
//         sortingResults["Bubble"].comparisons,
//         sortingResults["Quick"].comparisons,

//     ];
//     sortingChart.data.datasets[1].data = [
//         sortingResults["Selection"].swaps,
//         sortingResults["Insertion"].swaps,
//         sortingResults["Bubble"].swaps,
//         sortingResults["Quick"].swaps,
//     ];
//     sortingChart.update();
// };

function updateChart() {
    const comparisonsData = [];
    const swapsData = [];
    const labels = [];

    ["Selection", "Insertion", "Bubble", "Quick"].forEach(algorithm => {
        const isSelected = selectedAlgorithms.some(selected => selected.name.toLowerCase() === algorithm.toLowerCase());

        if (isSelected) {
            comparisonsData.push(sortingResults[algorithm].comparisons);
            swapsData.push(sortingResults[algorithm].swaps);
            labels.push(algorithm);
        } else {
            comparisonsData.push(0); // Zero for deselected algorithms
            swapsData.push(0); // Zero for deselected algorithms
        }
    });

    sortingChart.data.labels = labels; // Update chart labels
    sortingChart.data.datasets[0].data = comparisonsData;
    sortingChart.data.datasets[1].data = swapsData;

    sortingChart.update(); // Re-render the chart
};
function updateChartStepSize(newStepSize){
    sortingChart.options.scales.y.ticks.stepSize = newStepSize;
    sortingChart.update();
}