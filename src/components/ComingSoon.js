import React, { useEffect, useState } from 'react';
import { FilmContainer, Movie, Image, Info, InfoContainer } from './elements';

const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate`;

const movieImage = 'https://image.tmdb.org/t/p/w154';

const ComingSoon = () => {
	const [coming, setComing] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setComing(data.results);
			});
	}, []);

	return (
		<FilmContainer>
			{coming.map((film) => {
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

export default ComingSoon;
