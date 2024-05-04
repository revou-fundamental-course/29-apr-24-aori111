//Banner Slider

let index = 0;
let slideContainer = document.querySelector(".slideshow");
let slides = slideContainer.querySelectorAll(".slide");

for (let slide of slides) {
    slide.style.transition = `all 5s linear`;
}


function showSlide(slideNumber) {
    slides.forEach((slide, i) => {
        slide.style.display = i == slideNumber ? "block" : "none";
    });
    index++;
    
    if (index >= slides.length) {
        index = 0;
    }
}

showSlide(index);

setInterval (() => showSlide(index), 3000);



//Form Validation

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("name"),
  email = id("email"),
  userInterest = id("user-interest"),
  form = id("contact-form"),
  errorMsg = classes("error");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;

  } else {
    errorMsg[serial].innerHTML = "";
  }
};
