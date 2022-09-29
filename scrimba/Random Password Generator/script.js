let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')

console.log(p1)
function generate (){

  let chars = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
 
let password1 = ""
let password2 = ""
let password3 = ""
let password4 = ""


  for ( let i = 0 ; i <= 6 ; i++){
    let randomnumber = Math.floor(Math.random()*chars.length)
    password1 += chars.substring(randomnumber,randomnumber + 2)
  }
  p1.textContent = password1
  for ( let i = 0 ; i <= 6 ; i++){
    let randomnumber = Math.floor(Math.random()*chars.length)
    password2 += chars.substring(randomnumber,randomnumber + 2)
  }
  p2.textContent = password2
  for ( let i = 0 ; i <= 6 ; i++){
    let randomnumber = Math.floor(Math.random()*chars.length)
    password3 += chars.substring(randomnumber,randomnumber + 2)
  }
  p3.textContent = password3
  for ( let i = 0 ; i <= 6 ; i++){
    let randomnumber = Math.floor(Math.random()*chars.length)
    password4 += chars.substring(randomnumber,randomnumber + 2)
  }
  p4.textContent = password4
}
