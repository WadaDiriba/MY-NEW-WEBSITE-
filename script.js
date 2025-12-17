// ==========================================================================
// CONFIGURATION OBJECT
// ==========================================================================

const CONFIG = {
    // Animation settings
    AOS: {
        duration: 1000,
        once: true,
        offset: 100
    },
    
    // Skills data (without percentages) - Keep for reference
    SKILLS: {
        frontend: [
            { name: 'HTML/CSS' },
            { name: 'JavaScript' },
            { name: 'React' },
            { name: 'Vue.js' },
            { name: 'Bootstrap' }
        ],
        mobile: [
            { name: 'Flutter' },
            { name: 'React Native' },
            { name: 'Dart' },
            { name: 'Kotlin' },
            { name: 'SQLite' },
            { name: 'Hive' },
            { name: 'Supabase' },
            { name: 'Room Database' },
            { name: 'Firebase' }
        ],
        backend: [
            { name: 'Node.js' },
            { name: 'Python' },
            { name: 'MySQL' },
            { name: 'MongoDB' },
            { name: 'REST APIs' },
            { name: 'GraphQL' },
            { name: 'PHP' },
            { name: 'Java' },
            { name: 'C++' }
        ],
        tools: [
            { name: 'Git' },
            { name: 'Figma' },
            { name: 'VS Code' },
            { name: 'Postman' },
            { name: 'Android Studio' },
            { name: 'Xcode' },
            { name: 'Arduino' },
            { name: 'JetBrains' }
        ],
    },

    // Portfolio data
    PORTFOLIO: [
        {
            title: 'AI Health Assistant App',
            description: 'Health assistant for medical recommendations',
            image: 'img/AIPhoto.jpg',
            tags: ['Flutter', 'Dart', 'Firebase', 'OpenAI'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'E-Book Library',
            description: 'Digital book conversion and library management',
            image: 'img/EBOOK.jpg',
            tags: ['Flutter', 'Dart', 'HIVE', 'SQLite'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Global Translator App',
            description: 'Multi-language translation application',
            image: 'img/Global.jpg',
            tags: ['Flutter', 'Firebase', 'API'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Certificate Management System',
            description: 'Certificate production system for local administration',
            image: '',
            tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
            category: 'web',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Weather Forecast App',
            description: 'Location-based weather application',
            image: 'img/forecast.jpg',
            tags: ['Flutter', 'API', 'Google Maps'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Orochat App',
            description: 'Real-time social chat application',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
            tags: ['Flutter', 'Firebase'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Hotspot Scanner',
            description: 'Mobile hotspot scanning and security application',
            image: 'img/scanner.jpg',
            tags: ['Kotlin', 'Flutter', 'Firebase'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Ethiopia Diaspora',
            description: 'Connecting diaspora with development activities',
            image: 'img/diaspora.jpg',
            tags: ['Flutter', 'FASTAPI'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Gebeyakoo',
            description: 'World currency converter with multiple languages',
            image: 'img/gebeyakoo.jpg',
            tags: ['Flutter', 'Firebase', 'API'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Object Detector',
            description: 'Real-time object detection application',
            image: 'img/object.png',
            tags: ['Flutter', 'TensorFlow', 'MLKit'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        },
        {
            title: 'Reminder App',
            description: 'Student alarm and schedule management system',
            image: 'img/ALARM.jpg',
            tags: ['Flutter', 'Firebase'],
            category: 'mobile',
            links: { demo: '#', code: '#' }
        }
    ]
};

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================

const DOM = {
    loading: document.getElementById('loading'),
    cursorDot: document.getElementById('cursor-dot'),
    cursorOutline: document.getElementById('cursor-outline'),
    menuToggle: document.getElementById('menu-toggle'),
    navList: document.querySelector('.nav-list'),
    themeToggle: document.getElementById('theme-toggle'),
    backToTop: document.getElementById('backToTop'),
    contactForm: document.getElementById('contactForm'),
    successMessage: document.getElementById('successMessage'),
    navLinks: document.querySelectorAll('.nav-link'),
    sections: document.querySelectorAll('section'),
    portfolioGrid: document.querySelector('.portfolio-grid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    skillsCategories: document.querySelectorAll('.category'),
    skillCategoryContents: document.querySelectorAll('.skill-category-content')
};

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================

const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - offset) &&
            rect.bottom >= 0
        );
    },

    // Preload images
    preloadImages(images) {
        images.forEach(src => {
            if (src) {
                const img = new Image();
                img.src = src;
            }
        });
    }
};

// ==========================================================================
// CORE FUNCTIONALITY
// ==========================================================================

class PortfolioApp {
    constructor() {
        this.isMenuOpen = false;
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.activeFilter = 'all';
        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.initAOS();
        this.initLoadingScreen();
        this.initCustomCursor();
        this.initTheme();
        this.initNavigation();
        this.initSkills();
        this.initPortfolio();
        this.initContactForm();
        this.initScrollEffects();
        this.initTextAnimation();
    }

    // ==========================================================================
    // INITIALIZATION METHODS
    // ==========================================================================

    setupEventListeners() {
        // Window events
        window.addEventListener('resize', Utils.throttle(() => this.handleResize(), 200));
        window.addEventListener('error', (e) => console.log('Script error:', e.message));
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
        document.addEventListener('mousedown', () => document.body.classList.remove('keyboard-navigation'));
    }

    initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init(CONFIG.AOS);
        }
    }

    initLoadingScreen() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                DOM.loading.classList.add('hidden');
            }, 500);
        });
    }

    initCustomCursor() {
        if (!DOM.cursorDot || !DOM.cursorOutline || window.innerWidth <= 768) {
            if (DOM.cursorDot) DOM.cursorDot.style.display = 'none';
            if (DOM.cursorOutline) DOM.cursorOutline.style.display = 'none';
            return;
        }

        document.addEventListener('mousemove', (e) => {
            DOM.cursorDot.style.left = `${e.clientX}px`;
            DOM.cursorDot.style.top = `${e.clientY}px`;
            DOM.cursorOutline.style.left = `${e.clientX}px`;
            DOM.cursorOutline.style.top = `${e.clientY}px`;
        });

        // Interactive elements hover effect
        const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .service-card, .portfolio-item, .category');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                DOM.cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                DOM.cursorOutline.style.opacity = '0.8';
            });
            
            element.addEventListener('mouseleave', () => {
                DOM.cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                DOM.cursorOutline.style.opacity = '0.5';
            });
        });

        // Mouse down/up effects
        document.addEventListener('mousedown', () => {
            DOM.cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            DOM.cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.2)';
        });

        document.addEventListener('mouseup', () => {
            DOM.cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            DOM.cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            DOM.cursorDot.style.opacity = '0';
            DOM.cursorOutline.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            DOM.cursorDot.style.opacity = '1';
            DOM.cursorOutline.style.opacity = '1';
        });
    }

    initTheme() {
        if (!DOM.themeToggle) return;

        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Set initial theme
        if (this.currentTheme === 'light' || (!this.currentTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('light-theme');
            DOM.themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
        } else {
            DOM.themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
        }

        // Theme toggle
        DOM.themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            
            if (document.body.classList.contains('light-theme')) {
                DOM.themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
                localStorage.setItem('theme', 'light');
                this.currentTheme = 'light';
            } else {
                DOM.themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
                localStorage.setItem('theme', 'dark');
                this.currentTheme = 'dark';
            }
        });
    }

    initNavigation() {
        // Mobile menu toggle
        if (DOM.menuToggle && DOM.navList) {
            DOM.menuToggle.addEventListener('click', () => {
                this.isMenuOpen = !this.isMenuOpen;
                DOM.menuToggle.classList.toggle('active');
                DOM.navList.classList.toggle('active');
                document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
            });

            // Close menu on link click
            DOM.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        this.isMenuOpen = false;
                        DOM.menuToggle.classList.remove('active');
                        DOM.navList.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active navigation link
        window.addEventListener('scroll', Utils.throttle(() => {
            let current = '';
            DOM.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            DOM.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 100));
    }

    // ==========================================================================
    // SKILLS SECTION (UPDATED FOR HARDCODED HTML)
    // ==========================================================================

    initSkills() {
        if (!DOM.skillsCategories.length) return;

        // Skill category switching
        DOM.skillsCategories.forEach(category => {
            category.addEventListener('click', () => {
                const categoryName = category.getAttribute('data-category');
                
                // Update active category
                DOM.skillsCategories.forEach(cat => cat.classList.remove('active'));
                category.classList.add('active');
                
                // Update skill display (show the selected content)
                this.showSkillCategory(categoryName);
            });
        });

        // Animate skill graphs when they come into view
        setTimeout(() => this.animateSkillGraphs(), 500);
        
        // Observer for animation triggers
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkillGraphs();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const skillsSection = document.querySelector('.skills');
        if (skillsSection) skillsObserver.observe(skillsSection);
    }

    showSkillCategory(categoryName) {
        // Hide all skill category contents
        DOM.skillCategoryContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Show selected category content
        const targetContent = document.getElementById(categoryName);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }

    // Removed the renderSkills function since HTML is hardcoded

    animateSkillGraphs() {
        // Animate level dots
        const levelDots = document.querySelectorAll('.level-dot');
        levelDots.forEach(dot => {
            dot.style.animation = 'pulse 2s ease-in-out infinite';
        });

        // Animate skill items
        const skillItems = document.querySelectorAll('.skill-item, .graph-item');
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'skillItemAppear 0.6s ease forwards';
            }, index * 100);
        });
    }

    // ==========================================================================
    // PORTFOLIO SECTION
    // ==========================================================================

    initPortfolio() {
        if (!DOM.portfolioGrid || !DOM.filterBtns.length) return;

        // Portfolio filtering
        DOM.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update active button
                DOM.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects with animation
                this.filterPortfolio(filter);
            });
        });

        // Initial render
        this.renderPortfolio();
    }

    renderPortfolio() {
        if (!DOM.portfolioGrid) return;
        
        DOM.portfolioGrid.innerHTML = CONFIG.PORTFOLIO.map(project => `
            <div class="portfolio-item" data-category="${project.category}">
                <div class="portfolio-img">
                    <img src="${project.image || 'img/default.jpg'}" alt="${project.title}" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="overlay-content">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                            <div class="portfolio-actions">
                                <a href="${project.links.demo}" class="portfolio-action" target="_blank" aria-label="View Demo">
                                    <i class='bx bx-link-external'></i>
                                </a>
                                <a href="${project.links.code}" class="portfolio-action" target="_blank" aria-label="View Code">
                                    <i class='bx bxl-github'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="portfolio-tags">
                        ${project.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="portfolio-links">
                        <a href="${project.links.demo}" class="portfolio-link" target="_blank">
                            <i class='bx bx-link-external'></i>
                            <span>Live Demo</span>
                        </a>
                        <a href="${project.links.code}" class="portfolio-link github" target="_blank">
                            <i class='bx bxl-github'></i>
                            <span>Source Code</span>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    filterPortfolio(filter) {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        // Add loading state
        if (DOM.portfolioGrid) {
            DOM.portfolioGrid.style.opacity = '0.5';
            DOM.portfolioGrid.style.transition = 'opacity 0.3s ease';
        }
        
        setTimeout(() => {
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
            
            if (DOM.portfolioGrid) {
                DOM.portfolioGrid.style.opacity = '1';
            }
        }, 300);
    }

    // ==========================================================================
    // CONTACT FORM
    // ==========================================================================

    initContactForm() {
        if (!DOM.contactForm) return;

        // Form submission
        DOM.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendEmail();
        });

        // Form interactions
        this.initContactFormInteractions();
    }

    initContactFormInteractions() {
        const inputs = DOM.contactForm?.querySelectorAll('input, textarea, select');
        if (!inputs) return;
        
        inputs.forEach(input => {
            // Real-time validation
            input.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    this.classList.add('has-value');
                } else {
                    this.classList.remove('has-value');
                }
            });

            // Focus effects
            input.addEventListener('focus', function() {
                this.parentElement?.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.parentElement?.classList.remove('focused');
                }
            });
        });
    }

    sendEmail() {
        const submitBtn = DOM.contactForm?.querySelector('button[type="submit"]');
        if (!submitBtn) return;
        
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(DOM.contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Simulate email sending (replace with actual email service)
        setTimeout(() => {
            this.showSuccessMessage();
            
            // Reset button
            submitBtn.classList.remove('loading');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Open email client
            this.sendToActualEmail(data);
        }, 2000);
    }

    showSuccessMessage() {
        if (!DOM.successMessage || !DOM.contactForm) return;
        
        DOM.contactForm.style.opacity = '0';
        DOM.contactForm.style.visibility = 'hidden';
        DOM.successMessage.classList.add('show');
    }

    sendToActualEmail(data) {
        const mailtoLink = `mailto:wedadiriba@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(data.subject)}&body=Name: ${encodeURIComponent(data.name)}%0AEmail: ${encodeURIComponent(data.email)}%0A%0AMessage:%0A${encodeURIComponent(data.message)}%0A%0ASent from your portfolio website`;
        window.open(mailtoLink, '_blank');
    }

    resetForm() {
        if (!DOM.successMessage || !DOM.contactForm) return;
        
        DOM.successMessage.classList.remove('show');
        DOM.contactForm.style.opacity = '1';
        DOM.contactForm.style.visibility = 'visible';
        DOM.contactForm.reset();
    }

    // ==========================================================================
    // ANIMATIONS & EFFECTS
    // ==========================================================================

    initTextAnimation() {
        const textWrapper = document.querySelector('.letters');
        if (!textWrapper) return;
        
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        const letters = textWrapper.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            letter.style.opacity = '0';
            letter.style.transform = 'translateY(20px)';
            setTimeout(() => {
                letter.style.transition = 'all 0.5s ease';
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0)';
            }, 100 + (index * 50));
        });
    }

    initScrollEffects() {
        // Back to top button
        if (DOM.backToTop) {
            window.addEventListener('scroll', Utils.throttle(() => {
                if (window.pageYOffset > 300) {
                    DOM.backToTop.classList.add('show');
                } else {
                    DOM.backToTop.classList.remove('show');
                }
            }, 100));

            DOM.backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Counter animations
        const counters = document.querySelectorAll('.stat-number');
        if (counters.length) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            const statsSection = document.querySelector('.home-stats');
            if (statsSection) observer.observe(statsSection);
        }
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            if (isNaN(target)) return;
            
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }

    // ==========================================================================
    // EVENT HANDLERS
    // ==========================================================================

    handleResize() {
        // Mobile adjustments
        if (window.innerWidth < 768) {
            document.body.classList.add('mobile-view');
            // Close menu if open during resize to desktop
            if (this.isMenuOpen && window.innerWidth >= 768) {
                this.isMenuOpen = false;
                if (DOM.menuToggle) DOM.menuToggle.classList.remove('active');
                if (DOM.navList) DOM.navList.classList.remove('active');
                document.body.style.overflow = '';
            }
        } else {
            document.body.classList.remove('mobile-view');
        }
    }

    handleVisibilityChange() {
        // Handle page visibility changes if needed
    }

    handleKeydown(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && this.isMenuOpen) {
            this.isMenuOpen = false;
            if (DOM.menuToggle) DOM.menuToggle.classList.remove('active');
            if (DOM.navList) DOM.navList.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Tab key navigation improvements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    }
}

// ==========================================================================
// INITIALIZE APPLICATION
// ==========================================================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    const app = new PortfolioApp();
    
    // Expose resetForm for global access (from HTML onclick)
    window.resetForm = () => app.resetForm();
    
    // Preload important images
    const imagesToPreload = CONFIG.PORTFOLIO
        .map(project => project.image)
        .filter(img => img && img.startsWith('img/'));
    
    Utils.preloadImages(imagesToPreload);
});

// Handle errors gracefully
window.addEventListener('error', function(e) {
    console.error('Global error:', e.message);
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    .btn.loading {
        position: relative;
        pointer-events: none;
    }
    
    .btn.loading span {
        visibility: hidden;
    }
    
    .btn.loading i {
        animation: spin 1s linear infinite;
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    .mobile-view .floating-elements {
        display: none;
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.2);
            opacity: 1;
        }
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;

document.head.appendChild(style);