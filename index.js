var activePage = "tab-home";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function showSkills() {
  console.warn("Te rog afiseaza skills.");
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
}