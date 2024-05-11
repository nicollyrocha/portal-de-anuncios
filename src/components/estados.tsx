/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Bahia from '../../public/images/estados/bahia.png';
import Ceara from '../../public/images/estados/ceara.png';
import DistritoFederal from '../../public/images/estados/distrito-federal.png';
import EspiritoSanto from '../../public/images/estados/espirito-santo.png';
import MinasGerais from '../../public/images/estados/minas-gerais.png';
import Pernambuco from '../../public/images/estados/pernambuco.png';
import Portugal from '../../public/images/estados/portugal.png';
import RioDeJaneiro from '../../public/images/estados/rio-de-janeiro.png';
import RioGrandeDoSul from '../../public/images/estados/rio-grande-do-sul.png';
import SantaCatarina from '../../public/images/estados/santa-catarina.png';
import SaoPaulo from '../../public/images/estados/sao-paulo.png';

export const Estados = () => {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	const swiperRef = useRef<SwiperType>();
	const estados = [
		{ name: 'Bahia' },
		{ name: 'Ceará' },
		{ name: 'Distrito Federal' },
		{ name: 'Espírito Santo' },
		{ name: 'Minas Gerais' },
		{ name: 'Pernambuco' },
		{ name: 'Portugal' },
		{ name: 'Rio de Janeiro' },
		{ name: 'Rio Grande do Sul' },
		{ name: 'Santa Catarina' },
		{ name: 'São Paulo' },
	];

	return (
		<div className='lg:w-8/12 flex flex-col items-center lg:mt-28 gap-5 px-5'>
			<div className='flex flex-row justify-between w-full gap-10 lg:gap-0'>
				<div className='font-bold text-neutral-900 text-base lg:text-[34px]'>
					Prontos para te Receber em mais de 10 estados
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
				breakpoints={{
					300: { slidesPerView: 1, spaceBetween: 0 },
					640: {
						slidesPerView: 3,
						spaceBetween: 1,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 25,
					},
				}}
			>
				{estados.map((estado) => {
					let img;
					if (estado.name === 'Bahia') img = Bahia;
					if (estado.name === 'Ceará') img = Ceara;
					if (estado.name === 'Distrito Federal') img = DistritoFederal;
					if (estado.name === 'Espírito Santo') img = EspiritoSanto;
					if (estado.name === 'Minas Gerais') img = MinasGerais;
					if (estado.name === 'Pernambuco') img = Pernambuco;
					if (estado.name === 'Portugal') img = Portugal;
					if (estado.name === 'Rio de Janeiro') img = RioDeJaneiro;
					if (estado.name === 'Rio Grande do Sul') img = RioGrandeDoSul;
					if (estado.name === 'Santa Catarina') img = SantaCatarina;
					if (estado.name === 'São Paulo') img = SaoPaulo;

					return (
						<SwiperSlide
							key={estado.name}
							style={{ display: 'flex' }}
							className='lg:max-w-[294px]'
						>
							<div className='flex flex-col gap-5'>
								<div className='max-w-[294px] relative'>
									<Image
										src={img ? img : ''}
										alt={estado.name}
										className='object-fill rounded-2xl'
									/>
									<div className='font-bold text-2xl absolute bottom-3 left-3 text-pretty'>
										{estado.name}
									</div>
								</div>
								<div className='flex flex-col gap-1 items-start text-base'>
									<div className='flex gap-1 items-center'>
										<div className='text-orange-500'>•</div>
										<div className='text-neutral-500'>Casas à venda em {estado.name}</div>
									</div>
									<div className='flex gap-1 items-center'>
										<div className='text-orange-500'>•</div>
										<div className='text-neutral-500'>Apto. à venda em {estado.name}</div>
									</div>
									<div className='flex gap-1 items-center'>
										<div className='text-orange-500'>•</div>
										<div className='text-neutral-500'>
											Casas para Locação em {estado.name}
										</div>
									</div>
									<div className='flex gap-1 items-center'>
										<div className='text-orange-500'>•</div>
										<div className='text-neutral-500'>
											Apto. para locação em {estado.name}
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};
