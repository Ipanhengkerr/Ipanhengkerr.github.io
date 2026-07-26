// ===================================
// JUJUTSU KAISEN PORTFOLIO - MAIN JS
// ===================================

// Motivational Quotes Database - Jujutsu Kaisen Characters
const quotes = [
    { 
        text: "Terkuat itu menyedihkan, bukan? Karena tidak ada yang bisa memahami orang terkuat.", 
        character: "Gojo Satoru",
        characterId: "gojo",
        characterImage: ""
    },
    { 
        text: "Aku sendirian yang paling kuat. Tapi, aku ingin murid-muridku bisa berdiri di sampingku.", 
        character: "Gojo Satoru",
        characterId: "gojo",
        characterImage: ""
    },
    { 
        text: "Jangan khawatir. Aku yang terkuat.", 
        character: "Gojo Satoru",
        characterId: "gojo",
        characterImage: ""
    },
    { 
        text: "Apakah kau punya waktu luang? Saat itulah manusia merenungkan hal-hal yang tidak perlu.", 
        character: "Gojo Satoru",
        characterId: "gojo",
        characterImage: ""
    },
    { 
        text: "Ketahuilah tempatmu, bocah.", 
        character: "Ryomen Sukuna",
        characterId: "sukuna",
        characterImage: ""
    },
    { 
        text: "Kau pikir berdiri di puncak membuatmu kuat? Menyedihkan.", 
        character: "Ryomen Sukuna",
        characterId: "sukuna",
        characterImage: ""
    },
    { 
        text: "Aku adalah api. Aku bukan sesuatu yang bisa kau padamkan begitu saja.", 
        character: "Ryomen Sukuna",
        characterId: "sukuna",
        characterImage: ""
    },
    { 
        text: "Aku bukan pahlawan. Tapi setidaknya, aku tidak ingin menjadi orang yang menyesal karena tidak bertindak.", 
        character: "Itadori Yuji",
        characterId: "yuji",
        characterImage: ""
    },
    { 
        text: "Aku ingin mati dikelilingi orang-orang. Aku tidak ingin ada orang yang mati sendirian.", 
        character: "Itadori Yuji",
        characterId: "yuji",
        characterImage: ""
    },
    { 
        text: "Kakekku bilang, aku harus menolong orang lain. Karena aku kuat.", 
        character: "Itadori Yuji",
        characterId: "yuji",
        characterImage: ""
    },
    { 
        text: "Aku tidak akan menyerah. Bahkan kalau aku harus mati, aku akan menyelamatkan mereka.", 
        character: "Fushiguro Megumi",
        characterId: "megumi",
        characterImage: ""
    },
    { 
        text: "Aku tidak menyelamatkan orang karena itu benar. Aku menyelamatkan orang yang pantas diselamatkan.", 
        character: "Fushiguro Megumi",
        characterId: "megumi",
        characterImage: ""
    },
    { 
        text: "Kalau aku harus mati, aku akan mati dengan caraku sendiri!", 
        character: "Kugisaki Nobara",
        characterId: "nobara",
        characterImage: ""
    },
    { 
        text: "Jangan meremehkanku! Aku bukan tipe orang yang akan mundur hanya karena lawannya kuat!", 
        character: "Kugisaki Nobara",
        characterId: "nobara",
        characterImage: ""
    },
    { 
        text: "Kerja lembur adalah kejahatan. Aku bekerja untuk hidup, bukan hidup untuk bekerja.", 
        character: "Nanami Kento",
        characterId: "nanami",
        characterImage: ""
    },
    { 
        text: "Orang dewasa seharusnya melindungi anak-anak. Itu bukan soal kuat atau lemah.", 
        character: "Nanami Kento",
        characterId: "nanami",
        characterImage: ""
    }
];

// Character visual themes with actual character images
const characterThemes = {
    gojo: {
        gradient: 'radial-gradient(circle at 70% 50%, rgba(69, 176, 210, 0.4) 0%, rgba(86, 74, 148, 0.2) 40%, transparent 70%)',
        image: 'assets/characters/gojo.jpg',
        glowColor: 'rgba(69, 176, 210, 0.6)',
        style: 'color: rgba(69, 176, 210, 0.8); text-shadow: 0 0 80px rgba(69, 176, 210, 0.8);'
    },
    sukuna: {
        gradient: 'radial-gradient(circle at 30% 50%, rgba(220, 20, 60, 0.4) 0%, rgba(139, 0, 0, 0.2) 40%, transparent 70%)',
        image: 'assets/characters/sukuna.jpg',
        glowColor: 'rgba(220, 20, 60, 0.6)',
        style: 'color: rgba(220, 20, 60, 0.8); text-shadow: 0 0 80px rgba(220, 20, 60, 0.8);'
    },
    yuji: {
        gradient: 'radial-gradient(circle at 50% 50%, rgba(220, 20, 60, 0.3) 0%, rgba(255, 69, 0, 0.2) 40%, transparent 70%)',
        image: 'assets/characters/yuji.jpg',
        glowColor: 'rgba(255, 69, 0, 0.5)',
        style: 'color: rgba(220, 20, 60, 0.7); text-shadow: 0 0 60px rgba(220, 20, 60, 0.7);'
    },
    megumi: {
        gradient: 'radial-gradient(circle at 50% 50%, rgba(86, 74, 148, 0.4) 0%, rgba(72, 61, 139, 0.2) 40%, transparent 70%)',
        image: 'assets/characters/megumi.jpg',
        glowColor: 'rgba(86, 74, 148, 0.6)',
        style: 'color: rgba(86, 74, 148, 0.8); text-shadow: 0 0 70px rgba(86, 74, 148, 0.8);'
    },
    nobara: {
        gradient: 'radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.4) 0%, rgba(255, 99, 71, 0.2) 40%, transparent 70%)',
        image: 'assets/characters/nobara.jpg',
        glowColor: 'rgba(255, 140, 0, 0.6)',
        style: 'color: rgba(255, 140, 0, 0.8); text-shadow: 0 0 70px rgba(255, 140, 0, 0.8);'
    },
    nanami: {
        gradient: 'radial-gradient(circle at 60% 50%, rgba(218, 165, 32, 0.4) 0%, rgba(184, 134, 11, 0.2) 40%, transparent 70%)',
        image: '',
        cssOnly: true,
        glowColor: 'rgba(218, 165, 32, 0.6)',
        style: 'color: rgba(218, 165, 32, 0.8); text-shadow: 0 0 70px rgba(218, 165, 32, 0.8);'
    }
};

// State Management
const state = {
    currentDepth: 0,
    lastScrollY: 0,
    isQuoteShowing: false,
    shownQuotes: []
};

// DOM Elements
const elements = {
    navbar: null,
    hamburger: null,
    navMenu: null,
    depthIndicator: null,
    domainExpansion: null,
    quoteDisplay: null,
    particleCanvas: null,
    sections: []
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

// Hide loading screen when page fully loaded
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    }
});

function init() {
    console.log('🔮 Initializing Portfolio...');
    
    // Cache DOM elements
    cacheElements();
    
    // Initialize features
    initNavigation();
    initScrollAnimations();
    initDepthTracking();
    initFilterTabs();
    initDomainExpansion();
    initParticleSystem();
    
    console.log('✅ Portfolio Ready!');
}

// Cache DOM Elements
function cacheElements() {
    elements.navbar = document.getElementById('navbar');
    elements.hamburger = document.getElementById('hamburger');
    elements.navMenu = document.getElementById('nav-menu');
    elements.depthIndicator = document.getElementById('depth-indicator');
    elements.domainExpansion = document.getElementById('domain-expansion');
    elements.quoteDisplay = document.getElementById('quote-display');
    elements.characterOverlay = document.getElementById('character-overlay');
    elements.particleCanvas = document.getElementById('particle-canvas');
    elements.sections = document.querySelectorAll('.section');
}


// ===================================
// NAVIGATION
// ===================================
function initNavigation() {
    // Hamburger menu toggle
    if (elements.hamburger && elements.navMenu) {
        elements.hamburger.addEventListener('click', toggleMenu);
    }
    
    // Close menu when link clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (elements.navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleMenu() {
    elements.hamburger.classList.toggle('active');
    elements.navMenu.classList.toggle('active');
}

function handleNavbarScroll() {
    if (window.scrollY > 100) {
        elements.navbar.classList.add('scrolled');
    } else {
        elements.navbar.classList.remove('scrolled');
    }
}


// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Trigger quote on section entry (randomly)
                if (entry.target.classList.contains('section-title') && Math.random() > 0.6) {
                    showRandomQuote();
                }
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
}

// ===================================
// DEPTH TRACKING
// ===================================
function initDepthTracking() {
    const depthObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const depth = entry.target.getAttribute('data-depth');
                updateDepth(depth);
            }
        });
    }, { threshold: 0.5 });
    
    elements.sections.forEach(section => {
        if (section.hasAttribute('data-depth')) {
            depthObserver.observe(section);
        }
    });
}

function updateDepth(depth) {
    if (state.currentDepth !== depth) {
        state.currentDepth = depth;
        const depthValue = elements.depthIndicator.querySelector('.depth-value');
        if (depthValue) {
            depthValue.textContent = `${depth}m`;
            // Animate depth change
            depthValue.style.transform = 'scale(1.3)';
            setTimeout(() => {
                depthValue.style.transform = 'scale(1)';
            }, 300);
        }
    }
}


// ===================================
// FILTER TABS
// ===================================
function initFilterTabs() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            const parentSection = this.closest('.section');
            
            // Update active button
            parentSection.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            let items = [];
            if (parentSection.querySelector('.credentials-grid')) {
                items = parentSection.querySelectorAll('.credential-card');
            } else if (parentSection.querySelector('.projects-grid')) {
                items = parentSection.querySelectorAll('.project-card');
            }
            
            items.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}


// ===================================
// DOMAIN EXPANSION EFFECT
// ===================================
function initDomainExpansion() {
    const triggers = document.querySelectorAll('[data-domain-trigger]');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Don't trigger for nav links
            if (!trigger.classList.contains('nav-link')) {
                triggerDomainExpansion();
            }
        });
    });
}

function triggerDomainExpansion() {
    if (!elements.domainExpansion) return;
    
    // Activate domain expansion
    elements.domainExpansion.classList.add('active');
    
    // Show quote during expansion
    setTimeout(() => {
        showRandomQuote();
    }, 400);
    
    // Deactivate after animation
    setTimeout(() => {
        elements.domainExpansion.classList.remove('active');
    }, 1200);
}

// ===================================
// QUOTE SYSTEM
// ===================================
function showRandomQuote() {
    if (state.isQuoteShowing || !elements.quoteDisplay) return;
    
    // Get a quote that hasn't been shown recently
    let quote;
    if (state.shownQuotes.length >= quotes.length) {
        state.shownQuotes = []; // Reset if all shown
    }
    
    do {
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (state.shownQuotes.includes(quote.text));
    
    state.shownQuotes.push(quote.text);
    state.isQuoteShowing = true;
    
    // Update quote content
    const quoteText = elements.quoteDisplay.querySelector('.quote-text');
    const quoteAuthor = elements.quoteDisplay.querySelector('.quote-author');
    
    if (quoteText && quoteAuthor) {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `— ${quote.character}`;
    }
    
    // Show character background
    showCharacterBackground(quote.characterId);
    
    // Show quote
    elements.quoteDisplay.classList.add('active');
    
    // Hide after 3 seconds
    setTimeout(() => {
        elements.quoteDisplay.classList.remove('active');
        hideCharacterBackground();
        setTimeout(() => {
            state.isQuoteShowing = false;
        }, 400);
    }, 3000);
}

// ===================================
// CHARACTER BACKGROUND DISPLAY
// ===================================
function showCharacterBackground(characterId) {
    if (!elements.characterOverlay) return;
    
    const theme = characterThemes[characterId];
    if (!theme) return;
    
    const characterImage = elements.characterOverlay.querySelector('.character-image');
    
    // Remove all character classes
    elements.characterOverlay.className = 'character-overlay';
    
    // Add character-specific class
    elements.characterOverlay.classList.add(characterId);
    
    // Apply actual character image as background
    if (characterImage) {
        if (theme.cssOnly) {
            // CSS-only mode for Nanami — golden ratio geometric lines
            characterImage.style.background = theme.gradient;
            characterImage.innerHTML = `
            <div class="nanami-geo-container">
                <div class="nanami-line nanami-line-1"></div>
                <div class="nanami-line nanami-line-2"></div>
                <div class="nanami-line nanami-line-3"></div>
                <div class="nanami-line nanami-line-4"></div>
                <div class="nanami-line nanami-line-5"></div>
                <div class="nanami-line nanami-line-6"></div>
                <div class="nanami-ratio">7 : 3</div>
                <div class="nanami-circle nanami-circle-1"></div>
                <div class="nanami-circle nanami-circle-2"></div>
            </div>
            <div style="
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: radial-gradient(ellipse at center, transparent 20%, rgba(10, 14, 26, 0.9) 100%);
                pointer-events: none;
            "></div>`;
        } else {
            // Image mode for other characters
            const img = new Image();
            img.src = theme.image;
            
            characterImage.style.backgroundImage = `${theme.gradient}, url('${theme.image}')`;
            characterImage.style.backgroundSize = 'cover';
            characterImage.style.backgroundPosition = 'center';
            characterImage.style.backgroundRepeat = 'no-repeat';
            
            characterImage.innerHTML = `<div style="
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: radial-gradient(ellipse at center, transparent 30%, rgba(10, 14, 26, 0.85) 100%);
                pointer-events: none;
            "></div>
            <div style="
                position: absolute; bottom: 0; left: 0; width: 100%; height: 40%;
                background: linear-gradient(to top, rgba(10, 14, 26, 1) 0%, transparent 100%);
                pointer-events: none;
            "></div>
            <div style="
                position: absolute; top: 0; left: 0; width: 100%; height: 30%;
                background: linear-gradient(to bottom, rgba(10, 14, 26, 0.8) 0%, transparent 100%);
                pointer-events: none;
            "></div>`;
        }
    }
    
    // Show overlay with smooth animation
    elements.characterOverlay.classList.add('active');
}

function hideCharacterBackground() {
    if (!elements.characterOverlay) return;
    
    elements.characterOverlay.classList.remove('active');
    
    // Clean up after fade-out animation completes
    setTimeout(() => {
        elements.characterOverlay.className = 'character-overlay';
        const characterImage = elements.characterOverlay.querySelector('.character-image');
        if (characterImage) {
            characterImage.style.backgroundImage = '';
            characterImage.innerHTML = '';
        }
    }, 800);
}



// ===================================
// PARTICLE SYSTEM (CURSED ENERGY)
// ===================================
function initParticleSystem() {
    if (!elements.particleCanvas) return;
    
    const canvas = elements.particleCanvas;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
            this.opacity = Math.random();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -10;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * 0.5 + 0.2;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.opacity = 0;
            this.fadeSpeed = Math.random() * 0.01 + 0.005;
            
            // Color variations (blue, purple, teal)
            const colors = [
                'rgba(69, 176, 210',      // Gojo blue
                'rgba(86, 74, 148',       // Purple
                'rgba(0, 206, 209',       // Cursed teal
                'rgba(220, 20, 60'        // Sukuna red (rare)
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Fade in/out
            if (this.opacity < 1) {
                this.opacity += this.fadeSpeed;
            }
            
            // Reset if out of bounds
            if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
                this.reset();
            }
        }
        
        draw() {
            ctx.fillStyle = `${this.color}, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = `${this.color}, ${this.opacity})`;
        }
    }
    
    // Create particles
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===================================
// MUSIC PLAYER
// ===================================
function initMusicPlayer() {
    const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle');
    const player = document.getElementById('music-player');
    const progress = document.getElementById('music-progress');
    const volumeSlider = document.getElementById('music-volume');
    
    if (!audio || !toggleBtn) return;
    
    // Set initial volume
    audio.volume = 0.3;
    
    function startPlaying() {
        audio.play().then(() => {
            toggleBtn.querySelector('.music-icon-play').style.display = 'none';
            toggleBtn.querySelector('.music-icon-pause').style.display = 'inline';
            player.classList.add('playing', 'expanded');
            // Collapse after 3 seconds
            setTimeout(() => {
                player.classList.remove('expanded');
            }, 3000);
        }).catch(err => {
            console.log('Audio play blocked:', err);
        });
    }
    
    function stopPlaying() {
        audio.pause();
        toggleBtn.querySelector('.music-icon-play').style.display = 'inline';
        toggleBtn.querySelector('.music-icon-pause').style.display = 'none';
        player.classList.remove('playing');
    }
    
    // Auto-play on first user interaction (click/touch anywhere)
    let hasAutoPlayed = false;
    
    function autoPlayOnInteraction() {
        if (hasAutoPlayed) return;
        
        audio.play().then(() => {
            hasAutoPlayed = true;
            toggleBtn.querySelector('.music-icon-play').style.display = 'none';
            toggleBtn.querySelector('.music-icon-pause').style.display = 'inline';
            player.classList.add('playing', 'expanded');
            setTimeout(() => {
                player.classList.remove('expanded');
            }, 3000);
            // Only remove listeners after successful play
            document.removeEventListener('click', autoPlayOnInteraction);
            document.removeEventListener('touchstart', autoPlayOnInteraction);
            document.removeEventListener('keydown', autoPlayOnInteraction);
        }).catch(err => {
            // Keep listeners alive so next real interaction can try again
            console.log('Audio play attempt, waiting for interaction...');
        });
    }
    
    // Only use click/touch/keydown — browsers trust these as real interactions
    document.addEventListener('click', autoPlayOnInteraction);
    document.addEventListener('touchstart', autoPlayOnInteraction);
    document.addEventListener('keydown', autoPlayOnInteraction);
    
    // Manual Play/Pause toggle
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent double-trigger with autoplay listener
        if (audio.paused) {
            startPlaying();
        } else {
            stopPlaying();
        }
    });
    
    // Update progress bar
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            if (progress) progress.style.width = percent + '%';
        }
    });
    
    // Click on progress bar to seek
    const progressBar = document.querySelector('.music-progress-bar');
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            e.stopPropagation();
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audio.currentTime = percent * audio.duration;
        });
    }
    
    // Volume control
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value / 100;
        });
    }
    
    console.log('🎵 Music Player Ready (auto-play on first interaction)');
}

// Add music player to init
const originalInit = init;
window.addEventListener('DOMContentLoaded', () => {
    initMusicPlayer();
});

console.log('⚡ Portfolio System Active');
console.log('🔮 Interactive Features Ready');
