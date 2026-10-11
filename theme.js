const savedTheme = localStorage.getItem("theme");
document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#theme-toggle");
    const themeToggleIcon = themeToggle.querySelector(".theme-toggle-icon");

    const updateThemeToggle = () => {
        const isDark = document.documentElement.dataset.theme === "dark";
        themeToggle.setAttribute("aria-pressed", String(isDark));
        themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
        themeToggleIcon.textContent = isDark ? "☀" : "☾";
    };

    updateThemeToggle();
    themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.dataset.theme !== "dark";
        document.documentElement.dataset.theme = isDark ? "dark" : "light";
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeToggle();
    });
});
