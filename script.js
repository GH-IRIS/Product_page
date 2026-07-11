// Chronos Apex Luxury Watch Showcase Controller

// 1. Curated Watch Database with Morphed Themes
const watchDatabase = [
    {
        brand: "PATEK PHILIPPE",
        title: "COMPLICATIONS<br><span class='accent-title'>Ref. 5308G</span>",
        desc: "Featuring a minute repeater, split-seconds chronograph, and instantaneous perpetual calendar. Cased in premium white gold with a rose-gilt opaline dial.",
        image: "assets/Ref. 5308g.png",
        imageClass: "",
        stats: {
            movement: "Caliber R CH 27 PS QI",
            reserve: "48 Hours",
            water: "Humidity Protected"
        },
        specs: {
            ref: "5308G-001",
            material: "18K White Gold",
            dimensions: "42 mm Diameter, 14.2 mm Height",
            caliber: "R CH 27 PS QI (Self-winding)",
            complications: "Minute Repeater, Split-Seconds Chrono, Perpetual Calendar",
            bracelet: "Alligator Leather with Fold-Over Clasp"
        },
        theme: {
            accent: "#d4af37",
            glow: "rgba(212, 175, 55, 0.15)",
            aurora1: "#0e111a",
            aurora2: "#1c1706",
            aurora3: "#06070a"
        }
    },
    {
        brand: "SEIKO ASTRON",
        title: "GPS SOLAR<br><span class='accent-title'>HAB006J1</span>",
        desc: "Astron GPS Solar 2026 Limited Edition. Super-light titanium casing with a sapphire bezel and carbon dial. Syncs to GPS networks purely via light energy.",
        image: "assets/Astron GPS Solar 2026 Limited Edition - Titanium Astron - HAB006J1.webp",
        imageClass: "",
        stats: {
            movement: "Caliber 5X83 Solar GPS",
            reserve: "2 Years (Power Save)",
            water: "100 Meters"
        },
        specs: {
            ref: "HAB006J1 (2026 LE)",
            material: "Titanium with Super-Hard Coating",
            dimensions: "42.7 mm Diameter, 12.2 mm Height",
            caliber: "Seiko 5X83 (Solar GPS Quartz)",
            complications: "GPS Timezone Sync, Chronograph, World Time (38 zones)",
            bracelet: "Titanium Bracelet with Smart Adjuster clasp"
        },
        theme: {
            accent: "#00f0ff",
            glow: "rgba(0, 240, 255, 0.25)",
            aurora1: "#061d2d",
            aurora2: "#0b1a24",
            aurora3: "#04070e"
        }
    },
    {
        brand: "SEIKO ASTRON",
        title: "145TH ANNIV.<br><span class='accent-title'>HAB004J1</span>",
        desc: "Special Anniversary edition featuring deep blue themes, matching high-strength titanium casing with scratch-resistant coating, and GPS synchronization.",
        image: "assets/Seiko 145th Anniversary Blue Theme - Titanium Astron - HAB004J1.webp",
        imageClass: "",
        stats: {
            movement: "Caliber 3X62 Solar GPS",
            reserve: "6 Months (Power Save)",
            water: "100 Meters"
        },
        specs: {
            ref: "HAB004J1",
            material: "Titanium with Blue Ceramic Bezel",
            dimensions: "41.2 mm Diameter, 12.0 mm Height",
            caliber: "Seiko 3X62 (Solar GPS Quartz)",
            complications: "GPS Auto-Time Sync, High Speed Time Zone Adjustment",
            bracelet: "Titanium Bracelet with Fold-Over push release"
        },
        theme: {
            accent: "#2979ff",
            glow: "rgba(41, 121, 255, 0.25)",
            aurora1: "#041029",
            aurora2: "#080d24",
            aurora3: "#02040c"
        }
    },
    {
        brand: "CASIO EDIFICE",
        title: "WIND FLOW<br><span class='accent-title'>EDIFICE SERIES</span>",
        desc: "High-performance chronograph designed for motorsport. Smartphone link via Bluetooth, Tough Solar charging, and a carbon fiber reinforced dial.",
        image: "assets/desktop--edifice-windflow.avif",
        imageClass: "",
        stats: {
            movement: "Tough Solar Chrono",
            reserve: "5 Months (Solar Charged)",
            water: "100 Meters"
        },
        specs: {
            ref: "ECB-2200P-1ADF",
            material: "Carbon-Fiber Reinforced Resin Casing",
            dimensions: "47.6 mm Diameter, 11.9 mm Height",
            caliber: "Solar Bluetooth Quartz Module",
            complications: "Smartphone Link, Lap Timer, Multi-Alarm, Auto LED",
            bracelet: "Resilient Urethane/Resin Sport Band"
        },
        theme: {
            accent: "#00e5ff",
            glow: "rgba(0, 229, 255, 0.2)",
            aurora1: "#0a1c22",
            aurora2: "#06171f",
            aurora3: "#03070b"
        }
    },
    {
        brand: "CASIO EDIFICE",
        title: "NIGHT-TIME<br><span class='accent-title'>EDIFICE SERIES</span>",
        desc: "Special edition chronograph inspired by the neon glow of night-time street racing. Features smartphone link Bluetooth connectivity, Tough Solar charging, and deep blue accents.",
        image: "assets/desktop--edifice-night-time.avif",
        imageClass: "",
        stats: {
            movement: "Tough Solar Quartz",
            reserve: "5 Months",
            water: "100 Meters"
        },
        specs: {
            ref: "ECB-2000NP-1A",
            material: "Carbon-Fiber Casing with Steel Bezel",
            dimensions: "47.8 mm Diameter, 10.8 mm Height",
            caliber: "Solar Bluetooth Quartz Module",
            complications: "Smartphone Link, 1/100-Sec Stopwatch, Double LED light",
            bracelet: "Solid Stainless Steel Link Bracelet"
        },
        theme: {
            accent: "#3b82f6",
            glow: "rgba(59, 130, 246, 0.2)",
            aurora1: "#06102b",
            aurora2: "#091a3c",
            aurora3: "#02040c"
        }
    },
    {
        brand: "CASIO CLASSIC",
        title: "CASIO ROYALE<br><span class='accent-title'>AE-1200WHD</span>",
        desc: "The legendary retro travel watch featuring a multi-timezone map, 10-year battery life, analog/digital hybrid displays, and an iconic steel casing design.",
        image: "assets/AE-1200WHD-1AV.avif",
        imageClass: "",
        stats: {
            movement: "Digital Quartz Module",
            reserve: "10 Years (Battery)",
            water: "100 Meters"
        },
        specs: {
            ref: "AE-1200WHD-1AV",
            material: "Stainless Steel / Chrome Plated Resin",
            dimensions: "42.1 mm Length, 12.5 mm Height",
            caliber: "Casio Quartz Module 3299",
            complications: "World Time (48 cities), Map Display, 5 Alarms, Stopwatch",
            bracelet: "Stainless Steel Link with Triple-Fold clasp"
        },
        theme: {
            accent: "#ffd600",
            glow: "rgba(255, 214, 0, 0.2)",
            aurora1: "#2a2408",
            aurora2: "#1c1906",
            aurora3: "#0e0d04"
        }
    }
];

let activeWatchIndex = 0;

// 2. Controller Initialization
window.addEventListener("DOMContentLoaded", () => {
    setupSpotlight();
    setupBorderGlowCards();
    setupWatchSelector();
    setupComplicationSwitcher();
    setupInquiryModal();
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
    const dots = document.querySelectorAll("#watch-switcher-dots .selector-dot");
    
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.getAttribute("data-index"));
            if (index === activeWatchIndex) return;
            
            dots.forEach(d => d.classList.remove("active"));
            dot.classList.add("active");
            
            morphWatchTheme(index);
        });
    });

    // Make gallery cards click to switch as well
    const collectionCards = document.querySelectorAll(".collection-card");
    collectionCards.forEach(card => {
        card.addEventListener("click", () => {
            const index = parseInt(card.getAttribute("data-index"));
            
            // Switch dot active state
            dots.forEach(d => d.classList.remove("active"));
            dots[index].classList.add("active");
            
            morphWatchTheme(index);
            
            // Smooth scroll back to hero display
            document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
        });
    });
}

// Morph Watch Theme variables and contents
function morphWatchTheme(index) {
    activeWatchIndex = index;
    const watch = watchDatabase[index];
    
    // Elements to update
    const brandLabel = document.getElementById("watch-brand-label");
    const titleLabel = document.getElementById("watch-title-label");
    const descLabel = document.getElementById("watch-desc-label");
    const watchImg = document.getElementById("hero-watch-img");
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

    // Fade out
    brandLabel.style.opacity = 0;
    titleLabel.style.opacity = 0;
    descLabel.style.opacity = 0;
    watchImg.style.opacity = 0;
    watchImg.style.transform = "scale(0.85) translateZ(0)";
    
    setTimeout(() => {
        // Swap CSS root variables for shifting gradients
        const root = document.documentElement;
        root.style.setProperty("--accent-color", watch.theme.accent);
        root.style.setProperty("--accent-glow", watch.theme.glow);
        root.style.setProperty("--aurora-1", watch.theme.aurora1);
        root.style.setProperty("--aurora-2", watch.theme.aurora2);
        root.style.setProperty("--aurora-3", watch.theme.aurora3);
        
        // Update texts
        brandLabel.textContent = watch.brand;
        titleLabel.innerHTML = watch.title;
        descLabel.textContent = watch.desc;
        
        // Update stats
        statMov.textContent = watch.stats.movement;
        statRes.textContent = watch.stats.reserve;
        statWat.textContent = watch.stats.water;
        
        // Update image and class tinting
        watchImg.src = watch.image;
        watchImg.className = "hero-watch-image " + watch.imageClass;
        
        // Update technical specs table
        specsImg.src = watch.image;
        specsImg.className = "specs-detail-image " + watch.imageClass;
        specsRef.textContent = watch.specs.ref;
        specsMat.textContent = watch.specs.material;
        specsDim.textContent = watch.specs.dimensions;
        specsCal.textContent = watch.specs.caliber;
        specsComp.textContent = watch.specs.complications;
        specsBrac.textContent = watch.specs.bracelet;

        // Fade in
        setTimeout(() => {
            brandLabel.style.opacity = 1;
            titleLabel.style.opacity = 1;
            descLabel.style.opacity = 1;
            watchImg.style.opacity = 1;
            watchImg.style.transform = "scale(1) translateZ(50px)";
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
            if (comp === "flyback") {
                balance.style.animationDuration = "0.8s";
                gears[0].style.animationDuration = "6s";
                gears[1].style.animationDuration = "4s";
            } else if (comp === "dualtime") {
                balance.style.animationDuration = "2s";
                gears[0].style.animationDuration = "20s";
                gears[1].style.animationDuration = "15s";
            } else { // solar atomic
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
