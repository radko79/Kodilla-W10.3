// scripts.js

var carouselList = $("#carousel ul");
var li = $('li');
var slideLeft = $("#leftChevron");
var slideRight = $("#rightChevron");

$(function() {
	//this code will execute after the DOM is loaded
	//setTimeout(changeSlide, 3000); //after 3 seconds will change the slide once
	setInterval(changeSlide, 8000); //every 3 seconds, it performs a function to change the slide
});

function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
}

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}

slideLeft.on('click', function() {
	console.log('leftChevron');
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
});

slideRight.on('click', function() {
	carouselList.css({marginLeft:-400});
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	firstItem.before(lastItem);
	carouselList.animate({'marginLeft': 0}, 500);
	console.log('rightChevron');
});