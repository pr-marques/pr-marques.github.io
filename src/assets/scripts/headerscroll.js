    // header scroll background change

    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 5) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });