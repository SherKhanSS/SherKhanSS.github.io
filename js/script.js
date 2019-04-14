var link = document.querySelector(".button-feedback");

 var popup = document.querySelector(".modal-feedback");
 var close = popup.querySelector(".modal-close");

 link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
 });

 close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
 });


 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });



 var mapLink = document.querySelector(".contacts-button-map");

   var mapPopup = document.querySelector(".modal-map");
   var mapClose = mapPopup.querySelector(".modal-close");

   mapLink.addEventListener("click", function (evt) {
     evt.preventDefault();
     mapPopup.classList.add("modal-show");
   });

   mapClose.addEventListener("click", function (evt) {
     evt.preventDefault();
     mapPopup.classList.remove("modal-show");
   });

   window.addEventListener("keydown", function (evt) {
     evt.preventDefault();
     if (evt.keyCode === 27) {
       if (mapPopup.classList.contains("modal-show")) {
         mapPopup.classList.remove("modal-show");
       }
     }
   });
