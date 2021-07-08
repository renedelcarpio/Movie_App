import styled from 'styled-components';
import theme from '../theme';

// Header elements
const Navbar = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
`;

const Menu = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	width: 15%;
	justify-content: space-around;

	@media (max-width: 1025px) {
		width: 20%;
	}

	@media (max-width: 800px) {
		width: 25%;
	}

	@media (max-width: 450px) {
		width: 40%;
	}
`;

const Items = styled.li`
	font-size: 1.3rem;

	& > a {
		color: ${theme.white};
		text-decoration: none;
	}
	:hover {
		transform: scale(1.2);
		transition: 300ms ease-in-out;
		cursor: pointer;
	}

	@media (max-width: 800px) {
		font-size: 1rem;
	}
`;

const SearchBar = styled.input`
	background-color: transparent;
	border: 2px solid ${theme.white};
	border-radius: 5rem;
	color: ${theme.white};
	font-size: 1.2rem;
	padding: 0.5rem 1.5rem;

	:focus {
		outline: none;
	}
`;

// Home page elements
const FilmContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 90%;
	margin: auto;
	margin-bottom: 3rem;
	padding: 1rem;
	height: 28rem;
	background-color: transparent;
	overflow: hidden;

	@media (max-width: 800px) {
		width: 100%;
		height: 22rem;
		justify-content: center;
		margin-bottom: 1rem;
	}
`;

const Movie = styled.div`
	display: flex;
	position: relative;
	overflow: hidden;
	flex-wrap: wrap;
	width: 15rem;
	margin: 1rem;
	margin-bottom: 6rem;
	cursor: pointer;

	:hover {
		margin-top: -0.2rem;
		transition: 0.3s ease-in-out;
		opacity: 0.9;
	}

	@media (max-width: 800px) {
		width: 10rem;
	}
`;

const Image = styled.img`
	width: 100%;
	border-radius: 1rem;
`;

const InfoContainer = styled.div`
	background-color: ${theme.black};
	opacity: 0.5;
	height: 6rem;
	position: absolute;
	padding: 1rem;
	bottom: 0;
	left: 0;
	right: 0;
	transform: translateY(100%);

	${Movie}:hover & {
		transform: translateY(0%);
		transition: 0.3s;
	}
`;

const Info = styled.h3`
	font-size: 1.2rem;
	color: ${theme.white};
	width: 90%;
	background-color: transparent;

	@media (max-width: 800px) {
		font-size: 1rem;
	}
`;

const GenresTitle = styled.h2`
	margin-left: 12rem;
	font-size: 1.5rem;
	font-weight: bold;
	color: ${theme.white};

	@media (max-width: 1025px) {
		margin-left: 8rem;
	}

	@media (max-width: 800px) {
		margin-left: 4rem;
		font-size: 1.2rem;
	}

	@media (max-width: 450px) {
		margin-left: 5rem;
	}

	@media (max-width: 376px) {
		margin-left: 8rem;
	}
`;

const HeroContainer = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 70rem;
`;

const HeroImage = styled.img`
	width: 100%;
	background-color: ${theme.green};
	background-image: linear-gradient(transparent, black);
`;

const HeroInfo = styled.div`
	position: absolute;
	width: 50rem;
	height: 18rem;
	margin-top: 20rem;
	margin-left: 10rem;
	border: 2px solid ${theme.white};
`;

//movies, series, kids container
const PageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export {
	FilmContainer,
	Movie,
	Image,
	Info,
	GenresTitle,
	InfoContainer,
	HeroContainer,
	HeroImage,
	HeroInfo,
	Navbar,
	Menu,
	Items,
	PageContainer,
	SearchBar,
};
