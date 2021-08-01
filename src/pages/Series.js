import React, { useEffect, useState } from 'react';
import { FilmContainer } from '../components/elements';
import Content from '../components/Content';
import CustomPagination from '../components/CustomPagination';

const Series = () => {
	const [page, setPage] = useState(1);

	const url = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
	const [trending, setTrending] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);
				setTrending(data.results);
			});
	}, [url, page]);
	return (
		<>
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
			<CustomPagination setPage={setPage} />
		</>
	);
};

export default Series;
