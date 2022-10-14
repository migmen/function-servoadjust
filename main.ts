let adjNum = 0
let servoNum = 0
let loop = false
// How to use
// 
// 1.Push A to start correction
// 
// 2.Push A or B to move each servo
// 
// 3.Push A+B to switch to next servo
// 
// 4.Loop
// 
// 5.Ends when smile is displayed
// 
// 6.Reset, then Push B to walk
// 
// If Kapakai does not fall over, setting is complete
function servoAdjust () {
    adjNum = 0
    servoNum = 0
    basic.showNumber(servoNum)
    loop = true
    while (loop) {
        if (input.buttonIsPressed(Button.AB)) {
            plenbit.savePositon(servoNum, adjNum)
            servoNum += 1
            adjNum = 0
            basic.showNumber(servoNum)
        } else if (input.buttonIsPressed(Button.A)) {
            adjNum += 1
            adjNum = plenbit.servoAdjust(servoNum, adjNum)
        } else if (input.buttonIsPressed(Button.B)) {
            adjNum += -1
            adjNum = plenbit.servoAdjust(servoNum, adjNum)
        } else if (servoNum > 7) {
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
            loop = false
        }
        if (servoNum == 1) {
            robotbit.Servo(robotbit.Servos.S1, 89)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S1, 0)
            basic.pause(200)
        } else if (servoNum == 2) {
            robotbit.Servo(robotbit.Servos.S2, 57)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S2, 0)
            basic.pause(200)
        } else if (servoNum == 3) {
            robotbit.Servo(robotbit.Servos.S3, 138)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S3, 0)
            basic.pause(200)
        } else if (servoNum == 4) {
            robotbit.Servo(robotbit.Servos.S4, 61)
            basic.pause(200)
            robotbit.Servo(robotbit.Servos.S4, 128)
            basic.pause(200)
        } else {
            basic.showLeds(`
                . . # . .
                # . # . #
                # . # . #
                . # # # .
                . . . . .
                `)
        }
    }
}
