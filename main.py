A = 1
B = A
AB = A
M1 = False
M4 = False
basic.show_number(A)
def on_logo_event_pressed():
    global A, B, AB
    if A == 1:
        A = 2
    else:
        A = 1
    basic.show_number(A)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)

def on_button_pressed_a():
    global M1
    if A == 1:
        if M1 == False:
            PCAmotor.motor_run(PCAmotor.Motors.M1, 250)
            M1 = True
        else:
            PCAmotor.motor_stop(PCAmotor.Motors.M1)
            M1 = False
    else: 
        if M1 == False:
            PCAmotor.motor_run(PCAmotor.Motors.M1, -250)
            M1 = True
        else:
            PCAmotor.motor_stop(PCAmotor.Motors.M1)
            M1 = False
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global M4
    if A == 1:
        if M4 == False:
            PCAmotor.motor_run(PCAmotor.Motors.M4, 250)
            M4 = True
        else:
            PCAmotor.motor_stop(PCAmotor.Motors.M4)
            M4 = False
    else:
        if M4 == False:
            PCAmotor.motor_run(PCAmotor.Motors.M4, -250)
            M4 = True
        else:
            PCAmotor.motor_stop(PCAmotor.Motors.M4)
            M4 = False
input.on_button_pressed(Button.B, on_button_pressed_b)