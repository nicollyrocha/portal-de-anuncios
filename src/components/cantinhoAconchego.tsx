import Image from 'next/image';
import cantinhoAconchegoImg from '../../public/images/cantinho.jpeg';

export const CantinhoAconchego = () => {
	return (
		<div className='w-full mt-10 lg:mt-28 flex flex-col lg:flex-row lg:max-h-[513px] '>
			<div className='w-full lg:w-6/12 relative'>
				<Image
					src={cantinhoAconchegoImg}
					alt='Cantinho Aconchego'
					className='lg:w-full lg:max-h-[513px] object-cover '
				/>
				<div className='absolute text-white text-[19.49px] lg:text-[44.9px] bottom-[45%] left-[65%] w-28 lg:w-64'>
					Todo mundo merece seu cantinho do aconchego.
				</div>
			</div>

			<div className='flex flex-col gap-5 bg-neutral-100 lg:w-6/12 py-5 lg:py-20 lg:px-20 px-5'>
				<div className='text-neutral-400/75 font-bold'>
					Aqui vai uma frase de efeito
				</div>
				<div className='flex flex-col gap-8 lg:w-7/12'>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col lg:flex-row gap-2 lg:items-center'>
							<div className='material-icons text-neutral-400/90'>circle</div>
							<div className='font-semibold text-neutral-800'>
								Motivo para negociar com a Netimóveis
							</div>
						</div>
						<div className='text-neutral-800'>
							Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam
							voluptatem quia voluptas sit aspernatur aut odit aut fugit
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col lg:flex-row gap-2 lg:items-center'>
							<div className='material-icons text-neutral-400/90'>circle</div>
							<div className='font-semibold text-neutral-800'>
								Motivo para negociar com a Netimóveis
							</div>
						</div>
						<div className='text-neutral-800'>
							Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam
							voluptatem quia voluptas sit aspernatur aut odit aut fugit
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col lg:flex-row gap-2 lg:items-center'>
							<div className='material-icons text-neutral-400/90'>circle</div>
							<div className='font-semibold text-neutral-800'>
								Motivo para negociar com a Netimóveis
							</div>
						</div>
						<div className='text-neutral-800'>
							Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam
							voluptatem quia voluptas sit aspernatur aut odit aut fugit
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
