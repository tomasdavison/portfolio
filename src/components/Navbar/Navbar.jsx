import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    background: red;
    height: 100vh;
    position: fixed;
    z-index: 10;
`;

const Text = styled.p`
    position: relative;
    top: 50%;
`;

const Navbar = () => (
	<Container>
		<Text>I&apos;m a navbar</Text>
	</Container>
);

export default Navbar;
