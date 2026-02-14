// ===============================
// 1️⃣ Mobile Menu Toggle
// ===============================
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");

    // Prevent background scroll when menu open
    document.body.classList.toggle("no-scroll");
  });
}

// ===============================
// 2️⃣ Sticky Navbar on Scroll
// ===============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    navbar.classList.toggle("sticky", window.scrollY > 50);
  }
});

// ===============================
// 3️⃣ Smooth Scrolling + Auto Close Menu
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // Close menu after click (mobile)
    if (navLinks && menuBtn) {
      navLinks.classList.remove("active");
      menuBtn.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }
  });
});

// ===============================
// 4️⃣ Scroll Reveal Animation
// ===============================
const revealItems = document.querySelectorAll(
  ".hero-content, .hero-image, .about-content, .about-image, .service-card, .why-box, .testimonial-card"
);

function revealOnScroll() {
  const triggerBottom = window.innerHeight - 100;

  revealItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// 5️⃣ Button Click Effect
// ===============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");

    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 150);
  });
});

// ===============================
// 6️⃣ Contact Form Demo (Optional)
// ===============================
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Fake loading feel
    const submitBtn = form.querySelector("button");
    if (submitBtn) {
      submitBtn.innerText = "Sending...";
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      alert("Message Sent Successfully 🚀");
      form.reset();

      if (submitBtn) {
        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;
      }
    }, 1000);
  });
}

// ===============================
// 7️⃣ Close Menu on Outside Click (Pro UX)
// ===============================
document.addEventListener("click", (e) => {
  if (
    navLinks &&
    menuBtn &&
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    navLinks.classList.remove("active");
    menuBtn.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
});
