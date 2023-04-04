var activePage = "tab-home";
showPage(activePage);

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
    if (e.target.closest("button")) {
        var id = e.target.closest("button").dataset.tab;
        displayPage(id);
    }
});

function showPage(id) {
    var selectedPage = document.getElementById(id);
    var selectedButton = document.getElementById(id + "-button");
    selectedPage.style.display = "block";
    selectedButton.classList.add("active-button");
}

function hidePage(id) {
    var selectedPage = document.getElementById(id);
    var selectedButton = document.getElementById(id + "-button");
    selectedPage.style.display = "none";
    selectedButton.classList.remove("active-button");
}

function hideAllPages() {
    var pages = document.querySelectorAll("#main-content .display-content");
    pages.forEach(function (page) {
        hidePage(page.id);
    });
}

function displayPage(id) {
    hideAllPages();
    showPage(id);
}

function showSkills() {
    var skills = [
        {
            name: "HTML",
            endorcements: 5,
        },
        {
            name: "CSS",
            endorcements: 10
        },
        {
            name: "JS",
            endorcements: 15
        }
    ]

    var html = skills.map(function (skill) {
        return `<li>${skill.name} - <span class="endorcements">${skill.endorcements}</span></li>`;
    });

    var container = document.querySelector("#tab-skills ul");
    container.innerHTML = html.join("");
}