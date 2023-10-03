// localStorage.setItem("name", "rana");
// const cat = localStorage.getItem("name");
// console.log(cat);
// counter delete update
// on click > add to storage > read data > show cart

let cartIcon = document.getElementById("cartIcon");
cartIcon.append(cart);

//////////// show cart /////////////
let cartDisplay = document.getElementById("cart");

cartIcon.onmouseover = function () {
  cartDisplay.style.display = "block";
};
cartIcon.onmouseleave = function () {
  cartDisplay.style.display = "none";
};
/////////////////////////////////
