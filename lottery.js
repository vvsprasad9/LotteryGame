const pickbtn = document.getElementById("pick");
const resultbtn = document.getElementById("result");
const lotterysheetcontainer = document.getElementById("lotterySheetContainer");
const spin = new Audio('wheel.mp3');
const comp = new Audio('completed.mp3');
let gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "HeadPhones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming MousePad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper"
];

pickbtn.addEventListener("click", function () {
  resultbtn.textContent = "Please Wait...";
  for(let i=1;i<50;i++){
    document.getElementById(i).classList.remove("winningBox");
  }
  secondsCount = 0;
  const interValid = setInterval(function(){
    spin.pause();
    spin.currentTime = 0;
    spin.play();
    secondsCount = secondsCount +1;
    const randomBox = Math.floor(Math.random()*50) +1;
    console.log(randomBox);
    
    for(let i=1;i<=50;i++){
      if(i===randomBox){
        document.getElementById(i).classList.add('highlightedBox');
      }
      else{
        document.getElementById(i).classList.remove('highlightedBox');
      }
    }
    if(secondsCount === 5){
      let randomNumber = Math.random() * 50;
      let drawnNumber = Math.floor(randomNumber) + 1;
      let gift = gifts[drawnNumber-1];
      resultbtn.textContent = `You got ${drawnNumber} , You Won ${gift}`;
      document.getElementById(randomBox).classList.remove("highlightedBox");
      document.getElementById(drawnNumber).classList.add("winningBox");
      clearInterval(interValid);
      spin.pause();
      comp.pause();
      comp.currentTime = 0;
      comp.play();
}
  },1000);



});

gifts.forEach(function(value,i){
  const boxElement = `<div class = "box" id = ${i+1}>${i+1}. ${value}</div>`;
  console.log(boxElement);
  lotterysheetcontainer.insertAdjacentHTML("beforeend",boxElement);
});