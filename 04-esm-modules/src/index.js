//esm requires the extentions .mjs or .js
//single import
//import connectToDatabase from "./utils/database.js"

//import multiple
//Destructuring is recommended over importing the entire module
import * as database from "./utils/database.js"
import {getDataFromApi} from "./utils/api.js"

database.connectToDatabase("my_database")
database.disconnectFromDatabase()
getDataFromApi()
