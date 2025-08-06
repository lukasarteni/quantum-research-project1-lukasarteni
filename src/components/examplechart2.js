import Plot from 'react-plotly.js';

var data = [
    {
      type: "scatterpolar",
      
      mode: "lines+markers",
      r: [0,1,0,1],
      theta: [0,0,90,90],
      
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
    {
      type: "scatterpolar",
      mode: "lines+markers",
      r: [0,1,0,1],
      theta: [0,45,0,-45],
      line: {
        color: "#00e1ffff",
        width: 5
      },
      
      marker: {
        color: "#001764ff",
        symbol: "square",
        size: 8
      },
      subplot: "polar"
    }
    
  ]

var layout = {
    showlegend: false,
    polar: {
      domain: {
        x: [0,1],
        y: [0,1]
      },
      radialaxis: {
        nticks:2,
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

function changeData(){
  return;
}

Plotly.newPlot('myDiv2', data, layout)

