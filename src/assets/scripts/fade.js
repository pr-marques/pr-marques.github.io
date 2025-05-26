    // fades-in elements with .fade-in classe when they scroll into view

    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver(
          (entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                      observer.unobserve(entry.target);
                  }
              });
          },
          {
              threshold: 0.1
          }
      );

      const divElements = document.querySelectorAll('.fade-in');
      divElements.forEach(div => observer.observe(div));
  });