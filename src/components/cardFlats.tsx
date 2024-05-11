import { numberToCoin } from '@/functions/numberToCoin';
import EmblaCarousel from './emblaCarousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { IFlats } from '@/interfaces/flats';

export const CardFlats = ({
	flat,
}: {
	flat: {
		City: string;
		Title: string;
		Author: string;
		Rooms: number;
		Tags: string[];
		Price: number;
		Images: {
			url: string;
		}[];
	};
}) => {
	const SLIDE_COUNT = flat.Images.length;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	const OPTIONS: EmblaOptionsType = {};

	return (
		<div className='bg-white border border-solid border-neutral-400 rounded-lg gap-2 flex flex-col items-start w-72'>
			<EmblaCarousel slides={SLIDES} options={OPTIONS} images={flat.Images} />

			<div className='flex flex-col items-start gap-2 px-3 pb-3'>
				<div className='text-neutral-900 font-bold w-[250px] truncate text-left'>
					{flat.Title}
				</div>
				<div className='text-neutral-500'>{flat.City}</div>
				<div className='flex gap-2'>
					<div className='text-neutral-900'>
						{flat.Rooms}
						{flat.Rooms > 1 ? ' Quartos' : ' Quarto'}
					</div>
				</div>
				<div className='flex gap-2'>
					{flat.Tags.map((i) => {
						return (
							<div
								className='text-neutral-500 bg-neutral-200 rounded-full px-2 capitalize'
								key={i}
							>
								{i}
							</div>
						);
					})}
				</div>
				<div className='text-[#ED672B] font-bold'>{numberToCoin(flat.Price)}</div>
			</div>
		</div>
	);
};
