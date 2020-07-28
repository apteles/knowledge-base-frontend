import React from 'react';
import { FaHome, FaFolder, FaUserAlt, FaFileAlt } from 'react-icons/fa';
import { Container } from './styles';
import PageTitle from '../../components/UI/PageTitle';
import Statistics from '../../components/UI/Statistics';
function DashBoard() {
    return (
        <>
            <PageTitle
                icon={FaHome}
                title="DashBoard"
                subtitle="Base de Conhecimento"
            />
            <Container>
                <Statistics
                    color="#d54d50"
                    icon={FaFolder}
                    title="Categorias"
                    amount="10"
                />
                <Statistics
                    icon={FaFileAlt}
                    title="Artigos"
                    amount="18"
                    color="#3bc480"
                />
                <Statistics
                    icon={FaUserAlt}
                    title="Usuários"
                    amount="4"
                    color="#3282cd"
                />
            </Container>
        </>
    );
}

export default DashBoard;
