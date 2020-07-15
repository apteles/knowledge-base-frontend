import React from 'react';
import { FaHome } from 'react-icons/fa';
// import { Container } from './styles';
import PageTitle from '../../components/UI/PageTitle';
function DashBoard() {
    return (
        <PageTitle
            Icon={FaHome}
            title="DashBoard"
            subtitle="Base de Conhecimento"
        />
    );
}

export default DashBoard;
