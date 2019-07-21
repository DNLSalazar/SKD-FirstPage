
var scroll = document.getElementById("scrollIndicator");
var body = document.getElementsByTagName("body")[0];

//Variables para animación del form
var i = 0;
var form = document.getElementById("contatcForm");
var submitButton = document.getElementById("submit");


window.addEventListener("load", function() {
    var heightToScroll = Math.round(body.getBoundingClientRect().height - window.innerHeight);
    form.addEventListener("animationend", THEANIMATION);

    window.addEventListener("scroll",  function () {
        scrollindicator(heightToScroll);
    });

    scrollindicator(heightToScroll);
    window.addEventListener("scroll", FormAnimationTrigger);
});

function scrollindicator (heightToScroll) {
    var scrollwidth = window.scrollY / heightToScroll;
    scroll.style.transform = "scale(" + scrollwidth + ",1)";
}



//Funciones de animación de form

function FormAnimationTrigger () {
    if(form.getBoundingClientRect().top < 500) {
        form.style.animationName = "animation";
        window.removeEventListener("scroll", FormAnimationTrigger);
        form.addEventListener("animationend", THEANIMATION);
    }
}

function THEANIMATION () {
    i++;
    form.style.animationDelay = "0s";
    if (i < 3) {

        if(i == 2){
            (form.getElementsByClassName("basicInformationContainer"))[0].style.animationName = "animationLeftColumn";
            (form.getElementsByClassName("textareaContainer"))[0].style.animationName = "animationRightColumn";
        }
        form.style.animationName = "animation" + i;
        console.log(i);
        form.addEventListener("animationend", THEANIMATION);
    }
}