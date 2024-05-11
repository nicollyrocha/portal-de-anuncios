import icone from '../../public/images/icone.png';
import Image from 'next/image';
import { useState } from 'react';

export const NavBar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className='text-neutral-900 flex flex-row px-5 lg:px-0 lg:justify-around justify-between w-screen items-center h-16 bg-white fixed z-50 shadow-md'>
			<div className='flex flex-row lg:gap-10 lg:items-center'>
				<div>
					<Image src={icone} alt='logo' className='w-40' />
				</div>
				<div className='hidden lg:flex lg:flex-row gap-10'>
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
			</div>
			<div className='hidden lg:flex flex-row gap-8 items-center'>
				<button className='text-purple-700 border border-solid border-purple-700 px-3 py-1 rounded-full hover:bg-purple-700 hover:text-white ease-in-out duration-300 transition active:bg-purple-500'>
					Anunciar Imóvel
				</button>
				<button className='hover:text-neutral-500 ease-in-out duration-300 transition active:text-neutral-700'>
					Entrar
				</button>
			</div>
			<div className='flex flex-col lg:hidden pr-5 justify-center items-end'>
				<div
					onClick={() => setOpenMenu(!openMenu)}
					className='material-icons text-neutral-500 cursor-pointer absolute'
				>
					menu
				</div>
				{openMenu && (
					<div
						className={`${
							openMenu === true
								? 'max-h-fit animate-openmenu opacity-100'
								: 'max-h-0 animate-closemenu opacity-0' + ''
						} bg-white rounded-xl relative top-56 p-5 shadow-lg border border-solid border-neutral-200`}
					>
						<div className='flex flex-col gap-10 items-center'>
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
							<button className='text-purple-700 border border-solid border-purple-700 px-3 py-1 rounded-full hover:bg-purple-700 hover:text-white ease-in-out duration-300 transition active:bg-purple-500'>
								Anunciar Imóvel
							</button>
							<button className='hover:text-neutral-500 ease-in-out duration-300 transition active:text-neutral-700'>
								Entrar
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
