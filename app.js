let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_724iwxd",
      "template_gx6lohp",
      event.target,
      "doZKOZvey8smaNwdt"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at devbykendrick@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open", "modal-open");
  }
  isModalOpen = true;
  //toggle modal
  console.log("toggleModal()");
  document.body.classList += " modal--open";
  document.body.classList.add("modal-open");
}

/** VIDEO MODAL */
var video = document.getElementById("video");

document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
  document.body.classList.add("modal-open");
});

document
  .getElementsByClassName("close-vid")[0]
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
    document.body.classList.remove("modal-open");
    video.pause();
  });

window.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    video.pause();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  video.pause();
});

/** SCRATCH PAD VIDEO MODAL */
var video = document.getElementById("scratch-pad-video");

document
  .getElementById("openScratchPadModal")
  .addEventListener("click", function () {
    document.getElementById("scratchPadModal").style.display = "block";
    document.body.classList.add("modal-open");
  });

document
  .getElementsByClassName("close-vid")[0]
  .addEventListener("click", function () {
    document.getElementById("scratchPadModal").style.display = "none";
    document.body.classList.remove("modal-open");
    video.pause();
  });

window.addEventListener("click", function (event) {
  var modal = document.getElementById("scratchPadModal");
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    video.pause();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  video.pause();
});
