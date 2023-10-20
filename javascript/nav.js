window.onload = function () {

    var incomeChart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,  
      
        axisY: {
            
            minimum: 0,
            maximum: 4,
            interval: 1, 
            valueFormatString: "#0k",
           
            gridThickness: 0.1,
            lineThickness: 0, 
            tickThickness: 0,
            lineDashType: "dash",
        },
        axisX: {
            valueFormatString: "MMM DD", 
            intervalType: "day",
            interval: 1,
            labelAngle: -30, 
            gridThickness: 0,
            lineThickness: 0, 
            tickThickness: 0,
        },
        data: [{
            yValueFormatString: "#,### Units",
            type: "splineArea",
            color: "#22B573",
            fillOpacity: 0.1,
            toolTipContent: "{x}: {y}k", 



            dataPoints: [
                { x: new Date(2023, 11, 2), y: 0.5,  markerImageUrl: "/main-board/assets/images/Group 9155.png", },
                { x: new Date(2023, 11, 3), y: 1.5, indexLabel: "\u2191 1.5k", markerType: "circle", markerSize: 12 },
                { x: new Date(2023, 11, 4), y: 1.25 },
                { x: new Date(2023, 11, 5), y: 2.6 },
                { x: new Date(2023, 11, 6), y: 2 },
                { x: new Date(2023, 11, 7), y: 3.1, indexLabel: "\u2191 3.1k", markerType: "circle", markerSize: 12 },
                { x: new Date(2023, 11, 8), y: 3.3, indexLabel: "\u2191 3.3k", markerType: "circle", markerSize: 12 }
            ]
        }]
    });



    incomeChart.render();

  

//     var incomeMarkerImages = [];
//     addincomeMarkerImages(incomeChart);
 
//     function addincomeMarkerImages(incomeChart) {
//      for (var i = 0; i < incomeChart.data.length; i++) {
//          incomeMarkerImages[i] = [];
//          for (var j = 0; j < incomeChart.data[i].dataPoints.length; j++) {
//              incomeMarkerImages[i].push($("<img>").attr("src", incomeChart.data[i].dataPoints[j].markerImageUrl)
//              .css("display", "none")
//              .css("height", 20)
//              .css("width", 15)
//              .appendTo($("#chartContainer>.canvasjs-chart-container"))
//              );
//              positionincomeMarkerImage(incomeMarkerImages[i][j], i, j);
//          }
//      }
//     }
 
//     function positionincomeMarkerImage(incomeMakerimage, dsindex, dpindex) {
//      var pixelX = incomeChart.axisX[0].convertValueToPixel(incomeChart.options.data[dsindex].datapoints[dpindex].x);
//      var pixelY = incomeChart.axisY[0].convertValueToPixel(incomeChart.options.data[dsindex].datapoints[dpindex].y);
    
//      console.log("dsIndex:", dsIndex);
//     console.log("dpIndex:", dpIndex);
//     console.log("incomeChart:", incomeChart);
 
//      incomeMakerimage.css({
//          "position": "absolute",
//          "display": "block",
//          "top": pixelY - incomeMakerimage.height() / 2,
//          "left": pixelX - incomeMakerimage.width() / 2
//      });
 
 
//  }
 
//  $(window).resize(function () {
//      for (var i = 0; i < incomeChart.data.length; i++) {
//          for (var j = 0; j < incomeChart.data[i].dataPoints.length; j++) {
//              positionincomeMarkerImage(incomeMarkerImages[i][j], i, j);
//          }
//      }
//  });

  

  
   var customPopup = document.getElementById("customPopup");
   var popupContent = document.getElementById("popupContent");

 
   incomeChart.data[0].addEventListener("click", function (e) {
       var xValue = e.dataPoint.x.getDate() + " " + e.dataPoint.x.toLocaleString("default", { month: "short" });
       var yValue = e.dataPoint.y + "k";

       // Update the popup content
       popupContent.textContent = "X: " + xValue + "\nY: " + yValue;

       // Position the popup next to the clicked data point
       customPopup.style.left = (e.dataPoint.x - 20) + "px";
       customPopup.style.top = (e.dataPoint.y - 30) + "px";

       // Show the custom popup
       customPopup.style.display = "block";
   });

  
   document.addEventListener("click", function (e) {
       if (e.target !== customPopup) {
           customPopup.style.display = "none";
       }
   });



   var expenseChart = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true, 
    axisY: {
        
        minimum: 0,
        maximum: 4,
        interval: 1, 
        valueFormatString: "#0k",
       
        gridThickness: 0.1,
        lineThickness: 0, 
        tickThickness: 0,
        lineDashType: "dash",
    },
    axisX: {
        valueFormatString: "MMM DD", 
        intervalType: "day",
        interval: 1, 
        labelAngle: -30, 
        gridThickness: 0,
        lineThickness: 0, 
        tickThickness: 0,
    },
    data: [{
        yValueFormatString: "#,### Units",
        type: "splineArea",
        color: "#7468E4",
        toolTipContent: "{x}: {y}k", 
     
        
        dataPoints: [
            { x: new Date(2023, 11, 2), y: 0.5,  markerImageUrl: "/main-board/assets/images/Group 9155.png", },
            { x: new Date(2023, 11, 3), y: 1.5, indexLabel: "1.5k",   markerImageUrl: "/main-board/assets/images/Group 9155.png", },
            { x: new Date(2023, 11, 4), y: 1.25,  markerImageUrl: "/main-board/assets/images/Group 9155.png",},
            { x: new Date(2023, 11, 5), y: 2.6,  markerImageUrl: "/main-board/assets/images/Group 9155.png", },
            { x: new Date(2023, 11, 6), y: 2,  markerImageUrl: "/main-board/assets/images/Group 9155.png", },
            { x: new Date(2023, 11, 7), y: 3.1, indexLabel: " 3.1k",  markerImageUrl: "/main-board/assets/images/Group 9155.png", },
            { x: new Date(2023, 11, 8), y: 3.3, indexLabel: "3.3k",  markerImageUrl: "/main-board/assets/images/Group 9155.png",}
        ]
    }]
});



expenseChart.render();

var expenseMarkerImages = [];
addexpenseMarkerImages(expenseChart);

function addexpenseMarkerImages(expenseChart) {
    for (var i = 0; i < expenseChart.data.length; i++) {
        expenseMarkerImages[i] = [];
        for (var j = 0; j < expenseChart.data[i].dataPoints.length; j++) {
            expenseMarkerImages[i].push($("<img>").attr("src", expenseChart.data[i].dataPoints[j].markerImageUrl)
                .css("display", "none")
                .css("height", 20)
                .css("width", 15)
                .appendTo($("#chartContainer2>.canvasjs-chart-container"))
            );
            positionexpenseMarkerImage(expenseMarkerImages[i][j], i, j);
        }
    }
}

function positionexpenseMarkerImage(expenseMarkerImage, dsIndex, dpIndex) {
    var pixelX = expenseChart.axisX[0].convertValueToPixel(expenseChart.options.data[dsIndex].dataPoints[dpIndex].x);
    var pixelY = expenseChart.axisY[0].convertValueToPixel(expenseChart.options.data[dsIndex].dataPoints[dpIndex].y);

    expenseMarkerImage.css({
        "position": "absolute",
        "display": "block",
        "top": pixelY - expenseMarkerImage.height() / 2,
        "left": pixelX - expenseMarkerImage.width() / 2
    });
}

$(window).resize(function () {
    for (var i = 0; i < expenseChart.data.length; i++) {
        for (var j = 0; j < expenseChart.data[i].dataPoints.length; j++) {
            positionexpenseMarkerImage(expenseMarkerImages[i][j], i, j);
        }
    }
});

  



var customPopup1 = document.getElementById("customPopup2");
var popupContent1 = document.getElementById("popupContent2");


expenseChart.data[0].addEventListener("click", function (e) {
   var xValue = e.dataPoint.x.getDate() + " " + e.dataPoint.x.toLocaleString("default", { month: "short" });
   var yValue = e.dataPoint.y + "k";

   
   popupContent1.textContent = "X: " + xValue + "\nY: " + yValue;

 
   customPopup1.style.left = (e.dataPoint.x - 20) + "px";
   customPopup1.style.top = (e.dataPoint.y - 30) + "px";

 
   customPopup1.style.display = "block";
});


document.addEventListener("click", function (e) {
   if (e.target !== customPopup1) {
       customPopup1.style.display = "none";
   }
});

var overviewChart = new CanvasJS.Chart("detailedChart", {
    animationEnabled: true,  
   
    axisY: {
    minimum: 0,
    maximum: 50,
    interval: 10,
    valueFormatString: "#0k",
    gridThickness: .1,
    lineThickness: 0, 
    tickThickness: 0,
    lineDashType: "dash",
    },
    axisX: {
    valueFormatString: "MMM",
    intervalType: "month",
    interval: 1,
    labelAngle: -30,
    gridThickness: 0,
    lineThickness: 1, 
    tickThickness: 0,
    lineDashType: "dash"
    },

data: [
    {
        yValueFormatString: "#,### Units",
        type: "spline",
        color: "#22B573",
        fillOpacity: 0.1,
        toolTipContent: "{x}: {y}k",
        dataPoints: [
            { x: new Date(2023, 0), y: 22 }, 
            { x: new Date(2023, 1), y: 28 }, 
            { x: new Date(2023, 2), y: 25 },
            { x: new Date(2023, 3), y: 21 }, 
            { x: new Date(2023, 4), y: 32 },
            { x: new Date(2023, 5), y: 29.8 }, 
            { x: new Date(2023, 6), y: 33 }, 
            { x: new Date(2023, 7), y: 32 }, 
            { x: new Date(2023, 8), y: 35 }, 
            { x: new Date(2023, 9), y: 39 }, 
            { x: new Date(2023, 10), y: 38.5 }, 
            { x: new Date(2023, 11), y: 40 } ,
            { x: new Date(2023, 11), y: 37 }
        ]
    },
    {
        yValueFormatString: "#,### Units",
        type: "spline",
        color: "#7468E4", 
        fillOpacity: 0.1,
        toolTipContent: "{x}: {y}k",
        dataPoints: [
            { x: new Date(2023, 0), y: 20 }, 
            { x: new Date(2023, 1), y: 23}, 
            { x: new Date(2023, 2), y: 21 }, 
            { x: new Date(2023, 3), y: 28 }, 
            { x: new Date(2023, 4), y: 27 }, 
            { x: new Date(2023, 5), y: 28 }, 
            { x: new Date(2023, 6), y: 27 }, 
            { x: new Date(2023, 7), y: 30}, 
            { x: new Date(2023, 8), y: 30 }, 
            { x: new Date(2023, 9), y: 38}, 
            { x: new Date(2023, 10), y:38.3 }, 
            { x: new Date(2023, 11), y: 38 },
            { x: new Date(2023, 11), y: 42 } 
        ]
    }
]
});

overviewChart.render();
}





    




