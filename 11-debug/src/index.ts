import { getBaseEmail } from "./services/email"

async function main() {
    console.log("Debugging is cool!")
    let name: string
    name = "anakin"
    getBaseEmail(name)

}

main()