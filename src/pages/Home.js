import React from 'react';
import Hero from '../components/Hero';
import { GenresTitle } from '../components/elements';
import GenresMovie from '../components/GenresMovie';
import MyListMovie from '../components/MyListMovie';
import PopularMovie from '../components/PopularMovie';
import ComingSoon from '../components/ComingSoon';

const Home = () => {
	return (
		<>
			<Hero />
			<GenresMovie />
			<GenresTitle>My List</GenresTitle>
			<MyListMovie />
			<GenresTitle>Popular</GenresTitle>
			<PopularMovie />
			<GenresTitle>Coming Soon</GenresTitle>
			<ComingSoon />
		</>
	);
};

export default Home;
