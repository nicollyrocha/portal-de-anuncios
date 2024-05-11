import { useState } from 'react';

export const EncontreUmLugar = () => {
	const [tabSelected, setTabSelected] = useState(0);

	return (
		<div className='bg-neutral-100 mt-14 flex flex-col lg:flex-row gap-5 p-10 py-16 lg:w-full'>
			<div className='flex flex-col gap-8 items-center w-full lg:w-6/12 justify-center'>
				<div className='text-neutral-700 font-bold lg:text-6xl text-[34px] lg:w-[495px]'>
					Encontre um lugar que é a sua casa
				</div>
				<div className='text-neutral-500 lg:w-[495px]'>
					A Netimóveis te oferece uma experiência ágil e segura na hora de comprar ou
					alugar seu imóvel. Seja de maneira digital ou física, fazemos a diferença
					neste momento tão importante que é decidir um lar.
				</div>
			</div>
			<div className='flex flex-col gap-5 lg:hidden'>
				<div className='w-full flex flex-col gap-5'>
					<div className='flex flex-row w-full items-center gap-5'>
						<hr className='border border-solid border-orange-400 h-8' />
						<div className='font-bold text-[24px] text-neutral-800 mt-5 self-start'>
							Alugue <br /> sem Complicação
						</div>
					</div>

					<div className='text-neutral-500'>
						Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde
						omnis iste natus error sit.
					</div>
					<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-'>
						Ver imóveis para Alugar
					</button>
					<div className='flex flex-col gap-1 self-start'>
						<div className='text-neutral-600 underline cursor-pointer ease-in-out duration-300 transition hover:text-purple-700'>
							Veja como Alugar sem Fiador
						</div>
						<div className='text-neutral-600 underline cursor-pointer ease-in-out duration-300 transition hover:text-purple-700'>
							Saiba como funciona o Aluguel na Netimóveis
						</div>
					</div>
				</div>
				<div className='w-full flex flex-col gap-5'>
					<div className='flex flex-row w-full items-center gap-5'>
						<hr className='border border-solid border-orange-400 h-8' />
						<div className='font-bold text-[24px] text-neutral-800 mt-5 self-start'>
							Compre <br /> com Segurança
						</div>
					</div>

					<div className='text-neutral-500'>
						Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde
						omnis iste natus error sit.
					</div>
					<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-'>
						Ver imóveis para Comprar
					</button>
					<div className='flex flex-col gap-1 self-start'>
						<div className='text-neutral-600 underline cursor-pointer ease-in-out duration-300 transition hover:text-purple-700'>
							Descubra seu Poder de Compra
						</div>
						<div className='text-neutral-600 underline cursor-pointer ease-in-out duration-300 transition hover:text-purple-700'>
							Saiba como Comprar na Netimóveis
						</div>
					</div>
				</div>
			</div>

			<div className='hidden lg:flex lg:flex-col w-6/12'>
				<div className='bg-white rounded-lg gap-0 py-8 flex flex-col w-[513px] items-center h-[471px]'>
					<div className='flex flex-row justify-evenly w-full gap-10'>
						<div
							onClick={() => setTabSelected(0)}
							className='flex flex-col gap-1 items-center cursor-pointer group'
						>
							<div
								className={`${
									tabSelected === 0 ? 'text-neutral-500' : 'text-neutral-400'
								} material-icons-outlined  group-hover:text-neutral-700 ease-in-out duration-300 transition`}
							>
								vpn_key
							</div>
							<div
								className={`${
									tabSelected === 0 ? 'text-neutral-700' : 'text-neutral-400'
								} font-semibold text-center group-hover:text-neutral-700 ease-in-out duration-300 transition`}
							>
								Alugar
								<br /> Imóvel
							</div>
							{tabSelected === 0 && (
								<hr className='border-t-2 border-orange-400 font-bold mt-1 w-full' />
							)}
						</div>
						<div
							onClick={() => setTabSelected(1)}
							className='flex flex-col gap-1 items-center cursor-pointer group'
						>
							<div
								className={`${
									tabSelected === 1 ? 'text-neutral-500' : 'text-neutral-400'
								} material-icons-outlined group-hover:text-neutral-700 ease-in-out duration-300 transition`}
							>
								attach_money
							</div>
							<div
								className={`${
									tabSelected === 1 ? 'text-neutral-700' : 'text-neutral-400'
								} group-hover:text-neutral-700 ease-in-out duration-300 transition font-semibold text-center`}
							>
								Comprar
								<br /> Imóvel
							</div>
							{tabSelected === 1 && (
								<hr className='border-t-2 border-orange-400 font-bold mt-1 w-full' />
							)}
						</div>
						<div
							onClick={() => setTabSelected(2)}
							className='flex flex-col gap-1 items-center cursor-pointer group'
						>
							<div
								className={`${
									tabSelected === 2 ? 'text-neutral-500' : 'text-neutral-400'
								} material-icons-outlined group-hover:text-neutral-700 ease-in-out duration-300 transition`}
							>
								home
							</div>
							<div
								className={`${
									tabSelected === 2 ? 'text-neutral-700' : 'text-neutral-400'
								} t group-hover:text-neutral-700 ease-in-out duration-300 transition font-semibold text-center`}
							>
								Anuciar
								<br /> Imóvel
							</div>
							{tabSelected === 2 && (
								<hr className='border-t-2 border-orange-400 font-bold mt-1 w-full' />
							)}
						</div>
					</div>
					<hr className='w-full' />
					<div className='gap-4 flex flex-col items-center w-full px-12 mt-6'>
						{tabSelected === 0 && (
							<>
								<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
									Alugue sem complicação
								</div>
								<div className='text-neutral-500'>
									Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde
									omnis iste natus error sit.
								</div>
								<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-5'>
									Ver imóveis para Alugar
								</button>
								<div className='flex flex-col gap-1 self-start'>
									<div className='text-neutral-600 underline cursor-pointer ease-in-out duration-300 transition hover:text-purple-700'>
										Veja como Alugar sem Fiador
									</div>
									<div className='text-neutral-600 underline cursor-pointer ease-in-out duration-300 transition hover:text-purple-700'>
										Saiba como funciona o Aluguel na Netimóveis
									</div>
								</div>
							</>
						)}
						{tabSelected === 1 && (
							<>
								<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
									Compre com Segurança
								</div>
								<div className='text-neutral-500'>
									Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde
									omnis iste natus error sit.
								</div>
								<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-5'>
									Ver imóveis para Comprar
								</button>
								<div className='flex flex-col gap-1 self-start'>
									<div className='text-neutral-600 underline cursor-pointer ease-in-out duration-300 transition hover:text-purple-700'>
										Simule seu Financiamento
									</div>
									<div className='text-neutral-600 underline cursor-pointer ease-in-out duration-300 transition hover:text-purple-700'>
										Saiba como funciona a Compra na Netimóveis
									</div>
								</div>
							</>
						)}
						{tabSelected === 2 && (
							<>
								<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
									Anuncie seu Imóvel
								</div>
								<div className='text-neutral-500'>
									Anuncie gratuitamente na maior rede de imobiliárias do Brasil.
								</div>
								<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-10'>
									Anunciar Imóvel
								</button>
								<div className='flex flex-row gap-1 self-start cursor-pointer'>
									<div className='text-neutral-700 font-semibold'>
										Descubra Quanto Cobrar
									</div>
									<div className='text-neutral-700 material-icons font-semibold'>
										east
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
