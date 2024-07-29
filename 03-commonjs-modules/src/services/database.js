//export default
//by default, functions are automatically exported

exports.connectToDatabase = async (databaseName) => {
    console.log("Connecting to database: " + databaseName)
}

exports.disconnectFromDatabase = async (databaseName) => {
    //logics to disconnect from database
    console.log("Disconnecting from database: " + databaseName)
}

// async function connectToDatabase(databaseName){
//     console.log("Connecting to database: "+ databaseName)
// }

// async function disconnectFromDatabase(databaseName){
//     //logics to disconnect from database
//     console.log("Disconnecting from database: "+ databaseName)
// }
