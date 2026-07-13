// Chronos Apex - Haute Horlogerie Watch Showcase Controller

// 1. Core Multi-Watch Database (4 Premium Transparent Masterpieces)
const watchDatabase = {
    seiko_astron: {
        brand: "SEIKO ASTRON",
        ref: "Ref. SSH175J1",
        title: "Titanium Astron GPS Solar",
        desc: "High-tech celestial precision. Driven by Seiko's GPS Solar caliber, it connects to the GPS network to adjust automatically to your local time zone anywhere on Earth.",
        image: "assets/seiko_astron_1.png",
        giantText: "ASTRON",
        theme: {
            accent: "#4a89ff", // Cobalt Blue
            accentBronze: "#79a2e8",
            glow: "rgba(74, 137, 255, 0.08)",
            background: "#05070d",
            craftBackground: "#070b14"
        },
        craft: {
            highlight: "Unparalleled satellite time keeping synchronized from outer space.",
            desc: "Seiko's 5X53 GPS Solar movement connects to GPS satellites to calibrate timezone, date, and time variables automatically. Powered by light, it never needs a battery replacement.",
            title: "Astron 5X53 GPS Caliber",
            specs: "Solar quartz module, timezone sync"
        },
        specs: [
            { lbl: "Reference Number", val: "Ref. SSH175J1" },
            { lbl: "Caliber Movement", val: "Caliber 5X53 GPS Solar Dual-Time" },
            { lbl: "Accuracy", val: "±15 seconds per month (without GPS signal)" },
            { lbl: "Case Material", val: "Titanium case with super-hard coating" },
            { lbl: "Dimensions", val: "42.7 mm Diameter, 12.2 mm Thickness" },
            { lbl: "Water Resistance", val: "10 bar (100 meters)" }
        ],
        gallery: [
            { img: "assets/seiko_astron_1.png", caption: "Dial View — Titanium casing with faceted bezel", isTransparent: true },
            { img: "assets/seiko_astron_2.png", caption: "Profile View — Lightweight titanium case profile", isTransparent: true },
            { img: "assets/seiko_astron_3.png", caption: "Solar Dial Detail — Light energy absorption panel", isTransparent: true },
            { img: "assets/seiko_astron_4.png", caption: "Wrist Presence — Breathtaking comfort and legibility", isTransparent: true }
        ]
    },
    patek_5304: {
        brand: "PATEK PHILIPPE",
        ref: "Ref. 5304R-001",
        title: "Grand Complications Skeleton",
        desc: "A breathtaking skeletonized masterwork. Features a minute repeater and a retrograde perpetual calendar, housed in a polished rose gold case.",
        image: "assets/patek_5304_angle.jpg",
        giantText: "PATEK",
        theme: {
            accent: "#c5a880", // Warm Bronze Gold
            accentBronze: "#d9c09c",
            glow: "rgba(197, 168, 128, 0.08)",
            background: "#050507",
            craftBackground: "#08080b"
        },
        craft: {
            highlight: "Meticulous openworked dial showing the gear train.",
            desc: "The retrograde date hand sweeps along a 270-degree arc before jumping back to the start. The sapphire dial reveals the complex repeater hammers and calendar mechanism.",
            title: "Caliber R TO 27 PS QR",
            specs: "Manual winding, 517 individual parts"
        },
        specs: [
            { lbl: "Reference Number", val: "Ref. 5304R-001" },
            { lbl: "Caliber Movement", val: "Caliber R TO 27 PS QR" },
            { lbl: "Complications", val: "Minute Repeater, Retrograde Perpetual Calendar" },
            { lbl: "Case Composition", val: "18K Rose Gold with white gold insert details" },
            { lbl: "Dimensions", val: "43 mm Diameter, 13.3 mm Thickness" },
            { lbl: "Strap & Clasp", val: "Hand-stitched alligator leather, fold-over clasp" }
        ],
        gallery: [
            { img: "assets/patek_5304_angle.jpg", caption: "Dial View — Rose gold skeletonized complication dial", isTransparent: false },
            { img: "assets/patek_5304_movement.jpg", caption: "Caliber View — Hand-finished micro-rotor movement", isTransparent: false },
            { img: "assets/patek_5304_wrist.jpg", caption: "Wrist Presence — Unrivaled size and wrist presence", isTransparent: false },
            { img: "assets/patek_5304_angle.jpg", caption: "Dial Details — Exquisite openworked design", isTransparent: false }
        ]
    },
    royal_oak: {
        brand: "AUDEMARS PIGUET",
        ref: "Ref. 16202ST",
        title: "Royal Oak Jumbo Extra-Thin",
        desc: "The quintessential luxury sports watch. Designed by Gérald Genta, featuring the famous octagonal bezel, tapisserie dial, and integrated steel bracelet.",
        image: "assets/royal_oak_front.jpg",
        giantText: "ROYAL OAK",
        theme: {
            accent: "#cbd5e1", // Platinum Silver
            accentBronze: "#cbd5e1",
            glow: "rgba(226, 232, 240, 0.08)",
            background: "#070709",
            craftBackground: "#0a0a0d"
        },
        craft: {
            highlight: "Ultra-thin mechanical movement measuring just 3.2 mm.",
            desc: "The caliber 7121 replaced the legendary 2121. It features a larger barrel for a longer power reserve, bidirectional winding, and bridges decorated with Côtes de Genève.",
            title: "Caliber 7121 Extra-Thin",
            specs: "Self-winding caliber, 268 components"
        },
        specs: [
            { lbl: "Reference Number", val: "Ref. 16202ST.OO.1240ST.02" },
            { lbl: "Caliber Movement", val: "Caliber 7121 self-winding movement" },
            { lbl: "Power Reserve", val: "55 hours dynamic reserve" },
            { lbl: "Case & Bracelet", val: "Satin-brushed stainless steel with hand-polished bevels" },
            { lbl: "Dimensions", val: "39 mm Diameter, 8.1 mm Case thickness" },
            { lbl: "Water Resistance", val: "50 meters (5 bar)" }
        ],
        gallery: [
            { img: "assets/royal_oak_front.jpg", caption: "Dial View — Iconic Bleu Nuit Nuage 50 Tapisserie dial", isTransparent: false },
            { img: "assets/royal_oak_angle.jpg", caption: "Case Profile — Integrated bracelet and octagonal bezel", isTransparent: false },
            { img: "assets/royal_oak_movement.jpg", caption: "Caliber 7121 — Extra-thin self-winding mechanical caliber", isTransparent: false },
            { img: "assets/royal_oak_front.jpg", caption: "Details — Hand-polished bevels and satin-brushed surfaces", isTransparent: false }
        ]
    }
};

let currentWatchKey = "seiko_astron";

window.addEventListener("DOMContentLoaded", () => {
    setupSpotlight();
    setupScrollTracing();
    setupParallax();
    setupGalleryListeners();
    setupScrollReveal();
    setupNavigationHighlight();
    setupInquiryModal();
    setupWatchTabs();
    setupMobileMenu();
});

// 2. Mouse Spotlight Ambient Glow coordinates tracking
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

// 3. Scroll Tracing Progress Beam
function setupScrollTracing() {
    const tracingLine = document.getElementById("scroll-tracing-line");
    const tracingDot = document.getElementById("scroll-tracing-dot");
    
    function updateProgress() {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        
        const scrollPct = (window.scrollY / docHeight) * 100;
        
        // Update CSS Custom Variable
        document.documentElement.style.setProperty("--scroll-pct", `${scrollPct}%`);
    }
    
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    updateProgress(); // Initial run
}

// 4. Parallax Image Scrolling (Editorial Style)
function setupParallax() {
    const caliberImg = document.getElementById("craft-caliber-img");
    if (!caliberImg) return;
    
    function handleParallax() {
        const rect = caliberImg.parentElement.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        
        // Only calculate parallax if the image element wrapper is in viewport
        if (rect.top < viewHeight && rect.bottom > 0) {
            // Translate the scroll delta into a smaller offset
            const scrollDelta = viewHeight - rect.top;
            const translateY = scrollDelta * 0.06; // Adjust factor for parallax intensity
            
            caliberImg.style.transform = `translateY(${translateY}px)`;
        }
    }
    
    window.addEventListener("scroll", handleParallax);
    handleParallax(); // Initial run
}

// 5. Interactive Gallery Thumbnail Switching (With container and background blending)
function setupGalleryListeners() {
    const mainImg = document.getElementById("main-gallery-img");
    const captionText = document.getElementById("gallery-caption-text");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const viewerInner = document.querySelector(".viewer-inner");
    
    if (!mainImg || thumbnails.length === 0 || !viewerInner) return;
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            if (thumb.classList.contains("active")) return;
            
            // Toggle active state
            thumbnails.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            
            const newSrc = thumb.getAttribute("data-img");
            const newCaption = thumb.getAttribute("data-caption");
            const isTransparent = thumb.getAttribute("data-transparent") === "true";
            
            // Elegant Fade Out Transition
            mainImg.style.opacity = 0;
            mainImg.style.transform = "scale(0.98)";
            
            setTimeout(() => {
                // Change properties
                mainImg.src = newSrc;
                if (captionText) captionText.textContent = newCaption;
                
                // Toggle contain-mode for transparent PNGs/WebPs
                if (isTransparent) {
                    mainImg.classList.add("contain-mode");
                } else {
                    mainImg.classList.remove("contain-mode");
                }
                
                // Fade In
                setTimeout(() => {
                    mainImg.style.opacity = 1;
                    mainImg.style.transform = "scale(1)";
                }, 50);
                
            }, 300);
        });
    });
}

// 6. Scroll Reveal Intersection Observer (Slide up and fade-in)
function setupScrollReveal() {
    const reveals = document.querySelectorAll(".scroll-reveal");
    if (reveals.length === 0) return;
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);
    
    reveals.forEach(el => observer.observe(el));
}

// 7. Navigation Link Highlight on Scroll
function setupNavigationHighlight() {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");
    
    function highlightLink() {
        let activeId = "";
        const scrollPos = window.scrollY + 200; // offset for nav height
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.clientHeight;
            
            if (scrollPos >= top && scrollPos < top + height) {
                activeId = section.getAttribute("id");
            }
        });
        
        if (activeId) {
            navItems.forEach(item => {
                item.classList.remove("active");
                if (item.getAttribute("href").slice(1) === activeId) {
                    item.classList.add("active");
                }
            });
        }
    }
    
    window.addEventListener("scroll", highlightLink);
    highlightLink(); // Initial run
}

// 8. Watch Selector Switcher (Hero Tabs Handler)
function setupWatchTabs() {
    const tabs = document.querySelectorAll(".watch-tab");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const watchKey = tab.getAttribute("data-watch");
            if (watchKey === currentWatchKey) return;
            
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            switchWatch(watchKey);
        });
    });
}

// Rebuilds page parameters, updates colors, and triggers smooth crossfades
function switchWatch(key) {
    currentWatchKey = key;
    const model = watchDatabase[key];
    
    // Find all transitioning DOM nodes
    const displayBgText = document.getElementById("gallery-display-bg-text");
    const brandTag = document.getElementById("hero-brand-tag");
    const watchTitle = document.getElementById("hero-watch-title");
    const watchDesc = document.getElementById("hero-watch-desc");
    
    const craftHighlight = document.getElementById("craftsmanship-highlight");
    const craftDesc = document.getElementById("craftsmanship-desc");
    const craftImg = document.getElementById("craft-caliber-img");
    const craftTitle = document.getElementById("craft-caliber-title");
    const craftSpecs = document.getElementById("craft-caliber-specs");
    
    const mainGalleryImg = document.getElementById("main-gallery-img");
    const galleryCaption = document.getElementById("gallery-caption-text");
    const galleryThumbsContainer = document.getElementById("gallery-thumbs-container");
    
    const specsTableContainer = document.getElementById("specs-table-container");
    
    // Group elements to trigger a visual crossfade
    const elementsToFade = [
        displayBgText, brandTag, watchTitle, watchDesc,
        craftHighlight, craftDesc, craftImg, craftTitle, craftSpecs,
        mainGalleryImg, galleryCaption, specsTableContainer
    ];
    
    // 1. Fade out
    elementsToFade.forEach(el => {
        if (el) el.style.opacity = 0;
    });
    
    // 2. Perform swap after fade completion
    setTimeout(() => {
        // Swap CSS root variables for shifting colors smoothly
        const root = document.documentElement;
        root.style.setProperty("--accent-color", model.theme.accent);
        root.style.setProperty("--accent-bronze", model.theme.accentBronze);
        root.style.setProperty("--accent-glow", model.theme.glow);
        root.style.setProperty("--bg-dark", model.theme.background);
        
        const craftSec = document.getElementById("craftsmanship");
        if (craftSec) craftSec.style.backgroundColor = model.theme.craftBackground;
        
        // Update Specifications Header
        if (brandTag) brandTag.textContent = model.brand;
        if (watchTitle) watchTitle.textContent = model.title;
        if (watchDesc) watchDesc.textContent = model.desc;
        
        // Update Craftsmanship Details
        if (craftHighlight) craftHighlight.textContent = model.craft.highlight;
        if (craftDesc) craftDesc.textContent = model.craft.desc;
        
        // Pick caliber parallax background
        if (craftImg) {
            if (key === "seiko_astron") {
                craftImg.src = "assets/seiko_astron_5.png";
            } else if (key === "patek_5304") {
                craftImg.src = "assets/patek_5304_movement.jpg";
            } else if (key === "royal_oak") {
                craftImg.src = "assets/royal_oak_movement.jpg";
            }
        }
        if (craftTitle) craftTitle.textContent = model.craft.title;
        if (craftSpecs) craftSpecs.textContent = model.craft.specs;
        
        // Rebuild Gallery Main Image
        if (mainGalleryImg) {
            mainGalleryImg.src = model.gallery[0].img;
            
            // Transparent PNG/WebP starts with contain-mode
            if (model.gallery[0].isTransparent) {
                mainGalleryImg.classList.add("contain-mode");
            } else {
                mainGalleryImg.classList.remove("contain-mode");
            }
        }
        if (galleryCaption) galleryCaption.textContent = model.gallery[0].caption;
        if (displayBgText) displayBgText.textContent = model.giantText;
        
        // Rebuild Thumbnails
        if (galleryThumbsContainer && model.gallery) {
            galleryThumbsContainer.innerHTML = model.gallery.map((g, idx) => `
                <div class="thumbnail ${idx === 0 ? 'active' : ''}" data-img="${g.img}" data-caption="${g.caption}" data-transparent="${g.isTransparent}">
                    <img src="${g.img}" alt="Thumbnail View">
                </div>
            `).join("");
            
            // Re-attach event listeners to the fresh thumbnails
            setupGalleryListeners();
        }
        
        // Rebuild Specs Table
        if (specsTableContainer && model.specs) {
            specsTableContainer.innerHTML = model.specs.map(s => `
                <div class="spec-row">
                    <span class="spec-lbl">${s.lbl}</span>
                    <span class="spec-val">${s.val}</span>
                </div>
            `).join("");
        }
        
        // 3. Fade back in
        setTimeout(() => {
            elementsToFade.forEach(el => {
                if (el) el.style.opacity = 1;
            });
        }, 50);
        
    }, 400);
}

// 9. Private Allocation Consultation Modal Desk
function setupInquiryModal() {
    const modal = document.getElementById("inquire-modal");
    const openBtns = document.querySelectorAll(".cta-inquire-trigger");
    const closeBtn = document.getElementById("close-inquire-modal");
    const closeSuccessBtn = document.getElementById("close-success-btn");
    const form = document.getElementById("inquiry-form");
    const successState = document.getElementById("inquiry-success");
    const modalHeader = document.getElementById("modal-header-section");
    
    if (!modal) return;
    
    function openModal() {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // disable background scrolling
    }
    
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // restore scrolling
        
        // Reset form states after fade out transition completes
        setTimeout(() => {
            if (form) {
                form.classList.remove("hidden");
                form.reset();
            }
            if (successState) successState.classList.add("hidden");
            if (modalHeader) modalHeader.classList.remove("hidden");
            document.querySelectorAll(".error-msg").forEach(span => span.textContent = "");
        }, 400);
    }
    
    openBtns.forEach(btn => btn.addEventListener("click", openModal));
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", closeModal);
    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Form validation and VIP ticket creation
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Clear current errors
            document.querySelectorAll(".error-msg").forEach(span => span.textContent = "");
            
            const name = document.getElementById("client-name").value.trim();
            const email = document.getElementById("client-email").value.trim();
            const salonSelect = document.getElementById("client-salon");
            const salonName = salonSelect.options[salonSelect.selectedIndex].text;
            
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
                // Populate Success VIP Ticket details
                const model = watchDatabase[currentWatchKey];
                
                document.getElementById("ticket-client-name").textContent = name;
                document.getElementById("ticket-salon-location").textContent = salonName;
                document.getElementById("ticket-success-model").textContent = `${model.brand} ${model.ref}`;
                
                // Create unique allocation requisition code
                const randomRef = Math.floor(1000 + Math.random() * 9000);
                document.getElementById("ticket-reference-id").textContent = `REF-${currentWatchKey.toUpperCase()}-${randomRef}`;
                
                // Transition to success state
                form.classList.add("hidden");
                if (modalHeader) modalHeader.classList.add("hidden");
                if (successState) successState.classList.remove("hidden");
            }
        });
    }
}

// 10. Mobile Navigation Hamburger Menu Toggle
function setupMobileMenu() {
    const toggleBtn = document.getElementById("mobile-toggle-btn");
    const navLinks = document.getElementById("nav-links-menu");

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            
            const icon = toggleBtn.querySelector("span");
            if (navLinks.classList.contains("active")) {
                icon.textContent = "close";
            } else {
                icon.textContent = "menu";
            }
        });

        // Close menu when clicking link
        navLinks.querySelectorAll(".nav-item").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = toggleBtn.querySelector("span");
                if (icon) icon.textContent = "menu";
            });
        });
    }
}
