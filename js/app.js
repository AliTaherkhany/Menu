const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `As you can see, beef is higher in calories and fat than bison`,
    },
];

// Get parent elements
const btnContainer = document.querySelector('.btn-container');
const itemContainer = document.querySelector('.menu-items');

// Display all items when page loads
document.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
})

function displayMenuItems(arr) {
    const menuItems =
        arr.map(function (item) {
            return `
                <article class="menu-item grid">
                    <img src=${item.img} alt=${item.title} class="photo">
                    <div class="item-info">
                        <header class="flex">
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <div class="item-text flex">${item.desc}</div>
                    </div>
                </article>`;
        }).join('')
    itemContainer.innerHTML = menuItems;
}

function displayMenuButtons() {
    // Getting unique item categories in 2 ways ...

    // const categories = menu.reduce(function (values, item) {
    //     if (values.indexOf(item.category) === -1) {
    //         values.push(item.category);
    //     }
    //     return values;
    // }, ['all']);

    // const repetitious = menu.map((item) => item.category);
    // const categories = repetitious.filter((item, index, self) => self.indexOf(item) === index);
    // categories.unshift('all');

    const repetitious = menu.map((item) => item.category);
    const categories = [...new Set(repetitious)];
    categories.unshift('all');

    const categoryBtns = categories.map(function (category) {
        return `<button class="btn filter-btn" data-category=${category}>${category}</button>`
    }).join('');
    btnContainer.innerHTML = categoryBtns;

    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.category;
            const menuCategory = menu.filter(function (menuItem) {
                return menuItem.category === category
            })
            if (category === 'all') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
}