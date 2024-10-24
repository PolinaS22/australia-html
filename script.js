gsap.from (".img-animation", {delay: 0.5, scale:2, duration: 1, opacity: 0});
gsap.from(".header-animation", {delay: 0.5, duration: 1.3, y: -300, opacity: 0});
gsap.from(".facts", {delay: 1.2, duration: 1.3, y: -300, opacity: 0, stagger:0.5});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".block-animation, .group-animation, .foodTrigger", {
  duration: 1.5,
  scrollTrigger: ".block-animation, .group-animation, .foodTrigger",
  opacity: 0,
  delay: 0.3,
});
const btnUp = document.querySelector("#btn-back-to-top");
window.onscroll = function() {
    scrollFunction();
}
function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        btnUp.style.display = "block";
    }
    else {
        btnUp.style.display = "none";
    }
}

btnUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})