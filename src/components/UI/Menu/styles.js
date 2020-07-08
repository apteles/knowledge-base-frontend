import styled, { css } from 'styled-components';

export const Container = styled.aside`
    grid-area: menu;
    background: linear-gradient(to right, #232526, #414345);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${(props) =>
        !props.hide &&
        css`
            display: none;
        `}
`;
