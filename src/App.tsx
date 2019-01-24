import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import TimeAgo from 'timeago-react';
import Number from './Number';
import Time from './Time';

const Result = styled.article`
	display: flex;
	margin-bottom: 16px;
`;

const Title = styled.h2`
	font-size: 18px;
	font-weight: 400;
	color: #0a0a0a;
`;

const ImageWrapper = styled.div`
	margin-right: 16px;
`;

const DetailsWrapper = styled.div`
	display: flex;
`;

const Description = styled.p`
	max-height: 36px;
	overflow: hidden;
	font-size: 13px;
	color: #606060;
`;

const VideoImage = styled.div<{ backgroundImage: string }>`
	position: relative;
	width: 246px;
	height: 138px;
	background-position: center;
	background-size: cover;
	background-image: ${props => `url(${props.backgroundImage})`};
	border-radius: 4px;
`;

const VideoLength = styled.div`
	position: absolute;
	bottom: 2px;
	right: 5px;
	width: 35px;
	background: rgba(0, 0, 0, 0.8);
	padding: 2px 4px;
	border-radius: 2px;
	text-align: center;
	color: #fff;
	font-size: 12px;
	font-weight: 800;
`;

const Details = styled.p`
	margin-right: 5px;
	color: #606060;
	font-size: 13px;
`;

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
							<Result key={result.snippet.description}>
								<ImageWrapper>
									<VideoImage
										backgroundImage={result.snippet.thumbnails.high.url}
									>
										<VideoLength>
											<Time time={result.contentDetails.duration} />
										</VideoLength>
									</VideoImage>
								</ImageWrapper>
								<div>
									<Title>{result.snippet.title}</Title>
									<DetailsWrapper>
										<Details>{result.snippet.channelTitle}</Details>
										<Details>
											<Number number={result.statistics.viewCount} /> views
										</Details>
										<Details>
											<TimeAgo datetime={result.snippet.publishedAt} />
										</Details>
									</DetailsWrapper>

									<Description>{result.snippet.description}</Description>
								</div>
							</Result>
						);
					})}
			</div>
		</div>
	);
};

export default App;
