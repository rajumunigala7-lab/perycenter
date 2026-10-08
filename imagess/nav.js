
document.addEventListener("DOMContentLoaded", () => {

    const currentPage =
        window.location.pathname.split("/").pop().toLowerCase()
        || "index.html";

    const nav = document.querySelector(".main-nav");
    if (!nav) return;

    const links = nav.querySelectorAll("a[href]");
    const homeButton = nav.querySelector(".dropdown-toggle");

    links.forEach(link => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");

        const href = link.getAttribute("href");
        const linkPage = href.split("?")[0]
                             .split("#")[0]
                             .split("/").pop().toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    if (homeButton) {
        homeButton.classList.remove("active");

        if (["index.html", "home2.html"].includes(currentPage)) {
            homeButton.classList.add("active");
        }
    }

});
