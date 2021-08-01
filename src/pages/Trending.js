import React, { useEffect, useState } from 'react';
import { FilmContainer } from '../components/elements';
import Content from '../components/Content';
import CustomPagination from '../components/CustomPagination';

const Trending = () => {
	const [page, setPage] = useState(1);

	const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`;
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

export default Trending;
