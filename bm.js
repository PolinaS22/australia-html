gsap.from (".img-animation", {delay: 0.5, scale:2, duration: 1, opacity: 0});
gsap.from(".imgText-animation", {delay: 1, duration: 1.5, opacity: 0});
gsap.registerPlugin(ScrollTrigger);
gsap.from(".block-animation", {
  duration: 1.5,
  scrollTrigger: ".block-animation",
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