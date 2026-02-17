
// Load Trending products

const loadTrending = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url)
  const details = await res.json();
  displayTrending(details);
}

// Display trending Products 
const displayTrending = (products) => {
  const trendingContainer = document.getElementById('trending');
  trendingContainer.innerHTML = "";

  products.slice(0, 3).forEach(product => {
    console.log(product)
    const trendingDiv = document.createElement('div');
    trendingDiv.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
          <figure class="px-10 pt-10">
            <img class ="h-48 mx-auto object-contain" src="${product.image}" alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="flex justify-between px-3 mt-4">
            <div class="badge badge-secondary ">${product.category}</div>
            <p><i class="fa-solid fa-star text-orange-300"></i> ${product.rating.rate} (${product.rating.count})</p>

          </div>
          <div class="card-body">
            <h2 class="text-xl font-bold line-clamp-1">
              ${product.title}
            </h2>

            <h2 class="font-bold text-xl">$${product.price}</h2>
            <div class="card-actions justify-between">
              <button class="btn "><i class="fa-regular fa-eye"></i> Details</button>
              <button class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
              <!-- <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div> -->
            </div>
          </div>
        </div>
        `
    trendingContainer.append(trendingDiv);
  });

}

// const load Categories

const loadCategories = async () => {
  const url = "https://fakestoreapi.com/products/categories";
  const res = await fetch(url)
  const categories = await res.json();
  displayCategories(categories);

}

// Display Categories

const displayCategories = (categories) => {
  // console.log(categories)
  const categoryContainer = document.getElementById('categories')
  categoryContainer.innerHTML = `
  <button onclick="loadAllProducts()" class="btn rounded-2xl mt-6 hover:bg-teal-500 products-btn btn-primary ">All</button>
  `;
  categories.forEach(category => {
    // console.log(category)
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button onclick="productsCategories('${category}') " class="btn hover:bg-teal-500 rounded-2xl mt-6 products-btn">${category}</button>
    `

    categoryContainer.append(btnDiv);

  })
}

// Load All Products
const loadAllProducts = async () => {
  manageSpinner(true);
  const url = 'https://fakestoreapi.com/products';
  const res = await fetch(url)
  const data = await res.json()
  displayAllProducts(data);
}

//  Display All Products
const displayAllProducts = (products) => {
  // console.log(products)
  const allProductsContainer = document.getElementById('category-products');
  allProductsContainer.innerHTML = "";

  products.forEach(product => {
    // console.log(product)
    const card = document.createElement('div');
    card.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
          <figure class="px-10 pt-10">
            <img class ="h-48 mx-auto object-contain" src="${product.image}" alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="flex justify-between px-3 mt-4">
            <div class="badge badge-secondary ">${product.category}</div>
            <p><i class="fa-solid fa-star text-orange-300"></i> ${product.rating.rate} (${product.rating.count})</p>

          </div>
          <div class="card-body">
            <h2 class="text-xl font-bold line-clamp-1">
              ${product.title}
            </h2>

            <h2 class="font-bold text-xl">$${product.price}</h2>
            <div class="card-actions justify-between">
              <button onclick="loadProductsDetails(${product.id})" class="btn "><i class="fa-regular fa-eye"></i> Details</button>
              <button class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
              <!-- <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div> -->
            </div>
          </div>
        </div>
        `
    allProductsContainer.append(card);
    manageSpinner(false);
  });

}

const productsCategories = async (name) => {
  manageSpinner(true);
  // console.log(name);
  const url = `https://fakestoreapi.com/products/category/${name}`
  // console.log(url)
  const res = await fetch(url)
  const categories = await res.json()
  displayProductsCategories(categories)
}

const displayProductsCategories = (products) => {
  // console.log(products)
  const productsContainer = document.getElementById('category-products');
  productsContainer.innerHTML = "";
  products.forEach(product => {
    // console.log(product)
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
          <figure class="px-10 pt-10">
            <img class ="h-48 mx-auto object-contain" src="${product.image}" alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="flex justify-between px-3 mt-4">
            <div class="badge badge-secondary ">${product.category}</div>
            <p><i class="fa-solid fa-star text-orange-300"></i> ${product.rating.rate} (${product.rating.count})</p>

          </div>
          <div class="card-body">
            <h2 class="text-xl font-bold line-clamp-1">
              ${product.title}
            </h2>

            <h2 class="font-bold text-xl">$${product.price}</h2>
            <div class="card-actions justify-between">
              <button onclick="loadProductsDetails(${product.id})" class="btn "><i class="fa-regular fa-eye"></i> Details</button>
              <button class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
              <!-- <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div> -->
            </div>
          </div>
        </div>
        `
    productsContainer.append(productDiv);
    manageSpinner(false);
  });
}

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("category-products").classList.add("hidden");
  } else {
    document.getElementById("category-products").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

const loadProductsDetails = async (id) => {
  // console.log(id)
  const url = `https://fakestoreapi.com/products/${id}`
  // console.log(url)
  const res = await fetch(url)
  const details = await res.json()
  displayProductsDetails(details)
}

const displayProductsDetails = (cards) => {
  console.log(cards)
  const detailsBox = document.getElementById('details-container');
  detailsBox.innerHTML = `
    
    <div class=" bg-base-100 ">
          <figure class="px-10 pt-10">
            <img class ="h-48 mx-auto object-contain" src="${cards.image}" alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="flex justify-between px-3 mt-4">
            <div class="badge badge-secondary ">${cards.category}</div>
            <p><i class="fa-solid fa-star text-orange-300"></i> ${cards.rating.rate} (${cards.rating.count})</p>

          </div>
          <div class="">
            <h2 class="text-xl font-bold mt-4">
              ${cards.title}
            </h2>
            <p class="text-xl font-normal mt-4">
              ${cards.description}
            </p>


            <h2 class="font-bold text-xl mt-4">$${cards.price}</h2>
            <div class="card-actions justify-between">
              <button class="btn btn-primary mt-4"><i class="fa-solid fa-cart-arrow-down"></i> Add to Cart</button>
              <!-- <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div> -->
            </div>
          </div>
        </div>
    `;
  document.getElementById('product_modal').showModal();

}

loadAllProducts();
loadCategories();
loadTrending();

