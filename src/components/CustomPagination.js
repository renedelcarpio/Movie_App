import { Pagination } from '@material-ui/lab';
import React from 'react';
import { PaginationContainer } from './elements';

const CustomPagination = ({ setPage }) => {
	const handlePageChange = (page) => {
		setPage(page);
	};

	return (
		<PaginationContainer>
			<Pagination
				count={10}
				color='primary'
				onChange={(e) => handlePageChange(e.target.textContent)}
				hidePrevButton
				hideNextButton
			/>
		</PaginationContainer>
	);
};

export default CustomPagination;
