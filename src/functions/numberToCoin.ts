export const numberToCoin = (number: number) => {
	return new Intl.NumberFormat('pt-BR', {
		currency: 'BRL',
		style: 'currency',
	}).format(number);
};
