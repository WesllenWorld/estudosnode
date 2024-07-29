async function addItem(userCart, item) {
    // Add item to cart
    userCart.push(item);
}

async function removeItem(userCart, item) {
    // Remove item from cart
    // visual index
    //const deleteIndex = itemIndex - 1

    const indexFound = userCart.findIndex((i) => i.name === item.name)
    console.log(indexFound)

    if(indexFound === -1){
        console.log("Item not found")
        return
    } 

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        console.log(userCart[indexFound].quantity)
        console.log(userCart[indexFound].price)
        console.log(userCart[indexFound].subtotal())
        return
    } 
    
    if (userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
        userCart[indexFound].subtotal()
        return
    }
    //if(itemIndex >= 0 && deleteIndex < userCart.length){
       // if(item.quantity > 1){
        //    item.quantity--
        //} else{
    //        userCart.splice(deleteIndex, 1)
        //}
   // }
}

//In real life, it is expected to use the item index to delete an item
async function deleteItem(userCart, itemName) {
    // Delete item from cart

    const index = userCart.findIndex((item) => item.name === itemName)

    if(index !== -1){
        userCart.splice(index, 1)
    
    } else{
        console.log("Item not found")
    }



}

async function calculateTotal(userCart) {
    // Calculate total

    // let total = 0
    // for (let item of userCart) {
    //     total = total + item.subtotal()
    // }
    // return total

    //alternate solution:
    console.log("Cart total: ")
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(total)
}

async function displayCart(userCart) {
    // Display cart
    console.log("\nItems in Shopee cart list: ")
    userCart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal: R$ ${item.subtotal()}`)  
    })

}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart }