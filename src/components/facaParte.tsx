import Image from 'next/image';
import facaParteImg from '../../public/images/faca-parte.png';

export const FacaParte = () => {
	return (
		<div className='lg:w-8/12 w-full flex flex-col lg:flex-row bg-[#1C2A39] lg:rounded-3xl lg:mt-28'>
			<div className='lg:w-6/12 flex flex-col pt-10 pl-5 lg:pl-10 gap-5'>
				<button className='bg-transparent border border-solid border-orange-600 rounded-full py-1 w-[118px] text-sm ease-in-out duration-300 transition hover:bg-orange-600 hover:text-white'>
					Para Empresas
				</button>
				<div className='text-2xl lg:text-[34px] font-bold'>
					Faça parte da Netimóveis
				</div>
				<div className='text-[#C0C7CA] text-xl'>
					É uma empresa ou rede de imobiliárias? Associe-se e alcance um próximo
					patamar de eficiência e tecnologia.
				</div>
				<div className='flex flex-col lg:flex-row gap-10 lg:items-center mt-4'>
					<button className='bg-white font-semibold text-orange-600 rounded-lg p-3 ease-in-out duration-300 transition hover:bg-orange-600 hover:text-white w-6/12 lg:w-fit'>
						Mais Sobre se Associar
					</button>
					<div className='underline cursor-pointer ease-in-out duration-300 transition hover:text-orange-600'>
						Conheça Nossos Produtos
					</div>
				</div>
			</div>
			<div className='w-full lg:w-6/12 h-[372px] lg:h-full flex'>
				<Image
					src={facaParteImg}
					alt='Faca parte'
					className='lg:rounded-2xl lg:object-cover object-center h-full w-[617px] scale-105 lg:scale-100 lg:w-full lg:max-h-[352px] rotate-90 lg:rotate-0'
				/>
			</div>
		</div>
	);
};
