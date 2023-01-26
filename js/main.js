// MENU

window.onscroll = function () {
    var scroll = window.scrollY;

    if (scroll >= 80) {
        document.querySelector("header").classList.add("nav-fixed");
    } else {
        document.querySelector("header").classList.remove("nav-fixed");
    }
};

// SEARCH BTN

document.querySelector('.search-open').onclick = function () {
    document.querySelector('body').classList.add('search-active');
    document.querySelector('.input-search').focus();
};

document.querySelector('.search-close').onclick = function () {
    document.querySelector('body').classList.remove('search-active');
};

//  CHANGE THEME

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

