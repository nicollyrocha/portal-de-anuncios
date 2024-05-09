import icone from '@/images/icone.png';
import Image from 'next/image';

export const NavBar = () => {
	return (
		<div className='text-neutral-900 flex flex-row justify-around w-full items-center h-16 bg-white fixed z-50 shadow-md'>
			<div className='flex flex-row gap-10 items-center'>
				<div>
					<Image src={icone} alt='logo' className='w-40' />
				</div>
				<button className='hover:text-neutral-500 ease-in-out duration-300 transition active:text-neutral-700'>
					Imobiliárias
				</button>
				<button className='hover:text-neutral-500 ease-in-out duration-300 transition active:text-neutral-700'>
					Quero me Associar
				</button>
				<button className='hover:text-neutral-500 ease-in-out duration-300 transition active:text-neutral-700'>
					<div className='flex'>
						<div>Sobre</div>
						<div className='material-icons font-thin'>expand_more</div>
					</div>
				</button>
				<button className='hover:text-neutral-500 ease-in-out duration-300 transition active:text-neutral-700'>
					Blog
				</button>
			</div>
			<div className='flex flex-row gap-8 items-center'>
				<button className='text-purple-700 border border-solid border-purple-700 px-3 py-1 rounded-full hover:bg-purple-700 hover:text-white ease-in-out duration-300 transition active:bg-purple-500'>
					Anunciar Imóvel
				</button>
				<button className='hover:text-neutral-500 ease-in-out duration-300 transition active:text-neutral-700'>
					Entrar
				</button>
			</div>
		</div>
	);
};
