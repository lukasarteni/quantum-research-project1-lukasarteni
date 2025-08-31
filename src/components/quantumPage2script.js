import { Input } from 'free-astro-components';
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


var alphaAngle = 0;
var target1 = document
  .getElementById("alphaAnglePicker");
target1
  .addEventListener("change", () => {
    //alert("hi" + target1.value);
    alphaAngle = Number(target1.value);
    changeData(alphaAngle, 0);
    update();
  });
var betaAngle = 22.5;
var angleDiffVar = 22.5;
var target2 = document
  .getElementById("betaAnglePicker");
target2
  .addEventListener("change", () => {
    betaAngle = Number(target2.value);
    changeData(betaAngle, 1);
    update();
  });


function update() {
  angleDiffVar = angleDiffernce(alphaAngle, betaAngle);
  document.getElementById("diffInAngleText").textContent = angleDiffVar ;
  winPercentMethond(alphaAngle, betaAngle);
}
function changeData(angle, line) {
  //alert("theta = " +angle+ " and " + (angle +90));

  Plotly.restyle('qpage2chart1', { 'theta': [[0, angle, 0, angle + 90, 0]] }, [line])
}
function angleDiffernce(angle1, angle2) {
  return (Math.abs((angle1 - angle2 + 180) % 360 - 180));
}
function probABareEqual(num1, num2) {
  return Math.pow(Math.cos(Math.PI / 180 * (num1 - num2)), 2);
}
function probABareDiff(num1, num2) {
  return Math.pow(Math.sin(Math.PI / 180 * (num1 - num2)), 2);
}
function probABareEqual2(nums) {
  return Math.pow(Math.cos(Math.PI / 180 * (nums)), 2);
}
function probABareDiff2(nums) {
  return Math.pow(Math.sin(Math.PI / 180 * (nums)), 2);
}
/*
function winPercentMethond(a0, b0) {
  //alert(Math.cos(Math.PI));
  const a1 = Number(a0 + 90);
  const b1 = Number(b0 + 90);
  const E00 = probABareEqual(a0, b0);
  const E01 = probABareEqual(a0, b1);
  const E10 = probABareEqual(a1, b0);
  const E11 = probABareDiff(a1, b1);
  //alert(E00 + " " + E01 + " " + E10 + " " + E11);
  const Svalue = E00 + E01 + E10 + E11;
  //alert(Svalue);
  //const result = 0.5 + Svalue / 8;
  //const result = (3* E00 +E11)/4 *100;
  const result= E00+E01+E10+E11;
  document.getElementById("winPercenttext").textContent = result;

}*/
function winPercentMethond(a0, b0) {
  
  const a1 = Number(a0 + 90);
  const b1 = Number(b0 + 90);
  const angle1 = angleDiffVar
  const angle2 = 90 - angle1;
  //NOT REAL
  const result = (3 * probABareEqual2(angle1) + probABareDiff2(angle2))/4;
  document.getElementById("winPercenttext").textContent = result;
  //not working
}


Plotly.newPlot('qpage2chart1', data, layout);

