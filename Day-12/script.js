const container = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const loadMoreBtn = document.getElementById('loadMore');

let allProducts = [];
let displayedCount = 0;
const PRODUCTS_PER_LOAD = 8;

// Fetch API
async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    allProducts = await res.json();
    renderProducts();
  } catch (err) {
    container.innerHTML = "<p>Failed</p>";
    console.error("Error fetching products:", err);
  }
}

// PRODUCTS RENDER (JAISA HAI WAISE RAHNE DO)
function renderProducts(filteredList = null) {
  const list = filteredList || allProducts;
  const visibleItems = list.slice(0, displayedCount + PRODUCTS_PER_LOAD);
  container.innerHTML = "";

  visibleItems.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="price">$${product.price}</p>
      <p>${product.category}</p>
    `;

    container.appendChild(card);
  });

  displayedCount = visibleItems.length;


  loadMoreBtn.style.display = (displayedCount < list.length) ? "block" : "none";
}


searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  displayedCount = 0;
  renderProducts(filtered);
});

// LOAD MORE VALA KAAM
loadMoreBtn.addEventListener("click", () => {
  renderProducts(searchInput.value ? allProducts.filter(p =>
    p.title.toLowerCase().includes(searchInput.value.toLowerCase())
  ) : null);
});

fetchProducts();