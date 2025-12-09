document.addEventListener("DOMContentLoaded", () => {

    /*PRODUCT LIST*/
    const products = [
                     /*RICE BOWLS*/
        {
            id: 101,
            title: "Salted Egg Chicken Wings",
            primaryCategory: "Rice Bowls",
            price: 149.00,
            time: 15,
            tags: ["Chicken", "Spicy"],
            badge: "NEW",
            image: "assets/images/menu/salted_egg.jpg"
        },
        {
            id: 102,
            title: "Beef Tapa",
            primaryCategory: "Rice Bowls",
            price: 129.00,
            time: 14,
            tags: ["Beef"],
            badge: "",
            image: "assets/images/menu/beef_tapa.jpg"
        },
        {
            id: 104,
            title: "Grilled Bangus Belly",
            primaryCategory: "Rice Bowls",
            price: 159.00,
            time: 16,
            tags: ["Fish", "Grilled"],
            badge: "",
            image: "assets/images/menu/grilled_bangus.jpg"
        },
        {
            id: 105,
            title: "Teriyaki Chicken Bowl",
            primaryCategory: "Rice Bowls",
            price: 139.00,
            time: 15,
            tags: ["Chicken", "Sweet"],
            badge: "",
            image: "assets/images/menu/teriyaki_bowl.jpg"
        },
        {
            id: 106,
            title: "Ham and Veggie Rice Bowl",
            primaryCategory: "Rice Bowls",
            price: 119.00,
            time: 12,
            tags: ["Pork", "Vegetarian-Friendly"],
            badge: "",
            image: "assets/images/menu/ham_and_veggie_bowl.jpg"
        },
        {
            id: 107,
            title: "Chicken Ala King",
            primaryCategory: "Rice Bowls",
            price: 129.00,
            time: 14,
            tags: ["Chicken", "Creamy"],
            badge: "",
            image: "assets/images/menu/chicken_ala_king.jpg"
        },

        /* ------------------------- PASTA & NOODLES ------------------------- */
        {
            id: 201,
            title: "Creamy Carbonara",
            primaryCategory: "Pasta & Noodles",
            price: 129.00,
            time: 12,
            tags: ["Creamy", "Pork"],
            badge: "NEW",
            image: "assets/images/menu/creamy_carbonara.jpg"
        },
        {
            id: 202,
            title: "Filipino Sweet Spaghetti",
            primaryCategory: "Pasta & Noodles",
            price: 99.00,
            time: 10,
            tags: ["Sweet"],
            badge: "",
            image: "assets/images/menu/filipino_sweet_spaghetti.jpg"
        },
        {
            id: 203,
            title: "Garlic Butter Shrimp Pasta",
            primaryCategory: "Pasta & Noodles",
            price: 159.00,
            time: 14,
            tags: ["Seafood", "Garlic"],
            badge: "",
            image: "assets/images/menu/garlic_butter_shrimp_pasta.jpg"
        },
        {
            id: 204,
            title: "Pancit Canton Express",
            primaryCategory: "Pasta & Noodles",
            price: 89.00,
            time: 9,
            tags: ["Noodles", "Savory"],
            badge: "",
            image: "assets/images/menu/pancit_canton_express.jpg"
        },

        /* ------------------------- WRAPS & SANDWICHES ------------------------- */
        {
            id: 301,
            title: "Beef Cheesy Shawarma Wrap",
            primaryCategory: "Wraps & Sandwiches",
            price: 129.00,
            time: 11,
            tags: ["Beef", "Cheesy"],
            badge: "",
            image: "assets/images/menu/beef_shawarma_wrap.jpg"
        },
        {
            id: 302,
            title: "Melt Tuna Cheesy Sandwich",
            primaryCategory: "Wraps & Sandwiches",
            price: 99.00,
            time: 8,
            tags: ["Seafood", "Cheesy"],
            badge: "",
            image: "assets/images/menu/melt_tuna_sandwich.jpg"
        },
        {
            id: 303,
            title: "Crispy Chicken Wrap",
            primaryCategory: "Wraps & Sandwiches",
            price: 119.00,
            time: 10,
            tags: ["Chicken", "Crispy"],
            badge: "",
            image: "assets/images/menu/crispy_chicken_wrap.jpg"
        },
        {
            id: 304,
            title: "Cheesy Burger",
            primaryCategory: "Wraps & Sandwiches",
            price: 109.00,
            time: 12,
            tags: ["Beef", "Cheesy"],
            badge: "SALE",
            image: "assets/images/menu/cheesy_burger.jpg"
        },

         {
            id: 305,
            title: "Crispy Double Cheese Bacon w/ Egg",
            primaryCategory: "Wraps & Sandwiches",
            price: 169.00,
            time: 18,
            tags: ["Pork", "Cheesy"],
            badge: "SALE",
            image: "assets/images/menu/crispy_double_cheese_bacon.jpg"
        },

        /* ------------------------- VEGETABLES & FRUITS ------------------------- */
        {
            id: 401,
            title: "Tofu Sisig Rice Bowl",
            primaryCategory: "Vegetables & Fruits",
            price: 129.00,
            time: 13,
            tags: ["Vegetarian-Friendly", "Spicy"],
            badge: "NEW",
            image: "assets/images/menu/tofu_sisig.jpg"
        },
        {
            id: 402,
            title: "Assorted Veggie Salad",
            primaryCategory: "Vegetables & Fruits",
            price: 119.00,
            time: 7,
            tags: ["Vegetarian-Friendly", "Fresh"],
            badge: "",
            image: "assets/images/menu/veggie_salad.jpg"
        },
        {
            id: 403,
            title: "Fruity Mix",
            primaryCategory: "Vegetables & Fruits",
            price: 89.00,
            time: 5,
            tags: ["Fresh", "Healthy"],
            badge: "",
            image: "assets/images/menu/fruity_mix.jpg"
        },

        /* ------------------------- DRINKS ------------------------- */
        {
            id: 501,
            title: "Iced Caramel Coffee Macchiato",
            primaryCategory: "Drinks & Refreshers",
            price: 69.00,
            time: 3,
            tags: ["Coffee", "Sweet"],
            badge: "",
            image: "assets/images/menu/iced_caramel_macchiato.jpg"
        },
        {
            id: 502,
            title: "Coke Sundae",
            primaryCategory: "Drinks & Refreshers",
            price: 49.00,
            time: 2,
            tags: ["Cold", "Sweet"],
            badge: "",
            image: "assets/images/menu/coke_sundae.jpg"
        },
        {
            id: 503,
            title: "Pineapple Juice",
            primaryCategory: "Drinks & Refreshers",
            price: 39.00,
            time: 1,
            tags: ["Fruit", "Fresh"],
            badge: "",
            image: "assets/images/menu/pineapple_juice.jpg"
        },
        {
            id: 504,
            title: "Citrus Cucumber",
            primaryCategory: "Drinks & Refreshers",
            price: 45.00,
            time: 2,
            tags: ["Fresh", "Healthy"],
            badge: "",
            image: "assets/images/menu/citrus_cucumber.jpg"
        },

        /* ------------------------- DESSERTS ------------------------- */
        {
            id: 601,
            title: "Leche Flan",
            primaryCategory: "Desserts",
            price: 59.00,
            time: 4,
            tags: ["Sweet", "Classic"],
            badge: "",
            image: "assets/images/menu/leche_flan.jpg"
        },
        {
            id: 602,
            title: "Coffee Jelly",
            primaryCategory: "Desserts",
            price: 49.00,
            time: 3,
            tags: ["Coffee", "Sweet"],
            badge: "",
            image: "assets/images/menu/coffee_jelly.jpg"
        },
        {
            id: 603,
            title: "Banana Turon Rolls",
            primaryCategory: "Desserts",
            price: 39.00,
            time: 5,
            tags: ["Fried", "Sweet"],
            badge: "",
            image: "assets/images/menu/banana_turon.jpg"
        },
        {
            id: 604,
            title: "Ube Cheesecake Slice",
            primaryCategory: "Desserts",
            price: 79.00,
            time: 6,
            tags: ["Ube", "Cheesy", "Sweet"],
            badge: "",
            image: "assets/images/menu/ube_cheesecake.jpg"
        }
    ];

    /* ------------------------- UI STATE ------------------------- */
    const primaryCategories = ["All", "Rice Bowls", "Pasta & Noodles", "Wraps & Sandwiches", "Vegetables & Fruits", "Drinks & Refreshers", "Desserts" ];

    let state = {
        currentCategory: "All",
        currentPage: 1,
        perPage: 8,
        search: "",
        sort: "default"
    };

    /* ------------------------- DOM ELEMENTS ------------------------- */
    const tabsEl = document.getElementById("category-tabs");
    const gridEl = document.getElementById("product-grid");
    const paginationEl = document.getElementById("pagination");
    const searchInput = document.getElementById("global-search");
    const sortSelect = document.getElementById("sort-select");

    /* ------------------------- Helpers ------------------------- */
    function formatPrice(x) {
        return "₱" + x.toFixed(2);
    }

    /* ------------------------- Tabs ------------------------- */
    function renderTabs() {
        tabsEl.innerHTML = "";

        primaryCategories.forEach(cat => {
            const btn = document.createElement("button");
            btn.className = "tab-btn" + (state.currentCategory === cat ? " active" : "");
            btn.innerText = cat;
            btn.dataset.cat = cat;

            btn.addEventListener("click", () => {
                state.currentCategory = cat;
                state.currentPage = 1;
                render();
                updateActiveTab();
            });

            tabsEl.appendChild(btn);
        });
    }

    function updateActiveTab() {
        const buttons = tabsEl.querySelectorAll(".tab-btn");
        buttons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.cat === state.currentCategory);
        });
    }

    /* ------------------------- Filtering ------------------------- */
    function getFilteredProducts() {
        let list = [...products];

        if (state.currentCategory !== "All") {
            list = list.filter(p => p.primaryCategory === state.currentCategory);
        }

        if (state.search.trim() !== "") {
            const q = state.search.toLowerCase();
            list = list.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.tags.some(t => t.toLowerCase().includes(q))
            );
        }

        return list;
    }

    /* ------------------------- Render Products ------------------------- */
    function renderProducts() {
        gridEl.innerHTML = "";

        const filtered = getFilteredProducts();
        const start = (state.currentPage - 1) * state.perPage;
        const pageItems = filtered.slice(start, start + state.perPage);

        if (pageItems.length === 0) return;  // prevents flashing "No Items"

        pageItems.forEach(p => {
            const card = document.createElement("article");
            card.className = "card";

            /* PRICE */
            const price = document.createElement("div");
            price.className = "price-pill";
            price.innerText = formatPrice(p.price);
            card.appendChild(price);

            /* BADGE */
            if (p.badge) {
                const b = document.createElement("div");
                b.className = "badge";
                b.innerText = p.badge;
                card.appendChild(b);
            }

            /* IMAGE */
            const imgWrap = document.createElement("div");
            imgWrap.className = "img-wrapper";

            const img = document.createElement("img");
            img.src = p.image;
            img.alt = p.title;
            img.loading = "lazy";

            img.onerror = () => {
                img.src = "assets/images/menu/placeholder.jpg";
            };

            imgWrap.appendChild(img);
            card.appendChild(imgWrap);

            /* TITLE */
            const title = document.createElement("h4");
            title.innerText = p.title;
            card.appendChild(title);

            /* META */
            const meta = document.createElement("div");
            meta.className = "meta";
            meta.innerHTML = `
                <span><span class="material-icons">schedule</span> ${p.time} min</span> •
                <span style="margin-left:6px;">${p.tags.join(", ")}</span>
            `;
            card.appendChild(meta);

            /* ACTIONS */
            const actions = document.createElement("div");
            actions.className = "card-actions";

            const orderBtn = document.createElement("button");
            orderBtn.className = "btn primary";
            orderBtn.innerText = "ORDER NOW";
            orderBtn.onclick = () => alert(`Added "${p.title}" to cart`);

            const favBtn = document.createElement("button");
            favBtn.className = "btn fav-btn";
            favBtn.innerHTML = `<span class="material-icons">favorite_border</span>`;
            favBtn.onclick = () => {
                const active = favBtn.classList.toggle("active");
                favBtn.innerHTML = `<span class="material-icons">${active ? "favorite" : "favorite_border"}</span>`;
            };

            actions.appendChild(orderBtn);
            actions.appendChild(favBtn);

            card.appendChild(actions);
            gridEl.appendChild(card);
        });
    }

    /* ------------------------- Pagination ------------------------- */
    function renderPagination() {
        paginationEl.innerHTML = "";

        const total = getFilteredProducts().length;
        const pages = Math.max(1, Math.ceil(total / state.perPage));

        const prev = document.createElement("button");
        prev.innerText = "Prev";
        prev.className = "page-btn";
        prev.disabled = state.currentPage === 1;
        prev.onclick = () => {
            state.currentPage--;
            render();
        };
        paginationEl.appendChild(prev);

        for (let i = 1; i <= pages; i++) {
            const btn = document.createElement("button");
            btn.className = "page-btn" + (i === state.currentPage ? " active" : "");
            btn.innerText = i;
            btn.onclick = () => {
                state.currentPage = i;
                render();
            };
            paginationEl.appendChild(btn);
        }

        const next = document.createElement("button");
        next.innerText = "Next";
        next.className = "page-btn";
        next.disabled = state.currentPage === pages;
        next.onclick = () => {
            state.currentPage++;
            render();
        };
        paginationEl.appendChild(next);
    }

    /* ------------------------- MAIN RENDER ------------------------- */
    function render() {
        renderProducts();
        renderPagination();
        updateActiveTab();
    }

    /* ------------------------- INIT ------------------------- */
    function init() {
        renderTabs();
        render();

        if (searchInput) {
            searchInput.addEventListener("input", e => {
                state.search = e.target.value;
                state.currentPage = 1;
                render();
            });
        }

        if (sortSelect) {
            sortSelect.addEventListener("change", e => {
                state.sort = e.target.value;
                state.currentPage = 1;
                render();
            });
        }
    }

    init();
});
