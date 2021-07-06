import React from 'react';
import { useState, useEffect } from 'react';

// url for movie info
// I tried to hide de api key using ${REACT_APP_TMDB_API_KEY} instead of the key
// but does not work and the console throws an error
const movieInfo = `https://api.themoviedb.org/3/discover/movie?api_key=dfe89f9670f4ef75fa48d3e6365ee4d7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

// url for movie image
const movieImage = 'https://image.tmdb.org/t/p/w154';

const App = () => {
	const [movie, setMovie] = useState([]);

	// Getting the movie from the API
	useEffect(() => {
		fetch(movieInfo)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setMovie(data.results);
			});
	}, []);

	return (
		<div>
			{movie.map((peli) => {
				return (
					<div key={peli.id}>
						<img src={movieImage + peli.poster_path} alt='' />
						<div>{peli.original_title}</div>
						<div>{peli.year}</div>
						<div>{peli.vote_average}</div>
						<div>{peli.vote_count}</div>
					</div>
				);
			})}
		</div>
	);
};

export default App;
