var activePage = window.location.hash.split("#")[1];
let menuExpanded = false;
switch (activePage) {
    case "home":
        break;
    case "skills":
        break;
    case "projects":
        break;
    case "languages":
        break;
    default:
        activePage = "home";
        break;
}
showPage(activePage);

window.addEventListener("resize", () => {
    if (window.innerWidth > 480) {
        document.getElementById("top-menu-bar").style.display = "block";
        menuExpanded = true;
    } else {
        document.getElementById("top-menu-bar").style.display = "none";
        menuExpanded = false;
    }
});

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
    if (e.target.closest("button")) {
        var id = e.target.closest("button").dataset.tab;
        displayPage(id);
    }
});

document.getElementById("expand-button").addEventListener("click", () => {
    if (menuExpanded) {
        document.getElementById("top-menu-bar").style.display = "none";
        menuExpanded = false;
    } else {
        document.getElementById("top-menu-bar").style.display = "block";
        menuExpanded = true;
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
        var cls = skill.endorcements > 3 ? "important" : "";
        return `<li class="${cls}">
                    ${skill.name} ${
            skill.endorcements < 2
                ? ""
                : `- <span class="endorcements">${skill.endorcements}</span>
                </li>`
        }`;
    });

    var container = document.querySelector("#skills ul");
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

    var container = document.querySelector("#projects table tbody");
    container.innerHTML = html.join("");
}
