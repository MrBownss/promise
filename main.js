let card = document.getElementById('card');

const apis = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=241e074b3c3945cf850407a246c8b648';



    axios.get(apis).then(res => {
        const {data} = res;
        listCard(data.articles);
    });
    
    function listCard(data) {
        let result = '';
        console.log(data);
        data.forEach(element => {
        result += `
        <div class="card m-1 mt-4" style="width: 17rem; background-color: #ced4da">
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

    function searchNews() {

        let input = document.getElementById('input').value
        input = input.toLowerCase();
        const news = `https://newsapi.org/v2/everything?q=${input}&apiKey=241e074b3c3945cf850407a246c8b648`;

        axios.get(news).then(res => {
            const {data} =  res;
            listInput(data.articles);
        });

        function listInput(data) {
            let result = '';
            console.log(data);
            data.forEach(element => {
            result += `
            <div class="card m-1 mt-4" style="width: 17rem; background-color: #ced4da">
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
    }

    

    
    
    





