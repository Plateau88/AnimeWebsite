const Button = (e) => {
  return document.querySelector(e);
};
const menuToggler = Button(".menu-toggle");
const body = Button("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});
