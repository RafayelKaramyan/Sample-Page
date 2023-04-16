const serviceBoxes = document.querySelectorAll(".service-box");

const options = {
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bounce-in");
    }
  });
}, options);

serviceBoxes.forEach((box) => {
  observer.observe(box);
});