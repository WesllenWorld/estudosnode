async function connectToDatabase(user, password){
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log("Conexão estabelecida com sucesso!")
    } else{
        console.log("Não foi possível estabelecer conexão")
    } 
}

export default connectToDatabase