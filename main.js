      gsap.registerPlugin(ScrollTrigger);

      // --- Custom Cursor Logic ---
      const cursor = document.getElementById("custom-cursor");
      const follower = document.getElementById("cursor-follower");

      document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(follower, {
          x: e.clientX - 20,
          y: e.clientY - 20,
          duration: 0.15,
        });
      });

      // --- Magnetic Effect ---
      const magneticBtns = document.querySelectorAll(".magnetic-btn");
      magneticBtns.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.transform = "translate(0, 0)";
        });
      });

      // --- Hero Entrance ---
      const heroTl = gsap.timeline();
      heroTl
        .from("#navbar", {
          y: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        })
        .from(
          "[data-hero-anim]",
          {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.8",
        );

      // --- Scroll Reveals ---
      document.querySelectorAll("[data-scroll-reveal]").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      });

      // --- Navbar Scroll Effect ---
      window.addEventListener("scroll", () => {
        const nav = document.getElementById("navbar");
        if (window.scrollY > 50) {
          nav.classList.add("bg-dark/80", "backdrop-blur-xl", "py-6");
          nav.classList.remove("py-10");
        } else {
          nav.classList.remove("bg-dark/80", "backdrop-blur-xl", "py-6");
          nav.classList.add("py-10");
        }
      });

      // --- Mobile Menu Toggle ---
      const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
      const menuIcon = document.getElementById("menu-icon");
      const mobileLinks = document.querySelectorAll(".mobile-link");

      mobileMenuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("translate-x-0");
        if (isOpen) {
          mobileMenu.classList.remove("translate-x-0");
          mobileMenu.classList.add("translate-x-full");
          menuIcon.classList.remove("fa-xmark");
          menuIcon.classList.add("fa-bars-staggered");
          document.body.style.overflow = "auto";
        } else {
          mobileMenu.classList.remove("translate-x-full");
          mobileMenu.classList.add("translate-x-0");
          menuIcon.classList.remove("fa-bars-staggered");
          menuIcon.classList.add("fa-xmark");
          document.body.style.overflow = "hidden";
        }
      });

      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("translate-x-0");
          mobileMenu.classList.add("translate-x-full");
          menuIcon.classList.remove("fa-xmark");
          menuIcon.classList.add("fa-bars-staggered");
          document.body.style.overflow = "auto";
        });
      });

      // Interaction for cursor on links
      document.querySelectorAll("a, button").forEach((link) => {
        link.addEventListener("mouseenter", () => {
          follower.style.transform = "scale(2.5)";
          follower.style.backgroundColor = "rgba(255,255,255,0.1)";
        });
        link.addEventListener("mouseleave", () => {
          follower.style.transform = "scale(1)";
          follower.style.backgroundColor = "transparent";
        });
      });