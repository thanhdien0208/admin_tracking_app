// chart activation progress bar

// var options = {
//   series: [{
//   name: 'Actual Volume',
//   data: [42]
// }],
//   chart: {
//   type: 'bar',
//   height: 130,
//   stacked: true,
// },
// plotOptions: {
//   bar: {
//     horizontal: true,
//   },
// },
// stroke: {
//   width: 1,
//   colors: ['#fff']
// },

// labels: [''],
// yaxis: {
//   title: {
//     text: undefined
//   },
// },
// tooltip: {
//   y: {
//     formatter: function (val) {
//       return val + "/21%"
//     }
//   }
// },
// colors: ['#198631'],
// fill: {
//   opacity: 1
// },
// legend: {
//   position: 'top',
//   horizontalAlign: 'left',
//   offsetX: 40
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart-acti"), options);
// chart.render();

// chart activation progress bar

var options = {
  series: [{
  data: [42],
  name: 'Actual Acts',
},
],
  chart: {
  height: 130,
  type: 'bar',
},
labels: [''],
colors: ['#198631'],
legend: {
  show: false,
},
plotOptions: {
  bar: {
    columnWidth: '15%',
    distributed: true,
    borderRadius: 5,
    horizontal: true,
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
  formatter: function (val) {
    return val + "/21%";
  },
  style: {
    fontSize: '12px',
    colors: ["#fff"]
  }
},

};

var chart = new ApexCharts(document.querySelector("#chart-acti"), options);
chart.render();

// =====

var options = {
  series: [{
  data: [200],
  name: 'Total Acts',
},
],
  chart: {
  height: 130,
  type: 'bar',
},
labels: [''],
colors: ['#1C263F'],
legend: {
  show: false,
},
plotOptions: {
  bar: {
    columnWidth: '15%',
    distributed: true,
    borderRadius: 5,
    horizontal: true,
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
  formatter: function (val) {
    return val + "/100%";
  },
  style: {
    fontSize: '12px',
    colors: ["#fff"]
  }
},

};

var chart = new ApexCharts(document.querySelector("#chart-acti__total"), options);
chart.render();

// chart activation progress bar

// var options = {
//   series: [{
//   name: 'Actual Acts',
//   data: [25000],
  
// }],
//   chart: {
//   type: 'bar',
//   height: 130,
//   stacked: true,
// },
// plotOptions: {
//   bar: {
//     horizontal: true,
//   },
// },
// stroke: {
//   width: 1,
//   colors: ['#fff']
// },

// labels: [''],
// yaxis: {
//   title: {
//     text: undefined
//   },
// },

// tooltip: {
//   y: {
//     formatter: function (val) {
//       return val + "/25%"
//     }
//   }
// },
// colors: ['#198631'],
// fill: {
//   opacity: 1
// },
// legend: {
//   position: 'top',
//   horizontalAlign: 'left',
//   offsetX: 40
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart-prog"), options);
// chart.render();

// Chart Prog

var options = {
  series: [{
  data: [25000],
  name:'Actual Volume',
},
],
  chart: {
  height: 130,
  type: 'bar',
},
labels: [''],
colors: ['#198631'],
legend: {
  show: false,
},
plotOptions: {
  bar: {
    
    distributed: true,
    borderRadius: 5,
    horizontal: true,
  }
},


// xaxis: {
//   categories: [''],
//   labels: {
//     style: {
//       colors: ['#111'],
//       fontSize: '12px',
//     }
//   },
// },
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "/25%";
  },
  style: {
    fontSize: '12px',
    colors: ["#fff"]
  }
},

};

var chart = new ApexCharts(document.querySelector("#chart-prog"), options);
chart.render();

// ======

var options = {
  series: [{
  data: [100000],
  name:'Total Volume',
},
],
  chart: {
  height: 130,
  type: 'bar',
},
labels: [''],
colors: ['#1C263F'],
legend: {
  show: false,
},
plotOptions: {
  bar: {
    
    distributed: true,
    borderRadius: 5,
    horizontal: true,
  }
},


// xaxis: {
//   categories: [''],
//   labels: {
//     style: {
//       colors: ['#111'],
//       fontSize: '12px',
//     }
//   },
// },
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "/100%";
  },
  style: {
    fontSize: '12px',
    colors: ["#fff"]
  }
},

};

var chart = new ApexCharts(document.querySelector("#chart-prog__total"), options);
chart.render();

// chart-act

// var options = {
//     chart: {
//       type: 'bar',
//       height: 220,
//       width: 200,
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: 5,
//       }
//     },
//     series: [{
//       name: 'Average Tiger Volume',
//       data: [186],
//     },
//     {
//       name: 'Average Target Volume',
//       data: [182],
//     },
//   ],
//     labels: ['Total'],
//     colors: ['#198631', '#1C263F']
//   }
  
//   var chart = new ApexCharts(document.querySelector("#chart-act"), options);
  
//   chart.render();


// Chart-share 

var options = {
  series: [{
  data: [186,182]
}],
  chart: {
  height: 200,
  // width: 200,
  type: 'bar',
},
labels: ['Average Tiger Volume','Average Target Volume'],
colors: ['#198631', '#1C263F'],
plotOptions: {
  bar: {
    columnWidth: '30%',
    distributed: true,
    borderRadius: 5,
  }
},
legend: {
  show: true
},
lines: {
  show: false,
},
xaxis: {
  categories: ['Average Tiger Volume','Average Target Volume'],
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
    width: 350,
    type: 'pie',
  },
  // labels: ['Tiger', 'HNK', 'Orther Beer','Orther'],
  colors: ['#198631','#95b79d', '#1C263F', '#939393'],
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

// var options = {
//   //   series: [{
//   //   name: 'Inflation',
//   //   data: [18,17,5,20,15,15]
//   // },
//   series: [{
//     name: ' Glass 30cl',
//     data: [18],
//   },
//   {
//     name: 'Cup 33cl 3D',
//     data: [17],
//   },
//   {
//     name: 'Glass of Casablance',
//     data: [5],
//   },
//   {
//     name: 'Wallet',
//     data: [20],
//   },
//   {
//     name: 'Tiger Crystal Hat',
//     data: [15],
//   },
//   {
//     name: 'Beer Voucher',
//     data: [15],
//   },
// ],
//     chart: {
//     height: 270,
//     type: 'bar',
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 5,
//       dataLabels: {
//         position: 'top', // top, center, bottom
//       },
      
//     }
//   },
//   dataLabels: {
//     enabled: true,
//     formatter: function (val) {
//       return val + "%";
//     },
//     offsetY: -20,
//     style: {
//       fontSize: '12px',
//       colors: ["#304758"]
//     }
//   },
//   yaxis: {
//     axisBorder: {
//       show: false
//     },
//     axisTicks: {
//       show: false,
//     },
//     labels: {
//       show: false,
//       formatter: function (val) {
//         return val + "%";
//       }
//     }
  
//   },
//   title: {
//     text: '',
//     floating: true,
//     offsetY: 240,
//     align: 'center',
//     style: {
//       color: '#444'
//     }
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: '55%',
//       endingShape: 'rounded'
//     },
//   },
//   // labels: ['Glass 30cl','Cup 33cl 3D','Glass of Casablance','Wallet','Tiger Crystal Hat','Beer Voucher' ],
//   labels: ['' ],
//   colors: ['#198631', '#1C263F','#727170','#b5f398','#c4c4c4','#49566e'],
//   plotOptions: {
//     bar: {
//       columnWidth: '45%',
//       distributed: true,
//     }
//   },

//   };

//   var chart = new ApexCharts(document.querySelector("#chart-"), options);
//   chart.render();


  // chart-product

  var options = {
    series: [{
    data: [18,17,5,20,15,15]
  }],
    chart: {
    height:280,
    type: 'bar',
    
  },
  colors: ['#198631', '#1C263F','#727170','#b5f398','#c4c4c4','#49566e'],
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
  legend: {
    show: true
  },
  xaxis: {
    categories: [
      ['Glass', '30cl'],
      ['Cup 33cl', '3D'],
      ['Glass of', 'Casablance'],
      'Wallet',
      ['Tiger', 'Crystal','Hat'],
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
    data: [120,350,400,500,527,534,538,546,550,600,610,618,620,648,660,700,720,900,1100,1152]
  }, {
    name: '[Brand] Table Share',
    type: 'line',
    data: [90,81,43,94,100,100,95,65,87,78,65,58,60,77,40,55,68,50,70,89],
  }],
    chart: {
    height: 370,
    with: 400,
    type: 'line',
  },
  stroke: {
    width: [0, 3],
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