let value = document.getElementById('value').innerHTML
console.log(value)


let lengthValue = document.getElementById('lengthValue')
console.log(lengthValue)
let volumeValue = document.getElementById('volumeValue')
console.log(volumeValue)
let massValue = document.getElementById('massValue')
console.log(massValue)

function lengthConvertion() {
    let number = value
    console.log("Mumber", number)
    feetMeter = Math.floor(number / 3.28)
    meterFeet = Math.floor(number * 3.28)
    console.log(meterFeet)
    lengthValue.textContent = `${value} meters = ${meterFeet} feet | ${value} feet = ${feetMeter} meters`
}
lengthConvertion()

function volumeConvertion() {
    let number = value
    gallonLiter = Math.floor(number * 3.785)
    literGallon = Math.floor(number / 3.785)
    volumeValue.textContent = `${value} liters = ${literGallon} gallons | ${value} gallons = ${gallonLiter} liters`
}
volumeConvertion()

function massConvertion() {
    let number = value
    kilosPounds = Math.floor(number * 2.20)
    poundsKilos = Math.floor(number / 2.20)
    massValue.textContent = `${value} kilos = ${kilosPounds} pounds | ${value} pounds = ${poundsKilos} kilos`
}
massConvertion()