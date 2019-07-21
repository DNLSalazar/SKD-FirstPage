
var animable = document.getElementsByClassName("myAnimatable");
var animableLength = animable.length;

window.addEventListener("load", function () {
    animate();
    window.addEventListener("scroll", animate);
});

function animate () {
    for(var i = 0; i < animableLength; i++) {
        if(animable[i].getBoundingClientRect().top < 500) {
            let data = animable[i];
            switch (animable[i].getAttribute("my-animation")) {
                //Fade Simple Animations
                case "fade left":
                    animable[i].style.transform = "translate(-100px, 0px)";
                    animable[i].style.animationName = "animations";
                break;

                case "fade right":
                    animable[i].style.transform = "translate(100px, 0px)";
                    animable[i].style.animationName = "animations";
                break;

                case "fade top":
                    animable[i].style.transform = "translate(0px, -100px)";
                    animable[i].style.animationName = "animations";
                break;

                case "fade bottom":
                    animable[i].style.transform = "translate(0px, 100px)";
                    animable[i].style.animationName = "animations";
                break;

                //Bounce Animations

                case "bounce left":
                    animable[i].style.transform = "translate(-250px, 0px)";
                    animable[i].style.animationName = "animations";
                break;

                case "bounce right":
                    animable[i].style.transform = "translate(250px, 0px)";
                    animable[i].style.animationName = "animations";
                break;

                case "bounce top":
                    animable[i].style.transform = "translate(0px, -250px)";
                    animable[i].style.animationName = "animations";
                break;

                case "bounce bottom":
                    animable[i].style.transform = "translate(0px, 250px)";
                    animable[i].style.animationName = "animations";
                break;

                //Rotate Animations

                case "rotate x":
                    animable[i].style.transform = "rotateX(90deg)";
                    animable[i].style.animationName = "rotateAnimations";
                break;

                case "rotate y":
                    animable[i].style.transform = "rotatey(90deg)";
                    animable[i].style.animationName = "rotateAnimations";
                break;

            }
            
        }
    }
}
