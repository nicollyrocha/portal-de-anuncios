import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

export const Preferencias = () => {
	const [tabSelected, setTabSelected] = useState(0);
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	const swiperRef = useRef<SwiperType>();
	const [bg, setBg] = useState('lg:bg-[url("/images/sol-da-manha.png")]');
	const [imagem, setImagem] = useState('sol-da-manha.png');

	const tabs = [
		{ title1: 'Pega', title2: 'Sol', icon: 'wb_twilight' },
		{ title1: 'Aceitam', title2: 'Pet', icon: 'pets' },
		{ title1: 'Ônibus', title2: 'Perto', icon: 'directions_bus' },
		{ title1: 'Tem', title2: 'Varanda', icon: 'circle' },
		{ title1: 'Com Boa', title2: 'Internet', icon: 'circle' },
		{ title1: 'Tem', title2: 'Quintal', icon: 'circle' },
	];

	useEffect(() => {
		if (tabSelected === 0) {
			setBg('lg:bg-[url("/images/sol-da-manha.png")]');
			setImagem('sol-da-manha.png');
		} else if (tabSelected === 1) {
			setBg('lg:bg-[url("/images/aceita-pet.png")]');
			setImagem('aceita-pet.png');
		} else if (tabSelected === 2) {
			setBg('lg:bg-[url("/images/onibus-perto.png")]');
			setImagem('onibus-perto.png');
		} else if (tabSelected === 3) {
			setBg('lg:bg-[url("/images/tem-varanda.png")]');
			setImagem('tem-varanda.png');
		} else if (tabSelected === 4) {
			setBg('lg:bg-[url("/images/boa-internet.png")]');
			setImagem('boa-internet.png');
		} else if (tabSelected === 5) {
			setBg('lg:bg-[url("/images/tem-quintal.png")]');
			setImagem('tem-quintal.png');
		}
	}, [tabSelected]);

	return (
		<div
			className={`${bg} lg:bg-center w-full lg:py-16 ease-in-out duration-300 animate-openmenu`}
		>
			<div className='bg-white rounded-lg gap-0 py-8 flex flex-col lg:w-[513px] items-center lg:h-[471px] lg:ml-56'>
				<div className='flex flex-row justify-evenly w-full gap-10'>
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						ref={navigationPrevRef}
						className='flex items-center justify-center p-1'
					>
						<div className='material-icons text-neutral-500'>chevron_left</div>
					</button>
					<Swiper
						effect='threeSlides'
						preventInteractionOnTransition={true}
						slidesPerView={3}
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
						slidesPerGroup={3}
					>
						{tabs.map((tab, index) => {
							return (
								<SwiperSlide key={index}>
									<div
										onClick={() => setTabSelected(index)}
										className='flex flex-col gap-1 items-center cursor-pointer group'
									>
										<div
											className={`${
												tabSelected === index ? 'text-neutral-500' : 'text-neutral-400'
											} material-icons group-hover:text-neutral-700 ease-in-out duration-300 transition`}
										>
											{tab.icon}
										</div>
										<div
											className={`${
												tabSelected === index ? 'text-neutral-700' : 'text-neutral-400'
											} t group-hover:text-neutral-700 ease-in-out duration-300 transition font-semibold text-center`}
										>
											{tab.title1}
											<br /> {tab.title2}
										</div>
										{tabSelected === index && (
											<hr className='border-t-2 border-orange-400 font-bold mt-1 w-full' />
										)}
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<button
						onClick={() => swiperRef.current?.slideNext()}
						ref={navigationNextRef}
						className='flex items-center justify-center p-1'
					>
						<div className='material-icons text-neutral-500'>chevron_right</div>
					</button>
				</div>
				<hr className='w-full' />
				<div className='gap-4 flex flex-col items-center w-full px-12 mt-6'>
					{tabSelected === 0 && (
						<>
							<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
								Sol que ilumina as suas manhãs
							</div>
							<div className='text-neutral-500'>
								Busque imóveis que pegam Sol durante a manhã para que você fique com a
								vitamina D em dia ;)
							</div>
							<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-5'>
								Buscar Imóveis
							</button>
						</>
					)}
					{tabSelected === 1 && (
						<>
							<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
								Imóveis que aceitam pet
							</div>
							<div className='text-neutral-500'>
								perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan
								etsi sinmos.
							</div>
							<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-16'>
								Buscar Imóveis
							</button>
						</>
					)}
					{tabSelected === 2 && (
						<>
							<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
								Imóveis com ponto de ônibus perto
							</div>
							<div className='text-neutral-500'>
								perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan
								etsi sinmos.
							</div>
							<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-5'>
								Buscar Imóveis
							</button>
						</>
					)}
					{tabSelected === 3 && (
						<>
							<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
								Imóveis com varanda
							</div>
							<div className='text-neutral-500'>
								perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan
								etsi sinmos.
							</div>
							<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-16'>
								Buscar Imóveis
							</button>
						</>
					)}
					{tabSelected === 4 && (
						<>
							<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
								Imóveis com boa internet
							</div>
							<div className='text-neutral-500'>
								perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan
								etsi sinmos.
							</div>
							<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-16'>
								Buscar Imóveis
							</button>
						</>
					)}
					{tabSelected === 5 && (
						<>
							<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
								Imóveis com quintal
							</div>
							<div className='text-neutral-500'>
								perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan
								etsi sinmos.
							</div>
							<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-16'>
								Buscar Imóveis
							</button>
						</>
					)}
				</div>
			</div>
			<div className='w-full h-52 flex lg:hidden'>
				<Image
					className='object-cover w-full h-full'
					src={`/images/${imagem}`}
					alt=''
					width={200}
					height={200}
				/>
			</div>
		</div>
	);
};
