

var gaugeOptions = {
  "chart": {
    "type": "solidgauge",
    "height": 250
  },
  "credits": {
    "enabled": false
  },
  "title": {
    "text": null
  },
  "pane": {
    "center": [
      "50%",
      "75%"
    ],
    "size": "100%",
    "startAngle": -100,
    "endAngle": 100,
    "background": {
      "backgroundColor": "transparent",
      "borderColor": "transparent",
      "borderWidth": 0,
      "innerRadius": "60%",
      "outerRadius": "100%",
      "shape": "arc"
    }
  },
  "tooltip": {
    "enabled": false
  },
  "plotOptions": {
    "solidgauge": {
      "dataLabels": {
        "y": -40,
        "borderWidth": 0,
        "useHTML": true
      },
      "linecap": "round",
      "stickyTracking": false,
      "rounded": true
    }
  },
  "yAxis": {
    "min": 0,
    "max": 100,
    "tickAmount": 0,
    "lineWidth": 0,
    "minorTickInterval": null,
    "tickWidth": 0,
    "labels": {
      "enabled": false
    }
  },
  "series": [
    {
      "data": [
        {
          "y": 100,
          "color": "#DFE3E9",
     			"innerRadius": "80%",
      		"outerRadius": "100%"
        },
        {
          "y": 90,
          "color": "#00CD7A",
          "innerRadius": "80%",
      		"outerRadius": "100%"
        }
      ],
      "dataLabels": {}
    }
  ]
};
// The speed gauge
var chartSpeed = Highcharts.chart('container-speed', gaugeOptions);


