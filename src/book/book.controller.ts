import { Controller, Get, Inject } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Book } from "./book.entity";


@Controller("/book")
export class BookController {

  constructor(@Inject("DATABASE")private readonly dataSource : DataSource) {
  }

  @Get("/findAll")
  async getAllBooks() {
    let books = await this.dataSource.getRepository(Book).find();
    return books;
  }
}
