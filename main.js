const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroImage = document.getElementById('hero-image');
const aboutText = document.getElementById('about-text');
const aboutImage = document.getElementById('about-image');
const educationText = document.getElementById('education-text');
const educationLogo1Img = document.getElementById('education-logo-1-img');
const educationLogo1Label = document.getElementById('education-logo-1-label');
const educationLogo2Img = document.getElementById('education-logo-2-img');
const educationLogo2Label = document.getElementById('education-logo-2-label');
const projectsText = document.getElementById('projects-text');
const videoCard1 = document.getElementById('video-card-1');
const videoCard2 = document.getElementById('video-card-2');
const videoCard3 = document.getElementById('video-card-3');
const video1Img = document.getElementById('video-1-img');
const video1Title = document.getElementById('video-1-title');
const video1Description = document.getElementById('video-1-description');
const video2Img = document.getElementById('video-2-img');
const video2Title = document.getElementById('video-2-title');
const video2Description = document.getElementById('video-2-description');
const video3Img = document.getElementById('video-3-img');
const video3Title = document.getElementById('video-3-title');
const video3Description = document.getElementById('video-3-description');
const contactText = document.getElementById('contact-text');
const contactEmailer = document.getElementById('contact-emailer');
const linkedinImage = document.getElementById('linkedin-image');
const indeedImage = document.getElementById('indeed-image');
const linkedinLabel = document.getElementById('linkedin-label');
const indeedLabel = document.getElementById('indeed-label');

async function loadAppConfig() {
    if (window.APP_CONFIG) {
        return window.APP_CONFIG;
    }

    try {
        const module = await import('./env/config.js');
        return module.default || {};
    } catch (error) {
        return {};
    }
}

const appConfig = await loadAppConfig();

function populateSectionText() {
    if (heroTitle) {
        heroTitle.textContent = 'Irwin Felicien';
    }

    if (heroSubtitle) {
        heroSubtitle.textContent = 'Software Developer | Web Enthusiast | PC Hardware Aficionado';
    }

    if (heroImage) {
        heroImage.src = 'https://placehold.co/1200x800?text=Hero+Photo';
        heroImage.alt = 'Hero photo placeholder';
    }

    if (aboutText) {
        aboutText.textContent = 'I am a passionate web developer who loves crafting modern, user-friendly experiences. I enjoy bringing ideas to life with clean design and responsive layouts.';
    }

    if (aboutImage) {
        aboutImage.src = 'https://placehold.co/400x400?text=Your+Photo';
        aboutImage.alt = 'About me placeholder';
    }

    if (educationText) {
        educationText.textContent = 'I studied Computer Science and have completed coursework in web development, design systems, and full stack engineering. I am always learning and improving my skills.';
    }

    if (educationLogo1Img) {
        educationLogo1Img.src = 'https://placehold.co/200x200?text=HCC';
        educationLogo1Img.alt = 'Houston Community College Logo';
    }

    if (educationLogo1Label) {
        educationLogo1Label.textContent = 'Houston Community College';
    }

    if (educationLogo2Img) {
        educationLogo2Img.src = 'https://placehold.co/200x200?text=TSU';
        educationLogo2Img.alt = 'Texas Southern University Logo';
    }

    if (educationLogo2Label) {
        educationLogo2Label.textContent = 'Texas Southern University';
    }

    if (projectsText) {
        projectsText.textContent = 'My projects include portfolio sites, interactive landing pages, and front-end applications built with modern web standards. Each project focuses on clarity, performance, and accessibility.';
    }

    if (videoCard1) {
        videoCard1.href = '#';
    }

    if (video1Img) {
        video1Img.src = 'https://placehold.co/320x180?text=Video+1';
        video1Img.alt = 'Video 1 thumbnail';
    }

    if (video1Title) {
        video1Title.textContent = 'Video 1';
    }

    if (video1Description) {
        video1Description.textContent = 'Short description of video 1. Replace this with your content.';
    }

    if (videoCard2) {
        videoCard2.href = '#';
    }

    if (video2Img) {
        video2Img.src = 'https://placehold.co/320x180?text=Video+2';
        video2Img.alt = 'Video 2 thumbnail';
    }

    if (video2Title) {
        video2Title.textContent = 'Video 2';
    }

    if (video2Description) {
        video2Description.textContent = 'Short description of video 2. Replace this with your content.';
    }

    if (videoCard3) {
        videoCard3.href = '#';
    }

    if (video3Img) {
        video3Img.src = 'https://placehold.co/320x180?text=Video+3';
        video3Img.alt = 'Video 3 thumbnail';
    }

    if (video3Title) {
        video3Title.textContent = 'Video 3';
    }

    if (video3Description) {
        video3Description.textContent = 'Short description of video 3. Replace this with your content.';
    }

    if (contactText) {
        contactText.textContent = 'Feel free to reach out via email or connect on LinkedIn. I am open to new opportunities and collaborations.';
    }

    if (linkedinImage) {
        linkedinImage.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg';
        linkedinImage.alt = 'LinkedIn Logo';
    }

    if (indeedImage) {
        indeedImage.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/indeed.svg';
        indeedImage.alt = 'Indeed Logo';
    }

    if (linkedinLabel) {
        linkedinLabel.textContent = 'LinkedIn';
    }

    if (indeedLabel) {
        indeedLabel.textContent = 'Indeed';
    }
}

function initGoogleAnalytics(config) {
    const analyticsId = config.GOOGLE_ANALYTICS_ID;
    if (!analyticsId) {
        return;
    }

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;
    gtag('js', new Date());
    gtag('config', analyticsId);
}

function setupEmailerForm(config) {
    if (!contactEmailer) {
        return;
    }

    const form = document.createElement('form');
    form.className = 'email-form';
    form.innerHTML = `
        <label for="emailer-name">Name</label>
        <input id="emailer-name" type="text" placeholder="Your name" required />
        <label for="emailer-email">Email address</label>
        <input id="emailer-email" type="email" placeholder="you@example.com" required />
        <label for="emailer-message">Message</label>
        <textarea id="emailer-message" rows="4" placeholder="Write your message here..."></textarea>
        <button type="submit">Send message</button>
    `;

    const feedback = document.createElement('p');
    feedback.className = 'email-form-message';
    feedback.textContent = '';

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = form.querySelector('#emailer-name');
        const emailInput = form.querySelector('#emailer-email');
        const messageInput = form.querySelector('#emailer-message');
        const nameValue = nameInput?.value.trim();
        const emailValue = emailInput?.value.trim();
        const messageValue = messageInput?.value.trim();

        if (!nameValue) {
            feedback.textContent = 'Please enter your name.';
            feedback.style.color = '#b91c1c';
            return;
        }

        if (!emailValue) {
            feedback.textContent = 'Please enter a valid email address.';
            feedback.style.color = '#b91c1c';
            return;
        }

        const serviceUrl = config.EMAIL_SERVICE_URL;
        const apiKey = config.EMAIL_API_KEY;

        if (!serviceUrl || !apiKey) {
            feedback.textContent = `Thanks, ${nameValue}! Your message has been prepared. Configure env/config.js to enable sending.`;
            feedback.style.color = '#047857';
            form.reset();
            return;
        }

        fetch(serviceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                senderName: nameValue,
                senderEmail: emailValue,
                message: messageValue,
                replyTo: emailValue,
                sender: config.EMAIL_SENDER || emailValue,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                feedback.textContent = `Thanks, ${nameValue}! Your message has been sent.`;
                feedback.style.color = '#047857';
                form.reset();
            })
            .catch(() => {
                feedback.textContent = 'Unable to send message. Please check your email service configuration.';
                feedback.style.color = '#b91c1c';
            });
    });

    contactEmailer.append(form, feedback);
}

const menuToggle = document.querySelector('.menu-toggle');
const topNav = document.querySelector('.top-nav');
const navLinks = document.querySelectorAll('.site-nav a');

menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    topNav?.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (topNav?.classList.contains('nav-open')) {
            topNav.classList.remove('nav-open');
            menuToggle?.setAttribute('aria-expanded', 'false');
        }
    });
});

populateSectionText();
initGoogleAnalytics(appConfig);
setupEmailerForm(appConfig);
