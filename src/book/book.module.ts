import { Inject, Module } from "@nestjs/common";
import { DataSource } from "typeorm";
import { DatabaseModule } from "../database/database.module";
import { BookController } from "./book.controller";




@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [],
})
export class BookModule {

}
