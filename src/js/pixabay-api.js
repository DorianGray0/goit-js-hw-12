import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconOctagon from '/img/bi_x-octagon.png';

import { clearList } from './render-functions';

export function fetchPhotos(textValue) {
  const KEY_URL = '44930216-c8fe7065044399c3ab26c911d';
  const URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    q: textValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?key=${KEY_URL}&${searchParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(photos => {
      if (photos.hits.length === 0) {
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
      return photos;
    })
    .catch(error => console.error(error));
}
