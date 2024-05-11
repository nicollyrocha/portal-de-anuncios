import { Dispatch, SetStateAction, useState } from 'react';
import { Select } from './select';
import place from '../../assets/place.json';

export const Search = ({
	localizacao,
	setLocalizacao,
	nQuartos,
	setNQuartos,
	tipoPropriedade,
	setTipoPropriedade,
	numeroQuartos,
	setDadosParaBusca,
}: {
	localizacao: string;
	setLocalizacao: Dispatch<SetStateAction<string>>;
	nQuartos: string;
	setNQuartos: Dispatch<SetStateAction<string>>;
	tipoPropriedade: string;
	setTipoPropriedade: Dispatch<SetStateAction<string>>;
	numeroQuartos: number[];
	setDadosParaBusca: Dispatch<
		SetStateAction<{
			localizacao: string;
			nQuartos: string;
			tipoPropriedade: string;
		}>
	>;
}) => {
	const [openQuartos, setOpenQuartos] = useState(false);
	const places: { label: string; value: string }[] = [];

	place.map((p) => {
		places.push({
			label: `${p.name}, ${p.state.name}`,
			value: p.name,
		});
		return places;
	});

	const onChange = (value: string) => {
		setTipoPropriedade(value);
	};

	const onChangeLoc = (value: string) => {
		setLocalizacao(value);
	};

	return (
		<div className='lg:w-full w-screen lg:bg-[url("../../public/images/banner-inicio.png")] bg-center lg:h-[640px] flex flex-col items-center lg:gap-5 lg:h-[640px] lg:pt-[133px] mt-16'>
			<div className='bg-[url("../../public/images/banner-inicio.png")] py-10 bg-center bg-cover lg:bg-none lg:text-[34px] text-2xl flex flex-col justify-center h-full lg:h-fit pl-20 lg:pl-0 font-bold lg:flex lg:flex-row lg:gap-3 w-screen lg:w-full'>
				<div>Vende.</div>
				<div>Aluga.</div>
				<div>Conecta.</div>
			</div>
			<div className='mt-10 lg:mt-10 flex flex-col lg:items-center lg:flex lg:flex-row gap-5 lg:gap-3 rounded-none lg:rounded-full lg:bg-white text-neutral-900 lg:w-[771px] lg:h-20'>
				<div className='bg-white lg:bg-transparent border rounded-lg lg:rounded-full py-2 lg:py-0 border-neutral-200 lg:border-none lg:w-6/12 flex flex-col hover:bg-neutral-200 h-full justify-center group ease-in-out duration-500 px-5'>
					<div className='flex flex-col justify-center gap-2 lg:w-fit'>
						<div className='flex flex-row items-center gap-2'>
							<div className='material-icons-outlined text-neutral-400'>
								location_on
							</div>
							<div className={'mb-1 font-semibold text-neutral-900'}>Localização</div>
						</div>

						<Select
							className='border-none group-hover:bg-neutral-200 ease-in-out duration-500 transition h-5 flex items-center justify-between w-72'
							options={places}
							value={localizacao}
							onChange={onChangeLoc}
						/>
					</div>
				</div>
				<hr className='hidden lg:flex border border-l-1 border-neutral-200 border-solid h-[50%] text-neutral-500' />
				<div className='lg:w-6/12 w-full lg:pl-3 lg:pr-3 flex flex-col lg:flex-row lg:justify-between items-center gap-2 h-full group lg:hover:bg-neutral-200 rounded-lg lg:rounded-full ease-in-out duration-500 transition abs'>
					<div
						className='py-2 lg:py-0 lg:px-5 flex flex-col gap-2 rounded-lg lg:rounded-full lg:justify-center h-full cursor-pointer border border-neutral-200 lg:border-none px-5 hover:bg-neutral-200 ease-in-out duration-500 transition w-full'
						onClick={() => setOpenQuartos(!openQuartos)}
					>
						<div className='flex gap-2'>
							<span className='material-icons-outlined text-neutral-400'>hotel</span>
							<div className='font-semibold'>N° de Quartos</div>
						</div>
						<div className='capitalize  text-neutral-900'>
							<div>
								{nQuartos === 'todos' ? nQuartos : `${nQuartos + '+ Quartos'}`}
							</div>
						</div>
					</div>

					<button
						onClick={() =>
							setDadosParaBusca({
								localizacao: localizacao,
								nQuartos: nQuartos ? nQuartos : 'todos',
								tipoPropriedade: tipoPropriedade ? tipoPropriedade : 'todos',
							})
						}
						className='w-full lg:w-fit rounded-lg lg:rounded-full bg-[#ED672B] hover:bg-orange-600 p-3 lg:p-5 px-5 flex items-center justify-center lg:justify-between gap-2 ease-in-out duration-500 transition'
					>
						<span className='material-icons-outlined text-white'>search</span>

						{localizacao ? (
							<div className='text-white font-semibold hidden lg:flex'>Buscar</div>
						) : (
							''
						)}
						<div className='text-white font-semibold flex lg:hidden'>
							Buscar Imóveis
						</div>
					</button>
				</div>
			</div>

			{openQuartos && (
				<div
					className={`${
						openQuartos === true
							? 'max-h-40 animate-openmenu opacity-100'
							: 'max-h-0 animate-closemenu opacity-0'
					} w-full flex flex-row justify-between mr-[100%] lg:mr-0 abosulte`}
				>
					<div className='w-6/12'></div>
					<div className='w-6/12 px-7'>
						<div className='bg-white rounded-2xl py-3 px-7 gap-3 flex flex-col w-fit'>
							<div className='text-neutral-900'>Número de Quartos</div>
							<div className='flex flex-row gap-2'>
								<button
									onClick={() => setNQuartos('todos')}
									className={`${
										nQuartos === 'todos' ? 'bg-neutral-100 border-purple-700' : ''
									} font-semibold text-purple-700 border border-solid border-neutral-300 px-3 py-2 rounded-full hover:bg-purple-200 ease-in-out duration-300 transition w-fit`}
								>
									Todos
								</button>
								{numeroQuartos.map((n) => (
									<button
										key={n}
										onClick={() => setNQuartos(n.toString())}
										className={`${
											nQuartos === n.toString() ? 'bg-neutral-100 border-purple-700' : ''
										} font-semibold text-purple-700 border border-solid border-neutral-300 px-3 py-2 rounded-full hover:bg-purple-200 ease-in-out duration-300 transition w-fit`}
									>
										{n}+
									</button>
								))}
							</div>
							<hr className='w-full my-2' />
							<div>
								<div className={'mb-1 font-semibold text-neutral-900 text-xs'}>
									Tipo de Propriedade
								</div>
								<Select
									options={[
										{ value: 'casa', label: 'Casa' },
										{ value: 'apartamento', label: 'Apartamento' },
										{ value: 'todos', label: 'Todos os tipos' },
									]}
									value={tipoPropriedade}
									onChange={onChange}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
