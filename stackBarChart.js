
Highcharts.chart('container', {
      chart: {
        type: 'bar', height: 600
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      xAxis: {
        categories: ['Clicks', 'Conversions', 'Spend', 'Avg. CPC'],
        'labels': {
          'enabled': false
        },
        title: {
          text: null
        }
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        'gridLineWidth': 0,
        'minorGridLineWidth': 0,
        'labels': {
          'enabled': false
        },
        title: {
          text: null
        }
      },
      tooltip: {
        enabled: true,
        followPointer: true,
        shared: true,
        style: {
          fontFamily: '"HelveticaNeue", Helvetica, sans-serif;'
        },
        useHtml: true,
        formatter: function () {
        	return '<span>hi</span>';
        },
        borderColor: '#F2F2F4',
        backgroundColor: '#FFFFFF',
        hideDelay: 0
      },
      plotOptions: {
        bar: {
          stacking: 'normal',
          dataLabels: {
            enabled: false
          }
        },
        series: {
          pointWidth: 40,
          states: {
            hover: {
              enabled: false
            }
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      // Test data
      series: [{
        name: 'Current',
        data: [50, 60, 50, 40],
        stack: 'male',
        color: '#75dbc8',
        dataLabels: {
          enabled: true,
          inside: false,
          style: {
            color: '#767D84',
            fontWeight: '500',
            fontSize: '14px'
          }
        }

      }, {
        name: 'Current',
        data: [0, 0, 0, 0],
        stack: 'male'
      }, {
        name: 'Projected',
        data: [10, 10, 10, 15],
        stack: 'female',
        color: '#ddf6f1',
        dataLabels: {
          overflow: 'none',
          crop: false,
          enabled: true,
          useHtml: true,
          formatter: function () {
            return '<div>' + this.y + '</div><br/>' + this.x;
          },
          inside: false,
          style: {
            color: '#767D84',
            fontWeight: '500',
            fontSize: '14px'
          }
        }
      }, {
        name: 'Projected',
        data: [60, 50, 60, 45],
        stack: 'female',
        color: '#abe9dd'
      }]
    });
