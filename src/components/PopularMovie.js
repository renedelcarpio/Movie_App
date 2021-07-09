import React, { useEffect, useState } from 'react';
import { FilmContainer, Movie, Image, Info, InfoContainer } from './elements';

const url = `
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=2`;

const movieImage = 'https://image.tmdb.org/t/p/w154';

const PopularMovie = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPopular(data.results);
			});
	}, []);

	return (
		<FilmContainer>
			{popular.map((film) => {
				return (
					<Movie key={film.id}>
						<Image
							src={movieImage + film.poster_path}
							alt={film.original_title}
						/>
						<InfoContainer>
							<Info>{film.original_title}</Info>
							<Info>{film.vote_average}</Info>
						</InfoContainer>
					</Movie>
				);
			})}
		</FilmContainer>
	);
};

export default PopularMovie;
