
const ctx1 = document.getElementById('chart1').getContext('2d');

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [{
      label: '',  
      data: [5, 6, 8.5, 6, 8, 11.5, 7, 11],
      borderColor: 'turquoise',
      backgroundColor: 'transparent',
      tension: 0.4,
      pointBackgroundColor: 'turquoise',
      pointRadius: 6
    }]
  },
  options: {
    responsive: true,
    
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => value + '%'
        }
      }
    }
  }
});



const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [{
      label: '',
      data: [12, 7, 10, 8, 10, 8, 4, 2],
      borderColor: 'crimson',
      backgroundColor: 'transparent',
      tension: 0.4,
      pointBackgroundColor: 'crimson',
      pointRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false 
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => value + '%'
        }
      }
    }
  }
});