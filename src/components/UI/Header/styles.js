import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    background: linear-gradient(to right, #1e496a, #49a7c1);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    color: #fff;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
`;
export const Action = styled.a`
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    transition: color 500ms;
    width: 60px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;
