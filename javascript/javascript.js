
// var scroll = document.getElementById("scrollIndicator");
var body = document.getElementsByTagName("body")[0];

//Variables para animación del form
// var i = 0;
// var form = document.getElementById("contatcForm");
// var submitButton = document.getElementById("submit");


window.addEventListener("load", function() {
    // var heightToScroll = Math.round(body.getBoundingClientRect().height - window.innerHeight);
    // form.addEventListener("animationend", THEANIMATION);

    // window.addEventListener("scroll",  function () {
    //     scrollindicator(heightToScroll);
    // });

    // scrollindicator(heightToScroll);
    // window.addEventListener("scroll", FormAnimationTrigger);

      (function () {
  	'use strict';
  	   var slides = document.querySelectorAll('.personContainer'),
  		 button = document.getElementById('button'),
  		 arrows = document.querySelectorAll('.arrowCard'),
  		 carouselCount = 0,
  		 scrollInterval,
  		 interval = 10000;

  	arrows[0].addEventListener('click', function (e) {
  		e = e || window.event;
  		e.preventDefault();
  		carouselCount += 200;
  		slider();
  		if (e.type !== 'autoClick') {
  			clearInterval(scrollInterval);
  			scrollInterval = setInterval(autoScroll, interval);
  		}
  	});
  	arrows[1].addEventListener('click', sliderEvent);
  	arrows[1].addEventListener('autoClick', sliderEvent);

  	function sliderEvent(e) {
  		e = e || window.event;
  		e.preventDefault();
  		carouselCount -= 200;
  		slider();
  		if (e.type !== "autoClick") {
  			clearInterval(scrollInterval);
  			scrollInterval = setInterval(autoScroll, interval);
  		}
  	}

  	function slider() {
  		switch (carouselCount) {
  			case -400:
  				carouselCount = 0;
  				break;
  			case 400:
  				carouselCount = 0;
  				break;
  			default:
  				break;
  		}
  		console.log(carouselCount);
  		for (var i = 0; i < slides.length; i += 1) {
  			slides[i].setAttribute('style', 'transform:translateX(' + carouselCount + '%)');
  		}
  	}

  	// create new Event to dispatch click for auto scroll
  	var autoClick = new Event('autoClick');
  	function autoScroll() {
  		arrows[1].dispatchEvent(autoClick);
  	}

  	// set timing of dispatch click events
  	scrollInterval = setInterval(autoScroll, interval);

  })();
});

// function scrollindicator (heightToScroll) {
//     var scrollwidth = window.scrollY / heightToScroll;
//     scroll.style.transform = "scale(" + scrollwidth + ",1)";
// }



//Funciones de animación de form

// function FormAnimationTrigger () {
//     if(form.getBoundingClientRect().top < 500) {
//         form.style.animationName = "test";
//         window.removeEventListener("scroll", FormAnimationTrigger);
//         form.addEventListener("animationend", THEANIMATION);
//     }
// }
//
// function THEANIMATION () {
//     (form.getElementsByClassName("basicInformationContainer"))[0].style.animationName = "animationLeftColumn";
//     (form.getElementsByClassName("textareaContainer"))[0].style.animationName = "animationRightColumn";
// }
