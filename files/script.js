// Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

const services = document.getElementById("#services");
const teamItems = document.querySelectorAll(".teamItem");
const ContentPlusDiv = document.querySelectorAll("ContentPlusDiv");
const ContentDesc = document.querySelectorAll(".ContentDesc");

services.forEach((el) => {
  observer.observe(el);
});

teamItems.forEach((el) => {
  el.addEventListener("mouseout", (e) => {
    el.firstChild.classList.add("aniOut");
  });
});
