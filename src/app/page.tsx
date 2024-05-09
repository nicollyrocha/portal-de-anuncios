'use client';

import { NavBar } from '@/components/navbar';
import { NovosAnuncios } from '@/components/novosAnuncios';
import { Search } from '@/components/search';
import { useEffect, useState } from 'react';
import flats from '../../assets/flats.json';
import { IFlats } from '@/interfaces/flats';
import { EncontreUmLugar } from '@/components/encontreUmLugar';

export default function Home() {
	const [localizacao, setLocalizacao] = useState('Belo Horizonte');
	const [nQuartos, setNQuartos] = useState('todos');
	const [tipoPropriedade, setTipoPropriedade] = useState('todos');
	const arrayFlats: IFlats = flats;
	const numerosQuartos: number[] = [];
	const [dadosParaBusca, setDadosParaBusca] = useState({
		localizacao: 'Belo Horizonte',
		nQuartos: 'todos',
		tipoPropriedade: 'todos',
	});

	arrayFlats.sort((a, b) => a.Rooms - b.Rooms);

	arrayFlats.map((flat) => {
		if (!numerosQuartos.includes(flat.Rooms)) {
			numerosQuartos.push(flat.Rooms);
		}
	});

	numerosQuartos.sort((a, b) => a - b);

	return (
		<main className='flex min-h-screen flex-col items-center pb-10'>
			<NavBar />
			<Search
				localizacao={localizacao}
				setLocalizacao={setLocalizacao}
				nQuartos={nQuartos}
				setNQuartos={setNQuartos}
				tipoPropriedade={tipoPropriedade}
				setTipoPropriedade={setTipoPropriedade}
				numeroQuartos={numerosQuartos}
				dadosParaBusca={dadosParaBusca}
				setDadosParaBusca={setDadosParaBusca}
			/>
			<NovosAnuncios flats={arrayFlats} dadosParaBusca={dadosParaBusca} />
			<EncontreUmLugar />
		</main>
	);
}
