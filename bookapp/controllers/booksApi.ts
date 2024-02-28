
import { container } from "../container";
import { TYPES } from "../types"; 
// получить все книги | получаем массив всех книг
module.exports.getBooks = async (req, res) => {
  const bookService = container.get(TYPES.Book);
  const books = await bookService.getBooks();
  return res.status(200).json(books);
};
 