//destructuring in products inside {}
const {getFullName} = require("./services/products")
// const p = require("./services/products")
const configs = require("./services/config")
const database = require("./services/database")

async function main(){
    console.log('Shopping list:') 
    getFullName('123', 'Catan')
    //p.getProductLabel('Ticket to Ride')

    console.log('Config:')
    console.log(configs.version)

    // console.log('Product Media:')
    // console.log(p.productMedia)
    
    database.connectToDatabase('LexCorpDB')
}


main();