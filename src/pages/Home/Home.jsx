import React from 'react';
import styled from '@emotion/styled';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import backgroundVideo from '../../assets/4k-space-starfield-background.mp4';
import { GitHub, Twitter } from '../../utils/Icons/MainIcons';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

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

const Video = styled.video`
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -1;
`;

const Home = () => (
	<Container>
		<Video loop autoPlay muted>
			<source src={backgroundVideo} type="video/mp4"/>
		</Video>
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
	</Container>
);

export default Home;
