"use strict";
var statistic = {};

statistic.Main = (function(){

});

statistic.Main.prototype.genderStats = function(stats) {
    var data1 = [
    {
        value: stats[0][0],
        color:"#00759C",
        highlight: "#00759C",
        label: "Men"
    },
    {
        value: stats[0][1],
        color: "#FF19A7",
        highlight: "#FF19A7",
        label: "Women"
    },

    {
        value: stats[0][2],
        color: "#878787",
        highlight: "#878787",
        label: "Unknown"
    }
]
    var options = {
	segmentShowStroke : false,
	animateScale : true
    }
    var chart1 = document.getElementById("genderChart").getContext("2d");
    new Chart(chart1).Pie(data1, options);

}

statistic.Main.prototype.genderTags = function(stats) {
    var data = [
    {
        value: stats[1][0],
        color:"#00759C",
        highlight: "#00759C",
        label: "Men"
    },
    {
        value: stats[1][1],
        color: "#FF19A7",
        highlight: "#FF19A7",
        label: "Women"
    },

    {
        value: stats[1][2],
        color: "#878787",
        highlight: "#878787",
        label: "Unknown"
    }
]
    var options = {
	segmentShowStroke : false,
	animateScale : true
    }
    var chart1 = document.getElementById("genderChart1").getContext("2d");
    new Chart(chart1).Pie(data, options);


}

