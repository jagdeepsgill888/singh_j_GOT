(() => {
  console.log('fired!');

  let lightBox = document.querySelector(".lightbox"),
      lbClose = lightBox.querySelector("span"),
      lbVideo = lightBox.querySelector("video"),
      sigils = document.querySelectorAll(".sigilContainer");

      function showHideLightbox (){
        lightBox.classList.toggle('show-lightbox');
      }

      // try making the vid play as well
      if (lbVideo.paused) {
        lbVideo.play();
      } else {
        lbVideo.currentTime = 0;
        lbVideo.pause();
      }


      // rewind the video and make it pause at the currentTime of 0
      // lbVideo.pause();

      sigils.forEach(sigil => sigil.addEventListener("click", showHideLightbox));
      lbClose.addEventListener("click", showHideLightbox);

      // add and "ended" event handler for the video -> close the lightbox
      lbVideo.addEventListener("ended", showHideLightbox);
})();
