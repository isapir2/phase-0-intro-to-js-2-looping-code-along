// Code your solutions in this file
for (let age = 30; age< 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
   console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
 }

return gifts;
}
wrapGifts(gifts);

const card = ["Charlie", "Samip", "Ali"]

function writeCards(cards, party) {
    let written = [];
    for (let i = 0; i < cards.length; i++) {
        let message = `Thank you, ${cards[i]}, for the wonderful ${party} gift!`;
        written.push(message);
        //debugger
    }
    return written;  
}
console.log(writeCards(card, "birthday"));

//function wrapGifts(gifts) {
 // let i = 0; // the initialization moves OUTSIDE the body of the loop!
 // while (i < gifts.length) {
//console.log(`Wrapped ${gifts[i]} and added a bow!`);
 //   i++; // the iteration moves INSIDE the body of the loop!
//  }

//  return gifts;
//}

wrapGifts(gifts);

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
      
    }
    return num;
  }
console.log(countDown(10));