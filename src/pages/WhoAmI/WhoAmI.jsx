import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { UserContext } from '../../contexts/UserContext';

const Container = styled.div`
	align-items: center;
    background: black;
    bottom: 3rem;
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
	height: calc(100vh - 3rem);
	justify-content: space-around; 
	overflow: visible;
	width: 100%;
	z-index: 0;

	@media only screen and (min-width: 1024px) {
		position: absolute;
		bottom: 0;
		left: 3rem;
        height: 100vh;
        width: calc(100vw - 3rem);
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h3`
	color:white;
	font-family: 'Caveat';
	font-size: 3rem;
	font-weight: 200;

	@media only screen and (min-width: 1024px) {
		font-size: 4rem;
	}
`;

const Text = styled.h3`
	color:white;
	font-family: 'Roboto';
	font-size: 1.2rem;
	padding-top: 1rem;
	width: 60vw;

	@media only screen and (min-width: 1024px) {
		max-width: 800px;
	}
`;

const WhoAmI = () => {
	const { isMobile } = useContext(UserContext);

	return (
		<Container isMobile={isMobile}>
			<TextContainer>
				<Title>Who Am I?</Title>
				<Text>
					As a volleyball player since my teens, I have learned the importance of teamwork.
					I’m always open to hearing different opinions and advices from everyone around me. I
					always look for dynamic environments: I want to learn new technologies which help
					me create better solutions for different requirements.
				</Text>
			</TextContainer>
			<Title>
				Test
			</Title>
		</Container>
	);
};

export default WhoAmI;
