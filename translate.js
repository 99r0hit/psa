const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products & Services",
      contact: "Contact"
    },
    products: {
      title: "Products",
      subtitle: "Fertilizers"
    }
  },
  hi: {
    nav: {
      home: "मुखपृष्ठ",
      about: "हमारे बारे में",
      products: "उत्पाद और सेवाएँ",
      contact: "संपर्क करें"
    },
    products: {
      title: "उत्पाद",
      subtitle: "उर्वरक"
    }
  },
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      products: "उत्पादने आणि सेवा",
      contact: "संपर्क"
    },
    products: {
      title: "उत्पादने",
      subtitle: "खते"
    }
  }
};

function translatePage(language) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keys = element.getAttribute("data-i18n").split(".");
    let translation = translations[language];
    keys.forEach((key) => {
      if (translation) translation = translation[key];
    });
    if (translation) {
      element.textContent = translation;
    }
  });
}

document.getElementById("languageSelect").addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  translatePage(selectedLang);
});

document.addEventListener("DOMContentLoaded", () => {
  translatePage("en"); // Default language
});
