import React from 'react';
import PageTitle from '../../components/UI/PageTitle';
import { FaCogs } from 'react-icons/fa';
// import { Container } from './styles';

function Admin() {
    return (
        <PageTitle
            Icon={FaCogs}
            title="Administração"
            subtitle="Cadastros Gerais"
        />
    );
}

export default Admin;
