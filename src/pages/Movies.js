import React, { useEffect, useState } from 'react';
import {
	Movie,
	Image,
	InfoContainer,
	Info,
	PageContainer,
} from '../components/elements';

const url = `
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=6&with_watch_monetization_types=flatrate`;

const movieImage = 'https://image.tmdb.org/t/p/w154';

const Movies = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMovie(data.results);
			});
	}, []);

	return (
		<PageContainer>
			{movie.map((film) => {
				return (
					<Movie>
						<Image src={movieImage + film.poster_path} />
						<InfoContainer>
							<Info>{film.title}</Info>
							<Info>{film.vote_average}</Info>
						</InfoContainer>
					</Movie>
				);
			})}
		</PageContainer>
	);
};

export default Movies;
