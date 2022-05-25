import equipment from './equipment.js';
import amEquipment from './amEquipment.js';
import translate from './translate.js';
import modalSlider from './modal-slider.js';

const faq = [
    {
        id: '1',
        title: 'Если выбрать охрану гос. структур через частную фирму, охрана будет хуже? Ко мне не приедут?',
        text: 'Приедут. Все клиенты вносятся в специальное программное обеспечение. Операторы и сотрудники гос. структур реагируют на все тревоги, независимо от того, как они попали в программу, напрямую через гос. структуру или через компанию-партнера. Охранные государственные предприятия работают по партнерскому договору с частными охранными фирмами.'
    },
    {
        id: '2',
        title: 'У гос. структур есть только три вида оборудования, с которым они работают?',
        text: 'Приток, Юпитер, Мираж? Остальные не интегрируются? Интегрируются. Просто закупки больших государственных структур ограничены, система негибка, неповоротлива, в данный момент есть возможность закупать только такие системы, но принимать сигналы по партнерской программе они могут с самых разных охранных приборов.',
    },
    {
        id: '3',
        title: 'Зачем брать охрану в частной фирме, не в гос. структуре напрямую?',
        text: 'Во-первых, ответственность. Гос структуры не прописывают время приезда в договоре. Да, как правило, они приезжают очень быстро, в течение 5 минут. Но иногда бывают случаи опоздания, и перед вами не ответят в случае ущерба. Мы же готовы взять на себя такие риски и покрыть до 1 млн руб. Во-вторых, обслуживание. Гос. структуры не гибки, работают с 9 до 18, в поддержке вам дают номера телефона, по которому стоит набрать, потому что не знают ответа на вопрос. Часто приходится платить за два отдельных договора - на охрану и обслуживание, что тратит время. Частная фирма может решать вопросы оперативно и в мессенджере или с помощью личного менеджера. В третьих, оборудование. Гос. структура поставит вам старую коробку огромных размеров без мобильного приложения, частная фирма - современную беспроводную систему с управлением со смартфона. Смысл подключаться к гос. структуре напрямую? Если охрана приедет одна и та же, а обслуживание будет намного хуже?',
    },
    {
        id: '4',
        title: 'Какая разница в цене у гос. структур и частных фирм?',
        text: 'Для квартир вы не почувствуете большой разницы в месячной плате за охрану, но за оборудование вы в среднем переплатите 15-20 тыс. рублей в гос. структуре. Для домов ситуация аналогична - стоимость примерно одинакова для месячной платы, но оборудование для дома более сложное - вы переплатите в среднем 30-40 тыс. рублей при подключении напрямую к гос. структуре. При этом оборудование будет менее качественным. Для бизнеса вы переплатите за месячное обслуживание. Средняя плата в месяц для гос. структур - 10 тыс. руб. в месяц. В частной фирме - 6000 руб. За оборудование вы также переплатите в среднем 15-20 тыс. рублей.',
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

const inputs = document.querySelectorAll('.tel');

const contactsForm = document.querySelector('.contacts-form');

const menuBtn = document.querySelector('.hamburger');
const menuBlock = document.querySelector('.menu-block');
const menuItem = document.querySelectorAll('.menu-item-link');

const sections = document.querySelectorAll('section');

const langBtns = document.querySelectorAll('.lang-block-link');
const langRu = document.querySelector('.lang-ru');
const langAm = document.querySelector('.lang-am');
const ratesBlock = document.querySelector('.todelete');
const equipmentItem = document.querySelectorAll('.equipment-item');
const benefitsFirstChild = document.querySelector('.hero-benefits-first-child');
const formNames = document.querySelectorAll('.form-name-placeholder');
const formTels = document.querySelectorAll('.form-tel-placeholder');
const errors = document.querySelectorAll('.error');
let lang = 'am';

// function getLocalStorage() {
//     if(localStorage.getItem('lang')) {
//         lang = localStorage.getItem('lang');
//     }
//     getTranslate(lang);
// }

// function setLocalStorage() {
//     localStorage.setItem('lang', lang);
//   }
// window.addEventListener('beforeunload', setLocalStorage)

function getTranslate(lang) {
    errors.forEach((item) => {
        item.innerHTML = '';
    })
    if(lang === 'ru') {
        document.querySelector("[data-lang='am']").classList.remove('active');
        document.querySelector("[data-lang='ru']").classList.add('active');
        ratesBlock.style.display = 'block';
        benefitsFirstChild.style.width = '163px';
        equipmentItem.forEach((item)=> {
           item.style.padding = '38px 30px 30px 30px' 
        })
        formNames.forEach((item) => {
            item.placeholder = 'Имя'
        })
        formTels.forEach((item) => {
            item.placeholder = 'Телефон'
        })
        
        // lang = 'ru';
    }
    if(lang === 'am') {
        document.querySelector("[data-lang='am']").classList.add('active');
        document.querySelector("[data-lang='ru']").classList.remove('active');
        ratesBlock.style.display = 'none';
        benefitsFirstChild.style.width = '205px';
        equipmentItem.forEach((item)=> {
            item.style.padding = '38px 20px 30px 20px' 
         })
         formNames.forEach((item) => {
            item.placeholder = 'Անուն'
        })
        formTels.forEach((item) => {
            item.placeholder = 'Հեռախոս'
        })
        // lang = 'am';
    }
    let data = document.querySelectorAll('[data-tr]');
    data.forEach(function(item){
        let attr = item.dataset.tr;
        // console.log(translate[lang])
        item.textContent = translate[lang][attr];
    })
}

window.addEventListener('load', () => {
    // showFaq();
    // addFaqAction();
    // getLocalStorage();
    getTranslate(lang);
    contactBtn.forEach((item) => {
    item.addEventListener('click', () => {
        contactModalWindow.style.animationName = 'modal';
        contactModal.style.display = 'flex';
        showForm();
        })
    })

    menuBtn.addEventListener('click', function () {
        if(this.classList.contains('is-active')){
            closeMenuBtn(this);
        } else {
            openMenuBtn(this);
        }
    })

    contactModalClose.addEventListener('click', () => {
        contactModalWindow.style.animationName = 'modal-close';
        setTimeout(() => contactModal.style.display = 'none', 400);
    })

    callForm.addEventListener('submit', function(e) {
        const tel = callForm.querySelector('.tel');
        const errorField = callForm.querySelector('.error');
        e.preventDefault();
        if (tel.value == '' || tel.value.length < 12) {
            if (lang == 'ru') {
                showError(errorField, 'Заполните поле');   
            } else {
                showError(errorField, 'Լրացնել դաշտը'); 
            }
            
        } else {
            NGRequest.setData(new FormData(e.currentTarget), {'success': (d) => {
                    contactModal.style.display = 'flex';
                    if (lang == 'ru') {
                        showMassage('Спасибо!');   
                    } else {
                        showMassage('Շնորհակալություն'); 
                    }
                }, 'error': (e) => {alert('Что-то пошло не так!')}}, '/send_mail.php');
            NGRequest.send();
        }
    })

    contactsForm.addEventListener('submit', function(e) {
        const tel = contactsForm.querySelector('.tel');
        const errorField = contactsForm.querySelector('.error');
        e.preventDefault();
        if (tel.value == '' || tel.value.length < 12) {
            if (lang == 'ru') {
                showError(errorField, 'Заполните поле');   
            } else {
                showError(errorField, 'Լրացնել դաշտը'); 
            }
        } else {
            NGRequest.setData(new FormData(e.currentTarget), {'success': (d) => {
                    contactModal.style.display = 'flex';
                    if (lang == 'ru') {
                        showMassage('Спасибо!');   
                    } else {
                        showMassage('Շնորհակալություն'); 
                    }
                }, 'error': (e) => {alert('Что-то пошло не так!')}}, '/send_mail.php');
            NGRequest.send();
        }
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

    langBtns.forEach((item) => {
        item.addEventListener('click', (e) => {
            let setLang = e.target.dataset.lang;
            if ( item.classList.contains('lang-active') ) {
                lang = setLang;
                getTranslate(lang);
            } else {
                langBtns.forEach((btn) => {
                    btn.classList.remove('lang-active');
                    item.classList.add('lang-active');
                    lang = setLang;
                    getTranslate(lang);
                })
            }
        })
    })

    // bannerClose.addEventListener('click', () => {
    //     bannerBlock.style.display = 'none';
    // })

    menuItem.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToBlock(item);
            if (screen.width <= 812) {
                if(menuBtn.classList.contains('is-active')){
                    closeMenuBtn(menuBtn);
                } else {
                    openMenuBtn(menuBtn);
                }  
            }
        })
    })

    inputs.forEach((input) => {
        input.addEventListener('input', function(e){
            e.preventDefault;
            removeError(e.target);
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

function scrollToBlock(item) {
    const link = item.attributes.href.value;
    sections.forEach((section) => {
        const id = `#${section.id}`;
        if ( link == id ){ 
            if ( link == '#contacts' ) {
                const height = section.offsetTop - 280;
                window.scroll(0, height);
            } else {
               const height = section.offsetTop - 60;
               window.scroll(0, height);
            }
        }
    })
}

function showForm() {
    if (lang == 'ru') {
        contactModalText.innerHTML = `
            <h2 class="modal-contact-title" data='modal-reply'>Мы перезвоним вам!</h2>
            <form class="modal-contact-form">
                <input type="text" name="name" placeholder="Имя" autocomplete="off">
                <input type="tel" name="tel" placeholder="Телефон *" autocomplete="off" class="tel">
                <div class="error"></div>
                <input id="policy-checkbox" type="checkbox" name="checkbox">
                <label for="policy-checkbox" class="contact-checkbox-label" data='modal-policy'>Я принимаю условия обработки персональных данных</label>
                <button type="submit" class="btn-orange modal-contact-btn" data='send-btn'>Отправить</button>
            </form>
        `;
    } else {
        contactModalText.innerHTML = `
            <h2 class="modal-contact-title" data='modal-reply'>Մենք ձեզ կզանգահարենք:</h2>
            <form class="modal-contact-form">
                <input type="text" name="name" placeholder="Անուն" autocomplete="off">
                <input type="tel" name="tel" placeholder="Հեռախոս *" autocomplete="off" class="tel">
                <div class="error"></div>
                <input id="policy-checkbox" type="checkbox" name="checkbox">
                <label for="policy-checkbox" class="contact-checkbox-label" data='modal-policy'>Ես ընդունում եմ անձնական տվյալների մշակման պայմանները</label>
                <button type="submit" class="btn-orange modal-contact-btn" data='send-btn'>Ուղարկել</button>
            </form>
        `;
    }
    
    const contactModalForm = document.querySelector('.modal-contact-form');
    const phone_inputs = document.querySelectorAll('.tel');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
    contactModalForm.addEventListener('submit', function(e) {
        const tel = contactModalForm.querySelector('.tel');
        const errorField = contactModal.querySelector('.error');
        e.preventDefault();
        if (tel.value == '' || tel.value.length < 12) {
            if ( lang == 'ru' ) {
                showError(errorField, 'Заполните поле');  
            } else {
                showError(errorField, 'Լրացնել դաշտը'); 
            }
        } else {
            NGRequest.setData(new FormData(e.currentTarget), {'success': (d) => {
                    contactModal.style.display = 'flex';
                    if ( lang == 'ru' ) {
                        showMassage('Спасибо за заказ!');  
                    } else {
                        showMassage('Շնորհակալություն պատվերի համար'); 
                    }
                }, 'error': (e) => {alert('Что-то пошло не так!')}}, '/send_mail.php');
            NGRequest.send();
        }
    })
}

function showMassage(message) {
    if (lang == 'ru') {
        contactModalText.innerHTML = `
        <h2 class="modal-contact-title">${message}</h2>
        <p class="section-text" data='modal-reply-2'>Мы свяжемся с Вами в ближайшее время.</p>
        <button class="btn-orange modal-contact-back-btn" data='modal-back'>Вернуться на главную</button>
        `;
    } else {
        contactModalText.innerHTML = `
        <h2 class="modal-contact-title">${message}</h2>
        <p class="section-text" data='modal-reply-2'>Մենք կկապնվենք ձեր հետ առաջին հնարավորության դեպքում</p>
        <button class="btn-orange modal-contact-back-btn" data='modal-back'>Վերադառնալ գլխավորին</button>
        `;
    }
    
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
    if ( lang == 'am' ) {
        amEquipment.forEach((item) => {
            if (item.id === id) {
                equipmentTitle.innerHTML = item.name;
                equipmentText.innerHTML = item.description.text;
                equipmentList.innerHTML = '';
                // equipmentSliderImage.innerHTML = '';
                let equip = item.description.equip;
                showEquipmentList(equip)
                let images = item.images;
                // showEquipmentSlider(images);
                // showModalEquipmentSlider(images);
                // changeSliderImage();
                // modalSlider();
            }
        })
    }
    if ( lang == 'ru' ) {
        equipment.forEach((item) => {
            if (item.id === id) {
                equipmentTitle.innerHTML = item.name;
                equipmentText.innerHTML = item.description.text;
                equipmentList.innerHTML = '';
                // equipmentSliderImage.innerHTML = '';
                let equip = item.description.equip;
                showEquipmentList(equip)
                let images = item.images;
                // showEquipmentSlider(images);
                // showModalEquipmentSlider(images);
                // changeSliderImage();
                // modalSlider();
            }
        }) 
    }
}

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


function showError (field, message) {
    field.innerHTML = message;
}

function removeError () {
    const errors = document.querySelectorAll('.error');
    errors.forEach((item) => {
        item.innerHTML = '';
    })
}

const phone_inputs = document.querySelectorAll('.tel');
for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
    }
}