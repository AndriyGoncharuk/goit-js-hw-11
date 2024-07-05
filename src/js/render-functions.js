import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images) {
    const gallery = document.getElementById('gallery');
    const markup = images.map(image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <div class="info">
                <p span>Likes: ${image.likes}</p>
                <p span>Views: ${image.views}</p>
                <p span>Comments: ${image.comments}</p>
                <p span>Downloads: ${image.downloads}</p>
            </div>
        </li>
    `).join('');

    gallery.innerHTML = markup;
    new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }).refresh();
}

export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
}

export function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
}

export function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
}
