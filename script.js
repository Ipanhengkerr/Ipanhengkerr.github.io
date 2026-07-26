// ===================================
// JUJUTSU KAISEN PORTFOLIO - MAIN JS
// ===================================

// Motivational Quotes Database
const quotes = [
    { text: "Code is like humor. When you have to explain it, it's bad.", character: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", character: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", character: "Oscar Wilde" },
    { text: "In order to be irreplaceable, one must always be different.", character: "Coco Chanel" },
    { text: "The only way to do great work is to love what you do.", character: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", character: "Steve Jobs" },
    { text: "Simplicity is the soul of efficiency.", character: "Austin Freeman" },
    { text: "Make it work, make it right, make it fast.", character: "Kent Beck" },
    { text: "Clean code always looks like it was written by someone who cares.", character: "Robert C. Martin" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", character: "Martin Fowler" },
    { text: "Programming isn't about what you know; it's about what you can figure out.", character: "Chris Pine" },
    { text: "The best error message is the one that never shows up.", character: "Thomas Fuchs" },
    { text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", character: "Antoine de Saint-Exupery" },
    { text: "Code never lies, comments sometimes do.", character: "Ron Jeffries" }
];

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
    
    // Show quote
    elements.quoteDisplay.classList.add('active');
    
    // Hide after 3 seconds
    setTimeout(() => {
        elements.quoteDisplay.classList.remove('active');
        setTimeout(() => {
            state.isQuoteShowing = false;
        }, 400);
    }, 3000);
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

console.log('⚡ Portfolio System Active');
console.log('🔮 Interactive Features Ready');
