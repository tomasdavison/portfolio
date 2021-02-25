import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { UserContext } from '../../contexts/UserContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const Container = styled.div`
	align-items: center;
    background: black;
    bottom: 3rem;
    display: flex;
	flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
	height: calc(100vh - 3rem); 
	justify-content: space-around;
	overflow: scroll;
	width: 100%;
	z-index: 0;

	@media only screen and (min-width: 1024px) {
		overflow: hidden;
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

const ExperienceAndSkills = () => {
	const { isMobile } = useContext(UserContext);

	return (
		<Container isMobile={isMobile}>
			<TextContainer>
				<Title>Experience & Skills</Title>
				<ProgressBar
					color="#0c999e"
					label="HTML"
					completed="80%"
				/>
				<ProgressBar
					color="#0c999e"
					label="CSS"
					completed="80%"
				/>
				<ProgressBar
					color="#0c999e"
					label="Vanilla JS"
					completed="70%"
				/>
				<ProgressBar
					color="#0c999e"
					label="React"
					completed="75%"
				/>
				<ProgressBar
					color="#0c999e"
					label="Java"
					completed="80%"
				/>
				<ProgressBar
					color="#0c999e"
					label="C/C++"
					completed="70%"
				/>
			</TextContainer>
			<Title>Test</Title>
		</Container>
	);
};

export default ExperienceAndSkills;
