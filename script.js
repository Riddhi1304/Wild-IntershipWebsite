// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Contact form validation
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("responseMessage");

    if(!name || !email || !message){
      response.textContent = "Please fill in all fields.";
      response.style.color = "red";
      return;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      response.textContent = "Enter a valid email address.";
      response.style.color = "red";
      return;
    }

    response.textContent = "Thank you! Your message has been sent.";
    response.style.color = "green";
    form.reset();
  });
}
