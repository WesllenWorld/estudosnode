//to restore node_modules by package-lock.json:
//npm install
//nom install {package-name} -D will install the package as dev-dependency

//npm fund will show a tree of dependencies and funding information

import chalk from "chalk"
import logSymbols from "log-symbols"

console.log(chalk.red('Hello World'))
console.log(chalk.red.bgCyan.bold('Hello World'))

console.log(logSymbols.success, chalk.green.italic("Ok"))