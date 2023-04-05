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
            link: "https://github.com/robertlek/adaptive-thresholding"
        },
        {
            name: "Atom Music Player",
            technology: "Java, XML",
            link: "https://github.com/robertlek/atom-music-player"
        },
        {
            name: "Bezier Curves Figure",
            technology: "MATLAB",
            link: "https://github.com/robertlek/bezier-curves-figure"
        },
        {
            name: "Console Auto Park",
            technology: "C++",
            link: "https://github.com/robertlek/console-auto-park"
        },
        {
            name: "Convex Hull",
            technology: "MATLAB",
            link: "https://github.com/robertlek/convex-hull"
        },
        {
            name: "Digit Recognition",
            technology: "Python",
            link: "https://github.com/robertlek/digit-recognition"
        },
        {
            name: "DVD Library",
            technology: "PHP, HTML, CSS, MySQL",
            link: "https://github.com/robertlek/dvd-library"
        },
        {
            name: "Identity Card Manager",
            technology: "C#, HTML, CSS, JavaScript, SQL Server",
            link: "https://github.com/robertlek/identity-card-manager"
        },
        {
            name: "Least Squares",
            technology: "MATLAB",
            link: "https://github.com/robertlek/least-squares"
        },
        {
            name: "Paleonto-Science",
            technology: "C#, HTML, CSS, JavaScript, SQL Server, XML",
            link: "https://github.com/robertlek/paleonto-science"
        },
        {
            name: "My Pigeons",
            technology: "C#, SQL Server",
            link: "https://github.com/robertlek/my-pigeons"
        },
        {
            name: "Online Games Shop",
            technology: "Java, HTML, CSS, JavaScript, MySQL",
            link: "https://github.com/robertlek/online-games-shop"
        },
        {
            name: "Online Phone Store",
            technology: "PHP, HTML, CSS, MariaDB",
            link: "https://github.com/robertlek/online-phone-store"
        },
        {
            name: "Panda Documentary",
            technology: "HTML, CSS",
            link: "https://github.com/robertlek/panda-documentary"
        },
        {
            name: "US Graph",
            technology: "C++",
            link: "https://github.com/robertlek/us-graph"
        }
    ]

    var html = projects.map(function (project) {
        return `<li><a href="${project.link}" target="_blank">${project.name}</a> - <span class="technology">${project.technology}</span></li>`
    });

    var container = document.querySelector("#tab-projects ul");
    container.innerHTML = html.join("");
}