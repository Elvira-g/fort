const modalSlider = () => {
    let modalSlider = document.querySelector('.modal-equipment-slider'),
    modalSliderList = modalSlider.querySelector('.modal-equipment-slider-list'),
    modalSliderTrack = modalSlider.querySelector('.modal-equipment-slider-track'),
    modalSlides = modalSlider.querySelectorAll('.modal-slide'),
    modalPagination = modalSlider.querySelectorAll('.modal-slider-pag-item'),
    modalSlideWidth = modalSlides[0].offsetWidth,
    modalSlideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posY1 = 0,
    posY2 = 0,
    posFinal = 0,
    isSwipe = false,
    isScroll = false,
    allowSwipe = true,
    transition = true,
    nextTrf = 0,
    prevTrf = 0,
    slLength = modalSlides.length,
    lastTrf = --slLength * modalSlideWidth,
    posThreshold = modalSlides[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/,
    getEvent = function() {
        return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    },
    slide = function() {
        if (transition) {
            modalSliderTrack.style.transition = 'transform .5s';
        }
        modalSliderTrack.style.transform = `translate3d(-${modalSlideIndex * modalSlideWidth}px, 0px, 0px)`;

    },
    swipeStart = function() {
        let evt = getEvent();

        if (allowSwipe) {

            transition = true;

            nextTrf = (modalSlideIndex + 1) * -modalSlideWidth;
            prevTrf = (modalSlideIndex - 1) * -modalSlideWidth;

            posInit = posX1 = evt.clientX;
            posY1 = evt.clientY;

            modalSliderTrack.style.transition = '';

            document.addEventListener('touchmove', swipeAction);
            document.addEventListener('mousemove', swipeAction);
            document.addEventListener('touchend', swipeEnd);
            document.addEventListener('mouseup', swipeEnd);

            modalSliderList.classList.remove('grab');
            modalSliderList.classList.add('grabbing');
        }
    },
    swipeAction = function() {

        let evt = getEvent(),
        style = modalSliderTrack.style.transform,
        transform = +style.match(trfRegExp)[0];

        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;

        posY2 = posY1 - evt.clientY;
        posY1 = evt.clientY;

        if (!isSwipe && !isScroll) {
            let posY = Math.abs(posY2);
        if (posY > 7 || posX2 === 0) {
            isScroll = true;
            allowSwipe = false;
        } else if (posY < 7) {
            isSwipe = true;
        }
    }

    if (isSwipe) {
      if (modalSlideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }
      let slideLength = modalSlides.length
      if (modalSlideIndex === --slideLength) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      modalSliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  },
  swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    modalSliderList.classList.add('grab');
    modalSliderList.classList.remove('grabbing');

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          modalSlideIndex--;
          const slideData = modalSlides[modalSlideIndex].dataset.modslide;
          modalPagination.forEach((item) => {
              if (slideData === item.dataset.modslide) {
                  item.classList.add('slider-pag-item-active');
              } else {
                item.classList.remove('slider-pag-item-active');
              }
          })
          if(modalSlideIndex>=0){
            // slideNum.innerHTML = slideIndex+1;
            }   
        } else if (posInit > posX1) {
          modalSlideIndex++;
          const slideData = modalSlides[modalSlideIndex].dataset.modslide;
          modalPagination.forEach((item) => {
              if (slideData === item.dataset.modslide) {
                  item.classList.add('slider-pag-item-active');
              } else {
                item.classList.remove('slider-pag-item-active');
              }
          })
          if(modalSlideIndex>=0){
            // slideNum.innerHTML = slideIndex+1;
        }
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  },
  setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        modalSliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

modalSliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
modalSliderList.classList.add('grab');

modalSliderTrack.addEventListener('transitionend', () => allowSwipe = true);
modalSlider.addEventListener('touchstart', swipeStart);
modalSlider.addEventListener('mousedown', swipeStart);

modalPagination.forEach((item) => {
    item.addEventListener('click', function(e) {
        modalPagination.forEach((pag) => {
            pag.classList.remove('slider-pag-item-active');
        })
        e.target.classList.add('slider-pag-item-active');
        modalSlides.forEach((sl) => {
            if (e.target.dataset.modslide === sl.dataset.modslide) {
                modalSlideIndex = sl.dataset.modslide;
                slide();
            } 
        })
    })
})
}

export default modalSlider;

