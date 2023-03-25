import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "34615621-fecaa10f9eea33d0198f958f8";

export default class PicsApi {
    constructor() {
        this.searchQery = ``;
        this.queryPage = 1;
        this.querryPerPage = 40;
        this.image_type = `photo`;
        this.orientation = 'horizontal';
        this.safesearch = true;
    }


async fetchPics() {
    const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQery}&page=${this.queryPage}&per_page=${querryPerPage}&image_type=${this.image_type}&orientation=${this.orientation}&safesearch=${this.safesearch}`;

    const response = await axios.get(url);
    this.incrementPage();
    return response.data;
}

get query() {
    return this.searchQery;
}

set query(newQuery) {
   this.searchQery = newQuery;
}

resetPage() {
    this.queryPage = 1;
}

incrementPage() {
    this.queryPage += 1;
}
}
