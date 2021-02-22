import React from 'react';
import styled from '@emotion/styled';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { GitHub, Twitter } from '../../utils/MainIcons';

const TitleDiv = styled.div`
	overflow-x: hidden;
	position: relative;
	text-align: center;
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
		<a
			href="https://www.linkedin.com/in/tom%C3%A1s-guido-davison-970876185/"
		>
			<Button
				width="60%"
				height="5vh"
			>
                        contact me!
			</Button>
		</a>
		<GitHub
			link="https://github.com/tomasdavison"
		/>
		<Twitter
			link="https://twitter.com/tomydavison"
		/>
	</TitleDiv>
);

export default Home;
