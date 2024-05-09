const imageByIndex = (index: number, images: { url: string }[]): string =>
	images[index % images.length].url;

export default imageByIndex;
