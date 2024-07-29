import prompt from "prompt"
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js"
import createQRCode from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"

async function main() {

    prompt.get(promptSchemaMain, async (err, choose) => {

        if(err) {
            console.log(err)
            return
        }

        if(choose.select == 1){
            //console.log("QRCODE")
            await createQRCode()
        }
        if(choose.select == 2){
            //console.log("PASSWORD")
            await createPassword()
        }
    })

    prompt.start()

}

main()