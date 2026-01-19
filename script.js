// ====================================
// BILINGUAL SOFTWARE ENGINEERING PORTFOLIO
// Fatoumata Ndiaye - ALU Kigali
// ====================================

// ============ TRANSLATIONS DATABASE ============
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_services: "Services",
        nav_certifications: "Certifications",
        nav_contact: "Contact",

        // Hero Section
        hero_name: "Fatoumata Ndiaye",
        hero_title: "Software Engineering Student",
        hero_subtitle: "African Leadership University | Kigali, Rwanda",
        hero_tagline: "Building innovative solutions through code, creativity, and collaboration",
        hero_btn_work: "Let's Work Together",
        hero_btn_projects: "View Projects",

        // About Section
        about_title: "About Me",
        about_summary: "I'm a passionate Software Engineering student at African Leadership University in Kigali, Rwanda, where I'm building the technical and leadership skills to create impactful solutions for Africa and beyond. My journey combines hands-on development experience through internships at Sonatel and AGETIP, where I've worked on real-world applications, from cybersecurity automation tools to full-stack web development. I'm driven by the belief that technology can solve Africa's most pressing challenges.",
        about_strengths_title: "Key Strengths",
        strength_1: "Full-Stack Development",
        strength_2: "Mobile App Development (Flutter)",
        strength_3: "UI/UX Design & Prototyping",
        strength_4: "Problem Solving & Innovation",
        strength_5: "Agile Development & Collaboration",
        about_languages: "Languages",

        // Skills Section
        skills_title: "Technical Skills",
        skill_technical: "Technical",
        skill_soft: "Soft Skill",

        // Projects Section
        projects_title: "Featured Projects",
        project1_title: "Vitaro",
        project1_desc: "Humanitarian app connecting blood donors with those in need. Built to save lives through technology.",
        project2_title: "Farm Connect",
        project2_desc: "Agricultural platform empowering farmers with data-driven insights to improve crop yields and productivity.",
        project3_title: "Ndey'As Shop",
        project3_desc: "Functional e-commerce website built collaboratively, featuring product management and checkout system.",
        project4_title: "Book Swap",
        project4_desc: "Mobile app enabling students to exchange books seamlessly, promoting sustainability and affordability.",
        project5_title: "SheaNet",
        project5_desc: "Platform supporting women in Ghana's shea butter industry through market access and capacity building.",
        project6_title: "DEXA (Sonatel)",
        project6_desc: "Cybersecurity automation tool developed during internship to optimize workflows in the security department.",
        project7_title: "SenePanda (In Progress)",
        project7_desc: "Application aimed at boosting Senegal's local economy by connecting consumers with local businesses.",
        project8_title: "E-Lab Winner",
        project8_desc: "First prize winner at ALU's E-Lab pitch competition for a project raising awareness about early pregnancy.",

        // Certifications Section
        certifications_title: "Certifications",

        // Services Section
        services_title: "What I Offer",
        services_intro: "As a software engineering student with real-world experience, I offer freelance and collaborative opportunities in:",
        service1_title: "Web Development & Design",
        service1_desc: "Responsive, modern websites built with HTML, CSS, JavaScript, and frameworks like Tailwind and Bootstrap.",
        service2_title: "UI/UX & Prototyping",
        service2_desc: "User-centered design solutions using Figma and Canva to create intuitive, beautiful interfaces.",
        service3_title: "Frontend Development",
        service3_desc: "Interactive web applications with clean, maintainable code and seamless user experiences.",
        service4_title: "Mobile App Development",
        service4_desc: "Cross-platform mobile applications using Flutter for iOS and Android.",
        service5_title: "Automation & Tech Support",
        service5_desc: "Workflow automation scripts and technical troubleshooting to boost productivity.",
        service6_title: "Freelance Collaboration",
        service6_desc: "Available for project-based work, internships, and collaborative development opportunities.",

        // Contact Section
        contact_title: "Let's Build Something Amazing Together",
        contact_tagline: "I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in mind, want to discuss technology, or just want to connect, feel free to reach out!",
        contact_email: "Email",
        contact_whatsapp: "WhatsApp",
        contact_linkedin: "LinkedIn",
        contact_github: "GitHub",
        contact_btn_hire: "Hire Me",
        contact_btn_resume_en: "Download Resume (EN)",
        contact_btn_resume_fr: "Download CV (FR)"
    },
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_projects: "Projets",
        nav_services: "Services",
        nav_certifications: "Certifications",
        nav_contact: "Contact",

        // Hero Section
        hero_name: "Fatoumata Ndiaye",
        hero_title: "Étudiante en Génie Logiciel",
        hero_subtitle: "African Leadership University | Kigali, Rwanda",
        hero_tagline: "Construire des solutions innovantes à travers le code, la créativité et la collaboration",
        hero_btn_work: "Travaillons Ensemble",
        hero_btn_projects: "Voir les Projets",

        // About Section
        about_title: "À Propos de Moi",
        about_summary: "Je suis une étudiante passionnée en Génie Logiciel à l'African Leadership University à Kigali, Rwanda, où je développe des compétences techniques et de leadership pour créer des solutions impactantes pour l'Afrique et au-delà. Mon parcours combine une expérience pratique de développement à travers des stages chez Sonatel et AGETIP, où j'ai travaillé sur des applications réelles, des outils d'automatisation en cybersécurité au développement web full-stack. Je suis animée par la conviction que la technologie peut résoudre les défis les plus pressants de l'Afrique.",
        about_strengths_title: "Points Forts Clés",
        strength_1: "Développement Full-Stack",
        strength_2: "Développement d'Applications Mobiles (Flutter)",
        strength_3: "Design UI/UX & Prototypage",
        strength_4: "Résolution de Problèmes & Innovation",
        strength_5: "Développement Agile & Collaboration",
        about_languages: "Langues",

        // Skills Section
        skills_title: "Compétences Techniques",
        skill_technical: "Technique",
        skill_soft: "Compétence Douce",

        // Projects Section
        projects_title: "Projets Phares",
        project1_title: "Vitaro",
        project1_desc: "Application humanitaire connectant les donneurs de sang avec ceux qui en ont besoin. Conçue pour sauver des vies grâce à la technologie.",
        project2_title: "Farm Connect",
        project2_desc: "Plateforme agricole donnant aux agriculteurs des insights basés sur les données pour améliorer les rendements et la productivité.",
        project3_title: "Ndey'As Shop",
        project3_desc: "Site e-commerce fonctionnel développé en collaboration, avec gestion de produits et système de paiement.",
        project4_title: "Book Swap",
        project4_desc: "Application mobile permettant aux étudiants d'échanger des livres facilement, favorisant la durabilité et l'accessibilité.",
        project5_title: "SheaNet",
        project5_desc: "Plateforme soutenant les femmes dans l'industrie du beurre de karité au Ghana grâce à l'accès au marché et au renforcement des capacités.",
        project6_title: "DEXA (Sonatel)",
        project6_desc: "Outil d'automatisation en cybersécurité développé pendant mon stage pour optimiser les flux de travail du département sécurité.",
        project7_title: "SenePanda (En Cours)",
        project7_desc: "Application visant à dynamiser l'économie locale du Sénégal en connectant les consommateurs aux entreprises locales.",
        project8_title: "Gagnante E-Lab",
        project8_desc: "Premier prix à la compétition de pitch E-Lab de l'ALU pour un projet de sensibilisation sur les grossesses précoces.",

        // Certifications Section
        certifications_title: "Certifications",

        // Services Section
        services_title: "Ce Que J'Offre",
        services_intro: "En tant qu'étudiante en génie logiciel avec une expérience pratique, j'offre des opportunités de freelance et de collaboration dans :",
        service1_title: "Développement & Design Web",
        service1_desc: "Sites web responsifs et modernes construits avec HTML, CSS, JavaScript et des frameworks comme Tailwind et Bootstrap.",
        service2_title: "UI/UX & Prototypage",
        service2_desc: "Solutions de design centrées sur l'utilisateur avec Figma et Canva pour créer des interfaces intuitives et élégantes.",
        service3_title: "Développement Frontend",
        service3_desc: "Applications web interactives avec un code propre, maintenable et des expériences utilisateur fluides.",
        service4_title: "Développement d'Applications Mobiles",
        service4_desc: "Applications mobiles multiplateformes utilisant Flutter pour iOS et Android.",
        service5_title: "Automatisation & Support Technique",
        service5_desc: "Scripts d'automatisation de flux de travail et dépannage technique pour booster la productivité.",
        service6_title: "Collaboration Freelance",
        service6_desc: "Disponible pour du travail basé sur projet, des stages et des opportunités de développement collaboratif.",

        // Contact Section
        contact_title: "Construisons Quelque Chose d'Incroyable Ensemble",
        contact_tagline: "Je suis toujours ouverte à de nouvelles opportunités, collaborations et conversations. Que vous ayez un projet en tête, envie de discuter technologie, ou simplement de connecter, n'hésitez pas à me contacter !",
        contact_email: "Email",
        contact_whatsapp: "WhatsApp",
        contact_linkedin: "LinkedIn",
        contact_github: "GitHub",
        contact_btn_hire: "Me Recruter",
        contact_btn_resume_en: "Télécharger CV (EN)",
        contact_btn_resume_fr: "Télécharger CV (FR)"
    }
};

// ============ LANGUAGE MANAGEMENT ============
let currentLanguage = 'en';

// Check for saved language preference
if (localStorage.getItem('portfolioLanguage')) {
    currentLanguage = localStorage.getItem('portfolioLanguage');
}

// Function to change language
function changeLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    localStorage.setItem('portfolioLanguage', currentLanguage);
    updateContent();
    updateLanguageButton();
}

// Function to update all translatable content
function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });

    // Update skills to reflect language change
    populateSkills();
}

// Function to update language button text
function updateLanguageButton() {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'FR' : 'EN';
    }
}

// ============ SKILLS DATA ============
const skills = [
    // Technical Skills
    {
        name_en: "HTML5",
        name_fr: "HTML5",
        category: "technical",
        svg: '<path d="M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178z"/>'
    },
    {
        name_en: "CSS3",
        name_fr: "CSS3",
        category: "technical",
        svg: '<path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"/>'
    },
    {
        name_en: "JavaScript",
        name_fr: "JavaScript",
        category: "technical",
        svg: '<path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.611 2.648.43 3.346 1.026.788 2.539 1.001 2.747 1.778.206 1.001-.763 1.323-1.729 1.205-.671-.094-1.044-.377-1.458-.829l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>'
    },
    {
        name_en: "Flutter",
        name_fr: "Flutter",
        category: "technical",
        svg: '<path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>'
    },
    {
        name_en: "Git",
        name_fr: "Git",
        category: "technical",
        svg: '<path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>'
    },
    {
        name_en: "Figma",
        name_fr: "Figma",
        category: "technical",
        svg: '<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>'
    },
    {
        name_en: "Python (Learning)",
        name_fr: "Python (En apprentissage)",
        category: "technical",
        svg: '<path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>'
    },
    {
        name_en: "React (Learning)",
        name_fr: "React (En apprentissage)",
        category: "technical",
        svg: '<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>'
    },
    {
        name_en: "Bootstrap",
        name_fr: "Bootstrap",
        category: "technical",
        svg: '<path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.421-4.186-.045-1.3.967-2.5 2.337-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/>'
    },
    {
        name_en: "Django (Learning)",
        name_fr: "Django (En apprentissage)",
        category: "technical",
        svg: '<path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.56-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>'
    },
    {
        name_en: "Tailwind CSS",
        name_fr: "Tailwind CSS",
        category: "technical",
        svg: '<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>'
    },

    // Soft Skills
    {
        name_en: "Leadership",
        name_fr: "Leadership",
        category: "soft",
        svg: '<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>'
    },
    {
        name_en: "Communication",
        name_fr: "Communication",
        category: "soft",
        svg: '<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>'
    },
    {
        name_en: "Problem Solving",
        name_fr: "Résolution de Problèmes",
        category: "soft",
        svg: '<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>'
    },
    {
        name_en: "Teamwork",
        name_fr: "Travail d'Équipe",
        category: "soft",
        svg: '<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>'
    },
    {
        name_en: "Creativity",
        name_fr: "Créativité",
        category: "soft",
        svg: '<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>'
    },
    {
        name_en: "Fast Learner",
        name_fr: "Apprentissage Rapide",
        category: "soft",
        svg: '<path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>'
    },
    {
        name_en: "Time Management",
        name_fr: "Gestion du Temps",
        category: "soft",
        svg: '<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>'
    }
];

// Carousel state
let currentSkillIndex = 0;
const skillsPerView = 4;

// Function to populate skills carousel
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    // Create carousel wrapper
    skillsGrid.innerHTML = `
        <button class="carousel-btn prev" onclick="moveSkillCarousel(-1)" aria-label="Previous skills">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"/>
            </svg>
        </button>
        <div class="skills-carousel-wrapper">
            <div class="skills-carousel-track"></div>
        </div>
        <button class="carousel-btn next" onclick="moveSkillCarousel(1)" aria-label="Next skills">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        </button>
    `;

    const track = skillsGrid.querySelector('.skills-carousel-track');

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';

        const categoryText = skill.category === 'technical'
            ? translations[currentLanguage].skill_technical
            : translations[currentLanguage].skill_soft;

        skillCard.innerHTML = `
            <div class="skill-icon-svg">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    ${skill.svg}
                </svg>
            </div>
            <h3>${currentLanguage === 'en' ? skill.name_en : skill.name_fr}</h3>
            <span class="skill-category">${categoryText}</span>
        `;

        track.appendChild(skillCard);
    });

    updateCarousel();
}

// Function to move carousel
function moveSkillCarousel(direction) {
    const maxIndex = Math.max(0, skills.length - skillsPerView);
    currentSkillIndex = Math.max(0, Math.min(currentSkillIndex + direction, maxIndex));
    updateCarousel();
}

// Function to update carousel position
function updateCarousel() {
    const track = document.querySelector('.skills-carousel-track');
    if (!track) return;

    const cardWidth = 100 / skillsPerView; // percentage
    const translateX = -(currentSkillIndex * cardWidth);
    track.style.transform = `translateX(${translateX}%)`;

    // Update button states
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (prevBtn) prevBtn.disabled = currentSkillIndex === 0;
    if (nextBtn) nextBtn.disabled = currentSkillIndex >= skills.length - skillsPerView;
}

// Make functions global for onclick
window.moveSkillCarousel = moveSkillCarousel;

// ============ CERTIFICATION DATA ============
const certifications = [
    {
        title: "Flutter & Dart Development",
        organization: "Coursera",
        year: "2025",
        imageUrl: "img/Coursera Flutter Certificate.jpg"
    },
    {
        title: "Academic Writing Introduction",
        organization: "Coursera",
        year: "2025",
        imageUrl: "img/Coursera Academic Writing.jpg"
    },
    {
        title: "ALX Virtual Assistant Training",
        organization: "ALX",
        year: "2024",
        imageUrl: "img/alx-virtual-assistant.jpg"
    },
    {
        title: "Virtual Assistant Training Completion",
        organization: "LightHouse",
        year: "2024",
        imageUrl: "img/virtual-assistant-training.jpg"
    },
    {
        title: "E-Lab Certificate of Achievement",
        organization: "ALU",
        year: "2024",
        imageUrl: "img/e-lab-certificate.jpg"
    },
    {
        title: "High School Diploma",
        organization: "Lycée Mariama Ba",
        year: "2022",
        imageUrl: "img/high-school-diploma.jpg"
    },
    {
        title: "Recognition for Excellence",
        organization: "Lycée Mariama Ba",
        year: "2022",
        imageUrl: "img/attestation-recognition.jpg"
    }
];

// Function to populate certifications
function populateCertifications() {
    const certGrid = document.getElementById('certGrid');
    if (!certGrid) return;

    certGrid.innerHTML = '';

    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card';

        certCard.innerHTML = `
            <div class="cert-image" style="background-image: url('${cert.imageUrl}');"></div>
            <div class="cert-content">
                <h3>${cert.title}</h3>
                <p>${cert.organization} | ${cert.year}</p>
            </div>
        `;

        // Add click event to open modal
        certCard.addEventListener('click', () => {
            openCertModal(cert.imageUrl, cert.title, cert.organization, cert.year);
        });

        certGrid.appendChild(certCard);
    });
}

// ============ CERTIFICATE MODAL FUNCTIONS ============
function openCertModal(imageUrl, title, organization, year) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certModalImg');
    const caption = document.getElementById('certModalCaption');

    if (modal && modalImg && caption) {
        modal.style.display = 'block';
        modalImg.src = imageUrl;
        caption.innerHTML = `<strong>${title}</strong><br>${organization} | ${year}`;

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.style.display = 'none';

        // Re-enable body scroll
        document.body.style.overflow = 'auto';
    }
}

// ============ MOBILE MENU TOGGLE ============
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (navMenu && hamburger) {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (navMenu && hamburger) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// ============ SMOOTH SCROLL ============
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ============ NAVBAR SCROLL EFFECT ============
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    }
}

// ============ INITIALIZE ON PAGE LOAD ============
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    updateContent();
    updateLanguageButton();

    // Populate skills
    populateSkills();

    // Populate certifications
    populateCertifications();

    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', changeLanguage);
    }

    // Mobile menu hamburger
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            closeMobileMenu();

            // Handle smooth scroll for internal links
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScroll(href);
            }
        });
    });

    // Certificate modal close button
    const certModalClose = document.querySelector('.cert-modal-close');
    if (certModalClose) {
        certModalClose.addEventListener('click', closeCertModal);
    }

    // Close modal when clicking outside the image
    const certModal = document.getElementById('certModal');
    if (certModal) {
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                closeCertModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCertModal();
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);

    // Initialize ScrollReveal animations
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            delay: 200,
            reset: false
        });

        // Reveal animations (excluding about-content)
        sr.reveal('.project-card', { interval: 150 });
        sr.reveal('.service-card', { interval: 150 });
        sr.reveal('.cert-card', { interval: 150 });
        sr.reveal('.contact-method', { interval: 100 });
    }

    // Add fade-in effect for testimonials (if you add them back later)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards (excluding about section content)
    document.querySelectorAll('.project-card, .service-card, .cert-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Ensure about section is visible
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.style.opacity = '1';
        aboutContent.style.visibility = 'visible';
    }
});

// ============ CONSOLE GREETING ============
console.log(`
%c
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   👋 Hello! Welcome to my portfolio                  ║
║   Built with ❤️ by Fatoumata Ndiaye                  ║
║   Software Engineering Student @ ALU                  ║
║                                                       ║
║   🌍 Kigali, Rwanda | 📧 fatoumata.nd01@gmail.com    ║
║   💻 GitHub: @Fatoumata32                             ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
`, 'color: #2ECC71; font-family: monospace; font-size: 12px;');
