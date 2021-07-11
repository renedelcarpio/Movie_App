import React, { useEffect, useState } from 'react';
import {
	GenresContainer,
	GenresItem,
	Image,
	Genre,
	GenreQty,
} from './elements';

const url = `
https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

const movieImage_0 =
	'https://image.tmdb.org/t/p/original/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg';
const movieImage_1 =
	'https://image.tmdb.org/t/p/original/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg';
const movieImage_2 =
	'https://image.tmdb.org/t/p/original/3WZb1d2XPfHoaJOFf21cRpcIDaX.jpg';
const movieImage_3 =
	'https://image.tmdb.org/t/p/original/A0xW7GgeFQoQmPOn7HcHkBQ5nlb.jpg';

const GenresMovie = () => {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setGenres(data.genres);
			});
	}, []);

	return (
		<GenresContainer>
			{genres[0] ? (
				<>
					<GenresItem key={genres[0].id}>
						<Image src={movieImage_0} alt='Action movies' />
						<Genre>{genres[0].name}</Genre>
						<GenreQty>96 Titles</GenreQty>
					</GenresItem>
					<GenresItem key={genres[1].id}>
						<Image src={movieImage_1} alt='Adventure movies' />
						<Genre>{genres[1].name}</Genre>
						<GenreQty>55 Titles</GenreQty>
					</GenresItem>
					<GenresItem key={genres[2].id}>
						<Image src={movieImage_2} alt='Animation movies' />
						<Genre>{genres[2].name}</Genre>
						<GenreQty>64 Titles</GenreQty>
					</GenresItem>
					<GenresItem key={genres[3].id}>
						<Image src={movieImage_3} alt='Comedy movies' />
						<Genre>{genres[3].name}</Genre>
						<GenreQty>35 Titles</GenreQty>
					</GenresItem>
				</>
			) : null}
		</GenresContainer>
	);
};

export default GenresMovie;
