import React from 'react';
import { Movie, Image, InfoContainer, Info } from './elements';
import { img_300, unaviable } from '../config/config';

const Content = ({ id, poster, title, date, media, vote }) => {
	return (
		<Movie key={id}>
			<Image src={poster ? `${img_300}${poster}` : unaviable} alt={title} />
			<InfoContainer>
				<Info>{title}</Info>
				<Info>{date}</Info>
				<Info className={vote > 6 ? 'green' : 'red'}>{vote}</Info>
				<Info>{media}</Info>
			</InfoContainer>
		</Movie>
	);
};

export default Content;
