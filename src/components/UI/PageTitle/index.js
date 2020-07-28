import React from 'react';
import PropType from 'prop-types';
import { Title, Subtitle } from './styles';
import { Container } from './styles';

function PageTitle({ icon: Icon, title, subtitle }) {
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
    icon: PropType.oneOfType([PropType.element, PropType.func]),
    title: PropType.string,
    subtitle: PropType.string,
};

export default PageTitle;
