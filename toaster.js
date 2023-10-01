const toasterContainer = document.getElementsByClassName("toaster-container");
const progressBar = document.getElementsByClassName("progress-bar");

const progressBarArray = Array.from(progressBar);
const toasterContainerArray = Array.from(toasterContainer);

function setTransition() {
  progressBarArray.map((progressDiv) => {
    setTimeout(() => {
      progressDiv.style.width = "100%";
      progressDiv.style.transition = "width 8s ease-in-out";
      progressDiv.addEventListener("transitionend", () => {
        toasterContainerArray.forEach(
          (toast) => (toast.style.display = "none")
        );
      });
    }, 1000);
  });
}

setTransition();
