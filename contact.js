const ToggleHandburger = document.querySelector(".handburger")
const ToggleIcon = document.querySelector(".handburger i")
const ToggleLinks = document.querySelector(".Block-menu")

ToggleHandburger.addEventListener("click", () =>{
  ToggleLinks.classList.toggle("open")
  
  const isOpen = ToggleLinks.classList.contains("open")

  ToggleIcon.classList = isOpen ? "fa fa-times" : "fa fa-bars"
})



