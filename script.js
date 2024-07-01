let menu = documet.querySelector('#menu-icon');
let navbar = documet.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

Window.onscroll =() => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};


let cart = [];

  // Function to add items to the cart
  function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
  }

  // Function to update the cart display
  function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '<h3>Shopping Cart</h3>';

    if (cart.length === 0) {
      cartContainer.innerHTML += '<p>Your cart is empty.</p>';
    } else {
      cart.forEach(item => {
        cartContainer.innerHTML += `<p>${item.name} - Rs ${item.price}</p>`;
      });
    }
  }
