const share = document.querySelector(".share");
const socialMedia = document.querySelector(".social-media");

share.addEventListener("click", function () {
   socialMedia.classList.toggle("visible"); // Ajoute ou supprime la classe "visible"
});
