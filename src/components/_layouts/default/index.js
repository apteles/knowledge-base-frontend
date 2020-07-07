import React from 'react';

// import { Container } from './styles';
import { Header, Menu, Content, Footer } from '../../UI';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <Menu />
            <Content>{children}</Content>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
