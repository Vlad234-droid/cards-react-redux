import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const Header = () => {
	return (
		<WrapperHead>
			<ListsBtn>
				<Li>
					<RoutBtn>
						<Link className="href" to="/">
							Home
						</Link>
					</RoutBtn>
				</Li>
				<Li>
					<RoutBtn>
						<Link className="href" to="/cart">
							Cart
						</Link>
					</RoutBtn>
				</Li>
				<Li>
					<RoutBtn>
						<Link className="href" to="/like">
							Like
						</Link>
					</RoutBtn>
				</Li>
			</ListsBtn>
		</WrapperHead>
	);
};

const WrapperHead = styled.div`
	width: 100%;
`;
const ListsBtn = styled.ul`
	height: 10vh;
	display: flex;
	justify-content: space-evenly;
	padding: 30px;
`;
const Li = styled.li`
	text-decoration: none;
	list-style: none;
`;
const RoutBtn = styled.button`
	border: none;
	background-color: black;
	border-radius: 0.5rem;
	box-shadow: -2px -2px 30px 5px red, 3px 3px 30px 5px blue;
	transition: all 0.5s ease;
	&:hover {
		background-color: white;
	}
`;

export default Header;
