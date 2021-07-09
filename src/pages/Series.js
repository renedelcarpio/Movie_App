import React, { useEffect, useState } from 'react';
import {
	Movie,
	Image,
	InfoContainer,
	Info,
	PageContainer,
} from '../components/elements';

const url = `
https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

const movieImage = 'https://image.tmdb.org/t/p/w154';

const Series = () => {
	const [serie, setSerie] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setSerie(data.results);
			});
	}, []);

	return (
		<PageContainer>
			{serie
				.filter((film) => film.poster_path)
				.map((film) => {
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

export default Series;
