export const EncontreUmLugar = () => {
	return (
		<div className='bg-neutral-100 w-full mt-14 flex gap-5 p-10'>
			<div className='flex flex-col gap-8 items-center w-6/12 justify-center'>
				<div className='text-neutral-700 font-semibold text-6xl w-[495px]'>
					Encontre um lugar que é a sua casa
				</div>
				<div className='text-neutral-500 w-[495px]'>
					A Netimóveis te oferece uma experiência ágil e segura na hora de comprar ou
					alugar seu imóvel. Seja de maneira digital ou física, fazemos a diferença
					neste momento tão importante que é decidir um lar.
				</div>
			</div>
			<div className='w-6/12'>
				<div className='bg-white rounded-lg gap-5 py-8 flex flex-col w-[513px] items-center'>
					<div className='flex flex-row justify-evenly w-full gap-10'>
						<div className='flex flex-col gap-1 items-center'>
							<div className='material-icons-outlined text-neutral-500'>vpn_key</div>
							<div className='text-neutral-700 font-semibold text-center'>
								Alugar
								<br /> Imóvel
							</div>
						</div>
						<div className='flex flex-col gap-1 items-center'>
							<div className='material-icons-outlined text-neutral-500'>
								attach_money
							</div>
							<div className='text-neutral-700 font-semibold text-center'>
								Comprar
								<br /> Imóvel
							</div>
						</div>
						<div className='flex flex-col gap-1 items-center'>
							<div className='material-icons-outlined text-neutral-500'>home</div>
							<div className='text-neutral-700 font-semibold text-center'>
								Anuciar
								<br /> Imóvel
							</div>
						</div>
					</div>
					<hr className='w-full' />
					<div className='gap-5 flex flex-col items-center w-full px-12'>
						<div className='font-bold text-[34px] text-neutral-800 mt-5 self-start'>
							Alugue sem complicação
						</div>
						<div className='text-neutral-500'>
							Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde
							omnis iste natus error sit.
						</div>
						<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white'>
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
				</div>
			</div>
		</div>
	);
};
