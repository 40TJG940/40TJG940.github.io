// Fonction pour créer un élément avec des attributs et du contenu
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    if (content) element.innerHTML = content;
    return element;
}

// Création du style
const style = createElement('style', {}, `
    .burger-btn {
        position: fixed;
        left: 20px;
        top: 20px;
        z-index: 1001;
        background: none;
        border: none;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
    }
    .burger-menu {
        position: fixed;
        left: -250px;
        top: 0;
        width: 250px;
        height: 100%;
        background-color: #1a1a1a;
        transition: 0.3s;
        z-index: 1000;
        overflow-y: auto;
        padding: 20px;
        box-sizing: border-box;
    }
    .burger-menu.active {
        left: 0;
    }
    .profile-image {
        width: 100%;
        border-radius: 10px;
        margin-bottom: 10px;
    }
    .name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #ffffff;
    }
    .tagline {
        font-size: 14px;
        color: #888;
        margin-bottom: 20px;
    }
    .section-title {
        font-size: 18px;
        font-weight: bold;
        margin-top: 243px;
        margin-bottom: 10px;
        color: #ffffff;
    }
    .menu-list {
        list-style-type: none;
        padding: 0;
    }
    .menu-list li {
        margin-bottom: -8px;
    }
    .menu-list a {
        color: #ffffff;
        text-decoration: none;
        font-size: 16px;
    }
    .menu-list a:hover {
        color: #00a8e8;
    }
    .social-icons {
        margin-top: 20px;
    }
    .social-icons a {
        display: inline-block;
        margin-right: 10px;
    }
    .social-icons img {
        width: 24px;
        height: 24px;
    }
    .footer {
        margin-top: 20px;
        font-size: 12px;
        color: #888;
    }
`);

document.head.appendChild(style);

// Création du bouton du menu burger
const burgerBtn = createElement('button', { class: 'burger-btn' }, '☰');
document.body.appendChild(burgerBtn);

// Création du conteneur du menu
const burgerMenu = createElement('div', { class: 'burger-menu' });

// Ajout de l'image de profil
burgerMenu.appendChild(createElement('img', { 
    src: './post_image_large.jpeg',
    alt: 'Julien',
    class: 'profile-image'
}));

// Ajout du nom et de la tagline
burgerMenu.appendChild(createElement('div', { class: 'name' }, 'Julien'));
burgerMenu.appendChild(createElement('div', { class: 'tagline' }, 'Bonnet'));

// Ajout de la section BLOG
burgerMenu.appendChild(createElement('div', { class: 'section-title' }, 'BLOG'));

// Création de la liste de menu

const menuItems = [
    { text: 'Home', url: '#' },
    { text: 'À propos', url: './about.html' },
    { text: 'Archives', url: '#' },
    { text: 'Me contacter', url: './Contact.html' },
    { text: 'Disclaimer', url: './Disclaimer.html' },
    { text: 'Projets', url: './Projet_menu.html' },
    { text: 'Trophées/Certifications', url: '#' }
];

const menuList = createElement('ul', { class: 'menu-list' });
menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.url;
    li.appendChild(a);
    menuList.appendChild(li);
});
burgerMenu.appendChild(menuList);

const socialIcons = createElement('div', { class: 'social-icons' });
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

// Ajout du footer
const footer = createElement('div', { class: 'footer' });
footer.innerHTML = '© 2024. Tous droits réservés.<br>';
footer.appendChild(createElement('a', { 
    href: 'https://TULULULU.github.io',
    style: 'color: #888; text-decoration: none;'
}, 'https://TULULULU.github.io'));
burgerMenu.appendChild(footer);

// Ajout du menu au body
document.body.appendChild(burgerMenu);

// Ajout de l'événement pour ouvrir/fermer le menu
burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});