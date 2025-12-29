/**
 * WEDDING INVITATION - MAIN JAVASCRIPT
 * 
 * Features:
 * - Countdown timer (Days, Hours, Minutes, Seconds)
 * - Intersection Observer for scroll-based animations
 * - Lightbox gallery functionality
 * - Smooth scroll behavior
 * - Respects prefers-reduced-motion
 */

'use strict';

/* ==================== CONFIGURATION ==================== */
const CONFIG = {
    weddingDate: new Date('2025-12-24T05:30:00').getTime(),
    scrollAnimationDelay: 0.1, // seconds between staggered animations
};

/* ==================== COUNTDOWN TIMER ==================== */
class CountdownTimer {
    constructor(weddingDate) {
        this.weddingDate = weddingDate;
        this.init();
    }

    init() {
        // Update immediately
        this.update();
        // Update every second
        this.intervalId = setInterval(() => this.update(), 1000);
    }

    update() {
        const now = new Date().getTime();
        const timeRemaining = this.weddingDate - now;

        // Calculate time units
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        // Update DOM
        this.updateElement('countdown-days', days);
        this.updateElement('countdown-hours', hours);
        this.updateElement('countdown-minutes', minutes);
        this.updateElement('countdown-seconds', seconds);

        // Stop countdown when wedding has passed
        if (timeRemaining < 0) {
            clearInterval(this.intervalId);
            this.showCompletionMessage();
        }
    }

    updateElement(elementId, value) {
        const element = document.getElementById(elementId);
        if (element) {
            const newValue = String(value).padStart(2, '0');
            if (element.textContent !== newValue) {
                element.textContent = newValue;
                // Trigger slight animation on number change
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = 'pulse 0.6s ease';
                }, 10);
            }
        }
    }

    showCompletionMessage() {
        const countdownSection = document.getElementById('countdown');
        if (countdownSection) {
            const message = document.createElement('p');
            message.style.textAlign = 'center';
            message.style.fontSize = '1.3rem';
            message.style.color = 'var(--color-primary)';
            message.style.marginTop = '1rem';
            message.textContent = 'The wedding day has arrived! 🎉';
            countdownSection.querySelector('.container').appendChild(message);
        }
    }

    destroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}

/* ==================== SCROLL ANIMATIONS WITH INTERSECTION OBSERVER ==================== */
class ScrollAnimationManager {
    constructor() {
        this.elementsToAnimate = [];
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }

    init() {
        // Collect all scroll-animate elements
        this.elementsToAnimate = Array.from(document.querySelectorAll('.scroll-animate'));

        // Set initial state - if reduced motion, show all immediately
        if (this.reducedMotion) {
            this.elementsToAnimate.forEach(el => el.classList.add('is-visible'));
            return;
        }

        // Create Intersection Observer
        const options = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
                    // Add staggered delay for multiple elements
                    const delay = this.elementsToAnimate.includes(entry.target) 
                        ? this.elementsToAnimate.indexOf(entry.target) * CONFIG.scrollAnimationDelay 
                        : 0;
                    
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay * 1000);
                }
            });
        }, options);

        // Observe all elements
        this.elementsToAnimate.forEach(el => this.observer.observe(el));
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

/* ==================== LIGHTBOX GALLERY ==================== */
class LightboxGallery {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.currentIndex = 0;
        this.images = [];
        this.init();
    }

    init() {
        if (!this.lightbox) return;

        // Collect all gallery images
        const galleryItems = document.querySelectorAll('.gallery__item');
        this.images = Array.from(galleryItems).map(item => ({
            src: item.querySelector('img').src,
            alt: item.querySelector('img').alt
        }));

        // Setup event listeners
        this.setupGalleryListeners();
        this.setupLightboxListeners();
    }

    setupGalleryListeners() {
        document.querySelectorAll('.gallery__item').forEach((item) => {
            const index = item.getAttribute('data-index');
            item.addEventListener('click', () => this.open(parseInt(index)));
            
            // Keyboard and touch accessibility
            item.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.open(parseInt(index));
                }
            });
        });
    }

    setupLightboxListeners() {
        // Close button
        const closeBtn = this.lightbox.querySelector('.lightbox__close');
        closeBtn.addEventListener('click', () => this.close());

        // Navigation buttons
        const prevBtn = this.lightbox.querySelector('.lightbox__prev');
        const nextBtn = this.lightbox.querySelector('.lightbox__next');
        
        prevBtn.addEventListener('click', () => this.prev());
        nextBtn.addEventListener('click', () => this.next());

        // Overlay click to close
        const overlay = this.lightbox.querySelector('.lightbox__overlay');
        overlay.addEventListener('click', () => this.close());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    open(index) {
        this.currentIndex = index;
        this.updateImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }

    updateImage() {
        const image = this.images[this.currentIndex];
        this.lightboxImage.src = image.src;
        this.lightboxImage.alt = image.alt;
    }
}

/* ==================== SMOOTH SCROLL NAVIGATION ==================== */
class SmoothScrollNav {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                // Skip if href is just "#"
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

/* ==================== VIDEO PLAYER ==================== */
class VideoPlayer {
    constructor() {
        this.playButton = document.querySelector('.play-button');
        this.init();
    }

    init() {
        if (!this.playButton) return;

        this.playButton.addEventListener('click', () => {
            this.handlePlayClick();
        });

        // Keyboard accessibility
        this.playButton.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handlePlayClick();
            }
        });
    }

    handlePlayClick() {
        // Example: Open YouTube video in modal or redirect
        const videoId = 'example-video-id'; // Replace with actual video ID
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
        
        // Simple implementation: show alert or redirect
        alert('Video player would open here. Replace with your video URL.');
        // window.open(youtubeUrl, '_blank');
    }
}

/* ==================== LAZY LOADING IMAGES ==================== */
class LazyLoadImages {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const options = {
                rootMargin: '50px'
            };

            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('lazy-loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, options);

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

/* ==================== HERO BACKGROUND IMAGE ==================== */
class HeroBackground {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.init();
    }

    init() {
        if (!this.hero) return;

        // Set background with gradient fallback
        const bgImage = `
            linear-gradient(135deg, rgba(139, 71, 137, 0.3), rgba(212, 175, 55, 0.2)),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(212,175,55,0.1)" stroke-width="1"/></pattern></defs><rect width="1200" height="800" fill="%23E8D5C4"/><rect width="1200" height="800" fill="url(%23pattern)"/></svg>')
        `;
        
        const bgElement = this.hero.querySelector('.hero__background');
        bgElement.style.backgroundImage = bgImage;
    }
}

/* ==================== PARTICLE EFFECT (Optional) ==================== */
class ParticleEffect {
    constructor() {
        // Optional: Add subtle particle animations
        // This is minimal and only runs if performance allows
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!this.isReducedMotion) {
            this.init();
        }
    }

    init() {
        // This could add subtle animated elements
        // Currently kept minimal to avoid flashy effects
    }
}

/* ==================== MAIN APPLICATION ==================== */
class WeddingApp {
    constructor() {
        this.modules = [];
    }

    init() {
        console.log('🎉 Wedding Invitation App Initialized');

        // Initialize all modules
        this.modules.push(new CountdownTimer(CONFIG.weddingDate));
        this.modules.push(new ScrollAnimationManager());
        this.modules.push(new LightboxGallery());
        this.modules.push(new SmoothScrollNav());
        this.modules.push(new VideoPlayer());
        this.modules.push(new HeroBackground());
        this.modules.push(new ParticleEffect());

        // Setup performance monitoring in development
        this.setupPerformanceMonitoring();
    }

    setupPerformanceMonitoring() {
        if (window.performance && window.performance.timing) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const timing = window.performance.timing;
                    const loadTime = timing.loadEventEnd - timing.navigationStart;
                    console.log(`⏱️  Page loaded in ${loadTime}ms`);
                }, 0);
            });
        }
    }

    destroy() {
        this.modules.forEach(module => {
            if (module.destroy) module.destroy();
        });
    }
}

/* ==================== INITIALIZE ON DOM READY ==================== */
document.addEventListener('DOMContentLoaded', () => {
    const app = new WeddingApp();
    app.init();

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        app.destroy();
    });
});

/* ==================== UTILITY FUNCTIONS ==================== */

/**
 * Format date to readable string
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element
 * @returns {boolean}
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add event listener with debounce
 * @param {string} eventName
 * @param {Function} callback
 * @param {number} delay
 */
function debounce(callback, delay = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback.apply(this, args), delay);
    };
}

/* ==================== ACCESSIBILITY ENHANCEMENTS ==================== */

/**
 * Skip to main content on keyboard navigation
 */
function setupAccessibility() {
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--color-primary);
        color: white;
        padding: 8px;
        z-index: 100;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize accessibility features
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAccessibility);
} else {
    setupAccessibility();
}

/* ==================== ANALYTICS & TRACKING (Optional) ==================== */

/**
 * Track user interactions (implement your analytics service here)
 */
function trackEvent(eventName, eventData = {}) {
    // Example: Send to Google Analytics, Mixpanel, etc.
    console.log(`📊 Event: ${eventName}`, eventData);
}

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', debounce(() => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        if (maxScroll % 25 === 0) {
            trackEvent('scroll_depth', { depth: maxScroll });
        }
    }
}, 500));
