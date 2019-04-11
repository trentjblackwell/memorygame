
//array for all cards in the game to start
var cards = [{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'	
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'	
}];
//array for storing cards that have been flipped
var cardsInPlay = [];
//function to check if the two cards match or not
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	console.log("You found a match!");
 }
 	else { 
 		alert("Sorry, try again.");
		 }
}
//function for user action of flipping card over
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank)
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	cardsInPlay.push(cards[cardId])
//check to see if two cards are flipped and then call match checking function	
if (cardsInPlay.length === 2) { 
checkForMatch();
}
}

flipCard(0);
flipCard(2);