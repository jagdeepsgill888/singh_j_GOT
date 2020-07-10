(() =>{
  console.log('fired');

  let lightbox = document.querySelector(".lightbox"),
      lbClose = lightbox.querySelector("span"),
      sigils = document.querySelectorAll(".sigilContainer");

      function showLightbox (){
        lightBox.classList.add('show-lightbox');
      }

      function hideLightbox (){
        lightBox.classList.remove('show-lightbox');
      }

      sigils.forEach(sigil =>sigil.addEventListener("click", showLightbox));
      lbClose.addEventListener("click", hideLightbox);
})();
