function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function applyColor() {
	var sheet = document.getElementById("stylesheet").sheet;
	var selector = '#logoThing:hover';
	var rule = 'background-color:';
	var index = 1;

	rule = rule + getRandomColor();
	console.log(rule);
	sheet.deleteRule(2)
	sheet.insertRule(selector + " { " + rule + "!important }",2)
}


$(document).ready(function toggleOn(){
	$("#ProjectsSection").click(function updateToggle() {
		$("#projects-dropdown").toggle();
	})
})