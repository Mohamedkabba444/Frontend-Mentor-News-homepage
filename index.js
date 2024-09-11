const primaryNav = document.querySelector("#primary_nav");
const navToggle = document.querySelector('[aria-expanded]');

navToggle.addEventListener("click", () => {
    const currentState = navToggle.getAttribute('aria-expanded');
    // const visibility = primaryNav.getAttribute("data-visible");

    if (currentState === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


