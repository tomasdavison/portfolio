import React from 'react';
import styled from '@emotion/styled';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';

const TitleDiv = styled.div`
	border: 1px solid red;
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

const App = () => (
	<>
		<Navbar/>
		<TitleDiv>
			<Title>Hi, I&apos;m Tomás.</Title>
			<Button
				width="80%"
				height="5vh"
			>
				contact me!
			</Button>
		</TitleDiv>
	</>
);

export default App;
