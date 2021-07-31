import React, { useEffect, useState } from 'react';
import { FilmContainer } from './elements';
import Content from './Content';

const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

const MyListMovie = () => {
	const [trending, setTrending] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);
				setTrending(data.results);
			});
	}, []);

	return (
		<FilmContainer>
			{trending.map((film) => {
				return (
					<Content
						key={film.id}
						id={film.id}
						poster={film.poster_path}
						title={film.title || film.name}
						date={film.first_air_date || film.release_date}
						media={film.media_type}
						vote={film.vote_average}
					/>
				);
			})}
		</FilmContainer>
	);
};

export default MyListMovie;
