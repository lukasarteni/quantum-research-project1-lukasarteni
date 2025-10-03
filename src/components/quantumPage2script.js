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
      width: 6
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
    theta: [0, 45, 90, 135],

    line: {
      color: "#ff0000ff",
      width: 1
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
      width: 6
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
    theta: [0, 67.5, 0, -22.5],
    line: {
      color: "#00e1ffff",
      width: 1
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





var alphaAngle = 0;
var alphaAngle2 = 45;
var betaAngle = 22.5;
var betaAngle2 = -22.5;
var angleDiffVar = 22.5;

document
  .getElementById("reset")
  .addEventListener("click", () => {
    target1.value = 0;
    target2.value = 45;
    target3.value = 22.5;
    target4.value = -22.5;
    alphaAngle = 0;
    alphaAngle2 = 45;
    betaAngle = 22.5;
    betaAngle2 = -22.5;
    angleDiffVar = 22.5;
    changeData(alphaAngle, 0);
    changeData(alphaAngle2, 1);
    changeData(betaAngle, 2);

    changeData(betaAngle2, 3);
    document.getElementById("alphaAngleShower").textContent = alphaAngle;
    document.getElementById("alphaAngleShower2").textContent = alphaAngle;
    document.getElementById("betaAnglePicker").textContent = alphaAngle;
    document.getElementById("betaAnglePicker2").textContent = alphaAngle;


    update();
  });
  //here
var target1 = document.getElementById("alphaAnglePicker");
        target1.addEventListener("input", () => {
          //alert("hi" + target1.value);
          alphaAngle = Number(target1.value);
          document.getElementById("alphaAngleShower").textContent = alphaAngle;

          changeData(alphaAngle, 0);
          update();
        });
        var target2 = document.getElementById("alphaAnglePicker2");
        target2.addEventListener("input", () => {
          //alert("hi" + target2.value);
          alphaAngle2 = Number(target2.value);
          document.getElementById("alpha2AngleShower").textContent = alphaAngle2;

          changeData(alphaAngle2, 1);
          update();
        });

        var target3 = document.getElementById("betaAnglePicker");
        target3.addEventListener("input", () => {
          betaAngle = Number(target3.value);
          document.getElementById("betaAngleShower").textContent = betaAngle;

          changeData(betaAngle, 2);
          update();
        });

        var target4 = document.getElementById("betaAnglePicker2");
        target4.addEventListener("input", () => {
          betaAngle2 = Number(target4.value);
          document.getElementById("beta2AngleShower").textContent = betaAngle2;
          changeData(betaAngle2, 3);
          update();
        });
  //end here
var websitechoice = Number(0);
document
  .getElementById("SelectorForGraph1")
  .addEventListener("change", function () {

    websitechoice = Number(this.value);

    if (websitechoice == 0) {
      changeLineThick(6, 0);
      changeLineThick(6, 2);
      changeLineThick(1, 1);
      changeLineThick(1, 3);
    }
    else if (websitechoice == 1) {
      changeLineThick(6, 0);
      changeLineThick(1, 2);
      changeLineThick(1, 1);
      changeLineThick(6, 3);
    }
    else if (websitechoice == 2) {
      changeLineThick(1, 0);
      changeLineThick(6, 2);
      changeLineThick(6, 1);
      changeLineThick(1, 3);
    }

    else if (websitechoice == 3) {
      changeLineThick(1, 0);
      changeLineThick(1, 2);
      changeLineThick(6, 1);
      changeLineThick(6, 3);
    }



  });

function changeLineThick(thick, line) {
  //alert("theta = " +angle+ " and " + (angle +90));
  Plotly.restyle('qpage2chart1', { 'line.width': [thick] }, [line])
}

function update() {
  angleDiffVar = angleDiffernceDegrees(alphaAngle, betaAngle);
  let angleDiffVar2 = angleDiffernceDegrees(alphaAngle2, betaAngle);
  let angleDiffVar3 = angleDiffernceDegrees(alphaAngle, betaAngle2);
  let angleDiffVar4 = angleDiffernceDegrees(alphaAngle2, betaAngle2);

  document.getElementById("diffInAngleText").textContent = angleDiffVar;
  document.getElementById("diffInAngleText2").textContent = angleDiffVar2;
  document.getElementById("diffInAngleText3").textContent = angleDiffVar3;
  document.getElementById("diffInAngleText4").textContent = angleDiffVar4;
  winPercentMethond(alphaAngle, alphaAngle2, betaAngle, betaAngle2);
}
function changeData(angle, line) {
  //alert("theta = " +angle+ " and " + (angle +90));
  
  Plotly.restyle('qpage2chart1', { 'theta': [[0, angle, 0, angle + 90, 0]] }, [line])
}
function angleDiffernceDegrees(angle1, angle2) {
  //alert(Math.abs((angle1 - angle2 + 180) % 360 - 180));
  return (Math.abs((angle1 - angle2 + 180) % 360 - 180));
}
function degreesToRad(angle) {
  return (Math.PI / 180 * angle);
}

function probABareEqual(a1, a2) {
  return Math.pow(Math.cos(degreesToRad(angleDiffernceDegrees(a1, a2))), 2);
}
function probABareDiff(a1, a2) {
  return Math.pow(Math.sin(degreesToRad(angleDiffernceDegrees(a1, a2))), 2);
}
function probABareEqualAngleDiff(angleDiff) {
  return Math.pow(Math.cos(degreesToRad(angleDiff)), 2);
}
function probABareDiffAngleDiff(angleDiff) {
  return Math.pow(Math.sin(degreesToRad(angleDiff)), 2);
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
function winPercentMethond(a0, a1, b0, b1) {


  const result = probABareEqual(a0, b0) + probABareEqual(a0, b1) + probABareEqual(a1, b0) + probABareDiff(a1, b1);
  //alert(document.getElementById("winPercenttext").textContent);
  document.getElementById("winPercenttext").textContent = (result / 4) * 100;

}


Plotly.newPlot('qpage2chart1', data, layout);

