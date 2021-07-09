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
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setHero(data.results);
			});
	}, []);

	const [number, setNumber] = useState(0);

	const addNumber = () => {
		if (number < 19) {
			setNumber(number + 1);
		} else {
			setNumber(number + 0);
		}
	};

	const restNumber = () => {
		if (number > 0) {
			setNumber(number - 1);
		} else {
			setNumber(number - 0);
		}
	};

	const back = '<';
	const rigth = '>';
	return (
		<HeroContainer>
			{hero[number] ? (
				<>
					<div>
						<Left onClick={restNumber}>{back}</Left>
					</div>
					<HeroImage
						key={hero[number].id}
						src={movieImage + hero[number].backdrop_path}
					/>
					<HeroInfo>
						<HeroTitle>{hero[number].title}</HeroTitle>
						<HeroSubtitle>{hero[number].overview}</HeroSubtitle>
						<PlayMovie>Play Movie</PlayMovie>
						<PlayMovie>Other</PlayMovie>
					</HeroInfo>
					<div>
						<Right onClick={addNumber}>{rigth}</Right>
					</div>
				</>
			) : null}
			);
		</HeroContainer>
	);
};

export default Hero;
