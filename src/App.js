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

	&:hover{
		top:47vh;
	}
`;

const App = () => (
	<>
		{/* <TitleDiv>
			<Title text="Hi, I'm Tomas."/>
		</TitleDiv> */}
		<Button/>
	</>
);

export default App;
