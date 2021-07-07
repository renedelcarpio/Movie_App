import React from 'react';
import Header from './components/Header';
import MyListMovie from './components/MyListMovie';
import TrendingMovie from './components/TrendingMovie';
import { GenresTitle } from './components/elements';
import ComingSoon from './components/ComingSoon';

const App = () => {
	return (
		<>
			<Header />
			<GenresTitle>My List</GenresTitle>
			<TrendingMovie />
			<GenresTitle>Popular</GenresTitle>
			<MyListMovie />
			<GenresTitle>Coming Soon</GenresTitle>
			<ComingSoon />
		</>
	);
};

export default App;
