// Rola até a seção portfólios
document.getElementById("btn-portfolio").addEventListener("click", function () {
  document
    .getElementById("portfolios")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

// img linkedin
document.getElementById("linkedin").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/heryson-andrade-1b0918284/");
});

// img github
document.getElementById("github").addEventListener("click", () => {
  window.open("https://www.github.com/ribshow");
});
