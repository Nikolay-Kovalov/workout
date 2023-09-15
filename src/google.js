const refs = {
    btn: document.querySelector(".btn"),
    wrapper: document.querySelector(".wrapper"),
    input: document.querySelector(".input"),
    title: document.querySelector(".title"),
    list: document.querySelector(".list"),
    links: document.querySelector(".link_div")

};

refs.btn.addEventListener("click", onSearchClick);
refs.input.addEventListener("keydown", onKeyDown);
refs.links.addEventListener("click", onLinkClick)

function onLinkClick(evt) {
     evt.preventDefault();
    if (evt.target.nodeName === "A") {
console.log("ghv")

        getNews(refs.input.value, evt.target.textContent)
          .then(data => {
            console.log(data.articles)
            if (data.length === 0) {
                throw new Error("No data");
            }
            const markUp = data.articles.reduce((acc, item) => {
                return acc + createMarkup(item)
            }, "")
            insertToDom(markUp)

        })
    }
}

function onKeyDown(evt) {
 
    if (evt.code === "Enter") {
        console.log(evt)
        onSearchClick()
    }
}

function onSearchClick() {
    refs.wrapper.classList.add("left_top");
    refs.input.classList.add("input_width");
    refs.btn.classList.add("btn_hide");
    refs.title.classList.add("min")
    setTimeout(()=>{ refs.links.classList.add("flex")},500)
   

    getNews(refs.input.value)
        .then(data => {
            console.log(data.articles)
            if (data.length === 0) {
                throw new Error("No data");
            }
            const markUp = data.articles.reduce((acc, item) => {
                return acc + createMarkup(item)
            }, "")
            insertToDom(markUp)

        })

}



function getNews(query,page=1) {
    const BASE_URL = "https://newsapi.org/v2/everything";
    const API_KEY = "7bc68e08abfe40608ed65b6f013ff879";
   return fetch(`${BASE_URL}?apiKey=${API_KEY}&q=${query}&pageSize=10&page=${page}`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
    })
}

function createMarkup({url,title,description}) {
    return `<li class="item">
    <div class = "link_wrapper">
      <a class="item_link" href="${url || "letrados.kiev.ua"}">${url || "letrados.kiev.ua"}</a>
      </div>
    <a class="item_link" href="${url || "letrados.kiev.ua"}"><h2 class="item_title">${title || "Legal services in Kiev"}</h2></a>
    <p class="item_text">${description || "Legal services Kyiv, Ukraine. We provide services in the field of business organization and support."}</p></li>`
}

function insertToDom(markUp) {
    refs.list.innerHTML = markUp; 
}