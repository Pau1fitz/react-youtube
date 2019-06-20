import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SideMenu from './components/SideMenu'
import Trending from './components/Trending'

const Main = styled.main`
	display: flex;
	flex: 1;
`

const App = () => {
	const [search, setSearch] = useState<string>('');

	return (
		<div>
			<h4>You Tube</h4>
			<input
				type="text"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>

			<Main>
				<SideMenu />
				<Trending />
			</Main>
		</div>
	);
};

export default App;
