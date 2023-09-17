export const createGameCard = (defaultIcon, flippedCardIcon) => {
	const card = document.createElement('div');
	card.classList.add('game-card');

	const notFlippedCardI = document.createElement('i');
	const FlippedCardI = document.createElement('i');

	notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
	FlippedCardI.classList.add('fa', `fa-${flippedCardIcon}`);

	card.append(FlippedCardI, notFlippedCardI);
	
	return card;
}