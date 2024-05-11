import { useState } from 'react';

export const TiposPropriedade = () => {
	const [tabSelected, setTabSelected] = useState(0);

	return (
		<div className='lg:flex lg:flex-col w-full items-center px-5 lg:px-0'>
			<div className='hidden lg:flex bg-gradient-to-b from-white to-[#FAF9F7] h-40 w-full'></div>
			<div className='bg-white rounded-lg gap-0 py-8 flex flex-col lg:w-8/12 items-start lg:min-h-[271px]'>
				<div className='flex flex-row w-full gap-10'>
					<div
						onClick={() => setTabSelected(0)}
						className='flex flex-col gap-1 items-center cursor-pointer group'
					>
						<div
							className={`${
								tabSelected === 0 ? 'text-orange-600' : 'text-neutral-400'
							} font-semibold text-center group-hover:text-neutral-700 ease-in-out duration-300 transition`}
						>
							Tipos de Propriedades
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
								tabSelected === 1 ? 'text-orange-600' : 'text-neutral-400'
							} group-hover:text-neutral-700 ease-in-out duration-300 transition font-semibold text-center`}
						>
							Populares para Venda
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
								tabSelected === 2 ? 'text-orange-600' : 'text-neutral-400'
							} t group-hover:text-neutral-700 ease-in-out duration-300 transition font-semibold text-center`}
						>
							Populares para Locação
						</div>
						{tabSelected === 2 && (
							<hr className='border-t-2 border-orange-400 font-bold mt-1 w-full' />
						)}
					</div>
				</div>
				<hr className='w-full' />
				<div className='gap-4 flex flex-col items-start mt-6 w-full'>
					{tabSelected === 0 && (
						<div className='grid grid-cols-2 lg:grid-cols-3 w-full gap-7 lg:gap-72'>
							<div className='flex flex-col gap-3'>
								<div className='font-bold text-sm text-neutral-800'>Alugar</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Apartamentos
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Casa
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Terrenos
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Lojas
								</div>
							</div>
							<div className='flex flex-col gap-3'>
								<div className='font-bold text-sm text-neutral-800'>Comprar</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Casas à venda
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Imóv. em Condomínios
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Comprar terrenos
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Lançamentos
								</div>
							</div>
							<div className='flex flex-col gap-3'>
								<div className='font-bold text-sm text-neutral-800'>Comercial</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Imóveis com escritório
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Prédio comvercial
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Galpão de Armazenamento
								</div>
								<div className='text-sm text-neutral-800 cursor-pointer ease-in-out durantion-300 transition hover:text-neutral-500'>
									Salão de Eventos
								</div>
							</div>
						</div>
					)}
					{tabSelected === 1 && (
						<div className='flex w-full gap-72'>
							<div className='font-bold text-sm text-neutral-800'>
								Populares para venda
							</div>
						</div>
					)}
					{tabSelected === 2 && (
						<div className='flex w-full gap-72'>
							<div className='font-bold text-sm text-neutral-800'>
								Populares para Locação
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
