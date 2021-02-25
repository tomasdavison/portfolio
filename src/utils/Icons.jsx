import React from 'react';
import styled from '@emotion/styled';

const Icon = styled.span`
    border-radius: 50%;
	color: white;
	font-size: 1.5rem;
	padding: 0.5rem;
	transition: all 0.5s ease;
	z-index: 2;

	&:hover {
		background: #535353;
		transform: scale(1.1);
	}
`;

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

export const Profile = ({ link }) => (
	<a href={link}>
		<Icon className="fas fa-user" />
	</a>
);

export const Meteor = ({ link }) => (
	<a href={link}>
		<Icon className="fas fa-meteor" />
	</a>
);

export const LinkedIn = ({ link }) => (
	<a href={link}>
		<Icon className="fab fa-linkedin" />
	</a>
);

export const Arrow = ({ onClick, isSubMenuVisible }) => (
	<IconWithAnimation isSubMenuVisible={isSubMenuVisible} onClick={onClick} className="fas fa-chevron-up" />
);
