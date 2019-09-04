var z = 0;
var arrayWords = ["simple", "great", "professional", "easy", "SKD"];
var wordElement = document.getElementById("word");
var currentWord = wordElement.innerHTML;
var status = 0;
var timeout;
const time = 150;

window.addEventListener("load", function () {
  setTimeout(animation, time);
});


function animation () {
  timeout = time;
  if (status == 0) {
    if (currentWord.length < arrayWords[z].length) {
      currentWord += arrayWords[z].slice(currentWord.length, currentWord.length+1);
      wordElement.innerHTML = currentWord;
    } else {
      if(wordElement.innerHTML == "SKD") {
        timeout = 3000;
      } else {
        timeout = 1000;
      }
      status = 1;
      setTimeout(animation, timeout);
      return;
    }
  } else {
    if (currentWord.length > 0 && status == 1) {
      currentWord = currentWord.slice(0, currentWord.length - 1);
      wordElement.innerHTML = currentWord;
    } else {
      z++;
      if(z == arrayWords.length) z = 0;
      status = 0;
      setTimeout(animation, timeout);
      return;
    }
  }
  setTimeout(animation, timeout);
}