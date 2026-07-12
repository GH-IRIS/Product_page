// Chronos Apex Luxury Watch Showcase Controller
 
// 1. Curated Watch Database with Morphed Themes (AP Royal Oak Jumbo perspectives)
const watchDatabase = [
    {
        brand: "AUDEMARS PIGUET",
        title: "Royal Oak \"Jumbo\" Extra-Thin",
        desc: "Celebrating a legacy of design. The Royal Oak 'Jumbo' Extra-Thin features the legendary 39mm stainless steel case, an ultra-flat profile, and the iconic octagonal bezel.",
        image: "assets/royal_oak_front.jpg",
        imageClass: "",
        stats: {
            movement: "Caliber 7121 (Self-winding)",
            reserve: "60 Hours",
            water: "50 Meters"
        },
        specs: {
            ref: "16202ST.OO.1240ST.02",
            material: "Stainless Steel Case",
            dimensions: "39 mm Diameter, 8.1 mm Height",
            caliber: "Caliber 7121 (Self-winding)",
            complications: "Hours, Minutes, Date",
            bracelet: "Integrated Stainless Steel Bracelet"
        },
        theme: {
            accent: "#b89047", /* Classic gold */
            glow: "rgba(184, 144, 71, 0.15)",
            aurora1: "#0b1528",
            aurora2: "#1c1f24",
            aurora3: "#060a12"
        }
    },
    {
        brand: "AUDEMARS PIGUET",
        title: "Satin-Brushed Steel Craftsmanship",
        desc: "Every surface of the Royal Oak is meticulously hand-finished, featuring alternating satin-brushed and polished bevels that capture light dynamically.",
        image: "assets/royal_oak_angle.jpg",
        imageClass: "",
        stats: {
            movement: "Alternating Finishes",
            reserve: "Octagonal Bezel",
            water: "Hexagonal Screws"
        },
        specs: {
            ref: "16202ST.OO.1240ST.02",
            material: "Hand-finished Stainless Steel",
            dimensions: "White Gold Bezel Screws",
            caliber: "Sapphire Crystal with Anti-glare",
            complications: "Petite Tapisserie Dial pattern",
            bracelet: "Integrated clasp with AP folding design"
        },
        theme: {
            accent: "#d4af37", /* Warm gold accents */
            glow: "rgba(212, 175, 55, 0.2)",
            aurora1: "#1d1a10",
            aurora2: "#1c1f24",
            aurora3: "#06070a"
        }
    },
    {
        brand: "AUDEMARS PIGUET",
        title: "Caliber 7121 Mechanical Heart",
        desc: "Designed to fit the extra-thin 8.1mm profile, Caliber 7121 features circular-grained bridges, polished bevels, and an openworked 22-carat gold rotor.",
        image: "assets/royal_oak_movement.jpg",
        imageClass: "",
        stats: {
            movement: "Caliber 7121, 268 parts",
            reserve: "60 Hours Reserve",
            water: "28,800 vibrations/h"
        },
        specs: {
            ref: "Caliber 7121 (In-house)",
            material: "22-Carat Gold Oscillating Rotor",
            dimensions: "29.6 mm (12¾ lignes) Diameter, 3.2 mm Thickness",
            caliber: "Self-winding mechanical",
            complications: "Patented Extra-Thin Date Mechanism",
            bracelet: "Circular-graining, Côtes de Genève finishing"
        },
        theme: {
            accent: "#dfb15b", /* Golden rotor theme */
            glow: "rgba(223, 177, 91, 0.2)",
            aurora1: "#251d0d",
            aurora2: "#1a1204",
            aurora3: "#06060c"
        }
    },
    {
        brand: "AUDEMARS PIGUET",
        title: "Ergonomics On The Wrist",
        desc: "With a case thickness of only 8.1mm, the Royal Oak Jumbo fits comfortably and elegantly under any sleeve, offering an unmatched integrated bracelet profile.",
        image: "assets/royal_oak_wrist.jpg",
        imageClass: "",
        stats: {
            movement: "Caliber 7121, 28.8k vph",
            reserve: "Integrated Design",
            water: "Extra-Thin Profile"
        },
        specs: {
            ref: "16202ST.OO.1240ST.02",
            material: "Integrated Link Bracelet",
            dimensions: "Tapering width links",
            caliber: "Extra-Thin Profile case",
            complications: "Ergonomic wrist alignment",
            bracelet: "Double-card folder release clasp"
        },
        theme: {
            accent: "#8b9ea7", /* Metallic wrist accent */
            glow: "rgba(139, 158, 167, 0.2)",
            aurora1: "#0b1528",
            aurora2: "#1c1f24",
            aurora3: "#060a12"
        }
    }
];
 
let activeWatchIndex = 0;
 
// 2. Controller Initialization
window.addEventListener("DOMContentLoaded", () => {
    setupSpotlight();
    setupBorderGlowCards();
    setupWatchSelector();
    setupZoomPan();
    setupComplicationSwitcher();
    setupInquiryModal();
    setupScrollReveal();
});
 
// 3. Aceternity-style Spotlight Effect (Mouse coordinates tracking)
function setupSpotlight() {
    const spotlight = document.getElementById("mouse-spotlight");
    if (!spotlight) return;
    
    document.addEventListener("mousemove", (e) => {
        const xPct = (e.clientX / window.innerWidth) * 100;
        const yPct = (e.clientY / window.innerHeight) * 100;
        
        spotlight.style.setProperty("--mouse-x", `${xPct}%`);
        spotlight.style.setProperty("--mouse-y", `${yPct}%`);
    });
}
 
// 4. Magic UI Border Glow Cards Effect
function setupBorderGlowCards() {
    const cards = document.querySelectorAll(".border-glow-card");
    
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
 
// 5. Watch Selector Morph / Theme Switcher
function setupWatchSelector() {
    const thumbs = document.querySelectorAll("#thumbnail-container .thumbnail-item");
    
    thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {
            const index = parseInt(thumb.getAttribute("data-index"));
            if (index === activeWatchIndex) return;
            
            thumbs.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            
            morphWatchTheme(index);
        });
    });
 
    // Make gallery cards click to switch as well
    const collectionCards = document.querySelectorAll(".collection-card");
    collectionCards.forEach(card => {
        card.addEventListener("click", () => {
            const index = parseInt(card.getAttribute("data-index"));
            
            // Switch thumbnail active state
            thumbs.forEach(t => t.classList.remove("active"));
            if (thumbs[index]) {
                thumbs[index].classList.add("active");
            }
            
            morphWatchTheme(index);
            
            // Smooth scroll back to hero display
            document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
        });
    });
}
 
// Detail zoom panning effect (Patek Philippe Magnifier style)
function setupZoomPan() {
    const container = document.getElementById("zoom-container");
    const img = document.getElementById("main-watch-img");
    if (!container || !img) return;
    
    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPct = (x / rect.width) * 100;
        const yPct = (y / rect.height) * 100;
        
        img.style.transformOrigin = `${xPct}% ${yPct}%`;
        img.style.transform = "scale(1.8)";
    });
    
    container.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
    });
}
 
// Morph Watch Theme variables and contents
function morphWatchTheme(index) {
    activeWatchIndex = index;
    const watch = watchDatabase[index];
    
    // Elements to update
    const titleLabel = document.getElementById("patek-watch-title");
    const descLabel = document.getElementById("patek-watch-desc");
    const watchImg = document.getElementById("main-watch-img");
    const statMov = document.getElementById("stat-movement");
    const statRes = document.getElementById("stat-reserve");
    const statWat = document.getElementById("stat-water");
    
    const specsImg = document.getElementById("specs-image-swap");
    const specsRef = document.getElementById("spec-ref-no");
    const specsMat = document.getElementById("spec-case-material");
    const specsDim = document.getElementById("spec-dimensions");
    const specsCal = document.getElementById("spec-caliber");
    const specsComp = document.getElementById("spec-complications");
    const specsBrac = document.getElementById("spec-bracelet");
    const specsCaliberStat = document.getElementById("patek-caliber-stat");
 
    // Fade out
    titleLabel.style.opacity = 0;
    descLabel.style.opacity = 0;
    watchImg.style.opacity = 0;
    
    setTimeout(() => {
        // Swap CSS root variables for shifting gradients
        const root = document.documentElement;
        root.style.setProperty("--accent-color", watch.theme.accent);
        root.style.setProperty("--accent-glow", watch.theme.glow);
        root.style.setProperty("--aurora-1", watch.theme.aurora1);
        root.style.setProperty("--aurora-2", watch.theme.aurora2);
        root.style.setProperty("--aurora-3", watch.theme.aurora3);
        
        // Update texts
        titleLabel.textContent = watch.title;
        descLabel.textContent = watch.desc;
        
        // Update stats
        statMov.textContent = watch.stats.movement;
        statRes.textContent = watch.stats.reserve;
        statWat.textContent = watch.stats.water;
        
        // Update image
        watchImg.src = watch.image;
        watchImg.className = "main-watch-image " + watch.imageClass;
        
        // Update technical specs table
        specsImg.src = watch.image;
        specsImg.className = "specs-detail-image " + watch.imageClass;
        specsRef.textContent = watch.specs.ref;
        specsMat.textContent = watch.specs.material;
        specsDim.textContent = watch.specs.dimensions;
        specsCal.textContent = watch.specs.caliber;
        specsComp.textContent = watch.specs.complications;
        specsBrac.textContent = watch.specs.bracelet;
        
        if (specsCaliberStat) {
            specsCaliberStat.textContent = watch.specs.caliber;
        }
 
        // Fade in
        setTimeout(() => {
            titleLabel.style.opacity = 1;
            descLabel.style.opacity = 1;
            watchImg.style.opacity = 1;
        }, 50);
        
    }, 400);
}
 
// 7. Complication Details Switcher
function setupComplicationSwitcher() {
    const boxes = document.querySelectorAll(".comp-box");
    const balance = document.querySelector(".balance-wheel");
    const gears = document.querySelectorAll(".gear");
 
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            boxes.forEach(b => b.classList.remove("active"));
            box.classList.add("active");
            
            const comp = box.getAttribute("data-comp");
            
            // Adjust SVG gear animation speeds depending on which complication is selected
            if (comp === "flyback") { // Petite Tapisserie
                balance.style.animationDuration = "0.8s";
                gears[0].style.animationDuration = "6s";
                gears[1].style.animationDuration = "4s";
            } else if (comp === "dualtime") { // Caliber 7121
                balance.style.animationDuration = "2s";
                gears[0].style.animationDuration = "20s";
                gears[1].style.animationDuration = "15s";
            } else { // Integrated Bracelet
                balance.style.animationDuration = "0.2s";
                gears[0].style.animationDuration = "2s";
                gears[1].style.animationDuration = "1.5s";
            }
        });
    });
}
 
// 8. Inquiry Modal Controls
function setupInquiryModal() {
    const modal = document.getElementById("inquire-modal");
    const openTriggers = [
        document.getElementById("nav-inquire-trigger"),
        document.getElementById("hero-inquire-btn"),
        document.getElementById("cta-inquire-trigger")
    ];
    const closeBtn = document.getElementById("close-inquire-modal");
    const closeSuccessBtn = document.getElementById("close-success-btn");
 
    function openModal() {
        modal.classList.add("active");
        
        // Auto-select watch currently on hero
        const selectEl = document.getElementById("client-watch");
        if (selectEl) {
            selectEl.selectedIndex = activeWatchIndex;
        }
        
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
 
    // Form Submission & Validation
    const form = document.getElementById("inquiry-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
 
            // Clear errors
            document.querySelectorAll(".error-msg").forEach(span => span.textContent = "");
 
            const name = document.getElementById("client-name").value.trim();
            const email = document.getElementById("client-email").value.trim();
            const selectEl = document.getElementById("client-watch");
            const watchModel = selectEl.options[selectEl.selectedIndex].text;
 
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
                // Populate Success Ticket details
                document.getElementById("ticket-client-name").textContent = name;
                document.getElementById("ticket-watch-model").textContent = watchModel;
                
                const randomRef = Math.floor(10000 + Math.random() * 90000);
                document.getElementById("ticket-reference-id").textContent = `REF-APEX-${randomRef}-G`;
 
                // Swap views
                form.classList.add("hidden");
                document.getElementById("inquiry-success").classList.remove("hidden");
            }
        });
    }
}
 
// 9. Scroll Reveal Animations (IntersectionObserver)
function setupScrollReveal() {
    const reveals = document.querySelectorAll(".scroll-reveal");
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
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
