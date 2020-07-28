import React from 'react';
import PropType from 'prop-types';
import {
    Container,
    IconWrapper,
    ContentWrapper,
    Title,
    Number,
} from './styles';

export default function Statistics({ icon: Icon, title, amount, color }) {
    return (
        <Container>
            <IconWrapper color={color}>
                <Icon />
            </IconWrapper>
            <ContentWrapper>
                <Title>{title}</Title>
                <Number>{amount}</Number>
            </ContentWrapper>
        </Container>
    );
}

Statistics.propTypes = {
    icon: PropType.oneOfType([PropType.element, PropType.func]).isRequired,
    title: PropType.string.isRequired,
    amount: PropType.string.isRequired,
    color: PropType.string,
};
Statistics.defaultProps = {
    icon: () => {},
};
