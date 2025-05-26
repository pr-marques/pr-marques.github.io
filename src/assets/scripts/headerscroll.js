    // header scroll tucks in

    document.addEventListener("DOMContentLoaded", () => {
        const topNav = document.querySelector("#main-header");
        let lastScrollY = window.scrollY;
        const threshold = 100;
        let ticking = false;
    
        window.addEventListener("scroll", () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
    
                    if (Math.abs(currentScrollY - lastScrollY) > threshold) {
                        if (currentScrollY > lastScrollY) {
                            topNav.classList.add("hidden");
                        } else {
                            topNav.classList.remove("hidden");
                        }
                        lastScrollY = currentScrollY;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    });



    // header scroll background change

    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 5) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });