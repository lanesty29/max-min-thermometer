input.onButtonPressed(Button.A, function () {
    basic.showString("" + (min))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (max))
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    call_convertCtoF = input.temperature()
    basic.showNumber(input.temperature() * (1.8 + 32))
})
let call_convertCtoF = 0
let min = 0
let max = 0
let currenttemperature = input.temperature()
max = currenttemperature
min = currenttemperature
basic.forever(function () {
    basic.showString(".")
    currenttemperature = input.temperature()
    if (currenttemperature < min) {
        min = currenttemperature
    }
    if (currenttemperature > max) {
        max = currenttemperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
