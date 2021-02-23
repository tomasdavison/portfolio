import React from 'react';
import styled from '@emotion/styled';
import { Meteor, Profile, LinkedIn } from '../../utils/Icons';
import Tooltip from '../Tooltip/Tooltip';

const Container = styled.div`
    border-top: 1px solid rgba(100, 100, 100, .5);
    bottom: 0;
    height: 3rem;
    position: fixed;
    width: 100%;
    z-index: 10;

	@media only screen and (min-width: 1024px) {
		top: 0;
        left: 0;
        height: 100%;
        width: 3rem;
        border-right: 1px solid rgba(100, 100, 100, .5);
        border-top: none;
	}
`;

const UnorderedList = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-around;
    width: 100%;

    @media only screen and (min-width: 1024px) {
        flex-direction: column;
	}
`;

const ListElement = styled.li`
    list-style: none;
    padding: 0 1rem;

    &:first-of-type {
        margin-right: auto;

        @media only screen and (min-width: 1024px) {
            margin-right: 0;
            margin-bottom: auto;
        }
    }

    &:last-of-type {
        margin-left: auto;

        @media only screen and (min-width: 1024px) {
            margin-left: 0;
            margin-top: auto;
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 1rem 0;
    }
`;

const Navbar = () => (
	<Container>
		<UnorderedList>
			<ListElement>
				<Tooltip label="home">
				    <Meteor/>
				</Tooltip>
			</ListElement>
			<ListElement>
				<Tooltip label="about me">
					<Profile/>
				</Tooltip>
			</ListElement>
			<ListElement>
				<Tooltip label="experience">
					<Profile/>
				</Tooltip>
			</ListElement>
			<ListElement>
				<Tooltip label="contact me">
					<LinkedIn link="https://www.linkedin.com/in/tom%C3%A1s-guido-davison-970876185/"/>
				</Tooltip>
			</ListElement>
		</UnorderedList>
	</Container>
);

export default Navbar;
