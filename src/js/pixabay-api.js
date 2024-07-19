import axios from 'axios';
import { clearList } from './render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconOctagon from '/img/bi_x-octagon.png';

const KEY_URL = '44930216-c8fe7065044399c3ab26c911d';
const URL = 'https://pixabay.com';
const END_POINT = 'api/';

axios.defaults.baseURL = URL;

export async function fetchPhotos({ q = '', page = 1, per_page = 15 } = {}) {
  try {
    const responce = await axios.get(END_POINT, {
      params: {
        key: KEY_URL,
        q,
        page,
        per_page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });

    const data = await responce.data;
    console.log(data);

    if (data.hits.length === 0) {
      clearList();

      iziToast.error({
        position: 'topRight',
        title: 'Sorry, there are no images matching',
        message: 'your search query. Please try again!',
        titleColor: 'white',
        titleSize: '16px',
        messageColor: 'white',
        backgroundColor: '#ef4040',
        iconUrl: iconOctagon,
        layout: 2,
        progressBarColor: '#b51b1b',
        maxWidth: '432px',
      });
      return;
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}
