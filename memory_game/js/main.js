
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
//board creation function
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}
}
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
var flipCard = function() {
	var cardId = this.getAttribute("data-id")
	console.log("User flipped " + cards[cardId].rank)
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	cardsInPlay.push(cards[cardId])
	this.setAttribute("src", cards[cardId].cardImage)
//check to see if two cards are flipped and then call match checking function	
if (cardsInPlay.length === 2) { 
checkForMatch();
}
}

createBoard();