import { Inject, Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { DataSource } from "typeorm";
import { BookModule } from "./book/book.module";
import { ConfigModule } from "@nestjs/config";

// Typeorm register ioc container use factory



@Module({
  imports: [DatabaseModule , BookModule , ConfigModule.forRoot({
    envFilePath : [
      ".dev.env",
      // ".prod.env"
    ],
    isGlobal : true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(@Inject("DATABASE")private readonly database : DataSource) {

  }
}
