const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((categories) => {
      console.log(categories);
      categories.forEach((category) => {
        let categoriesContainer =
          document.getElementsByClassName("categories")[0];
        let categoryButton = document.createElement("button");
        categoryButton.classList.add("buttonstyle");
        categoryButton.textContent = category;
        categoryButton.onclick = function () {
          loadProducts(category);
        };
        categoriesContainer.appendChild(categoryButton);
      });
      loadProducts(categories[0]);
    })
    .catch((err) => {
      console.error(err);
    });
};
loadCategories();

const loadProducts = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let productsContainer = document.getElementsByClassName("products")[0];
      productsContainer.innerHTML = "";
      data.forEach((product) => {
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
        price.textContent = product.title;
        content.append(price);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

// //Render products function
// function renderProducts(products) {
//   let productsContainer = document.getElementsByClassName("products")[0];
//   productsContainer.innerHTML = "";
//   products.forEach((product) => {
//     let productContainer = document.createElement("div");
//     productContainer.setAttribute("class", "product");
//     productsContainer.append(productContainer);
//     // ____________________
//     let imageContainer = document.createElement("div");
//     imageContainer.classList.add("image-container");
//     let productImage = document.createElement("img");
//     productImage.src = product.image;
//     imageContainer.append(productImage);
//     productContainer.append(imageContainer);
//     // ____________________
//     let productContent = document.createElement("div");
//     productContent.setAttribute("class", "content");
//     productContainer.append(productContent);
//     // ____________________
//     let productTitleDiv = document.createElement("div");
//     productTitleDiv.setAttribute("class", "product-title-div");
//     let productTitle = document.createElement("h3");
//     productTitle.textContent = product.title;
//     productTitleDiv.append(productTitle);
//     productContent.append(productTitleDiv);

//     // ____________________
//     let descriptionDiv = document.createElement("div");
//     descriptionDiv.classList.add("description-container");
//     let productDescription = document.createElement("p");
//     productDescription.textContent = product.description;
//     descriptionDiv.append(productDescription);
//     productContent.append(descriptionDiv);
//     // ____________________
//     let productPrice = document.createElement("p");
//     productPrice.setAttribute("class", "price");
//     productPrice.textContent = product.price + " $";
//     productContent.append(productPrice);
//     // ____________________

//     let productInfo = document.createElement("div");
//     productInfo.setAttribute("class", "info");
//     productContainer.append(productInfo);
//     // ____________________
//     let addToCart = document.createElement("button");
//     addToCart.setAttribute("class", "add-to-cart");
//     addToCart.textContent = "Add to cart";
//     productInfo.append(addToCart);
//     // ------------

//     //add to cart
//     addToCart.onclick = function () {
//       //write cart
//       cartProducts.push(product);
//       localStorage.setItem("cart", JSON.stringify(cartProducts));
//       //read cart
//       //Render Cart

//       renderCart(cartProducts);
//     };

//     // ____________________
//     let cartIcon = document.createElement("i");
//     cartIcon.setAttribute("class", "fa-solid fa-cart-plus");
//     productInfo.append(cartIcon);
//   });
// }

// //scroll button
// let scrollUp = document.getElementsByClassName("scroll-up")[0];
// scrollUp.onclick = function () {
//   window.scrollTo(0, 0);
// };
// window.onscroll = function () {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     scrollUp.style.display = "flex";
//   } else {
//     scrollUp.style.display = "none";
//   }
// };

/*
//load categories function
async function loadCategories() {
  try {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    let categories = await response.json();
  } catch (error) {
    console.log("error", error);
  }
}

loadCategories();

//  --------- Start of categories --------------- //

//render Categories function
function renderCategories(categories) {
  categories.forEach((category) => {
    let categoriesContainer = document.getElementsByClassName("categories")[0];
    let catBtn = document.createElement("button");
    catBtn.classList.add("catBtn");
    catBtn.textContent = category;
    catBtn.onclick = function () {
      loadCategoryProducts(category);
    };
    categoriesContainer.append(catBtn);
  });
}

//load categories function
async function loadCategories() {
  try {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    let categories = await response.json();
    renderCategories(categories);
    loadCategoryProducts(categories[0]);
  } catch (error) {
    console.log("error", error);
  }
}

loadCategories();

//  -------------- End of categories ------------------

//load loadCategory Products function
async function loadCategoryProducts(categoryName) {
  try {
    let response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    let products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.log("error");
  }
}
*/
