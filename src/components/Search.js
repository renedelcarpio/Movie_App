import React from 'react';
import { SearchBar } from './elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faSearch} />
			<SearchBar />
		</div>
	);
};

export default Search;
