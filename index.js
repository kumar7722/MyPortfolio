// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// feedback form

const form = document.getElementById("feedback-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;

  if (name === "" || email === "" || feedback === "") {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Submit the form data to your server or email service here
  alert(`Thank you for your feedback, ${name}!`);

  form.reset();
});



