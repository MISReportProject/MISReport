$(document).ready(function(){
	var ctx = $("#mycanvas3").get(0).getContext("2d");

	var data = [
		{
			value: 40,
			color: "cornflowerblue",
			highlight: "lightskyblue",
			label: "JavaScript"
		},
		{
			value: 50,
			color: "lightgreen",
			highlight: "yellowgreen",
			label: "HTML"
		},
		{
			value: 270,
			color: "orange",
			highlight: "darkorange",
			label: "CSS"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);

	
});

