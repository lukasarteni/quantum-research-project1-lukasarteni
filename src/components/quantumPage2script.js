import Plot from 'react-plotly.js';

var data = [
  {
    type: "scatterpolar",

    mode: "lines+markers",
    r: [0, 1, 0, 1],
    theta: [0, 0, 90, 90],

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
    r: [0, 1, 0, 1],
    theta: [0, 22.5, 0, 112.5],
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
      x: [0, 1],
      y: [0, 1]
    },
    radialaxis: {
      nticks: 2,
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



document
  .getElementById("reset")
  .addEventListener("click", () => {

    alert("hi");
  });

function changeData(angle, line) {
  Plotly.restyle('qpage2chart1', { 'theta': [[0, angle, 0, angle + 90, 0]] }, [line])
}

Plotly.newPlot('qpage2chart1', data, layout);

