
function createSelect(selector, {
  classNameWrap = 'select-wrap', classNameHeader = 'select-header', classNameHeaderIntro = 'select-header__selectable', classNameDropDown = 'select__dropdown', classNameItem = 'select__item',
}) {

  const winodwWidth = document.documentElement.clientWidth;
  let eventType = 'click'


  if (winodwWidth < 555) {
    eventType = 'touchstart';
  }

  const deleteOpt = [...selector.children]

  let optionArr = []

  for (let i = 0; i < deleteOpt.length; i++) {
    optionArr.push(`<div class=${classNameItem}>${deleteOpt[i].value}</div>`)
  }

  let selectStr = `<div class=${classNameWrap}>
  <div class=${classNameHeader} "sel" >
    <div class=${classNameHeaderIntro}>${deleteOpt[0].value}</div>
  </div>
  <div class=${classNameDropDown}>
    ${optionArr.join(' ')}
  </div>
  </div>`


  selector.insertAdjacentHTML('beforebegin', selectStr)

  const wrap = document.querySelector(`.${classNameWrap}`)

  const dropdown = wrap.querySelector(`.${classNameDropDown}`)
  const selectItem = wrap.querySelectorAll(`.${classNameItem}`)
  const selectable = wrap.querySelector(`.${classNameHeaderIntro}`)

  dropdown.classList.add('hide');

  wrap.querySelector(`.${classNameHeader}`).addEventListener(eventType, () => {
    dropdown.classList.toggle('hide')
  })

  selectItem.forEach(item => {
    if (item.textContent === selectable.textContent) {
      item.classList.add('hide')
    }
  })

  selectItem.forEach(item => {
    item.addEventListener(eventType, (event) => {
      selectable.textContent = event.target.textContent
      dropdown.classList.toggle('hide')
      selectItem.forEach(item => {
        if (item === event.target) {
          item.classList.add('hide')
        } else {
          item.classList.remove('hide')
        }
      })
    })
  })


  document.body.addEventListener(eventType, (event) => {
    if (!(event.target.classList.contains(`${classNameWrap}`) || event.target.classList.contains(`${classNameHeader}`) ||
      event.target.classList.contains(`${classNameDropDown}`) || event.target.classList.contains(`${classNameHeaderIntro}`) || event.target.classList.contains(`${classNameItem}`)
    )) {
      dropdown.classList.add('hide')
    }

  })

  selector.remove()
}


document.addEventListener('DOMContentLoaded', () => {

  const elements = document.querySelectorAll('.js-choice');
  const galerySelect = document.querySelector('.galery-list')

  const seletConfig = {
    shouldSort: false,
    searchEnabled: false,
    removeItemButton: false,
    itemSelectText: "",
    position: "bottom",
  }

  elements.forEach((item => {
    return new Choices(item, seletConfig)
  }))


  const options = Array.from(document.querySelectorAll('.choices__item--choice')).filter(item => {
    if (!(item.classList.contains('choices__item--disabled'))) {
      return item
    }
  })

  options.forEach((item, index) => {
    item.style.backgroundImage = `url('../img/option${index}.jpg')`
  })

  Array.prototype.forEach.call(
    document.querySelectorAll('.choices__list--dropdown'),
    el => {
      console.log(el)
      return new SimpleBar(el)
    }
  );

  createSelect(galerySelect, {})

  //Slider

  let swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    spaceBetween: 30,
    autoHeight: false,
    slidesPerView: 2,
    slidesPerGroup: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',


    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },

    pagination: {
      el: '.slider__text',
      type: 'fraction',
    },

    breakpoints: {
      1340: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 52,
      },

      1000: {
        spaceBetween: 34,
      },

      545: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,

      }

    },
  })

})
