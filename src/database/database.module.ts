import { Module } from '@nestjs/common';
import {DataSource} from "typeorm";
import * as path from "path";
import { DatabaseProperties } from "./database.properties";
import { ConfigService } from "@nestjs/config";
import { databaseProvider } from "./database.provider";

// provide : unique id
// usefactory  : return dynamic object


@Module({
  imports: [],
  controllers: [],
  providers: [
    databaseProvider,
    DatabaseProperties
  ],
  exports : ["DATABASE"]
})
export class DatabaseModule {}
