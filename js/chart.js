// chart activation progress bar

var options = {
  series: [{
  name: 'Actual Volume',
  data: [42]
}],
  chart: {
  type: 'bar',
  height: 130,
  stacked: true,
},
plotOptions: {
  bar: {
    horizontal: true,
  },
},
stroke: {
  width: 1,
  colors: ['#fff']
},

labels: [''],
yaxis: {
  title: {
    text: undefined
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "/21%"
    }
  }
},
colors: ['#198631'],
fill: {
  opacity: 1
},
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};

var chart = new ApexCharts(document.querySelector("#chart-acti"), options);
chart.render();

// chart activation progress bar

var options = {
  series: [{
  name: 'Actual Acts',
  data: [25000],
  
}],
  chart: {
  type: 'bar',
  height: 130,
  stacked: true,
},
plotOptions: {
  bar: {
    horizontal: true,
  },
},
stroke: {
  width: 1,
  colors: ['#fff']
},

labels: [''],
yaxis: {
  title: {
    text: undefined
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "/25%"
    }
  }
},
colors: ['#198631'],
fill: {
  opacity: 1
},
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};

var chart = new ApexCharts(document.querySelector("#chart-prog"), options);
chart.render();

// chart-act

var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'ACT',
      data: [186,182],
    }],
    labels: ['Total'],
    colors: ['#198631', '#1C263F']
  }
  
  var chart = new ApexCharts(document.querySelector("#chart-act"), options);
  
  chart.render();


//   chart-share

var options = {
    series: [70, 5, 20, 5],
    chart: {
    width: 350,
    type: 'pie',
  },
  labels: ['Tiger', 'HNK', 'Orther Beer','Orther'],
  colors: ['#198631','#95b79d', '#1C263F', '#939393'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart-share"), options);
  chart.render();

// chart-product

var options = {
    series: [{
    name: 'Inflation',
    data: [18,17,5,20,15,15]
  }],
    chart: {
    height: 270,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
      
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
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
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Total',
    floating: true,
    offsetY: 240,
    align: 'center',
    style: {
      color: '#444'
    }
  },
  labels: [''],
  colors: ['#198631', '#1C263F'],


  };

  var chart = new ApexCharts(document.querySelector("#chart-product"), options);
  chart.render();

// chart-top

var options = {
    series: [{
    name: '[Brand] Volume',
    type: 'column',
    data: [120,350,400,500,527,534,538,546,550,600,610,618,620,648,660,700,720,900,1100,1152]
  }, {
    name: '[Brand] Table Share',
    type: 'line',
    data: [90,81,43,94,100,100,95,65,87,78,65,58,60,77,40,55,68,50,70],
  }],
    chart: {
    height: 370,
    type: 'line',
  },
  stroke: {
    width: [0, 4],
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
  labels: ['HẾN','LÚA NẾP','ỐC NGON','TƠ','ĐỒNG NỘI','TRÀNG AN','BÒ TƠ','HƯƠNG','LẨU 79','LẨU DÊ','ỐC TƠ','YẾN MẠCH','ỐC HƯƠNG','TƠ','HƯƠNG','LẨU 79','LẨU DÊ','NẾP','TRÀNG TIỀN','ỐC TRE'],
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