let wwTabBtns = document.querySelector(".worldwide-tabs-link");
let wwImage = document.querySelector(".worldwide-tabs-img");

wwTabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    wwTabBtns.forEach((newBtn) => {
      if (newBtn == btn) {
        newBtn.classList.add("worldwide-tabs-link-active");
      } else {
        newBtn.classList.remove("worldwide-tabs-link-active");
      }
    });
    if (btn.innerHTML === "Desktop") {
      wwImage.src = `./images.desktop.png`;
      wwImage.style.width = `60%`;
    } else if (btn.innerHTML === "Tablet") {
      wwImage.src = `./images.tab.png`;
      wwImage.style.width = `40%`;
    } else if (btn.innerHTML === "Mobile") {
      wwImage.src = `./images.mobile.png`;
      wwImage.style.width = `20%`;
    }
  });
});
