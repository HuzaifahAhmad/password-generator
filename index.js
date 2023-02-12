const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",">",".","?",
"/"];



let displayPasswordOne = document.getElementById("display-password-one")
let displayPasswordTwo = document.getElementById("display-password-two")
let storePasswordOne = []
let storePasswordTwo = []


function generatePasswordOne() {
    for (let i = 1; i <= 15; i++) {
        let randomIndex =  Math.floor ( Math.random() * characters.length)
        storePasswordOne[i] = characters[randomIndex]
        console.log(storePasswordOne[i])
    }
    
    let fixedStoredPasswordOne = storePasswordOne.join("")
    displayPasswordOne.innerHTML = fixedStoredPasswordOne

    generatePasswordTwo()

}

function generatePasswordTwo() {
    for (let x = 1; x <= 15; x++) {
        let randomIndex =  Math.floor ( Math.random() * characters.length)
        storePasswordTwo[x] = characters[randomIndex]
        console.log(storePasswordTwo[x])
    }

    let fixedStoredPasswordTwo = storePasswordTwo.join("")
    displayPasswordTwo.innerHTML = fixedStoredPasswordTwo

}

