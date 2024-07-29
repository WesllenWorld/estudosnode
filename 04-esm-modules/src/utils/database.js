const databaseType = {
    userType: "admin",
    typeData: "mongoDB",
}

async function connectToDatabase(databaseName){
    //logic to connect to database
    console.log(`Conectando ao banco de dados ${databaseName}`)
}

async function disconnectFromDatabase(){
    //logic to disconnect from database
    console.log(`Desconectando do banco de dados`)
}

//commonjs
//module.exports = connectToDatabase

//esm

//export single function
//export default connectToDatabase

//export multiple functions
export {connectToDatabase, disconnectFromDatabase, databaseType}

//cjs
//module.exports = {connectToDatabase, disconnectFromDatabase}