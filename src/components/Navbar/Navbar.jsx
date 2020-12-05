import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	background-color: white;
	color: black;
	height: 5vh;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 50;

	@media only screen and (min-width: 600px) {
		width:3vw;
		height: 100vh;
	}
`;
const Text = styled.p`
	background-color: inherit;
	color: red;
`;

const Navbar = () => (
	<Container>
		<Text>T</Text>
	</Container>
);

export default Navbar;
