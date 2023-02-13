let card = document.getElementById('card');
let bar = document.getElementById('searchBar');
const apis = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=9b583d4afb9e44fc88d4014ed00f7ac2';


axios.get(apis).then(res => {
    const {data} = res;
    listCard(data.articles)
});

function listCard(data) {
    
    let result = '';
    console.log(data);
    data.forEach(element => {
    result += `
    <div class="card m-1 mt-4" style="width: 23rem; background-color: #ced4da">
        <img src="${element.urlToImage}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.publishedAt}</p>
            <p class="card-text">${element.content}</p>
            <a href="${element.url}" class="btn btn-outline-light bg-secondary">Read more...</a>
        </div>
    </div>
    `
});
card.innerHTML = result;
};