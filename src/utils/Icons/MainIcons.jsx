import React from 'react';
import styled from '@emotion/styled';

const Icon = styled.span`
    border-radius: 50px;
    color: white;
    font-size: 2.5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    transition: 0.2s ease-in-out; 

    &:hover {
        background: grey;
    }
`;

export const GitHub = ({ link }) => (
	<a
		href={link}
	>
		<Icon className="fab fa-github" />
	</a>
);

export const Twitter = ({ link }) => (
	<a
		href={link}
	>
		<Icon className="fab fa-twitter" />
	</a>
);
