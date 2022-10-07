const sliderContainer = document.querySelector(".slider-feature");
const featureItem = document.getElementsByClassName("feature-one");
let translationVariable;

let clicked = false;
let xAxis;
let x;

export default function sliderFun() {
  [...featureItem].forEach((ele) => {
    ele.addEventListener("touchstart", (e) => {
      console.log(e);
    });
    ele.addEventListener("mouseup", () => {
      sliderContainer.style.cursor = "grap";
    });
    ele.addEventListener("mousedown", (e) => {
      e.target.style.cursor = "grapping";
      translationVariable =
        getComputedStyle(sliderContainer).getPropertyValue("--translate-value");
      clicked = true;
    });
    window.addEventListener("mouseup", () => {
      clicked = false;
    });
    ele.addEventListener("mousemove", (e) => {
      if (!clicked) return;

      if (e.offsetX < 200) {
        if (parseInt(translationVariable) === 0) {
          sliderContainer.style.setProperty("--translate-value", "-100%");
          clicked = false;
        }
        if (parseInt(translationVariable) === -100) {
          sliderContainer.style.setProperty("--translate-value", "-200%");
          clicked = false;
        }
      }

      if (e.offsetX > 800) {
        console.log(parseInt(translationVariable));
        if (parseInt(translationVariable) === -200) {
          sliderContainer.style.setProperty("--translate-value", "-100%");
          clicked = false;
        }
        if (parseInt(translationVariable) === -100) {
          sliderContainer.style.setProperty("--translate-value", "0");
          clicked = false;
        }
        if (parseInt(translationVariable) === 0) {
          sliderContainer.style.setProperty("--translate-value", "0");
          clicked = false;
        }
      }
    });
  });
}
