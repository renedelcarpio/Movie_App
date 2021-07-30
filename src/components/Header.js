import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Menu, Items } from './elements';
import { MenuItems } from './menuItems';
import Search from './Search';

const Header = () => {
	return (
		<Navbar>
			<Menu>
				{MenuItems.map((item, index) => {
					return (
						<Items key={index}>
							<Link to={item.url}>{item.title}</Link>
						</Items>
					);
				})}
			</Menu>
			<Search />
		</Navbar>
	);
};

export default Header;
