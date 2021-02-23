import React from 'react';
import styled from '@emotion/styled';

const CustomButton = styled.button`
	background: #000;
	border: 1px solid white;
	color: #FFF;
	display: block;
    font-size:  ${(props) => {
		if (props.height) {
			return (props.height * 0.5);
		}
		return '1vw';
	}};
	height:  ${(props) => props.height || '3vw'};
	letter-spacing: 3px;
 	text-transform: lowercase;
 	width:  ${(props) => props.width || '10vw'}; 

	&:hover{
		background: #FFF;
		color: #000;
		cursor: pointer;
		font-weight: bold; 
	}

	@media only screen and (min-width: 600px) {
		width: 30vw;
	}

	@media only screen and (min-width: 1024px) {
		width: 40vw;
	}

	@media only screen and (min-width: 1440px) {
		width: 15.5vw;
	}
`;

const Button = ({
	height, width, children, link,
}) => (
	<>
		<a href={link} style={{ textDecoration: 'none' }}>
			<CustomButton
				type="button"
				height={height}
				width={width}
			>
				{children}
			</CustomButton>
		</a>
	</>
);

export default Button;
