var ctx1 = document.getElementById('studentChart').getContext('2d');
var studentChart = new Chart(ctx1, {
    type: 'bar', // or 'line', 'pie', etc.
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Student Enrollment',
            data: [120, 150, 180, 170, 160, 190],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx2 = document.getElementById('teacherChart').getContext('2d');
var teacherChart = new Chart(ctx2, {
    type: 'line', // or another type
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Teacher Hiring',
            data: [5, 7, 8, 6, 7, 9],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
