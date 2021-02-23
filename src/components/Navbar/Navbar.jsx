import React from 'react';
import styled from '@emotion/styled';
import { Profile } from '../../utils/Icons';

const Container = styled.div`
    border-top: 1px solid rgba(100, 100, 100, .5);
    bottom: 0;
    height: 10vh;
    position: fixed;
    width: 100vw;
    z-index: 10;

    @media only screen and (min-width: 600px) {
		left: 3vw;
		width: 60vw;
	}

	@media only screen and (min-width: 1024px) {
		left: 3vw;
		width: 50vw;
	}

	@media only screen and (min-width: 1440px) {
		top: 0;
        left: 0;
        height: 100vh;
        width: 3rem;
        border-right: 1px solid rgba(100, 100, 100, .5);
        border-top: none;
	}
`;

const Navbar = () => (
	<Container />
);

export default Navbar;
