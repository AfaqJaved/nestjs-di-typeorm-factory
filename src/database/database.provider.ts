import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";
import * as path from "path";


export const databaseProvider = {
  provide : "DATABASE",
  useFactory : (config : ConfigService) =>{
    return new DataSource({
      type : "postgres",
      username : config.get("DB_USERNAME"),
      password : "",
      database : "test",
      host : "localhost",
      port : 5432,
      logging : true,
      synchronize : true ,
      entities : [path.join(__dirname , ".." , "**" , "*entity.{js,ts}" )]
    }).initialize();
  },
  inject : [ConfigService]
};
