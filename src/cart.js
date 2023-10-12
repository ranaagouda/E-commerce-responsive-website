//////////   initialization   ///////////
let cartProducts = [];
let cart = document.getElementById("cart");
let counter = document.getElementById("cartCounter");
let cartIcon = document.getElementById("cartIcon");
cartIcon.append(cart);

/////////   render cart item  /////////
const renderCart = (product) => {
  // cartProduct
  let cartProduct = document.createElement("div");
  cartProduct.classList.add("cartProduct");
  cart.append(cartProduct);
  // imageBox
  let imageBox = document.createElement("div");
  imageBox.classList.add("imageBox");
  cartProduct.append(imageBox);
  // image
  let imageCart = document.createElement("img");
  imageCart.style.objectFit = "contain";
  imageCart.src = product.image;
  imageBox.append(imageCart);
  //text
  let text = document.createElement("div");
  text.classList.add("text");
  cartProduct.append(text);
  // product description
  let description = document.createElement("p");
  description.classList.add("description");
  description.textContent = product.description;
  text.append(description);
  // remove container
  let removeContainer = document.createElement("div");
  removeContainer.classList.add("flex", "flex-row", "justify-between", "pt-2");
  text.append(removeContainer);
  // price
  let price = document.createElement("p");
  price.classList.add("price");
  price.textContent = product.price + " $";
  removeContainer.append(price);
  // remove
  let remove = document.createElement("button");
  remove.classList.add("removeButton");
  remove.textContent = "Remove";
  remove.onclick = function (product) {
    cartProduct.remove();
    cartProducts.pop(product);
    addToLocalStorage(cartProducts);
    console.log("cartProducts", cartProducts);
    counter.innerHTML = cartProducts.length;
  };
  removeContainer.append(remove);
};
////////////////////////////////////////

/////////// local storage /////////////

const addToLocalStorage = (cartProducts) => {
  let string = JSON.stringify(cartProducts);
  localStorage.setItem("cartProducts", string);
  let retString = localStorage.getItem("cartProducts");
  let retArray = JSON.parse(retString);
  console.log("retArray", retArray);
};
////////////////////////////////////////

////////////  at refresh  /////////////

let onRefresh = localStorage.getItem("cartProducts") || "[]";
onRefresh = JSON.parse(onRefresh);
onRefresh.forEach((product) => {
  renderCart(product);
  counter.innerHTML = onRefresh.length;
  cartProducts.push(product);
});
console.log("onRefresh", onRefresh);

////////////  show cart  /////////////
cartIcon.onmouseenter = function () {
  cart.style.display = "block";
};

// cart.onmouseover = function () {
//   cart.style.display = "block";
// };

cartIcon.onmouseleave = function () {
  cart.style.display = "none";
};
//////////////////////////////////////
