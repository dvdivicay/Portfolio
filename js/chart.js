document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('skills-chart').getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Java', 'C#', 'C++'],
      datasets: [{
        label: 'Programming Skills',
        data: [17.78, 18.56, 5.85, 24.96, 14.22, 18.72],
        backgroundColor: [
          '#A27B5C', // HTML
          '#3F4F44', // CSS
          '#DCD7C9', // JS
          '#2C3930', // Java
          '#F0EEEE', // C#
          '#997C6D'  // C++
        ],
        borderColor: '#010101',
        borderWidth: 3
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#DCD7C9',
            font: {
              family: 'Montserrat',
              size: 20,
              weight: 'bold'
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.raw}%`;
            }
          }
        }
      }
    }
  });
});
