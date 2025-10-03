// darkmode
const toggleTheme = document.createElement("button");
toggleTheme.textContent = "🌙";
toggleTheme.style.position = "fixed";
toggleTheme.style.bottom = "20px";
toggleTheme.style.right = "20px";
toggleTheme.style.padding = "10px";
document.body.appendChild(toggleTheme);

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    toggleTheme.textContent = "☀️";
  } else {
    toggleTheme.textContent = "🌙";
  }
});

