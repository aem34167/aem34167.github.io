
      const toggleNavBtn = document.getElementById("toggle-nav-btn");

      toggleNavBtn.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("nav-open");
        toggleNavBtn.setAttribute("aria-expanded", String(isOpen));
        toggleNavBtn.setAttribute(
          "aria-label",
          isOpen ? "Close navigation" : "Open navigation"
        );
        toggleNavBtn.textContent = isOpen ? "×" : "☰";
      });
    