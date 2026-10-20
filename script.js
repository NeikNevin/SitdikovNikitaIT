
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const navigationLinks = navigation.querySelectorAll("a");

function closeMenu() {
    navigation.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Открыть меню");
    document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Закрыть меню" : "Открыть меню"
    );

    document.body.classList.toggle("menu-open", isOpen);
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
        closeMenu();
    }
});



const statballMore = document.getElementById("statballMore");
const statballGallery = document.getElementById("statballGallery");

if (statballMore && statballGallery) {
    statballMore.addEventListener("click", () => {
        const isExpanded =
            statballMore.getAttribute("aria-expanded") === "true";

        statballMore.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        statballGallery.hidden = isExpanded;

        const buttonText =
            statballMore.querySelector(".more-button-text");

        buttonText.textContent = isExpanded
            ? "Показать больше"
            : "Скрыть фотографии";
    });
}
