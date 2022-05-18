//collapsible notes scripting

//Dice roller
document.getElementById('diceRollButton').addEventListener('click', rollDice)

function rollDice(){
    let num = document.getElementById('nOfDice').value
    let sides = document.getElementById('nOfSides').value
    let result = []
    for(let i = 0; i < num; i++){
    result.push(Math.ceil(Math.random() * sides))
    }
    console.log(result)
    document.getElementById('diceResults').innerText = result
    }
    