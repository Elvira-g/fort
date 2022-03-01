import equipment from './equipment.js';
import modalSlider from './modal-slider.js';

const faq = [
    {
        id: '1',
        title: 'Сколько стоит внутренняя система охраны?',
        text: 'Стоимость внутренней системы охраны для квартиры 9100 руб., для дома 14900 руб. Если устройств из данного комплекта недостаточно, то их можно увеличить. Для того чтобы рассчитать стоимость необходимого вам комплекта охраны мы предлагаем оставить ваши данные и наши специалисты свяжутся с вами и сделают расчет индивидуально. Мы рекомендуем воспользоваться бесплатным выездом инженера.'
    },
    {
        id: '2',
        title: 'Какое время реагирования?',
        text: 'Для того чтобы рассчитать стоимость необходимого вам комплекта охраны мы предлагаем оставить ваши данные и наши специалисты свяжутся с вами и сделают расчет индивидуально. Мы рекомендуем воспользоваться бесплатным выездом инженера',
    },
    {
        id: '3',
        title: 'Сколько времени занимает монтаж системы?',
        text: 'Если устройств из данного комплекта недостаточно, то их можно увеличить. Для того чтобы рассчитать стоимость необходимого вам комплекта охраны мы предлагаем оставить ваши данные и наши специалисты свяжутся с вами и сделают расчет индивидуально. Мы рекомендуем воспользоваться бесплатным выездом инженера.',
    }
]


const contactModal = document.querySelector('.modal-contact-block');
const contactModalWindow = document.querySelector('.modal-contact-window');
const contactModalText = document.querySelector('.modal-contact-text-block');
const contactModalClose = document.querySelector('.modal-contact-close');
const contactBtn = document.querySelectorAll('.call-btn');

const equipmentModal = document.querySelector('.modal-equipment-block');
const equipmentModalWindow = document.querySelector('.modal-equipment-window');
const equipmentModalClose = document.querySelector('.modal-equipment-close');
const equipmentInfoBtn = document.querySelectorAll('.equipment-info');
const equipmentTitle = document.querySelector('.modal-equipment-title');
const equipmentText = document.querySelector('.modal-equipment-text');
const equipmentList = document.querySelector('.equipment-list');
const equipmentImageMain = document.querySelector('.modal-equipment-img-window');
const equipmentSliderImage = document.querySelector('.modal-equipment-img-slider');

const faqBlock = document.querySelector('.faq-items-block');

const bannerBlock = document.querySelector('.banner');
const bannerClose = document.querySelector('.banner-close');

const callForm = document.querySelector('.call-form');

const tel = document.querySelector('.tel');

const contactsForm = document.querySelector('.contacts-form');

const menuBtn = document.querySelector('.hamburger');
const menuBlock = document.querySelector('.menu-block');
const menuItem = document.querySelectorAll('.menu-item');


window.addEventListener('load', () => {
    showFaq();
    addFaqAction();
    contactBtn.forEach((item) => {
    item.addEventListener('click', () => {
        contactModalWindow.style.animationName = 'modal';
        contactModal.style.display = 'flex';
        showForm();
        })
    })

    contactModalClose.addEventListener('click', () => {
        contactModalWindow.style.animationName = 'modal-close';
        setTimeout(() => contactModal.style.display = 'none', 400);
    })

    callForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactModal.style.display = 'flex';
    showMassage('Спасибо!');
    })

    contactsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactModal.style.display = 'flex';
        showMassage('Спасибо!');
    })

    equipmentModalClose.addEventListener('click', () => {
        equipmentModalWindow.style.animationName = 'modal-close';
        setTimeout(() => equipmentModal.style.display = 'none', 400);
    })

    equipmentInfoBtn.forEach((item) => {
        item.addEventListener('click', () => {
            equipmentModalWindow.style.animationName = 'modal';
            equipmentModal.style.display = 'flex';
            showEquipment(item.dataset.equipment);
        })
    })

    bannerClose.addEventListener('click', () => {
        bannerBlock.style.display = 'none';
    })

    menuBtn.addEventListener('click', function () {
        if(this.classList.contains('is-active')){
            closeMenuBtn(this);
        } else {
            openMenuBtn(this);
        }
    })

    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            if(menuBtn.classList.contains('is-active')){
                closeMenuBtn(menuBtn);
            } else {
                openMenuBtn(menuBtn);
            }
        })
    })
})

window.addEventListener('click', (e) => {
    if(e.target == equipmentModal) {
        equipmentModal.style.display = 'none';
    }

    if(e.target == contactModal) {
        contactModal.style.display = 'none';
    }
})



function showForm() {
    contactModalText.innerHTML = `
        <h2 class="modal-contact-title">Мы перезвоним вам!</h2>
        <form class="modal-contact-form">
            <input type="text" name="name" placeholder="ФИО" autocomplete="off">
            <input type="tel" name="tel" placeholder="Мобильный телефон" autocomplete="off" class="tel">
            <input id="policy-checkbox" type="checkbox" name="checkbox">
            <label for="policy-checkbox" class="contact-checkbox-label">Я принимаю условия обработки персональных данных</label>
            <button type="submit" class="btn-orange modal-contact-btn">Отправить</button>
        </form>
    `;
    const contactModalForm = document.querySelector('.modal-contact-form');
    const phone_inputs = document.querySelectorAll('.tel');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
    contactModalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showMassage('Спасибо за заказ!');
    })

}

function showMassage(message) {
    contactModalText.innerHTML = `
    <h2 class="modal-contact-title">${message}</h2>
    <p class="section-text">Мы свяжемся с Вами в ближайшее время.</p>
    <button class="btn-orange modal-contact-back-btn">Вернуться на главную</button>
    `;
    const contactModalBackBtn = document.querySelector('.modal-contact-back-btn');
    contactModalBackBtn.addEventListener('click', () => {
        location.href='index.html';
    })
}

function showFaq() {
    faq.forEach((item) => {
        const faqItem = `
        <div class="faq-item">
            <img src="./assets/svg/arrow.svg" alt="" class="faq-item-img-show faq-btn" data-faq="${item.id}">
            <h3 class="faq-item-title">${item.title}</h3>
            <p class="faq-item-text" data-faq="${item.id}">${item.text}</p>
        </div>`;
        faqBlock.insertAdjacentHTML('beforeend', faqItem);
    })
     
}

function addFaqAction() {
    const faqBtn = document.querySelectorAll('.faq-btn');
    
    faqBtn.forEach((item) => {
        item.addEventListener('click', () => {
            if ( item.classList.contains('faq-item-img-show') ) {
                item.classList.remove('faq-item-img-show');
                item.classList.add('faq-item-img-close');
                showFaqText(item.dataset.faq);
            } else {
               item.classList.remove('faq-item-img-close');
               item.classList.add('faq-item-img-show') 
               hideFaqText(item.dataset.faq)
            }
            
        })
    })
} 

function showFaqText(id) {
    const faqText = document.querySelectorAll('.faq-item-text');
    faqText.forEach((item) => {
        if ( item.dataset.faq === id) {
            item.style.maxHeight = item.scrollHeight + 13 + 'px';
            item.style.paddingTop = '13px';
            // item.style.height = 'auto';
        }
    })
}

function hideFaqText(id) {
    const faqText = document.querySelectorAll('.faq-item-text');
    faqText.forEach((item) => {
        if ( item.dataset.faq === id) {
            item.style.maxHeight = null;
            item.style.paddingTop = '0';
            // item.style.height = '0';
        }
    })
}

function showEquipment(id) {
    equipment.forEach((item) => {
        if (item.id === id) {
            equipmentTitle.innerHTML = item.name;
            equipmentText.innerHTML = item.description.text;
            equipmentList.innerHTML = '';
            equipmentSliderImage.innerHTML = '';
            let equip = item.description.equip;
            showEquipmentList(equip)
            let images = item.images;
            showEquipmentSlider(images);
            showModalEquipmentSlider(images);
            changeSliderImage();
            modalSlider();
        }
    }
)}

function showEquipmentList(equip) {
    for ( let i = 0; i < equip.length; i++) {
        const equipItem = `<li class="section-list-item">${equip[i]}</li>`;
        equipmentList.insertAdjacentHTML('beforeend', equipItem);
    }
}

function showEquipmentSlider(images) {
    equipmentImageMain.style.backgroundImage = `url(./assets/img/equipment/${images[0]}.jpg)`;
    for ( let i = 0; i < images.length; i++) {
        const sliderItem = `<div class="modal-equipment-img-item" data-image="${images[i]}" style="background-image: url('./assets/img/equipment/${images[i]}.jpg')"></div>`;
        equipmentSliderImage.insertAdjacentHTML('beforeend', sliderItem);
    }
}

function showModalEquipmentSlider(images) {
    const modalSliderTrack = document.querySelector('.modal-equipment-slider-track');
    const modalSliderPagBlock = document.querySelector('.modal-slider-pag-block');
    modalSliderTrack.innerHTML = '';
    modalSliderPagBlock.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        const slide = `
        <div class="modal-slide" data-modSlide="${i}" style="background-image: url('./assets/img/equipment/${images[i]}.jpg')"><div>`
        const pag = `
        <div class="modal-slider-pag-item" data-modSlide=${i}></div>`;
        modalSliderTrack.insertAdjacentHTML('beforeend', slide);
        modalSliderPagBlock.insertAdjacentHTML('beforeend', pag);
    }

}

function changeSliderImage() {
    const sliderItems = document.querySelectorAll('.modal-equipment-img-item');
    for (let i = 0; i < sliderItems.length; i++ ) {
        sliderItems[0].style.filter = 'brightness(1)';
        sliderItems[i].addEventListener('click', (e) => {
            const targetImg = e.target.dataset.image;
            sliderItems.forEach((item) => {
                if ( item.dataset.image === targetImg ) {
                    item.style.filter = 'brightness(1)';
                } else {
                    item.style.filter = 'brightness(0.5)';
                }
            })
            equipmentImageMain.style.backgroundImage = `url(./assets/img/equipment/${targetImg}.jpg)`;
        })
    }
}

function eventCalllback (e) {
    let el = e.target,
    clearVal = el.dataset.phoneClear,
    pattern = el.dataset.phonePattern,
    matrix_def = "+7(___) ___-__-__",
    matrix = pattern ? pattern : matrix_def,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = e.target.value.replace(/\D/g, "");
     
    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
            e.target.value = '';
            return;
        }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
}

function closeMenuBtn(btn) {
    btn.classList.remove('is-active');
    menuBlock.style.opacity = '0';
    setTimeout(() => menuBlock.style.display = 'none', 400);
}

function openMenuBtn(btn) {
    btn.classList.add('is-active');
    menuBlock.style.display = 'block';
    setTimeout(() => menuBlock.style.opacity = '1', 200);
    
}

const phone_inputs = document.querySelectorAll('.tel');
for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
    }
}
