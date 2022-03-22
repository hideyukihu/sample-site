/* グローバルメニュー */
const jsHamburger = document.getElementById('js-hamburger');
const body = document.body;
const spHeaderMenu = document.getElementById('js-global-menu')
const drawerBackground = document.getElementById('js-drawer-background')
const listClose = document.querySelectorAll('#close');


jsHamburger.addEventListener('click', function () {
    body.classList.toggle('is-drawerActive')
    if (this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', 'true');
        spHeaderMenu.setAttribute('area-hidden', 'false')
    } else {
        this.setAttribute('aria-expanded', 'false')
        spHeaderMenu.setAttribute('area-hidden', 'true')
    };
});
drawerBackground.addEventListener('click', () => {
    body.classList.remove('is-drawerActive')
    jsHamburger.setAttribute('aria-expanded', 'false')
    spHeaderMenu.setAttribute('area-hidden', 'true')
});

console.log(listClose);
listClose.forEach(
    function (btneach) {
        btneach.addEventListener('click', () => {
            body.classList.remove('is-drawerActive')
            jsHamburger.setAttribute('aria-expanded', 'false')
            spHeaderMenu.setAttribute('area-hidden', 'true')
        });
    })



// Swiper設定
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    speed: 1000,

    autoplay: {
        delay: 5000
    },

    slidesPerView: 4,
    breakpoints: {
        1: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        },
        768: { slidesPerView: 2.5, },
        992: { slidesPerView: 4, }


    },

    centeredSlides: true,

    allowTouchMove: true,

    spaceBetween: 56,


    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// Aos設定
AOS.init();

// アコーディオン
const title = document.querySelectorAll('.faq__question');
title.forEach(titleEach => {
    let content = titleEach.nextElementSibling;
    titleEach.addEventListener('click', () => {
        content.classList.toggle('is-open')
    })
});

/*お問い合わせフォーム  */
const jsSubmit = document.querySelector('#jsSubmit');
const thankYou = document.querySelector('.thank-you');
const nameInput = document.querySelector('input[name="username"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="content"]');

// console.log(messageInput);
const inputs = [
    nameInput, emailInput, messageInput
]


let isFormValid = false;
// let isValidationOn = false;

const resetElm = (elm) => {
    // elm.classList.remove('invalid');
    elm.nextElementSibling.classList.remove("hidden");
};

const invalideElm = (elm) => {
    // elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
}

const validtelInputs = () => {
    // if(!isValidationOn) return;
    resetElm(nameInput);
    resetElm(emailInput);
    resetElm(messageInput);

    isFormValid = true;


    if (!nameInput.value) {
        invalideElm(nameInput);
        isFormValid = false;
    }

    if (!emailInput.value) {
        invalideElm(emailInput);
        isFormValid = false;

    }

    if (!messageInput.value) {
        invalideElm(messageInput);
        isFormValid = false;

    }
}

jsSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // if(!isValidationOn) true;
    validtelInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove('hidden');
    }
})

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validtelInputs();
    });
});




