//functions related to products
const productMedia = {
    version: "digital",
    tax: "x1",
}

//hidden member
async function doBreakLine(){
    console.log("\n")
}

async function getFullName(codeId, productName){
    
    console.log("product: " + codeId + "--" + productName)
    await doBreakLine()
}

async function getProductLabel(productName){
    
    console.log("product name: " + productName)
    await doBreakLine()
}

module.exports = {getFullName, getProductLabel, productMedia}