//functions to scroll when navbar is clicked
function homeScroll() {
	window.scrollTo(0, 0);
	return false;
}

function aboutScroll() {
	window.scrollTo(0, 540);
	return false;
}

function servicesScroll() {
	window.scrollTo(0, 1350);
	return false;
}

function contactScroll() {
	window.scrollTo(0, 2300);
	return false;
}

//automatic change in navbar when certain height in page is reached
$(window).scroll(function() {
   if (window.pageYOffset < 540) {
	$(".active").removeClass("active");
	$("#home-btn").addClass("active");
} else if (window.pageYOffset < 1350) {
	$(".active").removeClass("active");
	$("#about-btn").addClass("active");
} else if (window.pageYOffset < 2100) {
	$(".active").removeClass("active");
	$("#services-btn").addClass("active");
} else if (window.pageYOffset >= 2100) {
	$(".active").removeClass("active");
	$("#contact-btn").addClass("active");
}
});
