import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Select } from './select';
import place from '../../assets/place.json';
import { IPlaces } from '@/interfaces/places';

export const Search = ({
	localizacao,
	setLocalizacao,
	nQuartos,
	setNQuartos,
	tipoPropriedade,
	setTipoPropriedade,
	numeroQuartos,
	dadosParaBusca,
	setDadosParaBusca,
}: {
	localizacao: string;
	setLocalizacao: Dispatch<SetStateAction<string>>;
	nQuartos: string;
	setNQuartos: Dispatch<SetStateAction<string>>;
	tipoPropriedade: string;
	setTipoPropriedade: Dispatch<SetStateAction<string>>;
	numeroQuartos: number[];
	dadosParaBusca: {
		localizacao: string;
		nQuartos: string;
		tipoPropriedade: string;
	};
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
		<div className='search w-full h-[640px] flex flex-col items-center gap-5 pt-[133px] mt-16'>
			<div className='text-[34px] font-bold'>Vende. Aluga. Conecta.</div>
			<div className='flex flex-row gap-3 rounded-full bg-white text-neutral-900 w-[771px] h-20 items-center'>
				<div className='w-6/12 px-10 flex flex-col hover:bg-neutral-200 rounded-full h-full justify-center group ease-in-out duration-500 transition'>
					<div className='flex flex-col jsutify-center gap-2'>
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
				<hr className='border border-l-1 border-neutral-200 border-solid h-[50%] text-neutral-500' />
				<div className='w-6/12 pl-3 pr-3 flex flex-row justify-between items-center gap-2 h-full group hover:bg-neutral-200 rounded-full ease-in-out duration-500 transition'>
					<div
						className='w-full px-5 flex flex-col gap-2  rounded-full justify-center h-full cursor-pointer'
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
						className='rounded-full bg-[#ED672B] hover:bg-orange-600 p-5 px-5 flex items-center justify-between gap-2 ease-in-out duration-500 transition'
					>
						<span className='material-icons-outlined text-white'>search</span>

						{localizacao ? (
							<div className='text-white font-semibold'>Buscar</div>
						) : (
							''
						)}
					</button>
				</div>
			</div>

			{openQuartos && (
				<div
					className={`${
						openQuartos === true
							? 'max-h-40 animate-openmenu opacity-100'
							: 'max-h-0 animate-closemenu opacity-0'
					} w-full flex flex-row justify-between`}
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
