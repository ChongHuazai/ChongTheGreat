// sample projects array matching requirements
const projects = [
    {
        title: "Personal Portfolio Website",
        desc: "A responsive developer portfolio website that showcases my projects, skills, and contact information. It features a modern dark theme with smooth scrolling and professional animations.",
        tech: "HTML • CSS • JavaScript",
        image: "images/new.png",
        link: "#"
    },
    {
        title: "Banana! Business Web Design",
        desc: "A UI/UX design prototype for my own business concept called \"Banana!\". The project focuses on creating a clean, modern, and user-friendly website layout for a banana-themed business brand.",
        tech: "Figma",
        image: "images/bananana.jpg",
        link: "https://www.figma.com/design/JMcQeHokpwqKOxJEg2tJQx/Activity--1---SIA?node-id=0-1&p=f&t=dQXUrnSqYhNdXcYY-0",
        buttonText: "View Design"
    }
];

const container = document.getElementById('project-container');
projects.forEach(p => {
    const btnText = p.buttonText || "View Project";
    container.innerHTML += `
        <div class="card reveal">
            <img src="${p.image}" alt="Screenshot of ${p.title}">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <span class="tech">${p.tech}</span>
            <button onclick="window.open('${p.link}')">${btnText}</button>
        </div>
    `;
});

// hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// close menu when link clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// scroll reveal utility
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);
reveals.forEach(el => revealObserver.observe(el));

// contact form handler
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
});

// navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// initialize icons
lucide.createIcons();