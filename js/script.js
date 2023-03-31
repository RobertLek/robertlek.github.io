var homePage = document.getElementById("tab-home");
var skillsPage = document.getElementById("tab-skills");
var projectsPage = document.getElementById("tab-projects");
var languagesPage = document.getElementById("tab-languages");

var homeButton = document.getElementById("button-home");
var skillsButton = document.getElementById("button-skills");
var projectsButton = document.getElementById("button-projects");
var languagesButton = document.getElementById("button-languages");

var activePage = homePage;
var activeButton = homeButton;
activePage.style.display = "block";
activeButton.classList.add("active-button");

function showHomePage() {
    activePage.style.display = "none";
    activeButton.classList.remove("active-button");
    homePage.style.display = "block";
    activePage = homePage;
    homeButton.classList.add("active-button");
    activeButton = homeButton;
}

function showSkillsPage() {
    activePage.style.display = "none";
    activeButton.classList.remove("active-button");
    skillsPage.style.display = "block";
    activePage = skillsPage;
    skillsButton.classList.add("active-button");
    activeButton = skillsButton;
}

function showProjectsPage() {
    activePage.style.display = "none";
    activeButton.classList.remove("active-button");
    projectsPage.style.display = "block";
    activePage = projectsPage;
    projectsButton.classList.add("active-button");
    activeButton = projectsButton;
}

function showLanguagesPage() {
    activePage.style.display = "none";
    activeButton.classList.remove("active-button");
    languagesPage.style.display = "block";
    activePage = languagesPage;
    languagesButton.classList.add("active-button");
    activeButton = languagesButton;
}