import React, { useEffect, useState } from 'react';
import { Movie, Image, Info } from '../components/elements';

const url = `
https://api.themoviedb.org/3/movie/{movie_id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

const movieImage = 'https://image.tmdb.org/t/p/w154';

const Series = () => {
	const [serie, setSerie] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setSerie(data.genres);
			});
	}, []);

	return (
		<div>
			<h1>Series</h1>
		</div>
	);
};

export default Series;
