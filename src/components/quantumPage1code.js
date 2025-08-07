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

function changeData(angle, line) {
  Plotly.restyle('myDiv2', { 'theta': [[0, angle, 0, angle + 90, 0]] }, [line])
}




var websitechoice = Number(0);
document
  .getElementById("SelectorForGraph1")
  .addEventListener("change", function () {

    websitechoice = Number(this.value);
    if (websitechoice == 0) {
      changeData(0, 0);
      changeData(22.5, 1);
    }
    else if (websitechoice == 1) {
      changeData(0, 0);
      changeData(-22.5, 1);
    }
    else if (websitechoice == 2) {
      changeData(45, 0);
      changeData(22.5, 1);
    }

    else if (websitechoice == 3) {
      changeData(45, 0);
      changeData(-22.5, 1);
    }



  });

var AliceMeasurement = 0;
document
  .getElementById("randombutton")
  .addEventListener("click", () => {
    if (websitechoice == 0 || websitechoice == 1) {

      if (Math.random() > 0.5) {
        AliceMeasurement = 0;
        document.getElementById("measurementOutcomeA").textContent =
          AliceMeasurement;
      }
      else {
        AliceMeasurement = 1;

        document.getElementById("measurementOutcomeA").textContent =
          AliceMeasurement;
      }

    } else {
      if (Math.random() > 0.5) {
        AliceMeasurement = "+";
        document.getElementById("measurementOutcomeA").textContent =
          AliceMeasurement;
      }
      else {
        AliceMeasurement = "-";
        document.getElementById("measurementOutcomeA").textContent =
          AliceMeasurement;
      }
    }
  });
var BobMeasurement = "π/8";
document
  .getElementById("randombuttonBob")
  .addEventListener("click", () => {
    if (websitechoice == 0) {
      var chance = 0.85355339059;
      if (AliceMeasurement == 1) {
        chance = 0.146446609;
      }
      if (Math.random() < chance) {
        BobMeasurement = "π/8";
        document.getElementById("measurementOutcomeB").textContent =
          BobMeasurement;
        document.getElementById("measurementOutcomeB2").textContent =
          BobMeasurement;
      }
      else {
        BobMeasurement = "5π/8";

        document.getElementById("measurementOutcomeB").textContent =
          BobMeasurement;
        document.getElementById("measurementOutcomeB2").textContent =
          BobMeasurement;
      }

    } else if (websitechoice == 1) {
      var chance = 0.85355339059;
      if (AliceMeasurement == 1) {
        chance = 0.146446609;
      }
      if (Math.random() < chance) {
        BobMeasurement = "-π/8";
        document.getElementById("measurementOutcomeB").textContent =
          BobMeasurement;
        document.getElementById("measurementOutcomeB2").textContent =
          BobMeasurement;
      }
      else {
        BobMeasurement = "3π/8";

        document.getElementById("measurementOutcomeB").textContent =
          BobMeasurement;
        document.getElementById("measurementOutcomeB2").textContent =
          BobMeasurement;
      }
    }
    else if (websitechoice == 2) {
      var chance = 0.85355339059;
      if (AliceMeasurement == "-") {
        chance = 0.146446609;
      }
      if (Math.random() < chance) {
        BobMeasurement = "π/8";
        document.getElementById("measurementOutcomeB").textContent =
          BobMeasurement;
        document.getElementById("measurementOutcomeB2").textContent =
          BobMeasurement;
      }
      else {
        BobMeasurement = "5π/8";

        document.getElementById("measurementOutcomeB").textContent =
          BobMeasurement;
        document.getElementById("measurementOutcomeB2").textContent =
          BobMeasurement;
      }
    }
    else {
      var chance = 0.146446609;
      if (AliceMeasurement == "-") {
        chance = 0.85355339059;
      }

      if (Math.random() < chance) {
        BobMeasurement = "-π/8";
        document.getElementById("measurementOutcomeB").textContent =
          BobMeasurement;
        document.getElementById("measurementOutcomeB2").textContent =
          BobMeasurement;
      }
      else {
        BobMeasurement = "3π/8";

        document.getElementById("measurementOutcomeB").textContent =
          BobMeasurement;
        document.getElementById("measurementOutcomeB2").textContent =
          BobMeasurement;
      }
    }
    checkUpdateConclusion();

  });



function checkUpdateConclusion() {
  var x;
  var y;
  var a;
  var b;
  if (websitechoice == 0) {
    x = 0;
    y = 0;
  }
  else if (websitechoice == 1) {
    x = 0;
    y = 1;
  }
  else if (websitechoice == 2) {
    x = 1;
    y = 0;
  }
  else if (websitechoice == 3) {
    x = 1;
    y = 1;
  }
  a = AliceMeasurement;
  b = BobMeasurement;

  if (a == "+" || a == "0") {
    a = 0;
  } else if (a == "-" || a == "1") {
    a = 1;
  }
  if (b == "π/8" || b == "-π/8") {
    b = 0;
  } else if (b == "5π/8" || b == "3π/8") {
    b = 1;
  }
  //alert("a"+a+" b "+b+" x " +x +" y "+y);

  document.getElementById(
    "finalOutcomeX"
  ).textContent = x;
  document.getElementById(
    "finalOutcomeY"
  ).textContent = y;
  document.getElementById(
    "finalOutcomeA"
  ).textContent = a;
  document.getElementById(
    "finalOutcomeB"
  ).textContent = b;
  if ((x && y) == (a !== b)) {
    document.getElementById(
      "finalOutcomeBoolean"
    ).textContent = "True";
    recordWin();
  } else {
    document.getElementById(
      "finalOutcomeBoolean"
    ).textContent = "False";
    recordloss();
  }
}


var numTrials = 0;
var numWins = 0;
var winPercent = 0;
function recordWin() {

  numWins = 1 + numWins;
  numTrials = 1 + numTrials;
  winPercent = 100*numWins / numTrials;
  updateStats();
}
function recordloss() {

  numTrials = 1 + numTrials;
  winPercent = 100* numWins / numTrials;
  updateStats(); 
}
function updateStats() {
  //alert("trials:" + numTrials+ " win percent"+winPercent);
  document.getElementById("finalOutcomeTrials").textContent = numTrials;
  document.getElementById("finalOutcomeWins").textContent = numWins;
  document.getElementById("finalOutcomeWinPercent").textContent = winPercent;
}


Plotly.newPlot('myDiv2', data, layout)

