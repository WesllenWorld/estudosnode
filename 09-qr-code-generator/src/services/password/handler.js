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

async function allowedCharacters (){
    let characters = []

    if(process.env.UPPERCASE_LETTERS === "true"){
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if(process.env.LOWERCASE_LETTERS === "true"){
        characters.push(..."abcdefghijklmnopqrstuvwxyz")
    }
    if(process.env.NUMBERS === "true"){
        characters.push(..."0123456789")
    }
    if(process.env.SPECIAL_CHARACTERS === "true"){
        characters.push(..."!@#$%^&*()_+")
    }

    return characters
}

export default handler