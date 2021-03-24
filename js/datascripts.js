//this is for the cases count
function makeChart(covid19) {
    var covidLabels = covid19.map(function (d) {
        return d.Date;
    });
    var Daily_cases = covid19.map(function (d) {
        return +d.DailyCases;
    });
    var Total_cases = covid19.map(function (d) {
        return +d.TotalCases;
    });
    var Daily_death = covid19.map(function (d) {
        return +d.DailyDeath;
    });
    var Total_death = covid19.map(function (d) {
        return +d.TotalDeath;
    });
    var Daily_recovery = covid19.map(function (d) {
        return +d.DailyRecovery;
    });
    var Total_recovery = covid19.map(function (d) {
        return +d.TotalRecovery;
    });
    var Active_cases = covid19.map(function (d) {
        return +d.ActiveCases;
    });
    var Daily_tests = covid19.map(function (d) {
        return +d.DailyTests;
    });
    var Total_tests = covid19.map(function (d) {
        return +d.TotalTests;
    });
    var chart = new Chart('chart2', {
        type: "bar",
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    id: 'y-axis-0',
                    gridLines: {
                        display: true,
                        lineWidth: 1,
                        color: "rgba(0,0,0,0.30)"
                    },
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                    },
                    afterBuildTicks: function (chart) {

                    }
                }],
                xAxes: [{
                    id: 'x-axis-0',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2]
                            return date+"/"+month;
                        }
                    }
                },
                {
                    id: 'xAxis-2',
                    type: "category",
                    gridLines: {
                        drawOnChartArea: true, // only want the grid lines for one axis to show up
                    },
                    ticks: {
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2];
                            if (date + month === "0512" || date + month === "1612" ||date + month === "0801" || date + month === "1101") {
                                return month + "/" + year;
                            }
                            else {
                                return "";
                            }
                        }
                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'black'
                },
                
            },

        },
        data: {
            labels: covidLabels,
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
    var chart = new Chart('chart4', {
        type: "bar",
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    id: 'y-axis-0',
                    gridLines: {
                        display: true,
                        lineWidth: 1,
                        color: "rgba(0,0,0,0.30)"
                    },
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                    },
                    afterBuildTicks: function (chart) {

                    }
                }],
                xAxes: [{
                    id: 'x-axis-0',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2]
                            return date + "/" + month;
                        }
                    }
                },
                {
                    id: 'xAxis-2',
                    type: "category",
                    gridLines: {
                        drawOnChartArea: true, // only want the grid lines for one axis to show up
                    },
                    ticks: {
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2];
                            if (date + month === "0512" || date + month === "1612" || date + month === "0801" || date + month === "1101") {
                                return month + "/" + year;
                            }
                            else {
                                return "";
                            }
                        }
                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'black'
                },

            },

        },
        data: {
            labels: covidLabels,
            datasets: [
                {
                    data: Daily_cases,
                    label: "Daily cases",
                    hoverBackgroundColor: "red",
                    backgroundColor: "rgba(0,0,0,0.20)"
                },
            ],

        },

    });
    var chart = new Chart('chart', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    id: 'y-axis-0',
                    gridLines: {
                        display: true,
                        lineWidth: 1,
                        color: "rgba(0,0,0,0.30)"
                    },
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                    },
                    afterBuildTicks: function (chart) {

                    }
                }],
                xAxes: [{
                    id: 'x-axis-0',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2]
                            return date + "/" + month;
                        }
                    }
                },
                {
                    id: 'xAxis-2',
                    type: "category",
                    gridLines: {
                        drawOnChartArea: true, // only want the grid lines for one axis to show up
                    },
                    ticks: {
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2];
                            if (date + month === "0512" || date + month === "1612" || date + month === "0801" || date + month === "1101") {
                                return month + "/" + year;
                            }
                            else {
                                return "";
                            }
                        }
                    }
                }]
            },
            legend: {
                display: true,
            
            }
        },
        
        data: {
            labels: covidLabels,
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
            scales: {
                yAxes: [{
                    id: 'y-axis-0',
                    gridLines: {
                        display: true,
                        lineWidth: 1,
                        color: "rgba(0,0,0,0.30)"
                    },
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                    },
                    afterBuildTicks: function (chart) {

                    }
                }],
                xAxes: [{
                    id: 'x-axis-0',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2]
                            return date + "/" + month;
                        }
                    }
                },
                ]
            },
            legend: {
                display: true,

            }
        },

        data: {
            labels: covidLabels,
            datasets: [
                {
                    data: Active_cases,
                    label: "Active Cases",
                    backgroundColor: '#408bd670',
                    

                },
                
            ]
        }
    });
    var chart = new Chart('chart6', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    id: 'y-axis-0',
                    gridLines: {
                        display: true,
                        lineWidth: 1,
                        color: "rgba(0,0,0,0.30)"
                    },
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                    },
                    afterBuildTicks: function (chart) {

                    }
                }],
                xAxes: [{
                    id: 'x-axis-0',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2]
                            return date + "/" + month;
                        }
                    }
                },
                {
                    id: 'xAxis-2',
                    type: "category",
                    gridLines: {
                        drawOnChartArea: true, // only want the grid lines for one axis to show up
                    },
                    ticks: {
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2];
                            if (date + month === "0512" || date + month === "1612" || date + month === "0801" || date + month === "1101") {
                                return month + "/" + year;
                            }
                            else {
                                return "";
                            }
                        }
                    }
                }]
            },
            legend: {
                display: true,

            }
        },

        data: {
            labels: [   "27-02-2021","01-03-2021","05-03-2021","08-03-2021","11-03-2021","12-03-2021",
                        "13-03-2021","15-03-2021","16-03-2021","21-03-2021","23-03-2021",],
            datasets: [
                {
                    data: [ 384,727,2343,3402,4746,5432,
                            5531,7084,7482,10691,12886,],
                    label: "Total Vaccine - 1st dose",
                    backgroundColor: 'rgb(255, 99, 132,0.2)',
                    order: 1,

                },
                {
                    data: [null,null,null,null,null,null,null,null,null,375,721],
                    label: "Total Vaccine - 2nd dose",
                    backgroundColor: 'rgb(255, 99, 132,0.4)',
                    order: 2,

                }
                ,
            ]
        }
    });
}
function makeVaccineCharts(vaccines) {
    var covid2Labels = vaccines.map(function (d) {
        return d.Date_new;
    });
    var first_dose = vaccines.map(function (d) {
        return +d.firstDose;
    });
    var second_dose = vaccines.map(function (d) {
        return +d.secondDose;
    });

    var chart = new Chart('chartVaccine', {
        type: "line",
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    id: 'y-axis-0',
                    gridLines: {
                        display: true,
                        lineWidth: 1,
                        color: "rgba(0,0,0,0.30)"
                    },
                    ticks: {
                        beginAtZero: true,
                        mirror: false,
                        suggestedMin: 0,
                    },
                    afterBuildTicks: function (chart) {

                    }
                }],
                xAxes: [{
                    id: 'x-axis-0',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2]
                            return date + "/" + month;
                        }
                    }
                },
                {
                    id: 'xAxis-2',
                    type: "category",
                    gridLines: {
                        drawOnChartArea: true, // only want the grid lines for one axis to show up
                    },
                    ticks: {
                        callback: function (label) {
                            var date = label.split("-")[0];
                            var month = label.split("-")[1];
                            var year = label.split("-")[2];
                            if (date + month === "2702" || date + month === "2103" || date + month === "0801" || date + month === "1101") {
                                return month + "/" + year;
                            }
                            else {
                                return "";
                            }
                        }
                    }
                }]
            },
            legend: {
                display: true,

            }
        },

        data: {
            labels: covid2Labels,
            datasets: [
                {
                    data: first_dose,
                    label: "first dose",
                    backgroundColor: 'rgb(255, 99, 132,0.2)',
                    order: 1,

                },
                {
                    data: second_dose,
                    label: "second dose",
                    backgroundColor: 'rgb(255, 99, 132,0.4)',
                    order: 2,

                }
                ,
            ]
        }
    });

}

// Request data using D3
d3
    .csv("stats-new.csv")
    .then(makeChart);
//just added for the vaccines
d3
    .csv("vaccines.csv")
    .then(makeVaccineCharts);

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
