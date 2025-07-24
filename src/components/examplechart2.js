import React from 'react';
import Plot from 'react-plotly.js';

var data = [
    {
      type: "scatterpolar",
      mode: "lines+markers",
      r: [0,5],
      theta: [0,0],
      line: {
        color: "#ff0000ff",
        width: 5
      },
      
      marker: {
        color: "#001764ff",
        symbol: "square",
        size: 8
      },
      subplot: "polar"
    },
    
  ]

var layout = {
    showlegend: false,
    polar: {
      domain: {
        x: [0,1],
        y: [0,1]
      },
      radialaxis: {
        tickfont: {
          size: 12
        }
      },
      angularaxis: {
        tickfont: {
          size: 12
        },
        rotation: 0,
        direction: "counterclockwise"
      }
    },
    
    
  }

Plotly.newPlot('myDiv2', data, layout)

