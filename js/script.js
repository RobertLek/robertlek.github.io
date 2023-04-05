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

function showSkills(skills) {
    skills.sort(function (a, b) {
        return b.endorcements - a.endorcements;
    });
    var html = skills.map(function (skill) {
        return `<li>${skill.name} - <span class="endorcements">${skill.endorcements}</span></li>`;
    });

    var container = document.querySelector("#tab-skills ul");
    container.innerHTML = html.join("");
}

function showProjects(projects) {
    var html = projects.map(function (project) {
        var repositoryTypeColor = "#d60000";
        if (project.type == "Public") {
            repositoryTypeColor = "#18c63e";
        }
        return `
            <tr>
                <td><a href="${project.link}" target="_blank">${project.name}</a></td>
                <td><span class="technology">${project.technology}</span></td>
                <td><span style="color: ${repositoryTypeColor}; font-weight: bold">${project.type}</span></td>
            </tr>
        `;
    });

    var container = document.querySelector("#tab-projects table tbody");
    container.innerHTML = html.join("");
}