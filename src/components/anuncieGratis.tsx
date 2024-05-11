import Image from 'next/image';
import anuncieGratis from '../../public/images/anuncie-gratis.png';

export const AnuncieGratis = () => {
	return (
		<div className='w-full flex flex-col lg:flex-row justify-center'>
			<div className='lg:border lg:border-solid lg:border-neutral-300 rounded-2xl lg:max-w-[1248px] lg:max-h-[420px] lg:mt-28'>
				<div className='flex flex-col-reverse lg:flex-row full'>
					<div className='lg:w-7/12 lg:h-[420px] object-cover'>
						<Image
							src={anuncieGratis}
							className='lg:rounded-l-2xl lg:h-[420px] object-cover'
							alt='anuncie-gratis'
						/>
					</div>

					<div className='px-5 lg:px-12 py-5 lg:w-5/12 flex flex-col gap-3'>
						<div className='font-bold text-orange-500'>Quer Vender ou Alugar?</div>
						<div className='font-bold text-neutral-800 text-[34px]'>
							Anuncie grátis para mais de 100 mil pessoas todos os dias.
						</div>
						<div className='flex flex-col gap-4 lg:mt-8'>
							<button className='text-purple-700 border border-solid border-purple-700 p-3 rounded-lg font-semibold self-start ease-in-out duration-300 transition hover:bg-purple-700 hover:text-white mt-10'>
								Anunciar Imóvel
							</button>
							<div className='flex flex-row gap-1 self-start cursor-pointer'>
								<div className='text-neutral-700 font-semibold underline'>
									Saiba quanto vale seu imóvel
								</div>
								<div className='text-neutral-700 material-icons font-semibold'>
									east
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
