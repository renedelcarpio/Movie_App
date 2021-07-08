import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Menu, Items } from './elements';
import { MenuItems } from './menuItems';

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
		</Navbar>
	);
};

export default Header;
