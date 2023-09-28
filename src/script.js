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
        info.append(addToCart);
        // i
        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-cart-plus");
        i.classList.add("i");
        info.append(i);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

//scroll up button
let scrollUp = document.getElementsByClassName("scroll")[0];
scrollUp.onclick = function () {
  window.scrollTo(0, 0);
};
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    scrollUp.style.display = "flex";
  } else {
    scrollUp.style.display = "none";
  }
};

//     //add to cart
//     addToCart.onclick = function () {
//       //write cart
//       cartProducts.push(product);
//       localStorage.setItem("cart", JSON.stringify(cartProducts));
//       //read cart
//       //Render Cart

//       renderCart(cartProducts);
//     };
//   });
// }
