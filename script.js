document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("starfield");
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = Math.random() * 2 + 1 + "px";
    star.style.height = Math.random() * 2 + 1 + "px";
    star.style.opacity = Math.random() * 0.8 + 0.2;
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = Math.random() * 2 + 3 + "s";
    container.appendChild(star);
  }

  // Contact form handling (console log for now)
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Form submitted:", data);
    alert("Thanks for reaching out!");
    form.reset();
  });
});
