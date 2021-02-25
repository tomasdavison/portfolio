import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
	Meteor, Profile, LinkedIn, Book, Briefcase,
} from '../../utils/Icons/Icons';
import Arrow from '../../utils/Icons/AnimatedIcons';
import Tooltip from '../Tooltip/Tooltip';
import { UserContext } from '../../contexts/UserContext';

const Container = styled.div`
    background: black;
    border-top: 1px solid rgba(100, 100, 100, .5);
    bottom: 0;
    height: ${(props) => (props.isSubMenuVisible ? '13rem' : '3rem')};
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
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: top;
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

const SubMenuUnorderedList = styled.ul`
    align-items: center;
    display: ${(props) => (props.isSubMenuVisible ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-around;
`;

const SubMenuListElement = styled.ul`
    border-top: 1px solid rgb(100,100,100,0.3);
    padding: 1rem;
    width: 100vw;
`;

const SubMenuText = styled.p`
    color: grey;
    font-weight: bold;
    letter-spacing: 5px;
    text-align: center;
    text-transform: uppercase;
`;

const Navbar = () => {
	const { isMobile, setIsMobile } = useContext(UserContext);
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
						<Link to="/">
							<Meteor/>
						</Link>
					</Tooltip>
				</ListElement>
				{
					isMobile ? (
						<ListElement>
							<Arrow
								style={{ display: 'block' }}
								isSubMenuVisible={isSubMenuVisible}
								onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}
							/>
							<SubMenuUnorderedList isSubMenuVisible={isSubMenuVisible}>
								<SubMenuListElement>
									<Link to="/who-am-i" style={{ textDecoration: 'none' }}>
										<SubMenuText>Who am I?</SubMenuText>
									</Link>
								</SubMenuListElement>
								<SubMenuListElement>
									<Link to="/experience" style={{ textDecoration: 'none' }}>
										<SubMenuText>Experience</SubMenuText>
									</Link>
								</SubMenuListElement>
								<SubMenuListElement>
									<Link to="/projects" style={{ textDecoration: 'none' }}>
									    <SubMenuText>Projects</SubMenuText>
									</Link>
								</SubMenuListElement>
							</SubMenuUnorderedList>
						</ListElement>
					) : (
						<>
							<ListElement>
								<Tooltip label="Who am I?">
									<Link to="/who-am-i">
										<Profile/>
									</Link>
								</Tooltip>
							</ListElement>
							<ListElement>
								<Tooltip label="Experience">
									<Link to="/experience">
										<Book/>
									</Link>
								</Tooltip>
							</ListElement>
							<ListElement>
								<Tooltip label="Projects">
									<Link to="/projects">
										<Briefcase/>
									</Link>
								</Tooltip>
							</ListElement>
						</>
					)
				}

				<ListElement>
					<Tooltip label="contact me">
						<a href="https://www.linkedin.com/in/tom%C3%A1s-guido-davison-970876185/">
							<LinkedIn/>
						</a>
					</Tooltip>
				</ListElement>
			</UnorderedList>
		</Container>);
};

export default Navbar;
