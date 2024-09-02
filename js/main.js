document.addEventListener('DOMContentLoaded', function() {
    // Swiper JS initialization
    var swiper = new Swiper('.swiper-container', {
        effect: 'slide',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Theme Toggle JS
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'fa-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'fa-sun' ? 'add' : 'remove'](iconTheme);
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });

    // Scroll-to-Section Animation
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Skills Section
    const skills = [
        { name: 'C++', icon: 'fab fa-cuttlefish' },
        { name: 'C#', icon: 'fab fa-cuttlefish' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'Express.js', icon: 'fas fa-server' },
        { name: 'OpenCV', icon: 'fas fa-camera' },
        { name: 'NumPy', icon: 'fas fa-chart-line' },
        { name: 'Pandas', icon: 'fas fa-chart-bar' },
        { name: 'Chart.js', icon: 'fas fa-chart-pie' },
        { name: 'Git & GitHub', icon: 'fab fa-github' }
    ];

    const skillsContainer = document.querySelector('.skills__grid');
    skillsContainer.innerHTML = '';
    skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="skills__item">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            </div>
        `;
    });

    // Fetch and display projects dynamically
    const projectData = [
        {
            title: "Shopping Cart",
            description: "A dynamic cart system with features for adding, updating, and removing items.",
            image: "shoppingcart.jpg",
            link: "https://github.com/Gobind147/Shopping-Cart"
        },
        {
            title: "Task Manager API",
            description: "A CRUD-based task management API using Node.js, Express, and MongoDB.",
            image: "Task-manager-apps-scaled.jpg",
            link: "https://github.com/Gobind147/Task-Manager"
        },
        {
            title: "Self-Driving Car Control",
            description: "Implemented PID controller for lateral control and adaptive cruise control for longitudinal control.",
            image: "selfdrivingnew.png",
            link: "https://github.com/Gobind147/Lateral-and-Logitudinal-Control-of-Self-Driving-Vehicle"
        }
    ];

    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';  // Clear any existing content

    projectData.forEach(project => {
        const projectHTML = `
            <div class="swiper-slide">
                <div class="project__item">
                    <img src="assets/${project.image}" alt="${project.title}" class="project__img">
                    <div class="project__content">
                        <h3 class="project__title">${project.title}</h3>
                        <p class="project__description">${project.description}</p>
                        <a href="${project.link}" class="button" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        `;
        projectList.innerHTML += projectHTML;
    });
    swiper.update();

    // Leaflet.js for Interactive Map
    var map = L.map('mapid').setView([12.9716, 77.5946], 13); // Coordinates for Bangalore, India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([12.9716, 77.5946]).addTo(map)
        .bindPopup('Bangalore, India')
        .openPopup();

    // Form Validation and Submission
    const form = document.querySelector('.contact__form');
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault(); // Prevent form submission
            alert('Please fill in all fields.');
        }
    });
});
