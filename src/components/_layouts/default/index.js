import React from 'react';
import { Wrapper } from './styles';
import { Header, Menu, Content, Footer } from '../../UI';
import { Provider } from '../../UI/state/layout/layoutContext';
import connectLayout from '../../UI/HOC/connectLayout';
const LayoutWrapped = connectLayout(Wrapper);
function DefaultLayout({ children }) {
    return (
        <Provider>
            <LayoutWrapped>
                <Header title="ACME - Knowledge Base" />
                <Menu />
                <Content>{children}</Content>
                <Footer />
            </LayoutWrapped>
        </Provider>
    );
}

export default DefaultLayout;
