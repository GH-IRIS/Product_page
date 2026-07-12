// Chronos Apex - Luxury Watch Collection Showcase
 
// 1. Curated Local Watch Database with unique themes
const watchDatabase = {
    patek: {
        brand: "PATEK PHILIPPE",
        category: "GRAND COMPLICATIONS",
        ref: "Ref. 5308G-001",
        title: "Perpetual Split-Seconds Chronograph",
        desc: "A mechanical masterpiece. The Ref. 5308G-001 combines a self-winding minute repeater, a split-seconds chronograph, and an instantaneous perpetual calendar cased in 18K white gold.",
        image: "assets/Ref_5308g.png",
        giantText: "5308G",
        theme: {
            accent: "#c5a880", /* Warm Bronze Gold */
            glow: "rgba(197, 168, 128, 0.15)",
            background: "#08080a"
        },
        metrics: [
            { num: "799", label: "Individual Parts" },
            { num: "48h", label: "Power Reserve" },
            { num: "63", label: "Jewels" }
        ],
        details: {
            designTag: "THE CALIBER",
            designTitle: "R CH 27 PS QI Movement",
            designDesc: "This self-winding movement is a technical tour de force, integrating a repeater, monopusher chronograph, split-seconds, and perpetual calendar wheels.",
            designImage: "assets/desktop-edifice-night-time.avif",
            
            caliberTag: "CRAFTSMANSHIP",
            caliberTitle: "Instantaneous Perpetual Calendar",
            caliberDesc: "All calendar displays jump simultaneously and instantaneously at midnight in a fraction of a second, driven by a patented system of levers.",
            caliberImage: "assets/desktop-edifice-windflow.avif"
        },
        specs: [
            { lbl: "Reference Number", val: "5308G-001" },
            { lbl: "Case Material", val: "18K White Gold, interchangeable sapphire back" },
            { lbl: "Dimensions", val: "42 mm Diameter, 17.7 mm Thickness" },
            { lbl: "Caliber", val: "Caliber R CH 27 PS QI (Self-winding)" },
            { lbl: "Complications", val: "Minute Repeater, Split-seconds Chronograph, Instantaneous Perpetual Calendar" },
            { lbl: "Strap", val: "Hand-stitched alligator leather with fold-over clasp" }
        ]
    },
    seiko: {
        brand: "SEIKO ASTRON",
        category: "GPS SOLAR",
        ref: "Ref. HAB004J1",
        title: "Titanium Astron 145th Anniversary",
        desc: "High-tech celestial precision. Driven by Seiko's GPS Solar caliber, it connects to the GPS network to adjust automatically to your local time zone anywhere on Earth.",
        image: "assets/HAB004J1.webp",
        giantText: "ASTRON",
        theme: {
            accent: "#4a89ff", /* Cobalt Blue */
            glow: "rgba(74, 137, 255, 0.15)",
            background: "#05070d"
        },
        metrics: [
            { num: "GPS", label: "Time Adjustment" },
            { num: "Solar", label: "Infinite Charging" },
            { num: "Ti", label: "Super-Hard Titanium" }
        ],
        details: {
            designTag: "THE HOUSING",
            designTitle: "145th Anniversary Edition",
            designDesc: "Cased in super-hard titanium with a blue theme faceted bezel, this limited edition Astron pays tribute to 145 years of Seiko engineering.",
            designImage: "assets/HAB006J1.webp",
            
            caliberTag: "THE CALIBER",
            caliberTitle: "GPS Solar 5X53 Caliber",
            caliberDesc: "Receives GPS signals to adjust time, DST, and calendar with high precision, drawing power from any light source.",
            caliberImage: "assets/HAB004J1.webp"
        },
        specs: [
            { lbl: "Reference Number", val: "HAB004J1" },
            { lbl: "Case Material", val: "Titanium case with super-hard coating" },
            { lbl: "Glass Casing", val: "Dual-curved sapphire crystal with super-clear coating" },
            { lbl: "Dimensions", val: "42.7 mm Diameter, 12.2 mm Thickness" },
            { lbl: "Caliber", val: "Caliber 5X53 GPS Solar Dual-Time" },
            { lbl: "Accuracy", val: "±15 seconds per month (without GPS signal)" },
            { lbl: "Water Resistance", val: "10 bar (100 meters)" }
        ]
    },
    casio: {
        brand: "CASIO ROYALE",
        category: "DIGITAL CHRONO",
        ref: "AE-1200WHD-1AV",
        title: "World Time Digital Legend",
        desc: "The retro-modern digital classic. Featuring a world map time display, 10-year battery life, multi-alarm system, and a robust steel-link bracelet.",
        image: "assets/AE-1200WHD-1AV.avif",
        giantText: "AE-1200",
        theme: {
            accent: "#00e676", /* Digital Green */
            glow: "rgba(0, 230, 118, 0.15)",
            background: "#060907"
        },
        metrics: [
            { num: "10y", label: "Battery Life" },
            { num: "100m", label: "Water Resistant" },
            { num: "LC", label: "Analog Dial Simulation" }
        ],
        details: {
            designTag: "THE DESIGN",
            designTitle: "World Time Map Dashboard",
            designDesc: "The legendary digital layout features a micro world map highlighting active time zones and a circular LCD displaying simulated analog hands.",
            designImage: "assets/AE-1200WHD-1AV.avif",
            
            caliberTag: "FUNCTIONS",
            caliberTitle: "Multifunctional Module 3299",
            caliberDesc: "Equipped with 1/100-second chronograph, world time in 48 cities, 5 daily alarms, and LED backlight with afterglow.",
            caliberImage: "assets/AE-1200WHD-1AV.avif"
        },
        specs: [
            { lbl: "Reference Number", val: "AE-1200WHD-1AV" },
            { lbl: "Case / Bezel", val: "Resin bezel cased with stainless steel bracelet" },
            { lbl: "Battery Life", val: "Approx. 10 years on CR2025" },
            { lbl: "Dimensions", val: "45.0 x 42.1 x 12.5 mm" },
            { lbl: "Module Number", val: "3299 Quartz Module" },
            { lbl: "Timekeeping", val: "World Time (48 cities), 4 Home City presets" },
            { lbl: "Water Resistance", val: "100 meters (10 bar)" }
        ]
    }
};
 
let currentModelKey = "patek";
 
// 2. Controller Initialization
window.addEventListener("DOMContentLoaded", () => {
    setupSpotlight();
    setupBentoGlow();
    setupInquiryModal();
    setupScrollReveal();
    setupWatchSelector();
});
 
// 3. Aceternity-style Spotlight Effect (Mouse coordinates tracking)
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
 
// 4. Magic UI Bento Card Spotlights Cursor Hover Light
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
 
// 5. Watch Selector Tab Handler
function setupWatchSelector() {
    const tabs = document.querySelectorAll(".watch-tab");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const watchKey = tab.getAttribute("data-watch");
            if (watchKey === currentModelKey) return;
            
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            switchWatchModel(watchKey);
        });
    });
}
 
// Dynamic switcher for the entire page contents and styling
function switchWatchModel(key) {
    currentModelKey = key;
    const model = watchDatabase[key];
    
    // 1. Elements to transition (Fade out)
    const displayBgText = document.getElementById("hero-display-bg-text");
    const watchImg = document.getElementById("hero-watch-img-el");
    const brandTag = document.getElementById("hero-brand-tag");
    const watchTitle = document.getElementById("hero-watch-title");
    const watchDesc = document.getElementById("hero-watch-desc");
    
    const b1Tag = document.getElementById("bento-1-tag");
    const b1Title = document.getElementById("bento-1-title");
    const b1Desc = document.getElementById("bento-1-desc");
    const b1Img = document.getElementById("bento-1-img");
    
    const metricsTitle = document.getElementById("bento-metrics-title");
    const metricsContainer = document.getElementById("metrics-items-container");
    
    const b3Tag = document.getElementById("bento-3-tag");
    const b3Title = document.getElementById("bento-3-title");
    const b3Desc = document.getElementById("bento-3-desc");
    const b3Img = document.getElementById("bento-3-img");
    
    const specsTable = document.getElementById("bento-specs-rows");
    const b5Img = document.getElementById("bento-5-img");
 
    // Add transitioning class for smooth animation
    const elementsToFade = [displayBgText, watchImg, brandTag, watchTitle, watchDesc, b1Tag, b1Title, b1Desc, b1Img, metricsTitle, metricsContainer, b3Tag, b3Title, b3Desc, b3Img, specsTable, b5Img];
    
    elementsToFade.forEach(el => {
        if (el) el.style.opacity = 0;
    });
    
    setTimeout(() => {
        // Swap CSS root variables for shifting gradients and theme colors
        const root = document.documentElement;
        root.style.setProperty("--accent-color", model.theme.accent);
        root.style.setProperty("--accent-glow", model.theme.glow);
        root.style.setProperty("--bg-dark", model.theme.background);
        
        // Update Hero Panel
        if (displayBgText) displayBgText.textContent = model.giantText;
        if (watchImg) watchImg.src = model.image;
        if (brandTag) brandTag.textContent = model.brand;
        if (watchTitle) watchTitle.textContent = model.title;
        if (watchDesc) watchDesc.textContent = model.desc;
        
        // Update Bento Card 1 (Large Visual)
        if (b1Tag) b1Tag.textContent = model.details.designTag;
        if (b1Title) b1Title.textContent = model.details.designTitle;
        if (b1Desc) b1Desc.textContent = model.details.designDesc;
        if (b1Img) b1Img.src = model.details.designImage;
        
        // Update Bento Card 2 (Metrics)
        if (metricsTitle) metricsTitle.textContent = model.ref;
        if (metricsContainer && model.metrics) {
            metricsContainer.innerHTML = model.metrics.map(m => `
                <div class="metric-box">
                    <span class="metric-num">${m.num}</span>
                    <span class="metric-lbl">${m.label}</span>
                </div>
            `).join("");
        }
        
        // Update Bento Card 3 (Movement / Mechanics)
        if (b3Tag) b3Tag.textContent = model.details.caliberTag;
        if (b3Title) b3Title.textContent = model.details.caliberTitle;
        if (b3Desc) b3Desc.textContent = model.details.caliberDesc;
        if (b3Img) b3Img.src = model.details.caliberImage;
        
        // Update Bento Card 4 (Specs Table)
        if (specsTable && model.specs) {
            specsTable.innerHTML = model.specs.map(s => `
                <div class="spec-row">
                    <span class="spec-lbl">${s.lbl}</span>
                    <span class="spec-val">${s.val}</span>
                </div>
            `).join("");
        }
        
        // Update Bento Card 5 (Lifestyle / Wrist shot)
        if (b5Img) b5Img.src = model.image;
 
        // Fade back in
        setTimeout(() => {
            elementsToFade.forEach(el => {
                if (el) el.style.opacity = 1;
            });
        }, 50);
        
    }, 400);
}
 
// 6. Inquiry Modal Operations
function setupInquiryModal() {
    const modal = document.getElementById("inquire-modal");
    const openTriggers = document.querySelectorAll(".cta-inquire-trigger");
    const closeBtn = document.getElementById("close-inquire-modal");
    const closeSuccessBtn = document.getElementById("close-success-btn");
 
    function openModal() {
        modal.classList.add("active");
        
        // Auto-select watch currently on hero
        const selectEl = document.getElementById("client-watch");
        if (selectEl) {
            if (currentModelKey === "patek") selectEl.selectedIndex = 0;
            else if (currentModelKey === "seiko") selectEl.selectedIndex = 1;
            else if (currentModelKey === "casio") selectEl.selectedIndex = 2;
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
 
    // Form Submission & Ticket Population
    const form = document.getElementById("inquiry-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Clear errors
            document.querySelectorAll(".error-msg").forEach(span => span.textContent = "");
            
            const name = document.getElementById("client-name").value.trim();
            const email = document.getElementById("client-email").value.trim();
            const selectEl = document.getElementById("client-watch");
            const watchModelName = selectEl.options[selectEl.selectedIndex].text;
            
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
                document.getElementById("ticket-success-model").textContent = watchModelName;
                
                const randomRef = Math.floor(1000 + Math.random() * 9000);
                document.getElementById("ticket-reference-id").textContent = `REF-CHRONOS-${randomRef}-G`;
                
                form.classList.add("hidden");
                document.getElementById("inquiry-success").classList.remove("hidden");
            }
        });
    }
}
 
// 7. Scroll Reveal Animations (IntersectionObserver)
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
