import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import theme from '../theme';

const Navbar = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1rem;
`;

const Menu = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	width: 15%;
	justify-content: space-around;
`;

const Items = styled.li`
	font-size: 1.3rem;
	color: ${theme.white};

	:hover {
		transform: scale(1.2);
		transition: 300ms ease-in-out;
		cursor: pointer;
	}
`;

const Header = () => {
	return (
		<Navbar>
			<Menu>
				<Items>Home</Items>
				<Items>Movies</Items>
				<Items>Series</Items>
				<Items>Kids</Items>
			</Menu>
			<Search />
		</Navbar>
	);
};

export default Header;
