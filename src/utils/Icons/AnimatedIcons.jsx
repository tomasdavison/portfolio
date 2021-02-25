import React from 'react';
import styled from '@emotion/styled';

const IconWithAnimation = styled.span`
    border-radius: 50%;
	color: white;
	font-size: 1.5rem;
	padding: 0.5rem;
	transform: rotate(0deg);
	transform: ${(props) => (props.isSubMenuVisible ? 'rotate(180deg)' : '')};
	transition: all 0.5s ease;
	z-index: 2;
	
	&:hover {
		background: #535353;
		transform: scale(1.1);
	}
`;

const Arrow = ({ onClick, isSubMenuVisible }) => (
	<IconWithAnimation isSubMenuVisible={isSubMenuVisible} onClick={onClick} className="fas fa-chevron-up" />
);

export default Arrow;
