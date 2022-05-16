// const add_btn = document.getElementById('add-btn');
// const modal_container = document.getElementById('modal-container');
// const btn_cancel = document.getElementById('btn-cancel');

// add_btn.addEventListener('click', () => {
//     modal_container.classList.add('show');
// })

// btn_cancel.addEventListener('click', () => {
//     modal_container.classList.remove('show');
// })

// async function fetchArticles() {
//     renderLoading();
//     const response = await fetch('http://localhost:3000/articles');
//     if (!response.ok) {
//         const message = `An error has occured: ${response.status}`;
//         throw new Error(message);
//     }
//     let articles = [];
//     const articlesPromise = await response.json().then((response) => {
//         articles = response;
//     });
//     console.log(articles);
//     return articles;
//     // await response.json().then((response) => {
//     //     renderArticles(response);
//     // });
// }
