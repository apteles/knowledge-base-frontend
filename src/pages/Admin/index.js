import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { FaCogs } from 'react-icons/fa';
import PageTitle from '../../components/UI/PageTitle';
// import { Container } from './styles';

function Admin() {
    return (
        <>
            <PageTitle
                icon={FaCogs}
                title="Administração"
                subtitle="Cadastros Gerais"
            />

            <Tab.Container>
                <Row>
                    <Col sm={1}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="third">Artigos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    Categorias
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="first">Usuários</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" />
                            <Tab.Pane eventKey="second">
                                <p>
                                    Lorem ipsum dolor sit amet consectet
                                    adipisicing elit. Corrupti doloribus
                                    voluptate accusantium earum nisi. Totam,
                                    maxime provident iusto optio est distinctio
                                    obcaecati! Ullam exercitationem nobis minus
                                    numquam placeat quaerat officiis.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" />
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default Admin;
