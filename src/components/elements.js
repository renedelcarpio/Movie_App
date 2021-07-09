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

const InfoMovie = styled.div`
	position: absolute;
	display: flex;
	justify-self: flex-start;
	background-color: ${theme.black};
	opacity: 0.8;
	width: 100%;
`;

// Hero components
const HeroContainer = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 70rem;

	@media (max-width: 800px) {
		height: 50rem;
	}

	@media (max-width: 450px) {
		height: 30rem;
	}
`;

const HeroImage = styled.img`
	width: 100%;
	background: no-repeat;
	background: fixed center;
	background-size: cover;
`;

const HeroInfo = styled.div`
	position: absolute;
	width: 50%;
	height: 18rem;
	margin-top: 20rem;
	margin-left: 10rem;

	@media (max-width: 800px) {
		margin-top: 15rem;
		width: 40%;
		height: 12rem;
	}

	@media (max-width: 450px) {
		margin-top: 10rem;
		margin-left: 5rem;
		width: 60%;
	}
`;

const HeroTitle = styled.h1`
	color: ${theme.white};
	font-size: 8rem;

	@media (max-width: 1025px) {
		font-size: 5rem;
	}

	@media (max-width: 800px) {
		font-size: 3rem;
	}

	@media (max-width: 450px) {
		font-size: 2rem;
	}
`;

const HeroSubtitle = styled.p`
	color: ${theme.white};
	font-size: 2rem;
	margin-bottom: 2rem;

	@media (max-width: 1025px) {
		font-size: 1.5rem;
	}

	@media (max-width: 800px) {
		font-size: 1rem;
	}

	@media (max-width: 450px) {
		font-size: 0.8rem;
	}
`;

//movies, series, kids container
const PageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

//Genres components
const GenresContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 90%;
	margin: auto;
	margin-top: -12rem;
	margin-bottom: 3rem;
	padding: 1rem;
	height: 22rem;
	background-color: transparent;
	overflow: hidden;

	@media (max-width: 1025px) {
		margin-top: -8rem;
	}

	@media (max-width: 800px) {
		width: 100%;
		height: 22rem;
		justify-content: space-around;
		margin-bottom: 1rem;
	}

	@media (max-width: 450rem) {
		margin-top: -4rem;
	}
`;

const GenresItem = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	text-align: center;
	width: 30rem;
	max-height: 20rem;
	background-color: gray;
	border-radius: 1rem;
	cursor: pointer;
	z-index: 100;

	:hover {
		transform: scale(1.03);
		transition: 0.2s ease-in-out;
		box-shadow: 0.1rem 0.5rem 1rem ${theme.black};
	}

	@media (max-width: 1025px) {
		width: 22rem;
		height: 16rem;
	}

	@media (max-width: 800px) {
		width: 18rem;
	}

	@media (max-width: 450px) {
		width: 10rem;
		height: 8rem;
	}
`;

const Genre = styled.h1`
	position: absolute;
	margin-top: 6rem;
	font-size: 3rem;
	color: ${theme.white};

	@media (max-width: 1025px) {
		margin-top: 5rem;
	}

	@media (max-width: 800px) {
		font-size: 2.5rem;
	}

	@media (max-width: 450px) {
		font-size: 1.8rem;
		margin-top: 2rem;
	}
`;

const GenreQty = styled.p`
	position: absolute;
	margin-top: 10rem;
	font-size: 1.5rem;
	color: ${theme.white};
	opacity: 0.8;

	@media (max-width: 1025px) {
		margin-top: 9rem;
	}

	@media (max-width: 800px) {
		margin-top: 7.5rem;
	}

	@media (max-width: 450px) {
		margin-top: 4rem;
		font-size: 1.2rem;
	}
`;

//Butons
const PlayMovie = styled.button`
	width: 10rem;
	margin-right: 1rem;
	padding: 1rem 2rem;
	font-size: 1rem;
	font-weight: bold;
	color: ${theme.white};
	background-color: ${theme.green};
	border: none;
	border-radius: 3rem;
	cursor: pointer;

	:hover {
		transform: scale(1.1);
		transition: 0.2s ease-in-out;
		box-shadow: 0.1rem 0.5rem 1rem ${theme.black};
	}

	@media (max-width: 800px) {
		width: 8rem;
		font-size: 0.7rem;
	}
`;

const Left = styled.button`
	position: absolute;
	margin-top: 30rem;
	margin-left: 1rem;
	width: 5rem;
	height: 5rem;
	padding: 1rem;
	background-color: ${theme.black};
	border: none;
	opacity: 0.7;
	font-size: 3rem;
	font-weight: bold;
	color: ${theme.white};
	border-radius: 50%;
	text-align: center;
	cursor: pointer;

	:active {
		width: 4rem;
		height: 4rem;
	}

	@media (max-width: 800px) {
		margin-top: 20rem;
	}

	@media (max-width: 450px) {
		width: 3rem;
		height: 3rem;
		margin-top: 15rem;
		font-size: 0.8rem;
	}
`;

const Right = styled.button`
	position: absolute;
	margin-top: 30rem;
	margin-left: -8rem;
	width: 5rem;
	height: 5rem;
	padding: 1rem;
	background-color: ${theme.black};
	border: none;
	opacity: 0.7;
	font-size: 3rem;
	font-weight: bold;
	color: ${theme.white};
	border-radius: 50%;
	text-align: center;
	cursor: pointer;

	:active {
		width: 4rem;
		height: 4rem;
	}

	@media (max-width: 800px) {
		margin-top: 20rem;
		margin-left: -7rem;
	}

	@media (max-width: 450px) {
		width: 3rem;
		height: 3rem;
		margin-top: 15rem;
		margin-left: -4rem;
		font-size: 0.8rem;
	}
`;

// Footer components
const FooterContainer = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 1rem;
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
	HeroTitle,
	HeroSubtitle,
	PlayMovie,
	Left,
	Right,
	InfoMovie,
	GenresContainer,
	GenresItem,
	Genre,
	GenreQty,
	FooterContainer,
};
