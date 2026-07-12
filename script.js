// Chronos Apex Luxury Watch Showcase Controller
 
// 1. Curated Watch Database with Morphed Themes (AP Royal Oak Jumbo & Patek Philippe Ref. 5304)
const watchModels = {
    ap: {
        brand: "AUDEMARS PIGUET",
        category: "ROYAL OAK",
        ref: "16202ST.OO.1240ST.02",
        price: "AUDEMARS PIGUET",
        priceSuffix: "ROYAL OAK Ref. 16202ST",
        views: [
            {
                title: "Royal Oak \"Jumbo\" Extra-Thin",
                desc: "Celebrating a legacy of design. The Royal Oak 'Jumbo' Extra-Thin features the legendary 39mm stainless steel case, an ultra-flat profile, and the iconic octagonal bezel.",
                image: "assets/royal_oak_front.jpg",
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
                    accent: "#b89047", /* Gold */
                    glow: "rgba(184, 144, 71, 0.15)",
                    aurora1: "#f3efe6",
                    aurora2: "#eae4d7",
                    aurora3: "#f9f8f6"
                }
            },
            {
                title: "Satin-Brushed Steel Craftsmanship",
                desc: "Every surface of the Royal Oak is meticulously hand-finished, featuring alternating satin-brushed and polished bevels that capture light dynamically.",
                image: "assets/royal_oak_angle.jpg",
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
                    accent: "#d4af37", /* Warm gold */
                    glow: "rgba(212, 175, 55, 0.2)",
                    aurora1: "#1d1a10",
                    aurora2: "#1c1f24",
                    aurora3: "#06070a"
                }
            },
            {
                title: "Caliber 7121 Mechanical Heart",
                desc: "Designed to fit the extra-thin 8.1mm profile, Caliber 7121 features circular-grained bridges, polished bevels, and an openworked 22-carat gold rotor.",
                image: "assets/royal_oak_movement.jpg",
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
                    accent: "#dfb15b",
                    glow: "rgba(223, 177, 91, 0.2)",
                    aurora1: "#251d0d",
                    aurora2: "#1a1204",
                    aurora3: "#06060c"
                }
            },
            {
                title: "Ergonomics On The Wrist",
                desc: "With a case thickness of only 8.1mm, the Royal Oak Jumbo fits comfortably and elegantly under any sleeve, offering an unmatched integrated bracelet profile.",
                image: "assets/royal_oak_wrist.jpg",
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
                    accent: "#8b9ea7",
                    glow: "rgba(139, 158, 167, 0.2)",
                    aurora1: "#0b1528",
                    aurora2: "#1c1f24",
                    aurora3: "#060a12"
                }
            }
        ],
        specsHighlights: [
            { label: "Case Profile", value: "Stainless Steel, Glareproofed Sapphire" },
            { label: "Dial Art", value: '"Bleu Nuit Nuage 50" Petite Tapisserie' },
            { label: "Movement", value: "Caliber 7121 (Self-winding)" },
            { label: "Thickness", value: "8.1 mm Ultra-Thin Casing" }
        ],
        bannerDesc: "Allocations for this premium timepiece are highly limited. Secure your ticket for a private consultation, virtual showing, or regional allocation."
    },
    patek: {
        brand: "PATEK PHILIPPE",
        category: "GRAND COMPLICATIONS",
        ref: "5304/301R-001",
        price: "PATEK PHILIPPE",
        priceSuffix: "GRAND COMPLICATIONS Ref. 5304/301R-001",
        views: [
            {
                title: "Grand Complications Ref. 5304",
                desc: "A spectacular combination of high complications. Ref. 5304/301R-001 features a minute repeater with transparent sapphire dial and retrograde perpetual calendar.",
                image: "assets/patek_5304_front.jpg",
                stats: {
                    movement: "Caliber R 27 PS QR LU",
                    reserve: "48 Hours",
                    water: "Humidity Protected"
                },
                specs: {
                    ref: "5304/301R-001",
                    material: "18K Rose Gold Case",
                    dimensions: "43 mm Diameter, 13.3 mm Height",
                    caliber: "Caliber R 27 PS QR LU (Self-winding)",
                    complications: "Minute Repeater, Retrograde Date, Moon Phases",
                    bracelet: "Alligator Leather with Baguette Diamond clasp"
                },
                theme: {
                    accent: "#b89047",
                    glow: "rgba(184, 144, 71, 0.15)",
                    aurora1: "#f3efe6",
                    aurora2: "#eae4d7",
                    aurora3: "#f9f8f6"
                }
            },
            {
                title: "Haute Joaillerie Diamond Setting",
                desc: "Adorned with 80 baguette diamonds (~6.22 ct) set on the bezel, slides, and lugs. The case side features white gold leaf engravings inlaid into the rose gold.",
                image: "assets/patek_5304_angle.jpg",
                stats: {
                    movement: "80 Baguette Diamonds",
                    reserve: "Rose Gold Case",
                    water: "White Gold Side Inserts"
                },
                specs: {
                    ref: "5304/301R-001",
                    material: "Rose gold case with white gold side inserts",
                    dimensions: "80 Baguette Diamonds on Bezel & Lugs",
                    caliber: "Sapphire Dial with rose gold indices",
                    complications: "White gold hand-engraved leaf patterns",
                    bracelet: "Alligator leather strap with 22 baguette diamonds folding clasp"
                },
                theme: {
                    accent: "#d4af37",
                    glow: "rgba(212, 175, 55, 0.2)",
                    aurora1: "#1d1a10",
                    aurora2: "#1c1f24",
                    aurora3: "#06070a"
                }
            },
            {
                title: "Caliber R 27 PS QR LU Mechanism",
                desc: "Features a minute repeater striking on two classic gongs. Transparent sapphire dial exposes the calendar wheels, star wheels, and repeater levers.",
                image: "assets/patek_5304_movement.jpg",
                stats: {
                    movement: "Caliber R 27, 517 parts",
                    reserve: "Minute Repeater Gongs",
                    water: "21,600 vibrations/h"
                },
                specs: {
                    ref: "Caliber R 27 PS QR LU (In-house)",
                    material: "22K Gold Off-Center Mini-Rotor",
                    dimensions: "28 mm Diameter, 7.23 mm Thickness",
                    caliber: "Self-winding mechanical",
                    complications: "Retrograde Date Hand, Month, Day, Leap Year display",
                    bracelet: "Hand-finished skeleton bridges, Geneva stripes"
                },
                theme: {
                    accent: "#dfb15b",
                    glow: "rgba(223, 177, 91, 0.2)",
                    aurora1: "#251d0d",
                    aurora2: "#1a1204",
                    aurora3: "#06060c"
                }
            },
            {
                title: "Masterpiece On The Wrist",
                desc: "An assertive 43mm presence that combines mechanical complexity with astronomical high-jewelry artistry. A true connoisseur's perpetual calendar repeater.",
                image: "assets/patek_5304_wrist.jpg",
                stats: {
                    movement: "Self-Winding Repeater",
                    reserve: "Baguette Clasp",
                    water: "Haute Joaillerie"
                },
                specs: {
                    ref: "5304/301R-001",
                    material: "Fold-over clasp with 22 diamonds",
                    dimensions: "43mm Rose Gold casing",
                    caliber: "Skeletonized dial sapphire layers",
                    complications: "Minute Repeater slide regulator",
                    bracelet: "Hand-stitched shiny black alligator leather"
                },
                theme: {
                    accent: "#8b9ea7",
                    glow: "rgba(139, 158, 167, 0.2)",
                    aurora1: "#0b1528",
                    aurora2: "#1c1f24",
                    aurora3: "#060a12"
                }
            }
        ],
        specsHighlights: [
            { label: "Case & Jewels", value: "Rose Gold, 80 Baguette Diamonds" },
            { label: "Complications", value: "Minute Repeater, Retrograde Calendar" },
            { label: "Caliber", value: "Caliber R 27 PS QR LU (517 parts)" },
            { label: "Dial Detail", value: "Skeletonized Transparent Sapphire" }
        ],
        bannerDesc: "Allocations for this masterpiece minute repeater are extremely exclusive. Secure your ticket for private consultation, virtual showing, or regional allocation."
    }
};
 
let currentModelKey = "ap";
let activeWatchIndex = 0;
 
// 2. Controller Initialization
window.addEventListener("DOMContentLoaded", () => {
    setupSpotlight();
    setupBorderGlowCards();
    setupWatchSelector();
    setupAmazonZoom();
    setupInquiryModal();
    setupScrollReveal();
    setupWatchModelTabs();
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
}
 
// Amazon Product Zoom Effect (High magnification side preview with coordinate tracking)
function setupAmazonZoom() {
    const container = document.getElementById("zoom-container");
    const mainImg = document.getElementById("main-watch-img");
    const lens = document.getElementById("zoom-lens");
    const preview = document.getElementById("zoom-preview");
    const previewImg = document.getElementById("zoom-preview-img");
    
    if (!container || !mainImg || !lens || !preview || !previewImg) return;
    
    container.addEventListener("mouseenter", () => {
        lens.style.display = "block";
        preview.style.display = "block";
        previewImg.src = mainImg.src; // load same image
    });
    
    container.addEventListener("mouseleave", () => {
        lens.style.display = "none";
        preview.style.display = "none";
    });
    
    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        
        // Get relative mouse position inside container
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        // Define lens sizing
        let lensWidth = lens.offsetWidth || 140;
        let lensHeight = lens.offsetHeight || 140;
        
        // Center the highlighter lens on the cursor
        let lensX = x - (lensWidth / 2);
        let lensY = y - (lensHeight / 2);
        
        // Keep within container bounds
        if (lensX < 0) lensX = 0;
        if (lensY < 0) lensY = 0;
        if (lensX > rect.width - lensWidth) lensX = rect.width - lensWidth;
        if (lensY > rect.height - lensHeight) lensY = rect.height - lensHeight;
        
        // Move lens
        lens.style.left = `${lensX}px`;
        lens.style.top = `${lensY}px`;
        
        // Calculate ratios
        const previewWidth = preview.offsetWidth || 480;
        const previewHeight = preview.offsetHeight || 480;
        const xRatio = previewWidth / lensWidth;
        const yRatio = previewHeight / lensHeight;
        
        // Align zoomed background preview image in opposite direction
        previewImg.style.left = `-${lensX * xRatio}px`;
        previewImg.style.top = `-${lensY * yRatio}px`;
        
        // Scale high-res image inside preview window
        previewImg.style.width = `${rect.width * xRatio}px`;
        previewImg.style.height = `${rect.height * yRatio}px`;
    });
}
 
// Morph Watch Theme variables and contents
function morphWatchTheme(index) {
    activeWatchIndex = index;
    const model = watchModels[currentModelKey];
    const watch = model.views[index];
    
    // Elements to update
    const titleLabel = document.getElementById("patek-watch-title");
    const descLabel = document.getElementById("patek-watch-desc");
    const watchImg = document.getElementById("main-watch-img");
    const previewImg = document.getElementById("zoom-preview-img");
    
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
        
        // Update image
        watchImg.src = watch.image;
        if (previewImg) previewImg.src = watch.image;
        
        // Update technical specs table
        if (specsImg) {
            specsImg.src = watch.image;
        }
        if (specsRef) specsRef.textContent = watch.specs.ref;
        if (specsMat) specsMat.textContent = watch.specs.material;
        if (specsDim) specsDim.textContent = watch.specs.dimensions;
        if (specsCal) specsCal.textContent = watch.specs.caliber;
        if (specsComp) specsComp.textContent = watch.specs.complications;
        if (specsBrac) specsBrac.textContent = watch.specs.bracelet;
        
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
 
// 6. Watch Model Tabs Switcher (AP vs. Patek)
function setupWatchModelTabs() {
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
 
function switchWatchModel(key) {
    currentModelKey = key;
    activeWatchIndex = 0;
    const model = watchModels[key];
    
    // Update category panel
    const brandLabel = document.getElementById("watch-brand-label");
    const catLabel = document.getElementById("watch-category-label");
    const refLabel = document.getElementById("watch-ref-label");
    
    if (brandLabel) brandLabel.textContent = model.brand;
    if (catLabel) catLabel.textContent = model.category;
    if (refLabel) refLabel.textContent = model.ref;
    
    // Update price tag (brand signature text replaces pricing)
    const priceContainer = document.getElementById("patek-watch-price");
    if (priceContainer) {
        priceContainer.innerHTML = `${model.price} <span class="price-suffix" id="patek-price-suffix">${model.priceSuffix}</span>`;
    }
    
    // Update thumbnails image tags
    for (let i = 0; i < 4; i++) {
        const thumb = document.getElementById(`thumb-${i}`);
        if (thumb) {
            thumb.classList.remove("active");
            const img = thumb.querySelector("img");
            if (img && model.views[i]) {
                img.src = model.views[i].image;
                thumb.title = model.views[i].title;
            }
        }
    }
    const thumb0 = document.getElementById("thumb-0");
    if (thumb0) thumb0.classList.add("active");
    
    // Update specs highlights
    const highlights = document.getElementById("patek-specs-highlights-rows");
    if (highlights && model.specsHighlights) {
        highlights.innerHTML = model.specsHighlights.map(hl => `
            <div class="highlight-row">
                <span class="hl-label">${hl.label}</span>
                <span class="hl-value">${hl.value}</span>
            </div>
        `).join("");
    }
    
    // Update CTA banner description
    const bannerDesc = document.getElementById("cta-banner-desc");
    if (bannerDesc) bannerDesc.textContent = model.bannerDesc;
    
    // Update Modal options
    for (let i = 0; i < 4; i++) {
        const opt = document.getElementById(`modal-opt-${i}`);
        if (opt && model.views[i]) {
            opt.textContent = `${model.brand === "AUDEMARS PIGUET" ? "AP Royal Oak" : "Patek 5304"} - ${model.views[i].title}`;
        }
    }
    
    // Trigger morph for view 0
    morphWatchTheme(0);
}
 
// 7. Inquiry Modal Controls
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
 
// 8. Scroll Reveal Animations (IntersectionObserver)
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
