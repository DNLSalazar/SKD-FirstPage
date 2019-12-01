
// var scroll = document.getElementById("scrollIndicator");
var body = document.getElementsByTagName("body")[0];
var root = document.documentElement;


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
		 arrows = document.querySelectorAll('.arrowCard'),
		 // carouselCount = 200,
     carouselCount = 0,
		 scrollInterval,
		 interval = 15000,
     count = 1,
     condition;

     arrows[0].addEventListener('click', sliderEvent);
 	   arrows[1].addEventListener('click', sliderEvent);
     arrows[1].addEventListener('autoClick', sliderEvent);

  	function sliderEvent(e) {
      var mediaQuery = window.matchMedia("(max-width: 750px)");

      // count = mediaQuery.matches ? 100 : 55;
      count =  mediaQuery.matches ? 100 : 40
      condition = mediaQuery.matches ? 300 : 80
  		e = e || window.event
  		e.preventDefault()
      e.target.classList[1] === "prev" ? carouselCount += count : carouselCount -= count
  		slider();
  		if (e.type !== "autoClick") {
  			clearInterval(scrollInterval);
  			scrollInterval = setInterval(autoScroll, interval);
  		}
  	}

  	function slider() {
      if (carouselCount < -(condition)) {
        carouselCount = 0;
      }
      if (carouselCount > 0) {
        carouselCount = -(condition);
      }
      // root.style.setProperty("--carousel", carouselCount + "vw")
      root.style.setProperty("--carousel", carouselCount)
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



