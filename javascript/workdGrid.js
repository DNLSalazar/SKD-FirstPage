var filterButtons = document.getElementsByClassName("buttonFilter")
const FILTER_LENGTH = filterButtons.length
var works = document.getElementsByClassName("work")
const WORKS_LENGTH = works.length
const [WIDTH, HEIGHT] = [312, 260]
var worksContainer = document.getElementById("worksContainer")

window.addEventListener("load", function () {
  for (let i = 0; i < FILTER_LENGTH; i++) {
    filterButtons[i].addEventListener("click", workFilter)
  }
})

function workFilter () {
  const FILTER = this.getAttribute("filterType") === "all" ? null
  : this.getAttribute("filterType")

  let filtered = FILTER ?
  worksContainer.querySelectorAll(".work[workType=" + FILTER + "]")
  : works

  // console.log(filtered)
  let [col, current, itemsFiltered, file] = [3, 0, 0, 0]
  for (let i = 0; i < WORKS_LENGTH; i++) {
    if (!FILTER || FILTER === works[i].getAttribute("workType")) {
      works[i].removeEventListener("transitionend", disappear)
      works[i].style.setProperty("display", "flex")

      works[i].style.setProperty("top", (file * HEIGHT)+"px")
      works[i].style.setProperty("left", (current * WIDTH)+"px")
      
      setTimeout(position, 250, works[i], file, current);
      
      current++
      if(current === col) {
        file++
        current = 0
      }
    }else {
      works[i].style.setProperty("opacity", "0")
      // works[i].style.setProperty("top", "0")
      // works[i].style.setProperty("left", "0")
      works[i].style.setProperty("transform", "scale(0)")
      works[i].addEventListener("transitionend", disappear)
    }
  }
  worksContainer.style.setProperty("min-height", (file * HEIGHT) + "px")
  worksContainer.style.setProperty("max-width", (col * WIDTH) + "px")
}

function position (data, fila, columna) {
  // data.style.setProperty("top", (fila * HEIGHT)+"px")
  // data.style.setProperty("left", (columna * WIDTH)+"px")
  
  data.style.setProperty("opacity", "1")
  data.style.setProperty("transform", "scale(1)")
}

function disappear () {
  this.style.setProperty("display", "none")
  this.style.setProperty("top", "0")
  this.style.setProperty("left", "0")
  this.removeEventListener("transitionend", disappear)
}
