import axios from "axios";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });

const ref = {
  searchForm: document.querySelector(`#search-form`),
  input: document.querySelector(`[type="text"]`),
  button: document.querySelector(`[type="submit"]`),
  gallery: document.querySelector(`.gallery`),
}

ref.searchForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  console.log(e.currentTarget.elements.searchQuery.value);
})

function renderCards(cards) {
    const markup = cards.markup(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `
        <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div>`
    }).join(``);
}