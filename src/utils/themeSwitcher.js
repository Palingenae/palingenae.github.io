function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

function updateButton({ buttonElement, iconElement, isDarkTheme }) {
    const newCTA = isDarkTheme ? "Changer vers le thème clair" : "Changer vers le thème sombre"; // gotta change that for i18n

    const newIcon = isDarkTheme ? "iconoir-sun-light" : "iconoir-half-moon";

    buttonElement.setAttribute("title", newCTA);
    buttonElement.setAttribute("aria-label", newCTA);

    iconElement.setAttribute("class", newIcon);
}

function updateThemeOnHtmlElement({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const buttonToggler = document.querySelector("[data-theme-toggle]");
const iconTheme = document.querySelector("[data-theme-icon]");
const localStorageTheme = localStorage.getItem('theme');
const systemSettingDark = window.matchMedia("(prefer-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateButton({
    buttonElement: buttonToggler,
    iconElement: iconTheme,
    isDarkTheme: currentThemeSetting === systemSettingDark
});

updateThemeOnHtmlElement({
    theme: currentThemeSetting
});

buttonToggler.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);

    updateButton({
        iconElement: iconTheme,
        buttonElement: buttonToggler,
        isDarkTheme: newTheme === "dark"
    });

    updateThemeOnHtmlElement({
        theme: newTheme
    });

    currentThemeSetting = newTheme;
});