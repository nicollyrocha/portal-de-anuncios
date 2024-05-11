import Image from 'next/image';
import PortugalImg from '../../public/images/portugal.jpeg';

export const Portugal = () => {
	return (
		<div className='lg:mt-28 lg:w-[1248px] flex px-5 lg:px-0'>
			<div className='w-full flex'>
				<Image
					src={PortugalImg}
					alt='Portugal'
					className='rounded-2xl object-cover object-center w-[343px] md:w-[1248px] lg:h-[160px] absolute shadow-inner'
				/>
				<div className='relative flex flex-col lg:flex-row justify-between w-full px-5 lg:px-10 lg:items-center gap-8 pt-10'>
					<div className='font-bold text-2xl lg:text-4xl lg:w-5/12'>
						Encontre a oportunidade Perfeita em Portugal
					</div>
					<button className='bg-white w-[202px] text-orange-600 rounded-xl h-fit py-5 lg:py-5 font-semibold ease-in-out duration-300 transition hover:bg-orange-600 hover:text-white'>
						Ver imóveis em Portugal
					</button>
				</div>
			</div>
		</div>
	);
};
