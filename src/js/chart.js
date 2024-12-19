let sortingTimes = {
    "Selection": 0,
    "Insertion": 0,
    "Bubble": 0
};
// Example: When a sorting algorithm finishes, capture the time and update the chart
function updateChartData(algorithm, time) {
    sortingTimes[algorithm] = time;
    updateChart();
}
// Chart setup
const ctx = document.getElementById('sortingChart').getContext('2d');
const sortingChart = new Chart(ctx, {
    type: 'bar',  // You can also use 'line', 'pie', etc.
    data: {
        labels: ['Selection', 'Insertion', 'Bubble'],  // Sorting algorithms
        datasets: [{
            label: 'Sorting Time (ms)',
            data: [sortingTimes["Selection"], sortingTimes["Insertion"], sortingTimes["Bubble"]],
            backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
            borderColor: ['#388E3C', '#F57C00', '#1976D2'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 50
                }
            }
        }
    }
});
// Function to update the chart
function updateChart() {
    sortingChart.data.datasets[0].data = [
        sortingTimes["Selection"], 
        sortingTimes["Insertion"], 
        sortingTimes["Bubble"]
    ];
    sortingChart.update();
}
// Sample function that simulates sorting and updates chart data
function simulateSorting(algorithm) {
    let startTime = performance.now();
    // Simulate sorting delay based on the algorithm
    setTimeout(() => {
        let endTime = performance.now();
        let sortingTime = endTime - startTime;
        updateChartData(algorithm, sortingTime);
    }, Math.random() * 1000 + 500);  // Random delay for simulation
}

// Call this when sorting starts
function performSort() {
    simulateSorting("Selection");
    simulateSorting("Insertion");
    simulateSorting("Bubble");
}
// You can call performSort() when sorting is triggered
