
Highcharts.chart('container', {
	"tooltip": {
  	enabled: true,
    shared: true
  },
  "chart": {
    "type": "bar"
  },
  "plotOptions": {
    "series": {
			stacking: 'normal',
      pointWidth: 22,
      borderRadius: 5,
    },
    "bar": {
      "grouping": false
    },
    dataLabels: {
    enabled: false
    }
  },
  "xAxis": {
    "categories": [
      "California",
      "Texas",
      "Florida",
      "New York",
      "Pennsylvania"
    ]
  },
  "yAxis": {
    "min": 0,
    "max": 300
  },
  "series": [
    {
      "data": [
        50,
        70,
        50,
        50,
        3
      ]  ,
      index: 1,
            dataLabels: {
        enabled: true,
        align:'left'
        }
      },
    {
      "data": [
        200,
        200,
        200,
        200,
        200      ],
        index:0,
        dataLabels: {
        enabled: true,
        inside:false
        }
    }
  ]
});
