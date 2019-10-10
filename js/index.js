const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const openEmailFormButton = document.querySelector("#openEmailForm");
const cancelEmailButton = document.querySelector("#cancelButton")
const emailForm = document.querySelector("#emailForm");
const mapContactContainer = document.querySelector("#mapContactContainer");


hamburger.addEventListener('click', event => {
  navList.classList.toggle("show-menu")
});

if(cancelEmailButton){
  cancelEmailButton.addEventListener('click', e => toggleContent(e))
}
if(openEmailFormButton){
  openEmailFormButton.addEventListener('click', e => toggleContent(e))
}

const toggleContent = e => {
  e.preventDefault()
  emailForm.classList.toggle('show');
  emailForm.classList.toggle('hide');
  mapContactContainer.classList.toggle('hide');
  mapContactContainer.classList.toggle('show');
};
// if(window.localStorage)
if(document.cookie.indexOf("seenAlumniBreakfast2019=true")===-1) {
  document.cookie = "seenAlumniBreakfast2019=true; max-age=3600";
  addAnnouncementModal();
}

function addAnnouncementModal(){
  let announcementModal = `<div class="modal-background">
  <div class="modal">
  <h2>Hey Alumni!</h2>
  <p>The Alumni Breakfast is scheduled for November 2nd at 10am. Hope to see you there!</p>
  <button id="modalCloseButton" class="modal-button">OK</button>
  </div>
  </div>`
  document.querySelector("#backgroundImage").insertAdjacentHTML('afterend', announcementModal)
  document.querySelector(".modal-background").addEventListener("click", e => closeModal(e))
  document.querySelector("#modalCloseButton").addEventListener("click", e => closeModal(e))
  let modal = document.querySelector(".modal")
  modal.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  })
}

function closeModal(e) {
  document.querySelector(".modal-background").style.display="none";
}
