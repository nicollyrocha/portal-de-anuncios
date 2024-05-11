'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import imageByIndex from './imageByIndex';
import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from './emblaArrowButtons';

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
	images?: { url: string }[];
	children?: React.ReactNode;
	buttons?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { buttons, options, images, children } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section className='embla w-full'>
			<div className='embla__viewport w-full' ref={emblaRef}>
				{images && (
					<div className='embla__container w-[311px] h-[198px]'>
						{images.map((img, index) => (
							<div className='embla__slide w-[311px] swiper-no-swiping' key={index}>
								<Image
									width={311}
									height={198}
									className='embla__slide__img w-[311px] h-[198px] rounded-t-lg'
									src={imageByIndex(index, images)}
									alt='casa'
								/>
							</div>
						))}
					</div>
				)}
				<div className='embla__container w-full flex gap-5'>{children}</div>
			</div>
			<div className='embla__controls'>
				{buttons && (
					<div className='embla__buttons'>
						<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
						<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
					</div>
				)}

				<div className='embla__dots flex gap-1 ml-1'>
					{scrollSnaps.map((_, index) => (
						<DotButton
							style={{
								backgroundColor: index === selectedIndex ? '#D2691E' : '#FF6700',
								width: '15px',
								height: '15px',
								marginTop: '5px',
							}}
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
