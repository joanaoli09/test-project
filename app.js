const removeCartButtons = document.getElementsByClassName("remove-item");
for (let i = 0; i < removeCartButtons.length; i++) {
  let button = removeCartButtons[i];
  button.addEventListener("click", removeCartItem);
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart")[0];
  let cartItems = cartItemContainer.getElementsByClassName("cart-item");
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const priceElement = cartItem.getElementsByClassName("item-amount")[0];
    const quantityElement = cartItem.getElementsByClassName("data-id")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    console.log(price);
  }
}
