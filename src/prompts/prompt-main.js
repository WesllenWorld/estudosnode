import chalk from 'chalk'

const mainPrompt = [
    {
    name: "select",
    description: chalk.yellow("Select a tool: 1 - QRCODE, 2 - PASSWORD"),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold("Please, select a valid option"),
    required: true,
    },
]

export default mainPrompt