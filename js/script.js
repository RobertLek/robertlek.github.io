var activePage = "tab-home";
showPage(activePage);

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
    if (e.target.closest("button").matches("button")) {
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