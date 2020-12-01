import React from 'react';
import styled from '@emotion/styled';

const Text = styled.a`
	color: white;
	font-size: 3vw;
	text-shadow: 5px 5px 2px black;
`;

const Title = ({ text }) => (
	<Text>{text}</Text>
);

export default Title;
