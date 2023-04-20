document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(
    ".card ul li a:not(.contact-link)"
  );

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSectionId = this.getAttribute("href");
      window.location.href = "content.html" + targetSectionId;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var contactLink = document.getElementById("contact-link");
  var emailAddress = "info" + "@" + "stschoelzel.de";
  contactLink.href = "mailto:" + emailAddress;

  contactLink.addEventListener("click", function (event) {
    if (!emailAddress) {
      event.preventDefault();
    }
  });
});

// content grid ändern

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(
    ".content-menu-about, .content-menu-vita, .content-menu-socials, .content-menu-contact"
  );
  const content = document.querySelector(".content");

  function adjustContentGrid() {
    content.style.gridTemplateRows = "0.6fr 1.4fr";
  }

  function resetContentGrid() {
    content.style.gridTemplateRows = "1fr 1fr";
  }

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", adjustContentGrid);
    item.addEventListener("mouseleave", resetContentGrid);
  });
});

// content hintergrundfarbe menü anpassen

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(
    ".content-menu-about, .content-menu-vita, .content-menu-socials, .content-menu-contact"
  );
  const content = document.querySelector(".content");
  const contentContent = document.querySelector(".content-content");

  function adjustContentGrid() {
    content.style.gridTemplateRows = "0.6fr 1.4fr";
  }

  function resetContentGrid() {
    content.style.gridTemplateRows = "1fr 1fr";
  }

  function changeContentBackground() {
    contentContent.style.backgroundColor = "var(--color2)";
  }

  function resetContentBackground() {
    contentContent.style.backgroundColor = "";
  }

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      adjustContentGrid();
      changeContentBackground();
    });
    item.addEventListener("mouseleave", () => {
      resetContentGrid();
      resetContentBackground();
    });
  });
// })

// content auf click

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(
    ".content-menu-about, .content-menu-vita, .content-menu-socials, .content-menu-contact"
  );
  const contentContent = document.querySelector(".content-content");

  function updateContentContent(url) {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        contentContent.innerHTML = html;
      })
      .catch((error) => {
        console.warn("Fehler beim Laden der HTML-Datei:", error);
      });
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      switch (item.className) {
        case "content-menu-about":
          updateContentContent("about.html");
          break;
        case "content-menu-vita":
          updateContentContent("vita.html");
          break;
        case "content-menu-socials":
          updateContentContent("socials.html");
          break;
        case "content-menu-contact":
          updateContentContent("contact.html");
          break;
      }
    });
  });
});
