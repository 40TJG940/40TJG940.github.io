// Fonction pour créer un élément avec des attributs et du contenu
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    if (content) element.innerHTML = content;
    return element;
}

// Création du style avec des noms de classes uniques
const style = createElement('style', {}, `
    body {
        transition: margin-left 0.3s;
        margin-left: 0;
    }
    body.jb-menu-open {
        margin-left: 250px;
    }
    .jb-burger-btn {
        position: fixed;
        left: 20px;
        top: 20px;
        z-index: 1001;
        background: none;
        border: none;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;
    }
    .jb-burger-btn:hover {
        transform: scale(1.1);
    }
    .jb-burger-btn::before {
        content: '☰';
    }
    body.jb-menu-open .jb-burger-btn::before {
        content: '✕';
    }
    body.jb-menu-open .jb-burger-btn {
        left: 270px;
    }
    .jb-burger-menu {
        position: fixed;
        left: -250px;
        top: 0;
        width: 250px;
        height: 100%;
        background-color: #1a1a1a;
        transition: left 0.3s;
        z-index: 1000;
        overflow-y: auto;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
    .jb-burger-menu.active {
        left: 0;
    }
    .jb-profile-image {
        width: 100%;
        border-radius: 10px;
        margin-bottom: 10px;
    }
    .jb-name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #ffffff;
    }
    .jb-tagline {
        font-size: 14px;
        color: #888;
        margin-bottom: 20px;
    }
    .jb-social-icons {
        margin-top: 20px;
    }
    .jb-social-icons a {
        display: inline-block;
        margin-right: 10px;
    }
    .jb-social-icons img {
        width: 24px;
        height: 24px;
    }
    .jb-menu-footer {
        margin-top: auto;
        padding-top: 20px;
        border-top: 1px solid #444;
    }
    .jb-menu-footer .jb-section-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #ffffff;
    }
    .jb-menu-list {
        list-style-type: none;
        padding: 0;
        margin-bottom: 20px;
    }
    .jb-menu-list li {
        margin-bottom: 10px;
    }
    .jb-menu-list a {
        color: #ffffff;
        text-decoration: none;
        font-size: 14px;
    }
    .jb-menu-list a:hover {
        color: #00a8e8;
    }
    .jb-copyright {
        font-size: 12px;
        color: #888;
    }
`);

document.head.appendChild(style);

// Création du bouton du menu burger
const burgerBtn = createElement('button', { class: 'jb-burger-btn' });
document.body.appendChild(burgerBtn);

// Création du conteneur du menu
const burgerMenu = createElement('div', { class: 'jb-burger-menu' });

// Ajout de l'image de profil
burgerMenu.appendChild(createElement('img', { 
    src: './post_image_large.jpeg',
    alt: 'Julien',
    class: 'jb-profile-image'
}));

// Ajout du nom et de la tagline
burgerMenu.appendChild(createElement('div', { class: 'jb-name' }, 'Julien'));
burgerMenu.appendChild(createElement('div', { class: 'jb-tagline' }, 'Bonnet'));

// Ajout des icônes sociales
const socialIcons = createElement('div', { class: 'jb-social-icons' });
const githubLink = createElement('a', { href: 'https://github.com/40TJG940' });
const linkedinLink = createElement('a', { href: 'https://www.linkedin.com/in/julien-bonnet-7875372b0' });

const githubImg = createElement('img', {
    src: './logo/github.png',
    alt: 'GitHub'
});

const linkedinImg = createElement('img', {
    src: './logo/linkedin.png',
    alt: 'LinkedIn'
});

githubLink.appendChild(githubImg);
linkedinLink.appendChild(linkedinImg);
socialIcons.appendChild(githubLink);
socialIcons.appendChild(linkedinLink);

burgerMenu.appendChild(socialIcons);

// Création du footer du menu
const menuFooter = createElement('div', { class: 'jb-menu-footer' });

// Ajout de la section BLOG
menuFooter.appendChild(createElement('div', { class: 'jb-section-title' }, 'BLOG'));

// Création de la liste de menu avec vos liens personnalisés
const menuItems = [
    { text: 'Home', url: './index.html' },
    { text: 'À propos', url: './about.html' },
    { text: 'Archives', url: './in_progress.html' },
    { text: 'Me contacter', url: './Contact.html' },
    { text: 'Disclaimer', url: './Disclaimer.html' },
    { text: 'Projets', url: './Projet_menu.html' },
    { text: 'SKD', url: './in_progress.html' }
];

const menuList = createElement('ul', { class: 'jb-menu-list' });
menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.url;
    li.appendChild(a);
    menuList.appendChild(li);
});
menuFooter.appendChild(menuList);

// Ajout du copyright
const copyright = createElement('div', { class: 'jb-copyright' });
copyright.innerHTML = '© 2024. Tous droits réservés.<br>';
copyright.appendChild(createElement('a', { 
    href: 'https://40tjg940.github.io/',
    style: 'color: #888; text-decoration: none;'
}, 'https://40tjg940.github.io/'));
menuFooter.appendChild(copyright);

// Ajout du footer au menu
burgerMenu.appendChild(menuFooter);

// Ajout du menu au body
document.body.appendChild(burgerMenu);

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('jb-menu-open');
}

// Ajout de l'événement pour ouvrir/fermer le menu
burgerBtn.addEventListener('click', toggleMenu);

// Ouvrir automatiquement le menu au chargement de la page
window.addEventListener('load', () => {
    setTimeout(toggleMenu, 100); // Petit délai pour s'assurer que tout est chargé
});

// Fonction pour gérer la réactivité
function handleResize() {
    if (window.innerWidth <= 768) {
        burgerMenu.style.width = '100%';
        document.body.style.marginLeft = burgerMenu.classList.contains('active') ? '100%' : '0';
    } else {
        burgerMenu.style.width = '250px';
        document.body.style.marginLeft = burgerMenu.classList.contains('active') ? '250px' : '0';
    }
}

// Ajout de l'événement de redimensionnement
window.addEventListener('resize', handleResize);

// Appel initial pour configurer correctement le menu
handleResize();