import Image from 'next/image';
import Apple from '../../public/images/apple.png';
import GooglePlay from '../../public/images/google-play.png';

export const MenuFinal = () => {
	return (
		<div className='w-full bg-[#EDF1F4] flex lg:justify-center pl-5 lg:pl-0'>
			<div className='flex flex-col lg:flex-row lg:w-8/12 lg:justify-between gap-7 py-10'>
				<div className='flex flex-col gap-3'>
					<div className='text-base text-[#063D7E] font-bold mb-2'>A Netimóveis</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Quem somos
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Como funciona
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Seja um parceiro
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Quero me associar
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Acessoria de imprensa
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Soluções Corporativas
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Covid-19
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='text-base text-[#063D7E] font-bold mb-2'>Recursos</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Comprar
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Alugar
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Lançamentos
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Anunciar Imóvel
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Simular Financiamento
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Imobiliárias
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Blog
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='text-base text-[#063D7E] font-bold mb-2'>Contato</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Fale Conosco
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Perguntas Frequentes
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Suporte
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<div className='text-base text-[#063D7E] font-bold mb-2'>
						Nossos Aplicativos
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Loc Fácil Netimóveis
					</div>
					<div className='text-neutral-800 cursor-pointer hover:text-neutral-500 ease-in-out duration-300 transition'>
						Pro Imob Netimóveis
					</div>
					<div className='flex gap-2 items-center'>
						<div className='w-[108px] h-8'>
							<Image
								className='object-cover h-8 cursor-pointer'
								src={Apple}
								alt='apple'
							/>
						</div>
						<div className='w-[108px] h-8'>
							<Image
								className='w-full h-full object-cover cursor-pointer'
								src={GooglePlay}
								alt='apple'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
