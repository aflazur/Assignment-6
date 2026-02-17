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
  <button onclick="loadAllProducts()" class="btn btn-primary rounded-2xl mt-6">All</button>
  `;
  categories.forEach(category => {
    // console.log(category)
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button class="btn btn-primary rounded-2xl mt-6">${category}</button>
    `
    categoryContainer.append(btnDiv);
  })
}

// Load All Products
const loadAllProducts = async() => {
    const url = 'https://fakestoreapi.com/products';
    const res = await fetch(url)
    const data = await res.json()
    displayAllProducts(data);
}

//  Display All Products
const displayAllProducts = (products) => {
  // console.log(products)
  const allProductsContainer  = document.getElementById('all-products');
  allProductsContainer.innerHTML ="";

  products.forEach(product => {
    // console.log(product)
    const productsDiv = document.createElement('div');
    productsDiv.innerHTML = `
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
    allProductsContainer.append(productsDiv);
  });
}

loadAllProducts();
loadCategories();
loadTrending();

