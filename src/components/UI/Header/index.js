import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Container,
    Title,
    Action,
    UserDropDown,
    UserName,
    UserAvatar,
    MenuDropDown,
    MenuItem,
    MenuSection,
    Divider,
} from './styles';
import {
    FaAngleLeft,
    FaAngleDown,
    FaUsersCog,
    FaFileSignature,
    FaRegUserCircle,
} from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { RiLogoutCircleLine, RiFolderSettingsLine } from 'react-icons/ri';
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
                    <MenuSection>
                        <BsGearFill />
                        <span>Administração</span>
                    </MenuSection>
                    <Divider />
                    <MenuItem>
                        <FaUsersCog />
                        <Link to="/users">Usuários</Link>
                    </MenuItem>
                    <MenuItem>
                        <RiFolderSettingsLine />
                        <Link to="/categories">Categorias</Link>
                    </MenuItem>
                    <MenuItem>
                        <FaFileSignature /> <Link to="/articles">Artigos</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <FaRegUserCircle /> <Link to="/profile">Profile</Link>
                    </MenuItem>

                    <MenuItem>
                        <RiLogoutCircleLine /> <Link to="/logout">Sair</Link>
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
