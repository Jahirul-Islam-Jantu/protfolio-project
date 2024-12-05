function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#mail").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;

  const result = document.querySelector("#showResult");
  result.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`;
});
