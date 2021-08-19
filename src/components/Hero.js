import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
	HeroContainer,
	HeroImage,
	HeroInfo,
	HeroTitle,
	HeroSubtitle,
	PlayMovie,
	Left,
	Right,
	ArrowContainer,
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
	return (
		<HeroContainer>
			{hero[number] ? (
				<>
					<HeroImage
						key={hero[number].id}
						src={movieImage + hero[number].backdrop_path}
						alt={hero[number].original_title}
					/>
					<HeroInfo>
						<HeroTitle>{hero[number].title}</HeroTitle>
						<HeroSubtitle>{hero[number].overview}</HeroSubtitle>
						<PlayMovie>Play Movie</PlayMovie>
						<PlayMovie>Other</PlayMovie>
					</HeroInfo>
					<ArrowContainer>
						<Left onClick={restNumber}>
							<FontAwesomeIcon icon={faChevronLeft} />
						</Left>
						<Right onClick={addNumber}>
							<FontAwesomeIcon icon={faChevronRight} />
						</Right>
					</ArrowContainer>
				</>
			) : null}
			);
		</HeroContainer>
	);
};

export default Hero;
