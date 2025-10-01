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

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

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

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

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

// Skills Data
const skillsData = {
    frontend: [
        { name: 'HTML/CSS', percentage: 85 },
        { name: 'JavaScript', percentage: 75 },
       
       
    ],
    mobile: [
        { name: 'Flutter', percentage: 85 },
        { name: 'Dart', percentage: 90 },
        { name: 'Kotlin', percentage: 75 },
       
        { name: 'Firebase', percentage: 80 }
    ],
    backend: [
        { name: 'Node.js', percentage: 75 },
        { name: 'Python', percentage: 75 },
        { name: 'MySQL', percentage: 70 },
        
        { name: 'REST APIs', percentage: 80 }
    ],
    tools: [
        { name: 'Git', percentage: 85 },
        { name: 'Docker', percentage: 60 },
        { name: 'Figma', percentage: 75 },
        { name: 'VS Code', percentage: 90 },
        { name: 'Postman', percentage: 80 }
    ]
};

// Initialize Skills
function initializeSkills() {
    const categories = document.querySelectorAll('.category');
    const skillContents = document.querySelectorAll('.skill-category-content');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.getAttribute('data-category');
            
            // Update active category
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            
            // Update active content
            skillContents.forEach(content => content.classList.remove('active'));
            document.getElementById(categoryName).classList.add('active');
            
            // Populate skills for this category
            populateSkills(categoryName);
        });
    });
    
    // Initialize first category
    populateSkills('frontend');
}

function populateSkills(category) {
    const container = document.getElementById(category);
    const skills = skillsData[category];
    
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
        
        setTimeout(() => {
            graphFill.style.width = `${percentage}%`;
        }, 500);
    });
}

// Portfolio Data
// Portfolio Data
const portfolioData = [
    {
        title: 'El-ROI Organization Website',
        description: 'Responsive platform with interactive front-end and back-end for ministry outreach and community engagement.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        tags: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
        category: 'web ministry',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'EL-ROI Ministry App',
        description: 'Bible school app built with Kivy Python for accessible spiritual learning and community building.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        tags: ['Python', 'Kivy', 'Mobile', 'Firebase'],
        category: 'mobile ministry',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'Student Election System',
        description: 'Secure and transparent election system with real-time results and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        category: 'web',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'Scientific Calculator',
        description: 'Advanced calculator with scientific functions, graphing capabilities, and history tracking.',
        image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        tags: ['Python', 'Tkinter', 'Mathematics'],
        category: 'mobile',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'Bank Management System',
        description: 'Comprehensive banking solution with user authentication, transactions, and admin panel.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        tags: ['Java', 'Swing', 'MySQL', 'OOP'],
        category: 'web',
        links: {
            demo: '#',
            code: '#'
        }
    },
    {
        title: 'OroChat Real-time App',
        description: 'Real-time chat application with groups, file sharing, and push notifications.',
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        tags: ['Flutter', 'Firebase', 'Dart', 'Real-time'],
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
// Gospel Steps Animation
function initializeGospelSteps() {
    const steps = document.querySelectorAll('.gospel-step');
    let currentStep = 0;
    
    function animateSteps() {
        steps.forEach(step => step.classList.remove('active'));
        steps[currentStep].classList.add('active');
        
        currentStep = (currentStep + 1) % steps.length;
    }
    
    // Animate steps every 3 seconds
    setInterval(animateSteps, 3000);
    
    // Prayer button functionality
    const prayerBtn = document.querySelector('.prayer-btn');
    prayerBtn.addEventListener('click', () => {
        const prayerText = `
            Dear God,
            
            I know I'm a sinner and I need your forgiveness.
            I believe Jesus died for my sins and rose from the dead.
            I invite Jesus to come into my life as my Lord and Savior.
            
            Thank you for your grace and the gift of eternal life.
            In Jesus' name, Amen.
        `;
        
        alert('Prayer of Salvation:\n\n' + prayerText + '\n\nIf you prayed this prayer, welcome to the family of God!');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGospelSteps);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePortfolio);
// Mission & Vision Interactive Elements
function initializeMissionVision() {
    // Animate counter numbers
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
    
    // Add scroll animations for mission pillars
    const pillars = document.querySelectorAll('.pillar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pillarSlideIn 0.6s ease-out forwards';
            }
        });
    }, { threshold: 0.3 });
    
    pillars.forEach(pillar => observer.observe(pillar));
    
    // Phase marker animations
    const phases = document.querySelectorAll('.goal-phase');
    
    phases.forEach((phase, index) => {
        phase.style.animationDelay = `${index * 0.2}s`;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeMissionVision);

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
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
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Text Animation for Home Section
function initializeTextAnimation() {
    const textWrapper = document.querySelector('.letters');
    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({ loop: false })
            .add({
                targets: '.letter',
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i) => 300 + 30 * i
            });
    }
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
            }
        });
    }, observerOptions);
    
    // Observe elements
    const statsSection = document.querySelector('.home-stats');
    const skillsGraph = document.querySelector('.skills-graph');
    
    if (statsSection) observer.observe(statsSection);
    if (skillsGraph) observer.observe(skillsGraph);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    initializePortfolio();
    initializeContactForm();
    initializeTextAnimation();
    initializeIntersectionObserver();
    
    // Add scroll reveal animations
    const scrollRevealOptions = {
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        interval: 200
    };
    
    // Add any additional initialization here
});

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
    
    // Simulate email sending (in production, use a service like EmailJS, Formspree, or your backend)
    setTimeout(() => {
        // Here you would typically send the data to your email service
        // For demonstration, we'll simulate success
        
        // Show success message
        showSuccessMessage();
        
        // Reset button
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // In production, you would actually send the email here
        // Example with EmailJS (you would need to set this up):
        /*
        emailjs.send('your_service_id', 'your_template_id', data)
            .then(function(response) {
                showSuccessMessage();
                submitBtn.classList.remove('loading');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, function(error) {
                alert('Sorry, there was an error sending your message. Please try again or email me directly at wedadiriba@gmail.com');
                submitBtn.classList.remove('loading');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        */
        
    }, 2000);
    
    // Prevent form submission
    return false;
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const contactForm = document.getElementById('contactForm');
    
    // Hide form, show success message
    contactForm.style.opacity = '0';
    contactForm.style.visibility = 'hidden';
    successMessage.classList.add('show');
    
    // You could also send the form data to your email here
    sendToActualEmail();
}

function resetForm() {
    const successMessage = document.getElementById('successMessage');
    const contactForm = document.getElementById('contactForm');
    const form = document.getElementById('contactForm');
    
    // Show form, hide success message
    successMessage.classList.remove('show');
    contactForm.style.opacity = '1';
    contactForm.style.visibility = 'visible';
    
    // Reset form
    form.reset();
}

// Function to actually send email (you need to implement this based on your preferred method)
function sendToActualEmail() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // Method 1: Using mailto link (opens user's email client)
    const mailtoLink = `mailto:wedadiriba@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(data.subject)}&body=Name: ${encodeURIComponent(data.name)}%0AEmail: ${encodeURIComponent(data.email)}%0A%0AMessage:%0A${encodeURIComponent(data.message)}%0A%0ASent from your portfolio website`;
    
    // Method 2: Using a service like EmailJS (recommended)
    // You would need to set up EmailJS account and replace with your credentials
    /*
    emailjs.init("your_public_key");
    emailjs.send("your_service_id", "your_template_id", data)
        .then(function(response) {
            console.log("Email sent successfully!", response);
        }, function(error) {
            console.log("Failed to send email:", error);
            // Fallback to mailto
            window.location.href = mailtoLink;
        });
    */
    
    // For now, using mailto as fallback
    window.location.href = mailtoLink;
}

// Initialize contact form interactions
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeContactForm);

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page became visible again
        particlesJS('particles-js', 'start');
    }
});