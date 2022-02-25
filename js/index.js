
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

const equipment = [
    {
        id: '1',
        name: 'Ajax',
        description: {
            text: 'Бренд Ajax Systems широко известен на рынке беспроводных элементов охранных систем. Оборудование бренда отличается высокой степень точности срабатывания и нашло применение в «умных домах» (Smart Home). Системы данного производителя имеют продуманный до мелочей дизайн, а потому могут вписываться как в классические, так и современные интерьеры, подходят для зданий и сооружений различного назначения и площади.',
            equip: [
                'Контрольная панель', 'Датчик движения', 'Датчик открытия', 'Брелок с тревожной кнопкой'
            ],
        },
        images: ['ajax_1', 'ajax_2', 'ajax_3']
    },
    {
        id: '2',
        name: 'C.Nord',
        description: {
            text: 'Бюджетное решение для защиты квартиры. Бренд Ajax Systems широко известен на рынке беспроводных элементов охранных систем. Оборудование бренда отличается высокой степень точности срабатывания и нашло применение в «умных домах» (Smart Home). Системы данного производителя имеют продуманный до мелочей дизайн, а потому могут вписываться как в классические, так и современные интерьеры, подходят для зданий и сооружений различного назначения и площади.',
            equip: [
                'Контрольная панель', 'Датчик движения', 'Брелок с тревожной кнопкой'
            ],
        },
        images: ['ajax_2', 'ajax_1', 'ajax_3']
    },
    {
        id: '3',
        name: 'Тревожная кнопка',
        description: {
            text: 'Устройство для защиты помещений и имущества от незаконного вторжения. Оборудование бренда отличается высокой степень точности срабатывания и нашло применение в «умных домах» (Smart Home). Системы данного производителя имеют продуманный до мелочей дизайн, а потому могут вписываться как в классические, так и современные интерьеры, подходят для зданий и сооружений различного назначения и площади.',
            equip: [
                'Контрольная панель', 'Датчик движения',
            ],
        },
        images: ['ajax_3', 'ajax_2', 'ajax_1']
    }
]


const contactModal = document.querySelector('.modal-contact-block');
const contactModalText = document.querySelector('.modal-contact-text-block');
const contactModalClose = document.querySelector('.modal-contact-close');
const contactBtn = document.querySelectorAll('.call-btn');

const equipmentModal = document.querySelector('.modal-equipment-block');
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

const contactsForm = document.querySelector('.contacts-form');


window.addEventListener('load', () => {
    showFaq();
    addFaqAction();
})

contactBtn.forEach((item) => {
    item.addEventListener('click', () => {
        contactModal.style.display = 'flex';
        showForm();
    })
})

contactModalClose.addEventListener('click', () => {
    contactModal.style.display = 'none';
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
    equipmentModal.style.display = 'none';
})

equipmentInfoBtn.forEach((item) => {
    item.addEventListener('click', () => {
        equipmentModal.style.display = 'flex';
        showEquipment(item.dataset.equipment);
    })
})

bannerClose.addEventListener('click', () => {
    bannerBlock.style.display = 'none';
})

function showForm() {
    contactModalText.innerHTML = `
        <h2 class="modal-contact-title">Мы перезвоним вам!</h2>
        <form class="modal-contact-form">
            <input type="text" name="name" placeholder="ФИО" autocomplete="off">
            <input type="tel" name="tel" placeholder="Мобильный телефон" autocomplete="off">
            <input id="policy-checkbox" type="checkbox" name="checkbox">
            <label for="policy-checkbox" class="contact-checkbox-label">Я принимаю условия обработки персональных данных</label>
            <button type="submit" class="btn-orange modal-contact-btn">Отправить</button>
        </form>
    `;
    const contactModalForm = document.querySelector('.modal-contact-form');
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
            item.style.paddingTop = '13px';
            item.style.height = 'auto';
        }
    })
}

function hideFaqText(id) {
    const faqText = document.querySelectorAll('.faq-item-text');
    faqText.forEach((item) => {
        if ( item.dataset.faq === id) {
            item.style.paddingTop = '0';
            item.style.height = '0';
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
            showEquipmentSlider(images)
            changeSliderImage(images);
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

function changeSliderImage(images) {
    const sliderItems = document.querySelectorAll('.modal-equipment-img-item');
    sliderItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            const targetImg = e.target.dataset.image;
            equipmentImageMain.style.backgroundImage = `url(./assets/img/equipment/${targetImg}.jpg)`;
        })
    })
}