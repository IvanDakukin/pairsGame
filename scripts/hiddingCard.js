export const createHiddingCard = (defaultIcon) => {
	const card = document.createElement('div');
	card.classList.add('hidding-card');

	const notFlippedCardI = document.createElement('i');

	notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
	card.append(notFlippedCardI);
	
	return card;
}