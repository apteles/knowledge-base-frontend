import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Title,
    Action,
    UserDropDown,
    UserName,
    UserAvatar,
    MenuDropDown,
    MenuItem,
} from './styles';
import { FaAngleLeft, FaAngleDown } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { RiLogoutCircleLine } from 'react-icons/ri';
import connectLayout from '../HOC/connectLayout';
function Header({ title, context }) {
    const { state, toggleMenu, toggleMenuUser } = context;
    const { menu } = state;
    return (
        <Container>
            <Action onClick={toggleMenu}>
                {!menu.sidebar.active ? <FaAngleLeft /> : <FaAngleDown />}
            </Action>
            <Title>{title}</Title>
            <UserDropDown>
                <UserName>John Doe</UserName>
                <UserAvatar src="https://api.adorable.io/avatars/50/abott@adorable.png" />
                <FaAngleDown onClick={toggleMenuUser} />
                <MenuDropDown show={menu.user.active}>
                    <MenuItem>
                        <BsGearFill /> <a href="/">Administração</a>
                    </MenuItem>
                    <MenuItem>
                        <RiLogoutCircleLine /> <a href="/">Sair</a>
                    </MenuItem>
                </MenuDropDown>
            </UserDropDown>
        </Container>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};

export default connectLayout(React.memo(Header));
