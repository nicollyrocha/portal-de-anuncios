import mundoNetImoveis from '../../public/images/mundo-netimoveis.png';
import financas from '../../public/images/financas.png';
import sucessoProfissional from '../../public/images/sucesso-profissional.png';
import Image from 'next/image';

export const ParaCompradores = () => {
	const publicacoes = [
		{
			img: mundoNetImoveis,
			minutos: 2,
			titulo:
				'ENCONTRO NETIMÓVEIS BRASIL – N CONNECTIONS 2021: A FORÇA DOS NEGÓCIOS EM REDE',
			categoria: 'Mundo Netimóveis',
		},
		{
			img: financas,
			minutos: 3,
			titulo: 'ORGANIZAÇÃO FINANCEIRA NAS IMOBILIÁRIAS',
			categoria: 'Finanças',
		},
		{
			img: sucessoProfissional,
			minutos: 4,
			titulo: 'EFICIÊNCIA NA GESTÃO DE CHAMADOS DE MANUTENÇÃO',
			categoria: 'Sucesso Profissional',
		},
	];

	return (
		<div className='lg:w-8/12 lg:mt-28 flex flex-col gap-8 px-5 lg:px-0'>
			<div className='flex flex-col lg:flex-row justify-between gap-5'>
				<div className='font-bold text-xl lg:text-[34px] text-neutral-800'>
					Para compradores, vendedores ou curiosos :)
				</div>
				<div className='flex gap-1 lg:self-start cursor-pointer items-center'>
					<div className='text-blue-600'>Ver mais no Blog</div>
					<div className='material-icons text-blue-600' style={{ fontSize: '15px' }}>
						open_in_new
					</div>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row justify-between gap-5 lg:gap-0'>
				{publicacoes.map((p) => {
					return (
						<div key={p.titulo} className='flex flex-col max-w-[384px] gap-3'>
							<Image
								src={p.img}
								alt={p.titulo}
								className='object-cover w-full rounded-xl h-[252px]'
							/>
							<div className='flex gap-2'>
								<div className='flex gap-1 items-center'>
									<div
										style={{ fontSize: '15px' }}
										className='material-icons text-neutral-400'
									>
										schedule
									</div>
									<div className='text-neutral-400'>{p.minutos} Min de Leitura</div>
								</div>

								<div className='text-orange-600'>{p.categoria}</div>
							</div>
							<div className='font-bold text-neutral-800 text-xl'>{p.titulo}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
