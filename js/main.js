new Vue({
    el:"#app400",
    data:{
        name:"Mohammed Alrozzi",
        info:"this is a test thing, "
    }
    })

var endnotes = new Vue({
    el: '#endnotes',
    data: {
        items: [
            { message: 'Reporting in Italy takes place at 18:00 Rome time' },
            { message: 'Reporting in Israel takes place several times a day but the one of 21:00 Jerusalem time is recorded' },
            { message: 'You loaded this page on ' + new Date().toTimeString() + ' and it was last updated on ' + new Date(document.lastModified).toDateString()},
            { message: 'this page was built by to practice vue.js'},

        ],
    }
})
var endnotes = new Vue({
    el: '#welcomemessage',
    data: {
        myName: 'Mohammed Alrozzi',
        welcome_date: new Date().toLocaleDateString('it-IT'),
        welcome_time: new Date().toLocaleTimeString(),
    }
})
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            '24', '25', '26', '27', '28', '29',
            '1/03', '2', '3', '4', '5', '6',
            '7', '8', '9', '10/03', '11', '12',
            '13', '14', '15', '16', '17', '18',
            '19', '20/03', '21', '22', '23', '24',
            '25', '26', '27', '28', '29', '30',
            '31', '01/04', '2', '3', '4', '5',
            '6', '7', '8', '9', '10/04', '11', 
            '12', '13', '14', '15', '16', '17', 
            '18', '19', '20/04', '21', '22', '23', 
            '24', '25', '26', '27', '28', '29', 
            '30', '01/05', '2', '3', '4', '5'],
        datasets: [
            {
                label: '# of death',
                data: [
                    7, 10, 12, 17, 21, 29, 
                    34, 52, 79, 107, 148, 197, 
                    233, 366, 463, 631, 827, 1016, 
                    1266, 1441, 1809, 2158, 2503, 2978, 
                    3405, 4032, 4825, 5476, 6077, 6820, 
                    7503, 8165, 9134, 10023, 10779, 11591, 
                    12428, 13155, 13915, 14681, 15362, 15887, 
                    16523, 17127, 17669, 18279, 18849, 19468, 
                    19899, 20465, 21067, 21645, 22170, 22745, 
                    23227, 23660, 24114, 24648, 25085, 25549, 
                    25969, 26384, 26644, 26977, 27359, 27682, 
                    27967, 28236, 28710, 28884, 29079],
                backgroundColor: [
                    'rgba(200, 10, 12, 0.2)',
                ],
                borderColor: [
                    'rgba(200, 10, 12, 1)',
                ],
                borderWidth: 1
            },
            {
                label: '# of recovered',
                data: [1, 1, 3, 45, 46, 50, 
                    83, 149, 160, 276, 414, 523, 
                    589, 622, 724, 1004, 1045, 1258, 
                    1439, 1966, 2335, 2749, 2941, 4025, 
                    4440, 5129, 6072, 7024, 7432, 8326, 
                    9362, 10361, 10950, 12384, 13030, 14620, 15729, 16847, 18278, 19758, 20996, 21815, 22837, 24392, 26491, 28470, 30455, 32534, 34211, 35435, 37130, 38092, 40164, 42727, 44927, 47055, 48877, 51600, 54543, 57576, 60498, 63120, 64928, 66624, 68941, 71252, 75945, 78249, 79914, 81654, 82879],
                backgroundColor: [
                    'rgba(200, 10, 12, 0.2)',
                ],
                borderColor: [
                    'rgba(200, 10, 12, 1)',
                ],
                borderWidth: 1
            },
            {
                label: '# of all cases',
                data: [229, 322, 400, 650, 888, 1128, 1694, 2036, 2502, 3089, 3858, 4636, 5883, 7375, 9172, 10149, 12462, 15113, 17660, 21157, 24747, 27980, 31506, 35713, 41035, 47021, 53578, 59138, 63927, 69176, 74386, 80539, 86498, 92472, 97689, 101739, 105792, 110574, 115242, 119827, 124632, 128948, 132547, 135586, 139422, 143626, 147577, 152271, 156363, 159516, 162488, 165155, 168941, 172434, 175925, 178972, 181228, 183957, 187327, 189973, 192994, 195351, 197675, 199414, 201505, 203591, 205463, 207428, 209328, 210717, 211938],
                backgroundColor: ['rgba(200, 10, 12, 0.2)',],
                borderColor: ['rgba(200, 10, 12, 1)',],
                borderWidth: 1
        }
            ]
    },
    options: {
        responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});