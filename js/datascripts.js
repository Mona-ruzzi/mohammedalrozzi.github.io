
function makeChart(players) {
    
    var playerLabels = players.map(function (d) {
        return d.Date;
    });
    var Daily_cases = players.map(function (d) {
        return +d.DailyCases;
    });
    var Total_cases = players.map(function (d) {
        return +d.TotalCases;
    });
    var Daily_death = players.map(function (d) {
        return +d.DailyDeath;
    });
    var Total_death = players.map(function (d) {
        return +d.TotalDeath;
    });
    var Daily_recovery = players.map(function (d) {
        return +d.DailyRecovery;
    });
    var Total_recovery = players.map(function (d) {
        return +d.TotalRecovery;
    });
    var Active_cases = players.map(function (d) {
        return +d.ActiveCases;
    });
    var Daily_tests = players.map(function (d) {
        return +d.DailyTests;
    });
    var Total_tests = players.map(function (d) {
        return +d.TotalTests;
    });
    var chart = new Chart('chart2', {
        type: "bar",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    fontColor: 'black'
                },
                
            },

        },
        data: {
            labels: playerLabels,
            datasets: [
                {
                    data: Daily_death,
                    label:"Daily Deaths",
                    hoverBackgroundColor:"red",
                    backgroundColor:"grey"	                    
                },
            ],

        },
    
    });
    var chart = new Chart('chart', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true,
            
            }
        },
        
        data: {
            labels: playerLabels,
            datasets: [
                {
                    data: Total_cases,
                    label:"Total Cases",
                    backgroundColor: 'rgb(255, 99, 132,0.2)',
                    order:1,
            
                },
                {
                    data: Total_recovery,
                    label:"Total Recovery",
                    backgroundColor: 'rgb(255, 99, 132,0.4)',
                    order:2,
    
                }
                ,
            ]
        }
    });
    var chart = new Chart('chart3', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true,

            }
        },

        data: {
            labels: playerLabels,
            datasets: [
                {
                    data: Active_cases,
                    label: "Active Cases",
                    backgroundColor: '#408bd670',
                    

                },
                
            ]
        }
    });
}

// Request data using D3
d3
    .csv("stats-new.csv")
    .then(makeChart);


var tabulate = function (data, columns) {
var table = d3.select('#myTable') // this is the solution
// var table = d3.select('body').append('table') this was before the solution
var thead = table.append('thead')
var tbody = table.append('tbody')

thead.append('tr')
    .selectAll('th')
    .data(columns)
    .enter()
    .append('th')
    .text(function (d) { return d })

var rows = tbody.selectAll('tr')
    .data(data)
    .enter()
    .append('tr')

var cells = rows.selectAll('td')
    .data(function (row) {
        return columns.map(function (column) {
            return { column: column, value: row[column] }
        })
    })
    .enter()
    .append('td')
    .text(function (d) { return d.value })

return table;
}
d3.csv('stats-new.csv')
.then(function (data) {
    const columns = ['Date','DailyCases', 'TotalCases', 'DailyDeath', 'TotalDeath', 'DailyRecovery', 'TotalRecovery', 'ActiveCases']
    tabulate(data, columns)
});