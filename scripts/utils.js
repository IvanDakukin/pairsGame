export const createIconsArray = (initialCount) => {
	const cardsIcons = ['compass', 'cloud', 'play', 'bolt', 'stop', 'cogs', 'bell', 'gift', 'plane', 'car',];

	switch (initialCount) {
		case 8: {
			return cardsIcons.slice(0, 4);
			break;
		}
		case 12: {
			return cardsIcons.slice(0, 6);
			break;
		}
		case 16: {
			return cardsIcons.slice(0, 8);
			break;
		}
		case 20: {
			return cardsIcons;
			break;
		}
	}
}

export const duplicateArray = (array) => {
	array.push(...array);
	return array;
}
	
export const shuffleArray = (array) => {
	array.sort(() => Math.random() - 0.5);
	return array;
}
  
