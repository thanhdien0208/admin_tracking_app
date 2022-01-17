// chart activation progress bar

var options = {
    series: [{
        data: [42, 200],
    }, ],
    chart: {
        height: 200,
        type: 'bar',
    },
    labels: [''],
    colors: ['#198631', '#1C263F'],
    legend: {
        show: false,
    },
    plotOptions: {
        bar: {
            columnWidth: '15%',
            distributed: true,
            borderRadius: 5,
            horizontal: true,
            dataLabels: {
                position: 'center', // top, center, bottom
            },
        }
    },


    xaxis: {
        categories: [''],
        labels: {
            style: {
                colors: ['#111'],
                fontSize: '12px',
            }
        },
    },
    dataLabels: {
        enabled: true,
        formatter: function(val) {
            return val + "/100%";
        },
        style: {
            fontSize: '12px',
            colors: ["#fff"],
        }
    },

};

var chart = new ApexCharts(document.querySelector("#chart-acti"), options);
chart.render();

// ===== Chart Prog


var options = {
    series: [{
        data: [25000, 100000],
    }, ],
    chart: {
        height: 200,
        type: 'bar',
    },
    labels: [''],
    colors: ['#198631', '#1C263F'],
    legend: {
        show: false,
    },
    plotOptions: {
        bar: {

            distributed: true,
            borderRadius: 5,
            horizontal: true,
            dataLabels: {
                position: 'center', // top, center, bottom
            },
        }
    },

    xaxis: {
        categories: [''],
        labels: {
            style: {
                colors: ['#111'],
                fontSize: '12px',
            }
        },
    },
    dataLabels: {
        position: 'center', // top, center, bottom
        enabled: true,
        formatter: function(val) {
            return val + "/100%";
        },
        style: {
            fontSize: '12px',
            colors: ["#fff"],
        },

    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 300
            },
            legend: {
                show: false
            },
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart-prog"), options);
chart.render();


// chart activation progress bar

var options = {
    series: [{
        data: [25797, 26412],
    }, ],
    chart: {
        height: 200,
        type: 'bar',
    },
    labels: [''],
    colors: ['#198631', '#1C263F'],
    legend: {
        show: false,
    },
    plotOptions: {
        bar: {
            columnWidth: '15%',
            distributed: true,
            borderRadius: 5,
            horizontal: true,
            dataLabels: {
                position: 'center', // top, center, bottom
            },
        }
    },

    xaxis: {
        categories: [''],
        labels: {
            style: {
                colors: ['#111'],
                fontSize: '12px',
            }
        },
    },
    dataLabels: {
        enabled: true,
        formatter: function(val) {
            return val + "";
        },
        style: {
            fontSize: '12px',
            colors: ["#fff"],
        }
    },

};

var chart = new ApexCharts(document.querySelector("#chart-perf"), options);
chart.render();


// Chart-share 

var options = {
    series: [{
        data: [186, 182]
    }],
    chart: {
        height: 200,
        type: 'bar',
    },
    labels: ['Average Tiger Volume', 'Average Target Volume'],
    colors: ['#198631', '#1C263F'],
    plotOptions: {
        bar: {
            columnWidth: '30%',
            distributed: true,
            borderRadius: 5,
        }
    },
    legend: {
        show: false
    },
    lines: {
        show: false,
    },
    xaxis: {
        categories: ['Average Tiger Volume', 'Average Target Volume'],
        labels: {
            style: {
                colors: ['#111'],
                fontSize: '12px',
            }
        },
        lines: {
            show: false,
        }
    },
    yaxis: {
        lines: {
            show: false,
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart-act"), options);
chart.render();


//   chart-share

var options = {
    series: [70, 5, 20, 5],
    chart: {
        width: 320,
        type: 'pie',
    },
    // labels: ['Tiger', 'HNK', 'Orther Beer','Orther'],
    colors: ['#198631', '#95b79d', '#1C263F', '#939393'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            },
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart-share"), options);
chart.render();


// chart-product

var options = {
    series: [{
        data: [18, 17, 5, 20, 15, 15]
    }],
    chart: {
        height: 265,
        type: 'bar',

    },
    colors: ['#198631', '#1C263F', '#727170', '#b5f398', '#c4c4c4', '#49566e'],
    // labels: ['Glass 30cl','Cup 33cl 3D','Glass of Casablance','Wallet','Tiger Crystal Hat','Beer Voucher' ],
    plotOptions: {
        bar: {
            columnWidth: '60%',
            distributed: true,
            borderRadius: 5,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },

    dataLabels: {
        enabled: true,
        formatter: function(val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function(val) {
                return val + "%";
            }
        }
    },
    legend: {
        show: true
    },
    xaxis: {
        categories: [
            ['Glass', '30cl'],
            ['Cup 33cl', '3D'],
            ['Glass of', 'Casablance'],
            'Wallet', ['Tiger', 'Crystal', 'Hat'],
            ['Beer', 'Voucher'],
        ],
        labels: {
            style: {
                colors: ['#111'],
                fontSize: '12px',
            }
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart-product"), options);
chart.render();

// chart-top

var options = {
    series: [{
        name: '[Brand] Volume',
        type: 'column',
        data: [120, 350, 400, 500, 527, 534, 538, 546, 550, 600, 610, 618, 620, 648, 660, 700, 720, 900, 1100, 1152]
    }, {
        name: '[Brand] Table Share',
        type: 'line',
        data: [90, 81, 43, 94, 100, 100, 95, 65, 87, 78, 65, 58, 60, 77, 40, 55, 68, 50, 70, 89],
    }],
    chart: {
        height: 370,
        with: 400,
        type: 'line',
    },
    stroke: {
        width: [0, 3],
    },
    legend: {
        show: false
    },
    title: {
        text: 'Traffic Sources'
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        style: {
            colors: ['#1C263F']
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
        }
    },
    labels: ['HẾN', 'LÚA NẾP', 'ỐC NGON', 'TƠ', 'ĐỒNG NỘI', 'TRÀNG AN', 'BÒ TƠ', 'HƯƠNG', 'LẨU 79', 'LẨU DÊ', 'ỐC TƠ', 'YẾN MẠCH', 'ỐC HƯƠNG', 'TƠ', 'HƯƠNG', 'LẨU 79', 'LẨU DÊ', 'NẾP', 'TRÀNG TIỀN', 'ỐC TRE'],
    colors: ['#198631', '#1C263F'],
    yaxis: [{
        title: {
            text: 'Top 10',
        },

    }, {
        opposite: true,
        title: {
            text: 'Outlet'
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart-top"), options);
chart.render();