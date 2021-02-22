import React from 'react';
import styled from '@emotion/styled';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { GitHub, Twitter } from '../../utils/MainIcons';

const TitleDiv = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow-x: hidden;
    position: relative;
    top: 40vh;
    transition: all 0.5s ease-out;
    width: 80vw;

	@media only screen and (min-width: 600px) {
		left: 3vw;
		width: 60vw;
	}

	@media only screen and (min-width: 1024px) {
		left: 3vw;
		width: 50vw;
	}

	@media only screen and (min-width: 1440px) {
		left: 3vw;
		width: 30vw;
	}
`;

const Home = () => (
	<TitleDiv>
		<Title>Hi, I&apos;m Tomás.</Title>
		<Button
			width="60vw"
			height="5vh"
			link="https://www.linkedin.com/in/tom%C3%A1s-guido-davison-970876185/"
		>
                        contact me!
		</Button>
		<div>
			<GitHub
				link="https://github.com/tomasdavison"
			/>
			<Twitter
				link="https://twitter.com/tomydavison"
			/>
		</div>
	</TitleDiv>
);

export default Home;
