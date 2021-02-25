import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
	Meteor, Profile, LinkedIn, Arrow,
} from '../../utils/Icons';
import Tooltip from '../Tooltip/Tooltip';

const Container = styled.div`
    background: black;
    border-top: 1px solid rgba(100, 100, 100, .5);
    bottom: 0;
    height: ${(props) => (props.isSubMenuVisible ? '50vh' : '3rem')};
    position: fixed;
    transition: all 0.3s linear;
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
    align-items: ${(props) => (props.isSubMenuVisible ? 'top' : 'center')};
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

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth < 1024);
	});

	window.addEventListener('resize', () => {
	    setIsMobile(window.innerWidth < 1024);
	});

	return (
		<Container isSubMenuVisible={isSubMenuVisible}>
			<UnorderedList isSubMenuVisible={isSubMenuVisible}>
				<ListElement>
					<Tooltip label="home">
						<Meteor/>
					</Tooltip>
				</ListElement>
				{
					isMobile ? (
						<ListElement>
							<Arrow
								isSubMenuVisible={isSubMenuVisible}
								onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}
							/>
						</ListElement>
					) : (
						<ListElement>
							<Profile/>
						</ListElement>
					)
				}

				<ListElement>
					<Tooltip label="contact me">
						<LinkedIn link="https://www.linkedin.com/in/tom%C3%A1s-guido-davison-970876185/"/>
					</Tooltip>
				</ListElement>
			</UnorderedList>
		</Container>);
};

export default Navbar;
