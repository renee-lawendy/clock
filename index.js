const clock = document.querySelector(".clock");
for(let i =1;i<=12;i++){
    clock.innerHTML +=`<div class="number">${i}</div>`
}
const numbers = document.querySelectorAll(".number");

numbers.forEach(function(num){
    num.style.transform=`rotate(${30*num.innerText}deg)`
})
// clock rotation
const secHand= document.querySelector(".sec-hand");
const hourHand= document.querySelector(".hour-hand");
const minHand= document.querySelector(".min-hand");

function setClock(){
    const now = new Date();
    
    const secondsDegrees = (now.getSeconds()/60)*360;
    const minutesDegrees = (now.getMinutes()/60)*360;
    const hoursDegrees = (now.getHours()/12)*360
    secHand.style.transform=`rotate(${secondsDegrees}deg)`
    minHand.style.transform=`rotate(${now.getSeconds()/60 + minutesDegrees}deg) `
    hourHand.style.transform=`rotate(${now.getMinutes()/60 + now.getSeconds()/60 + hoursDegrees}deg) `


}
setInterval(setClock,100);
// //////////////////////////////////////////
 function Phone(color){
this.color=color;
console.log(this)
 }
 let phone1 = new Phone("red")
 console.log(phone1)

 class User { 
    #e;
    constructor(id,salary){
        this.id = id;
        this.#e = salary;
    }
    getSalary(){ return parseInt(this.#e)}
 }
 let user1 = new User(1,"20");
//  console.log(user1.getSalary())
//   class Admin extends User{
//     #p;
//     constructor(id,salary,price){
//         super(id,salary);
//         this.#p = price;
//     }
//     getPrice(){
//         return (parseInt(this.#p)*this.getSalary())
//     }
//   }
//   let admin1 = new Admin(1,"40 bolbol","30gnih");
//   console.log(admin1.getPrice())
console.log(User.prototype);
console.log(user1.prototype);
let x = "hi";
console.log(x.prototype);