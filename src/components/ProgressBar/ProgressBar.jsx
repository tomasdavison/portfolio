import React from 'react';
import styled from '@emotion/styled';

const Label = styled.p`
    color: white;
    font-family: 'Ubuntu';
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 0.2rem;
    text-transform: uppercase;
`;

const Container = styled.div`
    background: ${(props) => props.color || 'white'};
    border-radius: 3px;
    content: "";
    filter: brightness(50%);
    height: ${(props) => props.height || '0.3rem'};
    overflow: visible;
    width: 100%;
    z-index: 1;

    &:before {
        background: ${(props) => props.color || 'white'};
        content: "";
        display: block;
        filter: brightness(150%);
        height: 100%;
        position: relative;
        width: ${(props) => (props.completed ? props.completed : '0')};
        z-index: 2;
    }
`;

const OutsideContainer = styled.div`
    display: block;
    margin: ${(props) => props.margin || '0.5rem 0'};
    width: ${(props) => props.width || '100%'};
`;

const ProgressBar = ({
	height, width, color, label, completed,
}) => (
	<OutsideContainer>
		<Label>{label}</Label>
		<Container
			width={width}
			color={color}
			height={height}
			completed={completed}
		/>
	</OutsideContainer>
);

export default ProgressBar;
