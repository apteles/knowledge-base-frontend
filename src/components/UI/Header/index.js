import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Action } from './styles';
import { FaAngleLeft, FaAngleDown } from 'react-icons/fa';
import connectLayout from '../HOC/connectLayout';
function Header({ title, context }) {
    const { state, toggleMenu } = context;
    const { isActive } = state.menu;
    return (
        <Container>
            <Action onClick={toggleMenu}>
                {!isActive ? <FaAngleLeft /> : <FaAngleDown />}
            </Action>
            <Title>{title}</Title>
        </Container>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};

export default connectLayout(React.memo(Header));
