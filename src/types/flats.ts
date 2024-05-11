export type IFlats = {
	City: string;
	Title: string;
	Author: string;
	Rooms: number;
	Tags: string[];
	Price: number;
	Images: { url: string }[];
}[];
