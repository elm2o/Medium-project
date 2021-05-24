window.addEventListener('load', () => {
    renderMenu();
    initScrollColorEvent();
    initHeader();
    counters();
});

/**
 * variables globales
 */
let menuItems = [
    "Our Story",
    "Membership",
    "Write",
    "Sign In",
];

/**
 * funciones
 */
const renderMenu = () => {
    const divMenu = document.querySelector(".header_navigation_items");
    let divMenuString = "";

    for (let i = 0; i < menuItems.length; i++) {
        let currentMenuItem = menuItems[i];
        let menuString = `                        
            <li class="header_navigation_item">
                <a href="#">${currentMenuItem}</a>
            </li>`;
        divMenuString = divMenuString + menuString;
    }
    console.log(divMenuString);
    divMenu.innerHTML = divMenuString;
}

const initScrollColorEvent = () => {
    const header = document.querySelector('.header');
    window.addEventListener("scroll", () => {
        if (scrollY > 380) {
            header.classList.add("header_change");
        } else {
            header.classList.remove("header_change");
        }
    });
}

const initHeader = () => {
    const header = document.querySelector(".header");
    const counterSpan = document.querySelector('span.counter span');
    header.addEventListener("click", () => {
        let dataCounter = Number(header.dataset.myCounter);
        dataCounter++;
        header.dataset.myCounter = dataCounter;
        if (dataCounter > 10) {
            header.style.backgroundColor = "tomato";
            header.style.color = "white";
        }
    });
    header.addEventListener("mouseenter", () => {
        header.dataset.hovered = true;
    });
    header.addEventListener("mouseleave", () => {
        header.dataset.hovered = false;
    });
}

const counters = () => {
    const homeGridItems = document.querySelectorAll('.home_grid_item');
    homeGridItems.forEach(item => {
        item.addEventListener('click', () => {
            let counter = Number(item.dataset.clicked);
            counter++;
            item.dataset.clicked = counter;
        });
    });
}

const buttonAds = document.querySelectorAll('.modalAd');
buttonAds.forEach(buttonAd => {
    buttonAd.addEventListener("click", () => {
        modal_container.classList.add('show');
    });
});

const buttonAdsClose = document.querySelectorAll('.modalAdClose');
buttonAdsClose.forEach(buttonAdClose => {
    buttonAdClose.addEventListener("click", () => {
        modal_container.classList.remove('show');
    });
});