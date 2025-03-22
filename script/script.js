const share = document.querySelector(".share");
const socialMedia = document.querySelector(".social-media");

share.addEventListener("click", function () {
   socialMedia.classList.toggle("visible"); // Adds or deletes the “visible” class"
});

share.addEventListener("click", function () {
   share.classList.toggle("active"); // Adds or deletes “active” class"
});
