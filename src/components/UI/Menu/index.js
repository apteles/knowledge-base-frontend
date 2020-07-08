import React from 'react';

import { Container } from './styles';
import connectLayout from '../HOC/connectLayout';

function Menu({ context }) {
    const { isActive } = context.state.menu;
    return <Container hide={isActive}>Menu</Container>;
}

export default connectLayout(Menu);
