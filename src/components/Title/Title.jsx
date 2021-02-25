import React from 'react';
import styled from '@emotion/styled';
import uuid from 'react-uuid';

const Word = styled.span`
	color: white;
	font-size: 5vh;
	font-weight: bold;
	
	& span {
		animation: none;
		position: relative;
		transition: color 0.3s;
		&:hover {
			animation: move 4s 1 ease-in-out;
			color: #f7a800;
		}
	}

	@keyframes move {
		0%,20%{
			top: 0vw;
		}
		5% {
			top: 0.5vw;
		}
		10% {
			top: -0.5vw;
		}
		15% {
			top: 0.3vw;
		}
	}
`;

const Container = styled.div`
	display: block;
	padding-bottom: 1vh;
	padding-top: 1vh;
`;

const Title = ({ children }) => (
	<Container>
		<Word>
			{children.split('').map((char) => <span aria-hidden="true" key={uuid()}>{char}</span>)}
		</Word>
	</Container>
);

export default Title;
