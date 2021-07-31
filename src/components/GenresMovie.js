import React, { useEffect, useState } from 'react';
import { GenresContainer, Genre } from './elements';

const url = `
https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

const GenresMovie = () => {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);
				setGenres(data.genres);
			});
	}, []);

	return (
		<GenresContainer>
			{genres.map((genre) => {
				return <Genre key={genre.id}>{genre.name}</Genre>;
			})}
		</GenresContainer>
	);
};

export default GenresMovie;
