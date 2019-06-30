const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const openEmailFormButton = document.querySelector("#openEmailForm");
const cancelEmailButton = document.querySelector("#cancelButton")
const emailForm = document.querySelector("#emailForm");
const mapContactContainer = document.querySelector("#mapContactContainer");


hamburger.addEventListener('click', event => {
  navList.classList.toggle("show-menu")
});

cancelEmailButton.addEventListener('click', e => toggleContent(e))
openEmailFormButton.addEventListener('click', e => toggleContent(e))

const toggleContent = e => {
  e.preventDefault()  
  emailForm.classList.toggle('show');
  emailForm.classList.toggle('hide');
  mapContactContainer.classList.toggle('hide');
  mapContactContainer.classList.toggle('show');
};
