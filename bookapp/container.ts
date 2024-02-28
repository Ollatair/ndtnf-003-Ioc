import { Container } from "inversify";
import { TYPES } from "./types";
import { BookService } from "./services/BookService";

const container = new Container();
container.bind(TYPES.Book).to(BookService);

export { container };