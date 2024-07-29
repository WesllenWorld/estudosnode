import allowedCharacters from "./utils/allowed-characters.js"

async function handler(){
    
    let password = ""

    let characters = await allowedCharacters()

    for(let i = 0; i < process.env.PASSWORD_LENGTH; i++){
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
        //console.log(password)
    }


    return password
}



export default handler