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

