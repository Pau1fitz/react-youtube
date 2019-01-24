import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Number from './Number';

const Results = styled.article`
	display: flex;
`;

const Title = styled.h2`
	font-size: 18px;
	color: #0a0a0a;
`;

const Description = styled.p`
	font-size: 13px;
	color: #606060;
`;

const Views = styled.p``;

const API_KEY = 'AIzaSyAXo-YsLg3RfGrQ3NWIX4D2DYyMF-aleO4';
const App = () => {
	const [query, setQuery] = useState<string | undefined>(undefined);
	const [search, setSearch] = useState<string>('');
	const [results, setResults] = useState<any>(undefined);

	useEffect(
		() => {
			fetch(
				`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&chart=mostPopular&&maxResults=25&key=${API_KEY}`
			)
				.then((res: any) => {
					return res.json();
				})
				.then(res => {
					setResults(res.items);
				});
		},
		[query]
	);

	return (
		<div>
			<h4>You Tube</h4>
			<input
				type="text"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>

			<button onClick={() => setQuery(search)}>Search</button>

			<div>
				{results &&
					results.map((result: any) => {
						return (
							<Results key={result.snippet.description}>
								<div>
									<div
										style={{
											width: '246px',
											height: '138px',
											backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundImage: `url(${
												result.snippet.thumbnails.high.url
											})`,
										}}
									/>
								</div>
								<div>
									<Title>{result.snippet.title}</Title>
									<Description>{result.snippet.description}</Description>

									<Views>
										<Number number={result.statistics.viewCount} />
									</Views>
								</div>
							</Results>
						);
					})}
			</div>
		</div>
	);
};

export default App;
