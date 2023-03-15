import { Injectable } from "@nestjs/common";


@Injectable()
export class DatabaseProperties {
  public username : string = "postgres";
}
