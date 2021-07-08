import React, { useEffect, useState } from 'react';
import { FilmContainer, Movie, Image, Info } from './elements';

const url = `
https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

const movieImage = 'https://image.tmdb.org/t/p/w154';

const GenresMovie = () => {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setGenres(data.genres);
			});
	}, []);

	return (
		<FilmContainer>
			{genres.map((film) => {
				return (
					<Movie key={film.id}>
						<Image
							src={movieImage + film.poster_path}
							alt={film.original_title}
						/>
						<Info>{film.name}</Info>
					</Movie>
				);
			})}
		</FilmContainer>
	);
};

export default GenresMovie;
