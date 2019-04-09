import bookList from '../helpers/book.js';
import util from '../helpers/util.js';

const makeStore = () => {
  const books = bookList.getBook();
  let domString = `<h2>Our Only Book</h2>`;
  domString += `<h3>${books.price}</h3>`;
  domString += `<img src=${books.image} alt="book cover"</h3>`;
  domString += `<button class="btn btn-danger">Add to Cart</button>`;
  util.printToDom('store-container', domString);
};

export default { makeStore };