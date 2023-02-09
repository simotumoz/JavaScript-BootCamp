let filterProducts = [...products]; // making a copy-array of products

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {

    if(filterProducts.length < 1){
        productsContainer.innerHTML = `<h5> No products matched your search. </h5>`;
        return;
    }

    productsContainer.innerHTML = filterProducts.map(
        ({id, title, company, image, price}) => {   // destructuring inside the arrow function

            return `<article class="product" data-id=${id}>
            <img src="${image}" 
            class="product-img img" alt=""/>
            <footer>
              <h5 class="product-name"> ${title} </h5>
              <span class="product price">€ ${price} </span>
            </footer>
          </article>`;

    }).join("");
};

displayProducts();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {

    const inputValue = searchInput.value;

    filterProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue.toLowerCase());
    });

    displayProducts();

});


// Filter Buttons

const companiesDOM = document.querySelector('.companies');

const displayBtns = () => {

    const buttons = ['all', ...new Set(products.map((product) => product.company))];

    companiesDOM.innerHTML = buttons.map((company) => {
        return `<button class="company-btn" data-id = "${company}">${company}</button>`
    }).join("");

};

displayBtns();

companiesDOM.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('company-btn')){
        if(el.dataset.id === 'all'){
            filterProducts = [...products];
        } else {
            filterProducts = products.filter((product) => {
                return product.company === el.dataset.id;
            });
        }

        searchInput.value = '';
        displayProducts();
    }
});

// Footer Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();