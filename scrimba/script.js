let number;
function fun (){
    number = document.getElementById('myText').value
function Mtf (){
    let convo  = number * 3.281
    let convoo = convo.toFixed(3)
    let convoIn = number / 3.281
    let convoInn = convoIn.toFixed(3)
    let mtfCon = document.getElementById('mtfCon')
    mtfCon.textContent =  number + " meters = " + convoo + " feet" + " | "  + number + " Feet = " + convoInn + " meters"
}
function Ltg (){
    let convo  = number / 3.785
    let convoo = convo.toFixed(3)
    let convoIn = number * 3.785
    let convoInn = convoIn.toFixed(3)
    let ltg = document.getElementById('ltg')
    ltg.textContent =  number + " liters = " + convoo + " gallons" + " | "  + number + " gallons = " + convoInn + " liters"
}
function Ktg (){
    let convo  = number * 2.205
    let convoo = convo.toFixed(3)
    let convoIn = number / 2.205
    let convoInn = convoIn.toFixed(3)
    let ktg = document.getElementById('ktg')
    ktg.textContent =  number + " Killos = " + convoo + " Pounds" + " | "  + number + " Pounds = " + convoInn + " Killos"
}

Mtf()
Ltg()
Ktg()
}
