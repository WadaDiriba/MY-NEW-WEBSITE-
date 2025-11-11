// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading Screen
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 2000);
});

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6366f1'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Custom Cursor
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

if (cursorDot && cursorOutline) {
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });

    document.addEventListener('mouseup', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .service-card, .portfolio-item, .category');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.opacity = '0.8';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.opacity = '0.5';
        });
    });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    // Check for saved theme preference or prefer-color-scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light' || (!currentTheme && prefersDarkScheme.matches)) {
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Skills Data
// Skills Data - Updated with Mobile Databases
const skillsData = {
    frontend: [
        { name: 'HTML/CSS', percentage: 85 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'React', percentage: 75 },
        { name: 'Vue.js', percentage: 70 },
        { name: 'Bootstrap', percentage: 85 }
    ],
    mobile: [
        { name: 'Flutter', percentage: 85 },
        { name: 'React Native', percentage: 80 },
        { name: 'Dart', percentage: 90 },
        { name: 'Kotlin', percentage: 70 },
        { name: 'SQLite', percentage: 85 },
        { name: 'Hive', percentage: 75 },
        { name: 'Supabase', percentage: 80 },
        { name: 'Room Database', percentage: 70 },
        { name: 'Firebase', percentage: 80 }
    ],
    backend: [
        { name: 'Node.js', percentage: 75 },
        { name: 'Python', percentage: 75 },
        { name: 'MySQL', percentage: 80 },
        { name: 'MongoDB', percentage: 70 },
        { name: 'REST APIs', percentage: 85 },
        { name: 'GraphQL', percentage: 65 }
    ],
    tools: [
        { name: 'Git', percentage: 85 },
        { name: 'Docker', percentage: 60 },
        { name: 'Figma', percentage: 75 },
        { name: 'VS Code', percentage: 90 },
        { name: 'Postman', percentage: 80 },
        { name: 'Android Studio', percentage: 85 },
        { name: 'Xcode', percentage: 65 }
    ]
};
// Animate circular progress bars
function animateCircularProgress() {
    const graphItems = document.querySelectorAll('.graph-item');
    
    graphItems.forEach(item => {
        const percentage = item.getAttribute('data-percentage');
        const circle = item.querySelector('.graph-circle');
        const percentageDisplay = item.querySelector('.graph-percentage');
        
        // Set CSS custom property for conic gradient
        circle.style.setProperty('--progress', `${percentage}%`);
        
        // Animate percentage counter
        let current = 0;
        const duration = 2000;
        const increment = percentage / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= percentage) {
                current = percentage;
                clearInterval(timer);
            }
            percentageDisplay.textContent = Math.floor(current) + '%';
        }, 16);
    });
}

// Update skills display for circular progress
function populateSkills(category) {
    const container = document.getElementById(category);
    const skills = skillsData[category];
    
    container.innerHTML = skills.map(skill => {
        const level = getSkillLevel(skill.percentage);
        return `
            <div class="skill-item">
                <div class="skill-progress-circle">
                    <div class="skill-circle-bg" style="--progress: ${skill.percentage}%">
                        <div class="skill-percentage">${skill.percentage}%</div>
                    </div>
                </div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">${level}</div>
            </div>
        `;
    }).join('');
}

function getSkillLevel(percentage) {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 70) return 'Intermediate';
    if (percentage >= 60) return 'Proficient';
    return 'Beginner';
}

// Initialize circular animations when skills section is in view
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCircularProgress();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Initialize Skills
function initializeSkills() {
    const categories = document.querySelectorAll('.category');
    const skillContents = document.querySelectorAll('.skill-category-content');
    
    if (categories.length === 0) return;
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.getAttribute('data-category');
            
            // Update active category
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            
            // Update active content
            skillContents.forEach(content => content.classList.remove('active'));
            const targetContent = document.getElementById(categoryName);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Populate skills for this category
            populateSkills(categoryName);
        });
    });
    
    // Initialize first category
    populateSkills('frontend');
}

function populateSkills(category) {
    const container = document.getElementById(category);
    if (!container) return;
    
    const skills = skillsData[category];
    if (!skills) return;
    
    container.innerHTML = skills.map(skill => `
        <div class="skill-item">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.percentage}%"></div>
            </div>
        </div>
    `).join('');
}

// Animate Skill Graphs
function animateSkillGraphs() {
    const graphItems = document.querySelectorAll('.graph-item');
    
    graphItems.forEach(item => {
        const percentage = item.getAttribute('data-percentage');
        const graphFill = item.querySelector('.graph-fill');
        
        if (graphFill) {
            setTimeout(() => {
                graphFill.style.width = `${percentage}%`;
            }, 500);
        }
    });
}

// Portfolio Data
const portfolioData = [
    {
        title: 'AI Health Assistant App',
        description: 'This very good health related assistant which help for more reccomendation as the doctors',
        image: 'img/AIPhoto.jpg',
        tags: ['Flutter', 'Dart', 'Firebase', 'OPenAPI'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
     {
        title: '5+E-BOOK',
        description: 'This very good health related assistant which help for more reccomendation as the doctors',
        image: 'img/EBOOK.jpg',
        tags: ['Flutter', 'Dart', 'HIVE'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
     {
        title: 'Global Transilator App',
        description: 'This very good global transilator that transilate any language to many language at once tab it may trnasilate many lnaguage at once',
        image: 'img/Global.jpg',
        tags: ['Flutter', 'Dart', 'Firebase', 'OPenAPI'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'Certificate-Management System',
        description: 'Certificate production for the Kebele for Id,Marriage,Death,.',
        image: '',
        tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
        category: 'web',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'Weather Forecast App',
        description: 'Beautiful weather application with location-based forecasts and interactive maps.',
        image: 'img/forecast.jpg',
        tags: ['Flutter', 'API Integration', 'Google Maps'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'Orochat App',
        description: 'OrochaApp for social realtime chat app  with data visualization.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        tags: ['flutter', 'firebase',],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'HOTSPOT_SCANNER',
        description: 'Mobile application for  scanning mobile hospots and block the unperimmision use.',
        image: 'img/scanner.jpg',
        tags: ['Kotlin', 'flutter', 'firebase'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'Ethiopia Diaspora',
        description: 'Which may contain many activity may connect doaspora and envestore in different development activity.',
        image: 'img/diaspora.jpg',
        tags: ['flutter', 'FASTAPI'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
     {
        title: 'Gebeyakoo',
        description: 'World currency converter that support multple languages.',
        image: 'img/gebeyakoo.jpg',
        tags: ['flutter', 'firebase','API'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'Object Detector',
        description: ' The flutter based mobile application that detect amy object real time application.',
        image: 'img/object.png',
        tags: ['flutter', 'Tensoflow','MKIT'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
    
     {
        title: 'Reminder APP',
        description: 'Student Alarm system that programme schedueler for any class or many purpose.',
        image: 'img/ALARM.jpg',
        tags: ['flutter', 'firebase'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    }
];

// Initialize Portfolio
function initializePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    if (!portfolioGrid) return;
    
    // Populate portfolio grid
    function populatePortfolio(filter = 'all') {
        const filteredProjects = filter === 'all' 
            ? portfolioData 
            : portfolioData.filter(project => project.category.includes(filter));
        
        portfolioGrid.innerHTML = filteredProjects.map(project => `
            <div class="portfolio-item" data-category="${project.category}">
                <div class="portfolio-img">
                    <img src="${project.image}" alt="${project.title}">
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

    // Initialize Innovation Stats Counter
function initializeInnovationStats() {
    const counters = document.querySelectorAll('.innovation-stats .stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
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

// Add to your existing initialization
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    initializeInnovationStats();
    
    // Observe innovation section for animation
    const innovationSection = document.querySelector('.innovation');
    if (innovationSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initializeInnovationStats();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(innovationSection);
    }
});
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Add loading state
            portfolioGrid.style.opacity = '0.5';
            portfolioGrid.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                // Filter projects
                populatePortfolio(filter);
                portfolioGrid.style.opacity = '1';
            }, 300);
        });
    });
    
    // Initialize with all projects
    populatePortfolio();
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i><span>Sending...</span>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Contact Form Email Functionality
function sendEmail(form) {
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate email sending
    setTimeout(() => {
        // Show success message
        showSuccessMessage();
        
        // Reset button
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 2000);
    
    // Prevent form submission
    return false;
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const contactForm = document.getElementById('contactForm');
    
    if (!successMessage || !contactForm) return;
    
    // Hide form, show success message
    contactForm.style.opacity = '0';
    contactForm.style.visibility = 'hidden';
    successMessage.classList.add('show');
    
    // Send actual email using mailto
    sendToActualEmail();
}

function resetForm() {
    const successMessage = document.getElementById('successMessage');
    const contactForm = document.getElementById('contactForm');
    const form = document.getElementById('contactForm');
    
    if (!successMessage || !contactForm || !form) return;
    
    // Show form, hide success message
    successMessage.classList.remove('show');
    contactForm.style.opacity = '1';
    contactForm.style.visibility = 'visible';
    
    // Reset form
    form.reset();
}

// Function to actually send email using mailto
function sendToActualEmail() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const formData = new FormData(form);
    
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Create mailto link
    const mailtoLink = `mailto:wedadiriba@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(data.subject)}&body=Name: ${encodeURIComponent(data.name)}%0AEmail: ${encodeURIComponent(data.email)}%0A%0AMessage:%0A${encodeURIComponent(data.message)}%0A%0ASent from your portfolio website`;
    
    // Open email client
    window.location.href = mailtoLink;
}

// Initialize contact form interactions
function initializeContactFormInteractions() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    // Add real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
    
    // Add focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// Text Animation for Home Section
function initializeTextAnimation() {
    const textWrapper = document.querySelector('.letters');
    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        // Simple animation without anime.js
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
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
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

// Intersection Observer for Animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('home-stats')) {
                    animateCounters();
                }
                if (entry.target.classList.contains('skills-graph')) {
                    animateSkillGraphs();
                }
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.animationPlayState = 'running';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToObserve = document.querySelectorAll(
        '.home-stats, .skills-graph, .service-card, .portfolio-item, .education-card'
    );
    
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
}

// Testimonials Slider
function initializeTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (testimonialCards.length === 0) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialCards[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        showSlide(currentSlide);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance slides
    setInterval(nextSlide, 5000);
}

// Blog interactions
function initializeBlog() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    initializePortfolio();
    initializeContactForm();
    initializeContactFormInteractions();
    initializeTextAnimation();
    initializeIntersectionObserver();
    initializeTestimonials();
    initializeBlog();
    
    // Animate skill graphs on page load
    setTimeout(animateSkillGraphs, 1000);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page became visible again - restart animations if needed
        const particles = document.getElementById('particles-js');
        if (particles) {
            // Reinitialize particles if they stopped
            particlesJS('particles-js', 'start');
        }
    }
});

// Error handling for missing elements
window.addEventListener('error', (e) => {
    console.log('Script error:', e.message);
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate any layout-dependent animations
    if (window.innerWidth < 768) {
        // Mobile-specific adjustments
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navList && navList.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navList.classList.remove('active');
    }
    
    // Tab key navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class when mouse is used
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});