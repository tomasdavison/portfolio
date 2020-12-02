import React from 'react';
import styled from '@emotion/styled';
import Title from './components/Title/Title';
import Button from './components/Button/Button';

const TitleDiv = styled.div`
	position: absolute;
	text-align: center;
	top: 50vh;
	transition: all 0.5s ease-out;
	width: 100%;
`;

const App = () => (
	<>
		<TitleDiv>
			<Title>Hi, Im Tomás.</Title>
			<Button
				width="30vw"
				height="5vh"
			>
				contact me!
			</Button>
		</TitleDiv>
	</>
);

export default App;
