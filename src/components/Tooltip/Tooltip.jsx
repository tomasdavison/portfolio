import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	display: inline-block;
	position: relative;
	
	&:hover span {
		@media only screen and (min-width: 1024px) {
			display: inline-block;
		}
	}
`;

const Span = styled.span`
	background: #4e4e4e;
	border-radius: 5px;
	color: white;
	display: none;
	font-size: 0.9rem;
	font-weight: 200;
	left: 120%;
	min-width: 100px;
	position: absolute;
	text-align: center;
	text-transform: lowercase;
	top: 25%;
	transition: all 0.2s ease;
	width: auto; 
	z-index: 1;
`;

const Tooltip = ({ label, children }) => (
	<Container>
		<Span>{label}</Span>
		{children}
	</Container>
);

export default Tooltip;
