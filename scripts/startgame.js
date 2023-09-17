import { confetti } from "./confetti.js";
import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createHiddingCard } from "./hiddingCard.js";
import { createIconsArray, duplicateArray, shuffleArray } from "./utils.js";

export const startGame = (difficult) => {
	let firstCard = null;
	let secondCard = null;
	let clickable = true;

	const mainSection = document.querySelector('.main-section__container');
	const gameTable = document.createElement('div');
	const gameSection = document.createElement('div');
	const cardsIcons = shuffleArray(duplicateArray(createIconsArray(difficult)));
	const restartBtn = document.createElement('button');
	const eroPic = document.createElement('div');
	eroPic.style.backgroundImage = `url(./assets/${difficult}.jpg)`;
	const hiddingCards = [];
	for(let i = 0; i < difficult / 2; i++){
		let hiddingCard = createHiddingCard('close');
		hiddingCards.push(hiddingCard);
		eroPic.append(hiddingCard);
	}

	mainSection.innerHTML = '';

	eroPic.classList.add('ero-pic')
	restartBtn.textContent = 'Рестарт';
	gameTable.classList.add('game-table');
	restartBtn.classList.add('restart-btn');
	gameSection.classList.add('game-section')

	cardsIcons.forEach(icon => gameTable.append(createGameCard('question-circle', icon)));

	gameSection.append(gameTable, eroPic)
	mainSection.append(gameSection, restartBtn, );

	restartBtn.addEventListener('click', createGameMenu);

	const cards = document.querySelectorAll('.game-card');
	cards.forEach((card, index) => card.addEventListener('click', () => {
		if (clickable && !card.classList.contains('succesfully')) {
			card.classList.add('flip');

			if (firstCard == null) {
				firstCard = index
			} else if (index != firstCard) {
				secondCard = index;
				clickable = false;
			}

			if (firstCard != null && secondCard != null && firstCard != secondCard) {
				if (
					cards[firstCard].firstElementChild.className === cards[secondCard].firstElementChild.className
				) {
					setTimeout(() => {
						cards[firstCard].classList.add('succesfully');
						cards[secondCard].classList.add('succesfully');

						hiddingCards.pop().classList.add('visible');
						

						firstCard = secondCard = null;
						clickable = true;
					}, 500);
				} else {
					setTimeout(() => {
						cards[firstCard].classList.remove('flip');
						cards[secondCard].classList.remove('flip');

						firstCard = secondCard = null;
						clickable = true;
					}, 500);
				}
			}

			if(Array.from(cards).every(card => card.className.includes('flip'))) {
				document.querySelector('.confetti').innerHTML = confetti;
			}
		}
	}))
}
