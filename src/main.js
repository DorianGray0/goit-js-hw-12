import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import caution from './img/bi_exclamation-triangle.png';

import { fetchPhotos } from './js/pixabay-api';
import {
  clearList,
  renderFunctions,
  smoothScroll,
} from './js/render-functions';

const elements = {
  form: document.querySelector('.js-form'),
  spinner: document.querySelector('.js-loader'),
  btnMore: document.querySelector('.js-btn-more'),
};

const hiddenClass = 'hidden';

const params = {
  q: '',
  page: 1,
  per_page: 15,
  maxPage: 0,
};

elements.form.addEventListener('submit', handlerSearch);

async function handlerSearch(evt) {
  evt.preventDefault();
  params.page = 1;

  const form = evt.currentTarget;
  params.q = form.elements.textValue.value.trim();

  if (!params.q) {
    iziToast.info({
      position: 'topRight',
      title: 'It is can not be empty',
      message: 'you must to write something into the stroke',
      titleColor: 'white',
      titleSize: '16px',
      messageColor: 'white',
      backgroundColor: '#09f',
      iconUrl: caution,
      layout: 2,
      progressBarColor: ' #3958c9',
      maxWidth: '432px',
      closeOnEscape: true,
    });
    return;
  }
  clearList();
  spinnerShown();
  elements.btnMore.classList.add(hiddenClass);

  try {
    const { hits, totalHits } = await fetchPhotos(params);

    params.maxPage = Math.ceil(totalHits / params.per_page);

    renderFunctions(hits);

    if (hits.length > 0 && hits.length !== totalHits) {
      elements.btnMore.classList.remove(hiddenClass);
      elements.btnMore.addEventListener('click', handlerLoader);
    } else {
      elements.btnMore.classList.add(hiddenClass);
    }
  } catch (err) {
    console.log(err);
  } finally {
    spinnerClose();
    form.reset();
  }
}

async function handlerLoader() {
  elements.btnMore.classList.add(hiddenClass);
  spinnerShown();

  params.page += 1;
  try {
    const { hits } = await fetchPhotos(params);

    renderFunctions(hits);
    smoothScroll();
  } catch (err) {
    console.log(err);
  } finally {
    spinnerClose();
    elements.btnMore.classList.remove(hiddenClass);
  }

  if (params.maxPage === params.page) {
    elements.btnMore.classList.add(hiddenClass);
    iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
      titleColor: 'white',
      titleSize: '16px',
      messageColor: 'white',
      backgroundColor: '#09f',
      iconUrl: caution,
      progressBarColor: ' #3958c9',
      maxWidth: '432px',
    });

    elements.btnMore.removeEventListener('click', handlerLoader);
  }
}

function spinnerShown() {
  return elements.spinner.classList.remove(hiddenClass);
}

function spinnerClose() {
  return elements.spinner.classList.add(hiddenClass);
}
