import React, { useEffect, useState } from 'react';
import { HeroContainer, HeroImage, HeroInfo } from './elements';

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const movieImage =
	'https://image.tmdb.org/t/p/w185/ppiL13JJx2LkyoNb8JM0h7nxYmk.jpg';

const Hero = () => {
	const [hero, setHero] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setHero(data.results);
			});
	}, []);

	return (
		<HeroContainer>
			<HeroImage />
			<HeroInfo>
				<h1>Hola</h1>
			</HeroInfo>
		</HeroContainer>
	);
};

export default Hero;
