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

function translateToEnglish() {
    document.getElementById("text-function-name").innerText = "Software Developer";
    document.getElementById("text-contact-me-label").innerText = "Contact me:";
    document.getElementById("text-user-email-label").innerText = "Your email address:";
    document.getElementById("text-user-name-label").innerText = "Your full name:";
    document.getElementById("text-contact-me-button").innerText = "Contact me!";
    document.getElementById("text-personal-details-label").innerText = "Personal details:";
    document.getElementById("text-current-age").innerText = "Current age:";
    document.getElementById("text-location").innerText = "Location:";
    document.getElementById("text-phone-number").innerText = "Phone number:";
    document.getElementById("text-email-address").innerText = "Email address:";
    document.getElementById("text-home-button").innerText = "Home";
    document.getElementById("text-skills-button").innerText = "Skills";
    document.getElementById("text-projects-button").innerText = "Projects";
    document.getElementById("text-languages-button").innerText = "Languages";
}

function translateToRomanian() {
    document.getElementById("text-function-name").innerText = "Dezvoltator Software";
    document.getElementById("text-contact-me-label").innerText = "Contactează-mă:";
    document.getElementById("text-user-email-label").innerText = "Adresa ta de email:";
    document.getElementById("text-user-name-label").innerText = "Numele tău întreg:";
    document.getElementById("text-contact-me-button").innerText = "Contactează-mă!";
    document.getElementById("text-personal-details-label").innerText = "Detalii personale:";
    document.getElementById("text-current-age").innerText = "Vârsta curentă:";
    document.getElementById("text-location").innerText = "Locație:";
    document.getElementById("text-phone-number").innerText = "Număr de telefon:";
    document.getElementById("text-email-address").innerText = "Adresă de email:";
    document.getElementById("text-home-button").innerText = "Acasă";
    document.getElementById("text-skills-button").innerText = "Skill-uri";
    document.getElementById("text-projects-button").innerText = "Proiecte";
    document.getElementById("text-languages-button").innerText = "Limbi";
}