import { IFlats } from '@/interfaces/flats';
import { CardFlats } from './cardFlats';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

export const NovosAnuncios = ({
	flats,
	dadosParaBusca,
}: {
	flats: IFlats;
	dadosParaBusca: {
		localizacao: string;
		nQuartos: string;
		tipoPropriedade: string;
	};
}) => {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	const swiperRef = useRef<SwiperType>();
	console.log(dadosParaBusca);
	return (
		<div className='w-8/12 flex flex-col items-center mt-10 gap-5'>
			<div className='flex justify-between items-center w-full'>
				<div className='font-bold text-neutral-900 flex gap-1 text-[28px]'>
					Novos anúncios em{' '}
					<div className='text-[#ED672B] flex items-center'>
						{dadosParaBusca.localizacao}
						<div className='material-icons text-xs' style={{ fontSize: '20px' }}>
							expand_more
						</div>
					</div>
				</div>
				<div className='flex gap-5 items-center'>
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						ref={navigationPrevRef}
						className='rounded-full border border-solid border-neutral-400 flex items-center justify-center p-1'
					>
						<div className='material-icons text-neutral-500'>chevron_left</div>
					</button>
					<button
						onClick={() => swiperRef.current?.slideNext()}
						ref={navigationNextRef}
						className='rounded-full border border-solid border-neutral-400 flex items-center justify-center p-1'
					>
						<div className='material-icons text-neutral-500'>chevron_right</div>
					</button>
				</div>
			</div>
			<Swiper
				preventInteractionOnTransition={true}
				slidesPerView={4}
				spaceBetween={25}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation]}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				{flats.filter(
					(flat) =>
						flat.City === dadosParaBusca.localizacao &&
						(dadosParaBusca.nQuartos === 'todos'
							? flat.Rooms > 0
							: flat.Rooms >= Number(dadosParaBusca.nQuartos))
				).length > 0 ? (
					flats
						.filter(
							(flat) =>
								flat.City === dadosParaBusca.localizacao &&
								(dadosParaBusca.nQuartos === 'todos'
									? flat.Rooms > 0
									: flat.Rooms >= Number(dadosParaBusca.nQuartos))
						)
						.map((flat) => {
							return (
								<SwiperSlide key={flat.Title} className=''>
									<CardFlats flat={flat} />
								</SwiperSlide>
							);
						})
				) : (
					<div className='flex gap-5 items-center justify-center w-full pt-10'>
						<span className='material-icons-outlined text-orange-500 font-bold'>
							search
						</span>
						<div className='text-orange-500 text-2xl font-bold'>Sem resultados</div>
					</div>
				)}
			</Swiper>
		</div>
	);
};
