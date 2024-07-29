import chalk from 'chalk'

const promptSchemaQRCode = [
    {
        name: "url",
        description: chalk.yellow("Type the url for the QR code generation"),
    },
    {
        name: "type",
        description: chalk.yellow("Select the type of the QR code: 1 - image, 2 - terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Please, select a valid option"),
        required: true,
    }
]

export default promptSchemaQRCode