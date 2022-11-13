

    if(typeof window !== undefined) {
      const btnOpen = document.querySelector("[data-nav-open]");
      const btnClose = document.querySelector("[data-nav-close]");
      const navMobile = document.querySelector("[data-nav-mobile]");

      btnOpen.addEventListener("click", () => {
          navMobile.classList.toggle("active");
      })

      btnClose.addEventListener("click", () => {
          navMobile.classList.remove("active");
      })
    }