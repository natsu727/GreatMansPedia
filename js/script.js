document.addEventListener(
  "DOMContentLoaded",
  function () {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("overlay");

    function menuToggle() {
      menuButton.classList.toggle("button-change");
      if (menuButton.textContent == "メニューを開く") {
        menuButton.textContent = "メニューを閉じる";
      } else {
        menuButton.textContent = "メニューを開く";
      }

      navMenu.classList.toggle("nav-menu-open");
      overlay.classList.toggle("overlay-on");
    }

    const menuEvent = document.getElementsByClassName("menu-event");
    for (let i = 0; i < menuEvent.length; i++) {
      menuEvent[i].addEventListener("click", menuToggle, false);
    }
  },
  false
);
