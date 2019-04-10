import cart from './cart.js';

import bookList from '../helpers/book.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
  e.preventDefault();
  const books = bookList.getBook();
  cart.setCart(books);
  cart.cartToDom();
};

const makeStore = () => {
  const books = bookList.getBook();
  let domString = `<h2>Our Only Book</h2>`;
  domString += `<h3>${books.price}</h3>`;
  domString += `<img src="${books.image}" class="book-cover" alt="book cover"</h3>`;
  domString += `<button id="cart-button" class="btn btn-danger">Add to Cart</button>`;
  util.printToDom('store-container', domString);
  document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};

export default { makeStore };