import './css/styles.css';
import notifier from './service/notifier';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });

const refs = {
  searchForm: document.querySelector(`#search-form`),
  gallery: document.querySelector(`.gallery`),
}

refs.searchForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  // const searchFormQuery = e.currentTarget.elements.searchForm.value;
  

  const searchParams = new URLSearchParams({
    key: `34615621-fecaa10f9eea33d0198f958f8`,
    q: ``,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
    page: 1,
    per_page: 40,
  })

 
  fetch(`https://pixabay.com/api/?${searchParams}`)
  .then(response => response.json())
  .then(({hits}) => {
    renderCards(hits)
  }).catch(error => {
    console.log(error);
  })

})


function renderCards(hits) {
    const markup = hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `
        <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b><span>${likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b><span>${views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b><span>${comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b><span>${downloads}</span>
    </p>
  </div>
</div>`
    }).join(``);

    refs.gallery.innerHTML = markup;
}