toggleMode = (e) => {
  const selectToggle = document.querySelector("#toggleDark")
  e.name === "moon" ? (e.name = "sunny",selectToggle.classList.add("dark")) : (e.name = "moon", selectToggle.classList.remove("dark"));
};
