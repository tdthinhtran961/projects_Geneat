openMenu = () => {
  document.getElementById("md-menu").classList.add("md:block");
};

closeMenu = () => {
  document.getElementById("md-menu").classList.remove("md:block");
};
openSearchMenu = () => {
  document.getElementById("mobile-search-menu").classList.remove("hidden");
};
closeSearchMenu = () => {
  document.getElementById("mobile-search-menu").classList.add("hidden");
};

openSmMenu = () => {
  document.getElementById("mobile-menu").classList.remove("hidden");
};
closeSmMenu = () => {
  document.getElementById("mobile-menu").classList.add("hidden");
};

modalHandlerLogin = () => {
  document.querySelector("#modalLogin").classList.remove("hidden");
};
closeModalLogin = () => {
  document.querySelector("#modalLogin").classList.add("hidden");
  document.getElementById("mobile-menu").classList.add("hidden");
}

modalHandlerCart = () => {
  document.querySelector("#modalCart").classList.remove("hidden");
};
checkoutBack = () => {
  document.querySelector("#modalCart").classList.add("hidden");
  document.getElementById("mobile-menu").classList.add("hidden");
}

