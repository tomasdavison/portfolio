import React from 'react';
import styled from '@emotion/styled';

const CustomButton = styled.button`
	border: 1px solid white;
	color: #FFF;
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
`;

const Button = ({
	height, width, children,
}) => (
	<div>
		<CustomButton
			type="button"
			height={height}
			width={width}
		>
			{children}
		</CustomButton>
	</div>
);

export default Button;
