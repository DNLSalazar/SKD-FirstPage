var z = 0;
var arrayWords = ["simple", "great", "professional", "easy", "SKD"];
var wordElement = document.getElementById("word");
var currentWord = wordElement.innerHTML;
var status = 0;


window.addEventListener("load", function () {
  setInterval(animation, 200);
});


function animation () {
  if (status == 0) {
    if (currentWord.length < arrayWords[z].length) {
      currentWord += arrayWords[z].slice(currentWord.length, currentWord.length+1);
      wordElement.innerHTML = currentWord;
    } else {
      status = 1;
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
      return;
    }
  }
}