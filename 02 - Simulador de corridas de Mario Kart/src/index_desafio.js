function character(name, speed, maneuverability, power) {
    this.name = name
    this.speed = speed
    this.maneuverability = maneuverability
    this.power = power
    this.score = 0
}

/*
const character = {
    NOME: "Link",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTUACAO: 0,
}
*/

async function definePlayerCharacters(characters = []) {
    const player1 = characters[Math.floor(Math.random() * characters.length)]
    let player2;
    do {
        player2 = characters[Math.floor(Math.random() * characters.length)]
    } while (player1 === player2 && player2 !== undefined)


    return [player1, player2]
}

async function rollD6() {
    return Math.floor(Math.random() * 6) + 1
}

async function rollD2() {
    return Math.floor(Math.random() * 2) + 1
}

function setCharacters() {
    const mario = new character('Mario', 4, 3, 3)
    const luigi = new character('Luigi', 3, 4, 4)
    const peach = new character('Peach', 3, 4, 2)
    const bowser = new character('Bowser', 5, 2, 5)
    const yoshi = new character("Yoshi", 2, 4, 3)
    const donkey_kong = new character("Donkey Kong", 2, 2, 5)
    const wario = new character("Wario", 3, 3, 4)
    const toad = new character("Toad", 4, 3, 2)
    return [mario, luigi, peach, bowser, yoshi, donkey_kong, wario, toad]
}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA 💨"
            break
        case random < 0.66:
            result = "CURVA ↩"
            break
        default:
            result = "CONFRONTO 🥊"
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} fez um teste de ${block}: ${attribute} + ${diceResult} = ${attribute + diceResult}`)
}

async function winnerVerification(player1, player2) {
    console.log("Resultado final:\n")
    console.log(`${player1.name}: ${player1.score} pontos`)
    console.log(`${player2.name}: ${player2.score} pontos\n`)

    if (player1.score > player2.score)
        console.log(`🏆 ${player1.name} é o grande vencedor! 🏆`)
    else if (player2.score > player1.score)
        console.log(`🏆 ${player2.name} é o grande vencedor! 🏆`)
    else
        console.log("Empate. Não houve vencedor nessa corrida.")
}


async function playRaceEngine(player1, player2) {
    //5 rounds
    for (let i = 1; i <= 15; i++) {
        console.log(`🔴🟡🟢 Rodada ${i}`)

        //adding delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        //sort block
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

        //roll the dice
        let diceResult1 = await rollD6()
        let diceResult2 = await rollD6()

        //skill test
        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if (block === "RETA 💨") {

            totalTestSkill1 = player1.speed + diceResult1
            totalTestSkill2 = player2.speed + diceResult2

            await logRollResult(player1.name, block, diceResult1, player1.speed)
            await logRollResult(player2.name, block, diceResult2, player2.speed)
        }
        if (block === "CURVA ↩") {
            totalTestSkill1 = player1.maneuverability + diceResult1
            totalTestSkill2 = player2.maneuverability + diceResult2

            await logRollResult(player1.name, block, diceResult1, player1.maneuverability)
            await logRollResult(player2.name, block, diceResult2, player2.maneuverability)

        }
        if (block === "CONFRONTO 🥊") {
            totalTestSkill1 = player1.power + diceResult1
            totalTestSkill2 = player2.power + diceResult2

            await logRollResult(player1.name, block, diceResult1, player1.power)
            await logRollResult(player2.name, block, diceResult2, player2.power)

            //loser effect:
            //shell = 1 -> -1 to loser
            //bomb = 2 -> -2 to loser

            //winner effect:
            //1 -> nothing happens
            //2 -> +1 to winner
            if (totalTestSkill1 > totalTestSkill2) {
                if (player2.score > 0) {
                    if (await rollD2() === 1) {
                        player2.score--
                        console.log(`🏆 ${player1.name} venceu o confronto 🏆! ${player2.name} perdeu 1 ponto \n`)
                    } else {
                        player2.score -= 2
                        if (player2.score < 0) {
                            player2.score = 0
                        }
                        console.log(`🏆 ${player1.name} venceu o confronto 🏆! ${player2.name} perdeu 2 pontos \n`)
                    }


                    if (await rollD2() === 2) {
                        player1.score++
                        console.log(`🏆 ${player1.name} encontrou um turbo e ganhou 1 ponto \n`)
                    }
                } else {
                    console.log("")
                }


            }
            if (totalTestSkill2 > totalTestSkill1) {
                if (player1.score > 0) {
                    if (await rollD2() === 1) {
                        player1.score--
                        console.log(`🏆 ${player2.name} venceu o confronto 🏆! ${player1.name} perdeu 1 ponto \n`)
                    } else {
                        player1.score -= 2
                        if (player1.score < 0) {
                            player1.score = 0
                        }
                        console.log(`🏆 ${player2.name} venceu o confronto 🏆! ${player1.name} perdeu 2 pontos \n`)
                    }


                    if (await rollD2() === 2) {
                        player2.score++
                        console.log(`🏆 ${player2.name} encontrou um turbo e ganhou 1 ponto \n`)
                    }
                } else {
                    console.log("")
                }

            }
            if (totalTestSkill1 === totalTestSkill2) {
                console.log("Empate. Nenhum ponto foi perdido nesse bloco \n")
            }
        }

        if (block !== "CONFRONTO 🥊") {
            if (totalTestSkill1 > totalTestSkill2) {
                player1.score++
                console.log(`🏆 ${player1.name} venceu o bloco 🏆 \n`)
            } else if (totalTestSkill2 > totalTestSkill1) {
                player2.score++
                console.log(`🏆 ${player2.name} venceu o bloco 🏆 \n`)
            } else {
                console.log("Empate. Não houve vencedor nesse bloco \n")
            }
        }
    }

    //winner verification
    winnerVerification(player1, player2)
}

(async function main() {
    const characters = setCharacters()
    const players = await definePlayerCharacters(characters)

    //console.log("🏁 Começando a corrida: "+players[0].name+" vs "+ players[1].name+" 🏁\n")
    console.log(`🏁 Começando a corrida: ${players[0].name} vs ${players[1].name} 🏁\n`)

    await playRaceEngine(players[0], players[1])



})()







