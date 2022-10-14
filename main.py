"""

How to use

1.Push A to start correction

2.Push A or B to move each servo

3.Push A+B to switch to next servo

4.Loop

5.Ends when smile is displayed

6.Reset, then Push B to walk

If PLEN does not fall over, setting is complete

"""
def servoAdjust():
    global adjNum, servoNum, loop
    adjNum = 0
    servoNum = 0
    basic.show_number(servoNum)
    loop = True
    while loop:
        if input.button_is_pressed(Button.AB):
            plenbit.save_positon(servoNum, adjNum)
            servoNum += 1
            adjNum = 0
            basic.show_number(servoNum)
        elif input.button_is_pressed(Button.A):
            adjNum += 1
            adjNum = plenbit.servo_adjust(servoNum, adjNum)
        elif input.button_is_pressed(Button.B):
            adjNum += -1
            adjNum = plenbit.servo_adjust(servoNum, adjNum)
        elif servoNum > 7:
            basic.show_icon(IconNames.HAPPY)
            basic.pause(2000)
            loop = False
loop = False
servoNum = 0
adjNum = 0
plenbit.servo_initial_set()
basic.show_icon(IconNames.HAPPY)

def on_forever():
    if input.button_is_pressed(Button.A):
        servoAdjust()
    elif input.button_is_pressed(Button.B):
        plenbit.std_motion(plenbit.StdMotions.WALK_FORWARD)
basic.forever(on_forever)
