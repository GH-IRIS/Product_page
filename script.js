// Chronos Apex - Patek Philippe Ref. 5304/301R-001 Controller
 
window.addEventListener("DOMContentLoaded", () => {
    setupSpotlight();
    setupBentoGlow();
    setupInquiryModal();
    setupScrollReveal();
});
 
// 1. Global Spotlight Mouse coordinate tracker
function setupSpotlight() {
    const spotlight = document.getElementById("global-spotlight");
    if (!spotlight) return;
    
    document.addEventListener("mousemove", (e) => {
        const xPct = (e.clientX / window.innerWidth) * 100;
        const yPct = (e.clientY / window.innerHeight) * 100;
        
        spotlight.style.setProperty("--mouse-x", `${xPct}%`);
        spotlight.style.setProperty("--mouse-y", `${yPct}%`);
    });
}
 
// 2. Bento Card Spotlights Cursor Hover Light
function setupBentoGlow() {
    const cards = document.querySelectorAll(".bento-card");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}
 
// 3. Inquiry Allocation Modal Controls
function setupInquiryModal() {
    const modal = document.getElementById("inquire-modal");
    const openTriggers = document.querySelectorAll(".cta-inquire-trigger");
    const closeBtn = document.getElementById("close-inquire-modal");
    const closeSuccessBtn = document.getElementById("close-success-btn");
 
    function openModal() {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
 
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
        
        setTimeout(() => {
            document.getElementById("inquiry-form").classList.remove("hidden");
            document.getElementById("inquiry-success").classList.add("hidden");
            document.getElementById("inquiry-form").reset();
        }, 300);
    }
 
    openTriggers.forEach(btn => {
        if (btn) btn.addEventListener("click", openModal);
    });
 
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", closeModal);
 
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
 
    // Form Validation and Ticket Population
    const form = document.getElementById("inquiry-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Reset error messages
            document.querySelectorAll(".error-msg").forEach(span => span.textContent = "");
            
            const name = document.getElementById("client-name").value.trim();
            const email = document.getElementById("client-email").value.trim();
            let isValid = true;
            
            if (name.length < 3) {
                document.getElementById("name-error").textContent = "Full name must be at least 3 characters.";
                isValid = false;
            }
            
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                document.getElementById("email-error").textContent = "Please enter a valid email address.";
                isValid = false;
            }
            
            if (isValid) {
                // Populate Success allocation ticket
                document.getElementById("ticket-client-name").textContent = name;
                
                const randomRef = Math.floor(1000 + Math.random() * 9000);
                document.getElementById("ticket-reference-id").textContent = `REF-PATEK-${randomRef}-G`;
                
                form.classList.add("hidden");
                document.getElementById("inquiry-success").classList.remove("hidden");
            }
        });
    }
}
 
// 4. Scroll Reveal Intersection Observer
function setupScrollReveal() {
    const reveals = document.querySelectorAll(".scroll-reveal");
    
    const observerOptions = {
        root: null,
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    reveals.forEach(el => {
        observer.observe(el);
    });
}
