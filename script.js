/* =========================
   MOBILE MENU
========================= */

const menu = document.getElementById("menu");

const navLinks = document.getElementById("navLinks");


menu.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

    });

  });


/* =========================
   SCROLL REVEAL
========================= */

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });
