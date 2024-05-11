import Image from 'next/image';
import IconeBranco from '../../public/images/icone-branco.png';
import Instagram from '../../public/images/instagram.png';
import Facebook from '../../public/images/facebook.png';
import Linkedin from '../../public/images/linkedin.png';
import Youtube from '../../public/images/youtube.png';

export const Footer = () => {
	return (
		<div className='bg-orange-600 w-full flex justify-center pb-5 lg:pb-0'>
			<div className='flex flex-col lg:flex-row items-center justify-around lg:w-8/12 py-2 gap-3'>
				<Image
					src={IconeBranco}
					alt='logo'
					className='w-[153px] h-[38px] object-cover'
				/>
				<div className='flex flex-col items-center lg:items-start gap-1 text-[12px]'>
					<div>
						© Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.
					</div>
					<div className='grid grid-cols-2 lg:flex gap-2'>
						<div>Política de privacidade </div>
						<div>Termos de uso</div>
						<div>LGPD</div>
						<div>Versão: 25/10/2021</div>
					</div>
				</div>
				<div className='flex justify-around lg:justify-start lg:gap-2 w-full lg:w-fit'>
					<div className='border-[4px] border-solid border-white rounded-[10px] w-8 h-8 flex items-center justify-center cursor-pointer'>
						<Image
							src={Instagram}
							alt='insta'
							className='w-6 filter contrast-100 brightness-95 saturate-200'
						/>
					</div>
					<div className='border-4 border-solid border-white bg-orange-600 rounded-[10px] p-1 flex items-center justify-center w-8 h-8 cursor-pointer'>
						{' '}
						<Image
							src={Facebook}
							alt='facebook'
							className='w-3 h-3 object-contain filter invert'
						/>
					</div>
					<div className='border-4 border-solid border-white bg-orange-600 rounded-[10px] p-1 flex items-center justify-center w-8 h-8 cursor-pointer'>
						{' '}
						<Image
							src={Linkedin}
							alt='Linkedin'
							className='w-3 h-3 object-contain filter invert'
						/>
					</div>
					<div className='border-2 border-solid border-white bg-white rounded-[10px] p-1 flex items-center justify-center w-8 h-8 cursor-pointer'>
						{' '}
						<Image
							src={Youtube}
							alt='Youtube'
							className='w-6 object-contain filter'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
