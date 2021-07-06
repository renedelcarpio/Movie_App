import React from 'react';
import { useState, useEffect } from 'react';

const movieInfo = `https://api.themoviedb.org/3/discover/movie?api_key=dfe89f9670f4ef75fa48d3e6365ee4d7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const App = () => {
	const [movie, setMovie] = useState([]);

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
					<div>
						<div>{peli.vote_average}</div>
						<div>{peli.original_title}</div>
						<div>{peli.release_date}</div>
					</div>
				);
			})}
		</div>
	);
};

export default App;
