'use client';

import { NavBar } from '@/components/navbar';
import { NovosAnuncios } from '@/components/novosAnuncios';
import { Search } from '@/components/search';
import { useEffect, useState } from 'react';
import flats from '../../assets/flats.json';
import { IFlats } from '@/types/flats';
import { EncontreUmLugar } from '@/components/encontreUmLugar';
import { Preferencias } from '@/components/preferencias';
import { AnuncieGratis } from '@/components/anuncieGratis';
import { Estados } from '@/components/estados';
import { Portugal } from '@/components/portugal';
import { CantinhoAconchego } from '@/components/cantinhoAconchego';
import { ParaCompradores } from '@/components/paraCompradores';
import { FacaParte } from '@/components/facaParte';
import { TiposPropriedade } from '@/components/tiposPropriedade';
import { MenuFinal } from '@/components/menu-final';
import { Footer } from '@/components/footer';

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
		<main className='flex min-h-screen flex-col lg:items-center w-full gap-10 overflow-auto'>
			<NavBar />
			<Search
				localizacao={localizacao}
				setLocalizacao={setLocalizacao}
				nQuartos={nQuartos}
				setNQuartos={setNQuartos}
				tipoPropriedade={tipoPropriedade}
				setTipoPropriedade={setTipoPropriedade}
				numeroQuartos={numerosQuartos}
				setDadosParaBusca={setDadosParaBusca}
			/>
			<NovosAnuncios flats={arrayFlats} dadosParaBusca={dadosParaBusca} />
			<EncontreUmLugar />
			<Preferencias />
			<AnuncieGratis />
			<Estados />
			<Portugal />
			<CantinhoAconchego />
			<ParaCompradores />
			<FacaParte />
			<TiposPropriedade />
			<div className='flex flex-col w-full'>
				<MenuFinal />
				<Footer />
			</div>
		</main>
	);
}
