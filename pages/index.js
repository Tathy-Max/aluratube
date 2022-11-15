import React from 'react';
import config from '../config.json';
import styled from 'styled-components';
import { StyledTimeline } from '../src/components/Timeline';
import Menu from '../src/components/Menu';

function HomePage() {
	// const homePageStyle = { backgroundColor: 'red' };
	const [searchValue, setSearchValue] = React.useState(' ');
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
				}}
			>
				<Menu searchValue={searchValue} setSearchValue={setSearchValue} />
				<Header />
				<Timeline searchValue={searchValue} playlists={config.playlists}>
					Content
				</Timeline>
			</div>
		</>
	);
}

export default HomePage;

// function Menu() {
// 	return <div>Menu</div>;
// }

const StyledHeader = styled.div`
	img {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
	}
	.user-info {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 1rem 32rem;
		gap: 1rem;
		margin-left: -30rem;
		/* background-image: url('../src/components/assets/alexander-shatov-niUkImZcSP8-unsplash (1).jpg'); */
	}
`;

const StyledBanner = styled.div`
	background: rgb(2, 0, 36);
	background: linear-gradient(
		90deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(9, 70, 121, 1) 41%,
		rgba(0, 212, 255, 1) 100%
	);
	/* background-image: url(${config.bg}); */
	height: 14.5rem;
`;

function Header() {
	return (
		<StyledHeader>
			<StyledBanner />
			{/* <img src="banner" /> */}
			<section className="user-info">
				<img src={`https://github.com/${config.github}.png`} />
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
				</div>
			</section>
		</StyledHeader>
	);
}

function Timeline({ searchValue, ...props }) {
	const playlistNames = Object.keys(props.playlists);
	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = props.playlists[playlistName];
				{
					/* console.log(playlistName);
				console.log(videos); */
				}
				return (
					<section key={playlistName}>
						<h2>{playlistName}</h2>
						<div>
							{videos
								.filter((video) => {
									const titleNormalized = video.title.toLowerCase();
									const searchValueNormalized = searchValue.toLowerCase();
									return titleNormalized.includes(searchValueNormalized);
								})
								.map((video) => {
									return (
										<a key={video.url} href={video.url}>
											<img src={video.thumb} />
											<span>{video.title}</span>
										</a>
									);
								})}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}
