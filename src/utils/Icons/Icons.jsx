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

export const Profile = () => (
	<Icon className="fas fa-user" />
);

export const Meteor = () => (
	<Icon className="fas fa-meteor" />
);

export const LinkedIn = () => (
	<Icon className="fab fa-linkedin" />
);

export const Book = () => (
	<Icon className="fas fa-book-open" />
);

export const Briefcase = () => (
	<Icon className="fas fa-briefcase" />
);
