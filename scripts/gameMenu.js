import { startGame } from "./startgame.js";

export const createGameMenu = () => {
	const title = document.createElement('h2');
	const mainSection = document.querySelector('.main-section__container');

	mainSection.innerHTML = '';
	title.textContent = 'Выбор количества карт';
	title.classList.add('game-menu__title');
	document.querySelector('.confetti').innerHTML = '';

	const createDifficultButtons = (difficult) => {
		const button = document.createElement('button');

		button.classList.add('game-menu__difficult-btn');
		button.textContent = `${difficult} карт`;
		button.addEventListener('click', () => startGame(difficult));
		return button;
	}

	mainSection.append(title);
	[8, 12, 16, 20].forEach(element => {
		mainSection.append(createDifficultButtons(element));
	});
}
