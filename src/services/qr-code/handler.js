import qr from "qrcode-terminal"
import chalk from "chalk"

async function handler(err, result){
    if(err){
        console.log("Error detected")
        return
    }

    const isSmall = result.type == 2
    qr.generate(result.url, {small: isSmall}, (qrcode) =>{
        console.log(chalk.green("QR Code generated"))
        console.log(qrcode)
    })
}

export default handler