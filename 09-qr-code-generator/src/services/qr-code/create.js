import prompt from "prompt"
import qrCodePrompt from "../../prompts/prompt-qrcode.js"
import handler from "./handler.js"



async function createQRCode(){
    prompt.get(qrCodePrompt, handler)

    prompt.start()

}

export default createQRCode