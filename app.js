// Load Trending products

const loadTrending = async() =>{
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url)
    const details = await res.json();
    displayTrending(details);
}

// Display trending Products 
const displayTrending = (products) =>{
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
loadTrending();

