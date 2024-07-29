let price
let name
let id
let quantity

async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        //the subtotal method being an arrow function would not work when quantity were updated
        //subtotal: () => price * quantity
        subtotal: function() { return this.price * this.quantity
        },
    }
}

//single export
export default createItem