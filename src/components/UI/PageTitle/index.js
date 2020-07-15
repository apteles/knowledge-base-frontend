import React from 'react';
import PropTypes from 'prop-types';
import { Title, Subtitle } from './styles';
import { Container } from './styles';

function PageTitle({ Icon, title, subtitle }) {
    return (
        <>
            <Container>
                <Icon />
                <Title>{title}</Title>
            </Container>

            <Subtitle>{subtitle}</Subtitle>
        </>
    );
}
PageTitle.propTypes = {
    Icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default PageTitle;
