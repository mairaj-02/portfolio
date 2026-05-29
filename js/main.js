/* =============================================================
   MAIN.JS — Portfolio Runtime Behaviour
   =============================================================
   This file is the entry point for any JavaScript the portfolio needs.
   The site is intentionally CSS-driven, so this stays lean.

   Add future features here, e.g.:
     - Active nav link highlighting on scroll
     - Intersection Observer animations
     - Contact form handling
   ============================================================= */

/*
 * Highlight the nav link that corresponds to the section currently
 * visible in the viewport, using IntersectionObserver.
 *
 * Usage: automatically runs on DOMContentLoaded.
 */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id], header');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                // Remove active state from all links
                navLinks.forEach((link) => link.classList.remove('active'));

                // Add active state to the link matching the visible section
                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );
                if (activeLink) activeLink.classList.add('active');
            });
        },
        {
            // Trigger when a section is at least 40% visible
            threshold: 0.4,
        }
    );

    sections.forEach((section) => observer.observe(section));
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
    initActiveNavHighlight();
});