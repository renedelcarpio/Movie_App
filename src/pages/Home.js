import React from 'react';
import Hero from '../components/Hero';
import { GenresTitle } from '../components/elements';
import GenresMovie from '../components/GenresMovie';
import Trending from '../components/Trending';

const Home = () => {
	return (
		<>
			<Hero />
			<GenresMovie />
			<GenresTitle>Trending</GenresTitle>
			<Trending />
		</>
	);
};

export default Home;
