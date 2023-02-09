const menu = [
  {
    id: 1,
    title: `Item 1`,
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla.`,
  },
  {
    id: 2,
    title: `Item 2`,
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla.`,
    },
  {
    id: 3,
    title: `Item 3`,
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla.`,
    },
  {
    id: 4,
    title: `Item 4`,
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla.`,  },
  {
    id: 5,
    title: `Item 5`,
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla.`,  },
  {
    id: 6,
    title: `Item 6`,
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla.`,  },
  {
    id: 7,
    title: `Item 7`,
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla.`,  },
  {
    id: 8,
    title: `Item 8`,
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla.`,  },
];

const sectionCenter = document.querySelector('.section-center');

const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);

  filterAndDisplayButtons();
  
});

function displayMenuItems(menuArray){
  
  let displayMenu = menuArray.map(function(item){  // getting the items from the menu array
    
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4> ${item.title} </h4>
        <h4 class="price"> €${item.price}</h4>
      </header>
      <p class="item-text">
      ${item.desc}
      </p>
    </div>
  </article>`;

  });

  displayMenu = displayMenu.join('');

  sectionCenter.innerHTML = displayMenu;
}

function filterAndDisplayButtons(){
   // getting unique categories
   const categories = menu.reduce(function(values, item){
    
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  }, ['all']);
  
  //
  
  const catButtons = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}> ${category} </button>`;
  }).join("");

  btnContainer.innerHTML = catButtons;

  const filterBtns = btnContainer.querySelectorAll('.filter-btn');


  filterBtns.forEach(function(btn){

    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;  
      //the dataset id must be equal to the one in index.html

      const menuCategory = menu.filter(function(menuItem){
        if (menuItem.category === category){
          return menuItem;
        }
      });

      if(category === 'all'){
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}