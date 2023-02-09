const toggleBtn = document.querySelector('.btn');

const articlesContainer = document.querySelector('.articles');  

toggleBtn.addEventListener('click', () => {
    //console.log('You Clicked Me!');
    document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles.map((article) => {

    const {title, date, length, snippet} = article; // destructuring

    return `<article class="post">
    <h2> ${title} </h2>
    <div class="post-info">
      <span> ${date.toLocaleDateString('en-US')} </span>
      <span> ${length} min. read </span>
    </div>
    <p>
        ${snippet}
    </p>
  </article>`;

}).join("");

articlesContainer.innerHTML = articlesData;