import {createConnection, DataSource} from "typeorm/browser";
import {Author} from "./entity/Author";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";

const AppDataSource = new DataSource({
  type: "sqljs",
  entities: [Category],
  synchronize: true,
  logging: false,
})

AppDataSource.initialize()
    .then(() => {
        console.log("ok")
    })
    .catch((error) => console.log(error))
