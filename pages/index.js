import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import { StyledTimeline } from '../src/components/Timeline';
// import Menu from '../src/components/Menu';

function HomePage() {
	const homePageStyle = { backgroundColor: 'red' };
	return (
		<>
			<CSSReset />
			<div style={homePageStyle}>
				<Menu />
				<Header />
				<Timeline playlists={config.playlists}>Content</Timeline>
			</div>
		</>
	);
}

export default HomePage;

function Menu() {
	return <div>Menu</div>;
}

const StyledHeader = styled.div`
	img {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
	}
	.user-info {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 1rem 32rem;
		gap: 1rem;
	}
`;

function Header() {
	return (
		<StyledHeader>
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

function Timeline(props) {
	const playlistNames = Object.keys(props.playlists);
	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = props.playlists[playlistName];
				console.log(playlistName);
				console.log(videos);
				return (
					<section>
						<h2>{playlistName}</h2>
						<div>
							{videos.map((video) => {
								return (
									<a href={video.url}>
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
