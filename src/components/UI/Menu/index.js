import React from 'react';

import { Container } from './styles';
import connectLayout from '../HOC/connectLayout';

function Menu({ context }) {
    const { active } = context.state.menu.sidebar;
    return <Container hide={active}>Menu</Container>;
}

export default connectLayout(Menu);
