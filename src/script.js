/////////     render categories    ///////////
const renderCategories = (categories) => {
  console.log(categories);
  categories.forEach((category) => {
    let categoriesContainer = document.getElementsByClassName("categories")[0];
    let categoryButton = document.createElement("button");
    categoryButton.classList.add("buttonstyle");
    categoryButton.textContent = category;
    categoryButton.onclick = function () {
      fetchProducts(category);
    };
    categoriesContainer.appendChild(categoryButton);
  });
};
///////////////////////////////////////////////

/////////     fetch categories    ///////////
const fetchCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((categories) => {
      renderCategories(categories);
      fetchProducts(categories[0]);
    })
    .catch((err) => {
      console.error(err);
    });
};
fetchCategories();
///////////////////////////////////////////////

/////////     render products    ///////////
const renderProducts = (products) => {
  let productsContainer = document.getElementsByClassName("products")[0];
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    console.log("products", productsContainer);
    // product
    let productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productsContainer.append(productContainer);
    // image
    let image = document.createElement("img");
    image.classList.add("image");
    image.src = product.image;
    productContainer.append(image);
    // content
    let content = document.createElement("div");
    content.classList.add("content");
    productContainer.append(content);
    // title
    let title = document.createElement("h5");
    title.classList.add("title");
    title.textContent = product.title;
    content.append(title);
    // p
    let p = document.createElement("p");
    p.classList.add("p");
    p.textContent = product.description;
    content.append(p);
    // price
    let price = document.createElement("p");
    price.classList.add("price");
    price.textContent = product.price + " $";
    content.append(price);
    // info
    let info = document.createElement("div");
    info.classList.add("info");
    productContainer.append(info);
    // addToCart
    let addToCart = document.createElement("button");
    addToCart.classList.add("addToCart");
    addToCart.textContent = "Add to cart";
    addToCart.onclick = function () {
      cartProducts.push(product);
      console.log("cartProducts", cartProducts);
      renderCart(product);
      addToLocalStorage(cartProducts);
      counter.innerHTML = cartProducts.length;
    };
    info.append(addToCart);
    // i
    let i = document.createElement("i");
    i.setAttribute("class", "fa fa-cart-plus");
    i.classList.add("i");
    info.append(i);
  });
};
///////////////////////////////////////////////

/////////     fetch products    ///////////
const fetchProducts = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((response) => response.json())
    .then((products) => {
      renderProducts(products);
    })
    .catch((err) => {
      console.error(err);
    });
};
///////////////////////////////////////////////

/////////     scroll up button    ///////////
let scrollUp = document.getElementById("scroll");

scrollUp.onclick = () => {
  window.scrollTo(0, 0);
};

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 60) {
    scrollUp.style.display = "flex";
  } else {
    scrollUp.style.display = "none";
  }
};

window.onscroll = scrollFunction;
///////////////////////////////////////////////
