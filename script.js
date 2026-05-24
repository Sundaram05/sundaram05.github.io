// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));


// NAVBAR BACKGROUND ON SCROLL

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "rgba(0,0,0,0.7)";

  }

  else{

    navbar.style.background = "rgba(0,0,0,0.4)";

  }

});


// TYPING EFFECT

const text = "Building modern AI experiences with clean design.";

const typingText = document.getElementById("typing-text");

let index = 0;

typingText.innerHTML = "";

function typeEffect(){

  if(index < text.length){

    typingText.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 40);

  }

}

typeEffect();