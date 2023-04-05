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

function showProjects() {
    var projects = [
        {
            name: "Adaptive Thresholding",
            technology: "C#",
            link: "https://github.com/robertlek/adaptive-thresholding",
            type: "Private"
        },
        {
            name: "Atom Music Player",
            technology: "Java, XML",
            link: "https://github.com/robertlek/atom-music-player",
            type: "Private"
        },
        {
            name: "Bezier Curves Figure",
            technology: "MATLAB",
            link: "https://github.com/robertlek/bezier-curves-figure",
            type: "Private"
        },
        {
            name: "Console Auto Park",
            technology: "C++",
            link: "https://github.com/robertlek/console-auto-park",
            type: "Private"
        },
        {
            name: "Convex Hull",
            technology: "MATLAB",
            link: "https://github.com/robertlek/convex-hull",
            type: "Private"
        },
        {
            name: "Digit Recognition",
            technology: "Python",
            link: "https://github.com/robertlek/digit-recognition",
            type: "Private"
        },
        {
            name: "DVD Library",
            technology: "PHP, HTML, CSS, MySQL",
            link: "https://github.com/robertlek/dvd-library",
            type: "Private"
        },
        {
            name: "Identity Card Manager",
            technology: "C#, HTML, CSS, JavaScript, SQL Server",
            link: "https://github.com/robertlek/identity-card-manager",
            type: "Private"
        },
        {
            name: "Least Squares",
            technology: "MATLAB",
            link: "https://github.com/robertlek/least-squares",
            type: "Private"
        },
        {
            name: "My Pigeons",
            technology: "C#, SQL Server",
            link: "https://github.com/robertlek/my-pigeons",
            type: "Private"
        },
        {
            name: "Online Games Shop",
            technology: "Java, HTML, CSS, JavaScript, MySQL",
            link: "https://github.com/robertlek/online-games-shop",
            type: "Private"
        },
        {
            name: "Online Phone Store",
            technology: "PHP, HTML, CSS, MariaDB",
            link: "https://github.com/robertlek/online-phone-store",
            type: "Private"
        },
        {
            name: "Paleonto-Science",
            technology: "C#, HTML, CSS, JavaScript, SQL Server, XML",
            link: "https://github.com/robertlek/paleonto-science",
            type: "Private"
        },
        {
            name: "Panda Documentary",
            technology: "HTML, CSS",
            link: "https://github.com/robertlek/panda-documentary",
            type: "Private"
        },
        {
            name: "Robert Leca's Personal Website",
            technology: "HTML, CSS, JavaScript",
            link: "https://github.com/robertlek/robertlek.github.io",
            type: "Public"
        },
        {
            name: "US Graph",
            technology: "C++",
            link: "https://github.com/robertlek/us-graph",
            type: "Private"
        }
    ]

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