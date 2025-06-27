document.addEventListener("DOMContentLoaded", function () {
    const langSelect = document.getElementById("languageSelect");
    const defaultLang = localStorage.getItem("lang") || "en";

    function setLanguage(lang) {
        fetch(`lang/${lang}.json`)
            .then((res) => res.json())
            .then((translations) => {
                document.querySelectorAll("[data-i18n]").forEach((el) => {
                    const keys = el.getAttribute("data-i18n").split(".");
                    let value = translations;
                    keys.forEach((k) => {
                        if (value && k in value) value = value[k];
                        else value = null;
                    });
                    if (value) {
                        el.textContent = value;
                    }
                });

                // If footer contains year injection
                const footer = document.querySelector("footer");
                if (footer && translations.footer && translations.footer.rights) {
                    const year = new Date().getFullYear();
                    footer.querySelector("p").innerText = translations.footer.rights.replace("{{year}}", year);
                }
            })
            .catch((err) => console.error("Translation load error:", err));
    }

    // Set default language on load
    langSelect.value = defaultLang;
    setLanguage(defaultLang);

    // Change language on select change
    langSelect.addEventListener("change", function () {
        const selectedLang = this.value;
        localStorage.setItem("lang", selectedLang);
        setLanguage(selectedLang);
    });
});
