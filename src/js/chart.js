let sortingResults = {
    "Selection": { time: 0, comparisons: 0, swaps: 0 },
    "Insertion": { time: 0, comparisons: 0, swaps: 0 },
    "Bubble": { time: 0, comparisons: 0, swaps: 0 }
};
// Example: When a sorting algorithm finishes, capture the time and update the chart
function updateChartData(algorithm, time, comparisons, swaps) {
    sortingResults[algorithm] = { time, comparisons, swaps };
    updateChart();
}
// Chart setup
const ctx = document.getElementById('sortingChart').getContext('2d');
const sortingChart = new Chart(ctx, {
    type: 'bar',  // Bar chart to compare sorting algorithms
    data: {
        labels: ['Selection', 'Insertion', 'Bubble'],
        datasets: [
            {
                label: 'Sorting Time (ms)',
                data: [0, 0, 0], // Default time values
                backgroundColor: '#4CAF50',
                borderColor: '#388E3C',
                borderWidth: 1
            },
            {
                label: 'Comparisons',
                data: [0, 0, 0], // Default comparisons count
                backgroundColor: '#FF9800',
                borderColor: '#F57C00',
                borderWidth: 1
            },
            {
                label: 'Swaps',
                data: [0, 0, 0], // Default swaps count
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
                    stepSize: 5
                },
                callback: function(value) {
                    // Format small numbers (time in milliseconds)
                    if (value <= 2) {
                        return value.toFixed(6); // Show 3 decimal places for small numbers
                    }
                    return value; // Return value as is for larger numbers
                }
            },
        },
    },
});
// Function to update the chart
function updateChart() {
    // Update the sortingResults object with new data
    sortingChart.data.datasets[0].data = [
        sortingResults["Selection"].time,
        sortingResults["Insertion"].time,
        sortingResults["Bubble"].time
    ];
    sortingChart.data.datasets[1].data = [
        sortingResults["Selection"].comparisons,
        sortingResults["Insertion"].comparisons,
        sortingResults["Bubble"].comparisons
    ];
    sortingChart.data.datasets[2].data = [
        sortingResults["Selection"].swaps,
        sortingResults["Insertion"].swaps,
        sortingResults["Bubble"].swaps
    ];
    sortingChart.update();
};

// You can call performSort() when sorting is triggered
