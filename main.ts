let A = 1
let B = A
let AB = A
let M1 = false
let M4 = false
basic.showNumber(A)
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    
    if (A == 1) {
        A = 2
    } else {
        A = 1
    }
    
    basic.showNumber(A)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (A == 1) {
        if (M1 == false) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 250)
            M1 = true
        } else {
            PCAmotor.MotorStop(PCAmotor.Motors.M1)
            M1 = false
        }
        
    } else if (M1 == false) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -250)
        M1 = true
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M1)
        M1 = false
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (A == 1) {
        if (M4 == false) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
            M4 = true
        } else {
            PCAmotor.MotorStop(PCAmotor.Motors.M4)
            M4 = false
        }
        
    } else if (M4 == false) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -250)
        M4 = true
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M4)
        M4 = false
    }
    
})
