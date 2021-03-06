
function createSelect(selector, {
  classNameWrap = 'select-wrap', classNameHeader = 'select-header', classNameHeaderIntro = 'select-header__selectable', classNameDropDown = 'select__dropdown', classNameItem = 'select__item',
  isChoice = true }) {

  const winodwWidth = document.documentElement.clientWidth;
  let eventType = 'click'

  let selectId = Math.ceil(Date.now() * Math.random());


  if (winodwWidth < 555) {
    eventType = 'touchstart';
  }

  const deleteOpt = [...selector.children]

  let optionArr = []

  for (let i = 0; i < deleteOpt.length; i++) {
    optionArr.push(`<div class=${classNameItem}>${deleteOpt[i].value}</div>`)
  }

  let selectStr = `<div class=${classNameWrap} id=${selectId}>
  <div class=${classNameHeader} "sel" >
    <div class=${classNameHeaderIntro}>${deleteOpt[0].value}</div>
  </div>
  <div class=${classNameDropDown}>
    ${optionArr.join(' ')}
  </div>
  </div>`


  selector.insertAdjacentHTML('beforebegin', selectStr)

  const wrap = document.getElementById(`${selectId}`)
  const dropdown = wrap.querySelector(`.${classNameDropDown}`)
  const selectItem = wrap.querySelectorAll(`.${classNameItem}`)
  const selectable = wrap.querySelector(`.${classNameHeaderIntro}`)

  dropdown.classList.add('hide');

  wrap.querySelector(`.${classNameHeader}`).addEventListener(eventType, () => {
    dropdown.classList.toggle('hide')
  })

  if (isChoice) {
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
  }





  document.body.addEventListener(eventType, (event) => {
    if (!(event.target.classList.contains(`${classNameWrap}`) || event.target.classList.contains(`${classNameHeader}`) ||
      event.target.classList.contains(`${classNameDropDown}`) || event.target.classList.contains(`${classNameHeaderIntro}`) || event.target.classList.contains(`${classNameItem}`)
    )) {
      dropdown.classList.add('hide')
    }

  })

  selector.remove()
}

const painters = [{
  name: "Бенедетто ди Биндо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Бергоньоне, Амброджо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Биссоло, Франческо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Больтраффио, Джованни",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Бонсиньори, Франческо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Боттичини, Рафаэлло",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Брамантино",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Бреа, Людовико",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: " Бьяджо д’Антонио Туччи",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Веккьетта",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: " Андреа, Верроккьо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: " Доменико, Гирландайо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Беноццо, Гоццоли",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Граначчи, Франческо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Грегорио ди Чекко",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Джованни да Удине",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Джованни ди Паоло",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: " Джорджоне",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: " Парентино, Бернардо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Пезеллино",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: " Пьетро Перуджино",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Перуцци, Бальдассаре",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: "Пизанелло",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
},
{
  name: " Пинтуриккьо",
  date: "2 июня 1448 — 11 января 1494",
  text: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
  imgURL: "./img/catalog.jpg"
}]

function createCatalogItem({ name, date, text, imgURL, }) {

  return `
  <div class="catalog-card">
    <img src="${imgURL}" alt="painter" class="catalog-card__img">
    <h4 class="catalog__title subtitle">${name}</h4>
    <p class="catalog__date">${date}</p>
    <p class="text catalog_text">
      ${text}</p>
  </div>
  `
}


document.addEventListener('DOMContentLoaded', () => {

  const galerySelect = document.querySelector('.galery-list')

  createSelect(galerySelect, {})

  //Slider

  let swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
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


  const heroLists = document.querySelectorAll('.hero-list__header')
  const dropdowns = document.querySelectorAll('.hero-dropwrap')
  let isOpen = false;
  let headerdrop = null
  let headerarrow = null
  let dropheader = null


  heroLists.forEach(item => {
    item.addEventListener('click', () => {
      let dropdown = item.nextElementSibling
      headerdrop = dropdown
      let arrow = item.querySelector('.hero-list__arrow')
      headerarrow = arrow
      dropheader = item
      dropdown.classList.toggle('hide')
      if (dropdown.classList.contains('hide')) {
        arrow.classList.remove('uparrowbg')
        arrow.classList.add('downarrowbg')
        item.classList.remove('activecolor')
        item.classList.add('whitecolor')
        isOpen = false
      } else {
        arrow.classList.remove('downarrowbg')
        arrow.classList.add('uparrowbg')
        item.classList.remove('whitecolor')
        item.classList.add('activecolor')
        isOpen = true
      }
      dropdowns.forEach(el => {
        if (el !== dropdown) {
          el.classList.add('hide')
          el.previousElementSibling.classList.remove('activecolor')
          el.previousElementSibling.classList.add('whitecolor')
          el.previousElementSibling.querySelector('.hero-list__arrow').classList.remove('uparrowbg')
          el.previousElementSibling.querySelector('.hero-list__arrow').classList.add('downarrowbg')
        }
      })
    })
  })

  console.log(isOpen)

  document.body.addEventListener('click', (event) => {
    if (isOpen && (!(event.target.classList.contains('hero-list__header') || event.target.classList.contains('hero-list') || event.target.classList.contains('hero-dropwrap') ||
      event.target.classList.contains('hero-dropdown') || event.target.classList.contains('hero-dropdown__item') || event.target.classList.contains('hero-header') || event.target.classList.contains('simplebar-content')) && headerdrop)) {
      headerdrop.classList.add('hide')
      headerarrow.classList.remove('uparrowbg')
      headerarrow.classList.add('downarrowbg')
      dropheader.classList.remove('activecolor')
      dropheader.classList.add('whitecolor')
      isOpen = false;
      console.log(event.target)
    }
  })


  document.body.addEventListener('click', () => {
    console.log(isOpen)
  })


  Array.prototype.forEach.call(
    document.querySelectorAll('.hero-dropdown'),
    el => new SimpleBar(el)
  );


  $(function () {
    $(".user-accordion").accordion();
  });


  const flags = document.querySelectorAll('.catalog-header__flag')
  const catalogTabs = document.querySelectorAll('.catalog-tab')


  flags.forEach(item => {
    item.addEventListener('click', (event) => {
      flags.forEach(flag => {
        flag.classList.remove('catalog-header__flag_active')
      })
      event.currentTarget.classList.add('catalog-header__flag_active')
      catalogTabs.forEach(el => {
        if (el.dataset.country === event.currentTarget.id) {
          el.classList.remove('hideopacity')
        } else {
          el.classList.add('hideopacity')
        }
      })
    })
  })

  let painterItems = document.querySelectorAll('.catalog-list__item')

  painterItems.forEach(item => {
    item.addEventListener('click', (event) => {

      painterItems.forEach(item => {
        if (item.classList.contains('catalog-list__item-active')) {
          item.classList.remove('catalog-list__item-active')
        }
      })

      event.target.classList.add('catalog-list__item-active')

      const alert = document.getElementById('alert')

      if (alert) {
        alert.remove();
      }
      const tabs = document.querySelectorAll('.catalog-tab')
      let tab = ''

      tabs.forEach(item => {
        if (!(item.classList.contains('hideopacity'))) {
          tab = item;
          return
        }
      })

      let wrap = tab.querySelector('.catalog-main')
      let card = tab.querySelector('.catalog-card')
      let html = '';

      painters.forEach(el => {

        if (el.name.trim() === event.target.textContent.trim()) {
          html = createCatalogItem(el)
          return
        }
      })

      if (!html) {
        html = '<div class="text" id="alert">Информации о художнике не найдено</div>'
      }

      if (card) {
        card.remove()
      }


      wrap.insertAdjacentHTML('afterbegin', html)


      let currentcard = tab.querySelector('.catalog-card')
      console.log(currentcard)

      $(currentcard).hide().fadeIn('slow');

    })
  })





})



