var date;
var hours; 
var minutes; 
var seconds; 
var display = document.getElementById("display");
var meridan;

var formatHours = function(rawHours){
	var newHours;

	if(rawHours === 0){
		newHours = 12
	}else if(rawHours > 12){
		newHours = rawHours - 12;
	}else{
		newHours = rawHours;
	}

	return newHours;
};

var formatZero = function(rawZero) {
	var newZero;

	if(rawZero < 10){
		newZero = "0" + rawZero;
	}else{
		newZero = rawZero;
	}
	return newZero;
};

var formatMeridan = function (rawHours) {
	if (rawHours < 12){
		meridan = "am";
	}else {
		meridan = "pm";
	}
};

var upDateTime = function(){
	date = new Date();
	hours = formatZero(formatHours(date.getHours()));
	minutes = formatZero(date.getMinutes());
	seconds = formatZero(date.getSeconds());
	formatMeridan(date.getHours());

	var fullTime = hours + ":" + minutes + ":" + seconds + " " 
	+ meridan;

	display.innerHTML = fullTime;
};

	setInterval(upDateTime, 1000); 