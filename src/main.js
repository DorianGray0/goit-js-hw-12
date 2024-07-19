import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import caution from './img/bi_exclamation-triangle.png';

import { fetchPhotos } from './js/pixabay-api';
import { clearList, renderFunctions } from './js/render-functions';

const elements = {
  form: document.querySelector('.js-form'),
  spinner: document.querySelector('.js-loader'),
};

const params = {
  q: '',
};

elements.form.addEventListener('submit', handlerSearch);

async function handlerSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  params.q = form.elements.textValue.value.trim();

  if (!params.q) {
    iziToast.info({
      position: 'topRight',
      title: 'It is can not be empty',
      message: 'you must to write something in the stroke',
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

  try {
    const hits = await fetchPhotos(params);
    renderFunctions(hits);
  } catch (err) {
    console.log(err);
  } finally {
    spinnerClose();
    form.reset();
  }
}

function spinnerShown() {
  return elements.spinner.classList.remove('hidden');
}

function spinnerClose() {
  return elements.spinner.classList.add('hidden');
}
