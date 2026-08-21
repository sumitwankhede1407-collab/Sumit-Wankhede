function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});

function hello() {
  alert("Hey! 👋 Welcome to Sumit Wankhede's official website!");
}

function socialAlert(platform) {
  alert(platform + " link will be added soon!");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();
