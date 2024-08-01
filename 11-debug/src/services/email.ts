async function getBaseEmail(senderName:string): Promise<string> {
    let base = `Hello ${senderName}!`
    
    base += `\n I'd like to say that you are a great person! \n`

    return base
}

export {getBaseEmail}