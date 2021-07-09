import React, { useEffect, useState } from 'react';
import {
	HeroContainer,
	HeroImage,
	HeroInfo,
	HeroTitle,
	HeroSubtitle,
	PlayMovie,
	Left,
	Right,
} from './elements';

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const movieImage = 'https://image.tmdb.org/t/p/w1280';

const Hero = () => {
	const [hero, setHero] = useState([]);

	useEffect(() => {
		console.log(hero);
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setHero(data.results);
			});
	}, []);

	return (
		<HeroContainer>
			{hero[1] ? (
				<>
					<HeroImage
						key={hero[1].id}
						src={movieImage + hero[1].backdrop_path}
					/>
					<HeroInfo key={hero[1].id}>
						<HeroTitle key={hero[1].id}>{hero[1].title}</HeroTitle>
						<HeroSubtitle key={hero[1].id}>{hero[1].overview}</HeroSubtitle>
						<PlayMovie>Play Movie</PlayMovie>
					</HeroInfo>
				</>
			) : null}
			);
		</HeroContainer>
	);
};

export default Hero;
