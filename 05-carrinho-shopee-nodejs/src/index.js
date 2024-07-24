import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWishList = []
let total

console.log("Welcome to your Shoppe Cart!")

//create items
const item1 = await createItem("Camisa barata", 16.99, 1)
const item2 = await createItem("Calça barata", 20.99, 2)
const item3 = await createItem("Sapato barato", 30.99, 5)

await cartService.addItem(myCart, item1)
await cartService.addItem(myWishList, item2)
await cartService.addItem(myCart, item3)


await cartService.calculateTotal(myCart)


await cartService.displayCart(myCart)
//console.log(item2.subtotal())

await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart)

await cartService.displayCart(myCart)

await cartService.removeItem(myCart, item3)


await cartService.calculateTotal(myCart)

await cartService.displayCart(myCart)

console.log(item3.subtotal())

