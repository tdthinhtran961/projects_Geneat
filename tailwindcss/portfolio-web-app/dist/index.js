toggleMenu = e => {
  let toggleMenu = document.querySelector("#mobile-menu")
  e.name === "menu"
  ? (e.name = "close", toggleMenu.classList.remove("hidden"))
  : (e.name = "menu", toggleMenu.classList.add("hidden"))
}