function createParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.2 + 0.1;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

const projectData = {
    game1: {
        title: "W40K: The Last Marine",
        image: "images/14.png", 
        description: "3D action combat game where players fight through enemy encounters across multiple stages leading to a final boss. Features hybrid ranged and melee combat, dash mechanics, and ability cooldown management.", 
        engine: "Coffee Engine",
        programmingLanguage: "Lua",
        teamSize: "39",
        duration: "4 months",
        role: "Enemy Programmer",
        tasks: [
            "Led Tank enemy development, implementing state machines, animation logic, and special ability mechanics",
            "Developed core enemy perception systems using raycasting, smooth rotation, and alert propagation",
            "Implemented 3D explosion physics",
            "Debugged and polished overall enemy behaviors"
        ],
        link: "https://github.com/Burned-Games/W40K-TLM",
        year: "2025"
    },
    game2: {
        title: "Alien Cocktail",
        image: "images/alien.png",
        description: "VR bar simulator game built around motion-controlled interactions. Players act as a bartender, handling dynamic ingredients, processing recipes, and fulfilling NPC customer orders under time constraints.",
        engine: "Unity",
        programmingLanguage: "C#",
        teamSize: "6",
        duration: "1 month",
        role: "Programmer",
        tasks: [
            "Implemented main game loop and overall game flow management",
            "Developed NPC customer lifecycle, managing spawning, despawning, order completion and animation triggers",
            "Built Scene Manager to handle scene loading and transitions",
            "Developed settings UI interface and configuration logic"
        ],
        link: "https://github.com/didacpema/Alien-Cocktail/releases/tag/v2.0",
        year: "2025"
    },
    game3: {
        title: "Patufet On Ets?",
        image: "images/patufet.png",
        description: "2D educational game created for 3Cat's LUDI contest, targeting children aged 6 to 8. Features point-and-click map navigation, math-solving progression mechanics, and an arcade dodge minigame for failure states.",
        engine: "Unity",
        programmingLanguage: "C#",
        teamSize: "3",
        duration: "1 month",
        role: "Programmer",
        tasks: [
            "Implemented player character state machine for movement and animation transitions",
            "Programmed level progression logic and obstacle-dodging penalty minigames",
            "Developed scoring system and an interactive map for level selection",
            "Implemented UI systems and created 2D assets, particle effects, and trailer"
        ],
        link: "https://adriaroger.itch.io/patufet-on-ets",
        year: "2025"
    },
    game4: {
        title: "MetaGen",
        image: "images/metagen.png",
        description: "Developed as a Bachelor's Thesis, MetaGen is a procedural generation system for Unreal Engine 5 that automates the creation of MetaHuman offspring from two selected parents. By combining Mendelian genetics with real-time facial morphing, it generates unique descendants in seconds.",
        engine: "Unreal Engine 5",
        programmingLanguage: "C++",
        teamSize: "1",
        duration: "10 months",
        role: "Technical Artist",
        tasks: [
            "Implemented Mendelian genetic logic in C++ for dominant and recessive trait inheritance",
            "Developed runtime facial generation in UE5 using segmented morph target interpolation",
            "Built dynamic UI hub with body gender swapping, 360° camera controls, trait randomization, and genetic filters",
            "Authored developer guides detailing the Blender-to-UE5 and Mutable system pipeline for integrating new models"
        ],
        link: "https://cpugaper.github.io/MetaGenWeb/index.html#home",
        year: "2025 - 2026"
    }
};

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body');
    const project = projectData[projectId];
    if (!project) return;

    const modalContent = document.createElement('div');
    
    const titleElement = document.createElement('h2');
    titleElement.style.marginBottom = '1rem';
    titleElement.style.fontSize = '1.8rem';
    titleElement.style.color = '#f0e6d2';
    titleElement.textContent = project.title;

    const imgElement = document.createElement('img');
    imgElement.className = 'modal-img';
    imgElement.src = project.image;
    imgElement.alt = project.title;
    imgElement.style.objectFit = 'cover';

    const infoContainer = document.createElement('div');
    infoContainer.style.display = 'grid';
    infoContainer.style.gridTemplateColumns = '1fr 1fr';
    infoContainer.style.gap = '2rem';
    infoContainer.style.marginTop = '1.5rem';
    infoContainer.style.marginBottom = '1.5rem';

    const aboutBox = document.createElement('div');
    aboutBox.style.background = '#3a3a3a';
    aboutBox.style.padding = '1.5rem';
    aboutBox.style.borderRadius = '8px';
    aboutBox.style.border = '1px solid #4a4a4a';
    
    const aboutTitle = document.createElement('h3');
    aboutTitle.style.color = '#f0e6d2';
    aboutTitle.style.marginBottom = '1rem';
    aboutTitle.style.fontSize = '1.8rem';
    aboutTitle.textContent = 'About';
    
    const aboutDesc = document.createElement('p');
    aboutDesc.style.color = '#b0b0b0';
    aboutDesc.style.lineHeight = '1.8';
    aboutDesc.style.marginBottom = '0'; 
    aboutDesc.innerHTML = project.description;
    
    aboutBox.appendChild(aboutTitle);
    aboutBox.appendChild(aboutDesc);
 
    const projectInfoBox = document.createElement('div');
    projectInfoBox.style.background = '#3a3a3a';
    projectInfoBox.style.padding = '1.5rem';
    projectInfoBox.style.borderRadius = '8px';
    projectInfoBox.style.border = '1px solid #4a4a4a';
    
    const projectInfoTitle = document.createElement('h3');
    projectInfoTitle.style.color = '#f0e6d2';
    projectInfoTitle.style.marginBottom = '1rem';
    projectInfoTitle.style.fontSize = '1.8rem';
    projectInfoTitle.textContent = 'Project Info';
 
    const projectDetails = document.createElement('div');
    projectDetails.style.display = 'flex';
    projectDetails.style.flexDirection = 'column';
    projectDetails.style.gap = '1rem';
    
    const details = [
        { label: 'Role', value: project.role },
        { label: 'Team Size', value: project.teamSize },
        { label: 'Duration', value: project.duration },
        { label: 'Year', value: project.year },
        { label: 'Programming Language', value: project.programmingLanguage },
        { label: 'Engine', value: project.engine }
    ];
    
    details.forEach(detail => {
        const detailItem = document.createElement('div');
        detailItem.style.display = 'flex';
        detailItem.style.justifyContent = 'space-between';
        detailItem.style.alignItems = 'center';
        detailItem.style.padding = '0.3rem 0';
        
        const label = document.createElement('span');
        label.style.color = '#d4b483';
        label.style.fontWeight = 'bold';
        label.textContent = detail.label + ':';
        
        const value = document.createElement('span');
        value.style.color = '#b0b0b0';
        value.textContent = detail.value;
        
        detailItem.appendChild(label);
        detailItem.appendChild(value);
        projectDetails.appendChild(detailItem);
    });
    
    projectInfoBox.appendChild(projectInfoTitle);
    projectInfoBox.appendChild(projectDetails);
    
    infoContainer.appendChild(aboutBox);
    infoContainer.appendChild(projectInfoBox);

    const responsibilitiesSection = document.createElement('div');
    responsibilitiesSection.style.marginTop = '2rem';
    responsibilitiesSection.style.marginBottom = '1.5rem';
    
    const responsibilitiesTitle = document.createElement('h3');
    responsibilitiesTitle.style.color = '#f0e6d2';
    responsibilitiesTitle.style.marginBottom = '1rem';
    responsibilitiesTitle.style.fontSize = '1.8rem';
    responsibilitiesTitle.textContent = (projectId === 'game4') ? 'Features Implemented' : 'Key Contributions';
    
    const tasksList = document.createElement('ul');
    tasksList.style.color = '#b0b0b0';
    tasksList.style.paddingLeft = '1.5rem';
    tasksList.style.lineHeight = '1.8';
    
    project.tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.style.marginBottom = '0.8rem';
        taskItem.textContent = task;
        tasksList.appendChild(taskItem);
    });
    
    responsibilitiesSection.appendChild(responsibilitiesTitle);
    responsibilitiesSection.appendChild(tasksList);
 
    const githubLink = document.createElement('div');
    githubLink.style.marginTop = '1.5rem';
    githubLink.style.textAlign = 'center';
    githubLink.style.fontSize = '1.1rem';

    const textBefore = document.createElement('span');
    textBefore.style.color = '#f0e6d2';

    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.target = '_blank';
    projectLink.style.color = '#d4b483';
    projectLink.style.textDecoration = 'none';
    projectLink.style.fontWeight = 'bold';
    projectLink.style.transition = 'color 0.3s ease';
    projectLink.style.display = 'inline-flex';
    projectLink.style.alignItems = 'center';
    projectLink.style.gap = '0.3rem';

    const projectName = document.createElement('span');
    projectName.textContent = project.title;

    const externalLinkIcon = document.createElement('i');
    externalLinkIcon.className = 'fas fa-external-link-alt';
    externalLinkIcon.style.fontSize = '0.8rem';
    externalLinkIcon.style.opacity = '0.8';

    projectLink.appendChild(projectName);
    projectLink.appendChild(externalLinkIcon);

    projectLink.addEventListener('mouseover', function() { this.style.color = '#f0e6d2'; });
    projectLink.addEventListener('mouseout', function() { this.style.color = '#d4b483'; });

    const textAfter = document.createElement('span');
    textAfter.style.color = '#f0e6d2';

    if (projectId == 'game3') {
        textBefore.textContent = 'Play ';
        textAfter.textContent = ' on itch.io';
    } else if (projectId == 'game4') {
        textBefore.textContent = 'Visit the ';
        textAfter.textContent = ' Website';
    } else {
        textBefore.textContent = 'Read more about ';
        textAfter.textContent = ' on Github';
    }

    githubLink.appendChild(textBefore);
    githubLink.appendChild(projectLink);
    githubLink.appendChild(textAfter);

    modalContent.appendChild(titleElement);
    modalContent.appendChild(imgElement);
    modalContent.appendChild(infoContainer);
    modalContent.appendChild(responsibilitiesSection);
    modalContent.appendChild(githubLink);

    if (window.innerWidth <= 768) {
        infoContainer.style.gridTemplateColumns = '1fr';
        infoContainer.style.gap = '1.5rem';
        titleElement.style.fontSize = '1.6rem';
        aboutTitle.style.fontSize = '1.4rem';
        projectInfoTitle.style.fontSize = '1.4rem';
        responsibilitiesTitle.style.fontSize = '1.4rem';
        aboutBox.style.padding = '1rem';
        projectInfoBox.style.padding = '1rem';
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) {
            closeBtn.style.fontSize = '24px';
            closeBtn.style.padding = '10px';
        }
    }

    modalBody.innerHTML = '';
    modalBody.appendChild(modalContent);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (isTouchDevice()) {
    document.body.classList.add('touch-device');
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('touchstart', function() { this.style.transform = 'scale(0.98)'; });
        card.addEventListener('touchend', function() { this.style.transform = 'scale(1)'; });
    });
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

document.onkeydown = function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});