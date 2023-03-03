import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems.reduce(
    (accumulator, { original, preview, description }) =>
    (accumulator += `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`),
    ''
);

galleryContainer.insertAdjacentHTML('beforeend', markup);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});