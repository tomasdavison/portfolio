import React from 'react';
import styled from '@emotion/styled';

const Icon = styled.span`
    color: white;
    font-size: 2rem;
`;

export const Profile = ({ link }) => (
	<a
		href={link}
	>
		<Icon className="fas fa-user" />
	</a>
);

export const Twitter = ({ link }) => (
	<a
		href={link}
	>
		<Icon className="fab fa-twitter" />
	</a>
);
