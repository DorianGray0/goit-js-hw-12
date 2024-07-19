import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function renderFunctions(photos) {
  const list = document.querySelector('.photos-list');

  const photoList = photos
    .map(
      ({
        downloads,
        comments,
        views,
        likes,
        tags,
        webformatURL,
        largeImageURL,
      }) => `
    <li class="gallery">
      <a class="gallery-link" href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy">
      <div class="gallery-wrap"><span class="span">Likes <span class="value">${likes}</span></span>
      <span class="span">Views <span class="value">${views}</span></span>
      <span class="span">Comments <span class="value">${comments}</span></span>
      <span class="span">Downloads <span class="value">${downloads}</span></span></div></a>
    </li>`
    )
    .join('');

  list.insertAdjacentHTML('beforeend', photoList);
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery');
  if (galleryItem) {
    const { height } = console.log(galleryItem.getBoundingClientRect());
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}

function clearList() {
  const list = document.querySelector('.photos-list');
  return (list.innerHTML = '');
}

export { clearList, renderFunctions, smoothScroll };
