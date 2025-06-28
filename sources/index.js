const toggleBtn = document.getElementById('toggleBtn');
        const sidebar = document.getElementById('sidebar');

        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });

const data = {
      labels: [
        'Fire',
        'Road Damage',
        'Violence',
        'Theft'
      ],
      datasets: [{
        label: 'Reports',
        data: [30, 5, 12, 8],
        backgroundColor: [
          'rgb(207, 44, 80)',   
          'rgb(119, 109, 74)',  
          'rgb(87, 82, 70)',   
          'rgb(135, 135, 136)'
        ],
        hoverOffset: 4
      }]
    };

    const config = {
      type: 'pie',
      data: data,
    };

    new Chart(
      document.getElementById('myPieChart'),
      config
    );

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data1 = {
  labels: labels,
  datasets: [{
    label: 'Incident Reports',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config1 = {
  type: 'line',
  data: data1,
};

new Chart(
      document.getElementById('myLineChart'),
      config1
    );