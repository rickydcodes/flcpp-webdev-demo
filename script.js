const myButton = document.querySelector("#myButton")
const myButton2 = document.querySelector("#myButton2")
const myButton3 = document.querySelector("#myButton3")
const myButton4 = document.querySelector("#myButton4")

let counter = 0

myButton.addEventListener("click", increaseCounter)

function increaseCounter() {
    counter = counter + 1
}