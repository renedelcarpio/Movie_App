import styled from 'styled-components';
import theme from '../theme';

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
	flex-wrap: wrap;
	width: 15rem;
	height: 20rem;
	margin: 1rem;
	margin-bottom: 6rem;

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

export { FilmContainer, Movie, Image, Info, GenresTitle };
