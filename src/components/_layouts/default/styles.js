import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 6rem 1fr 4rem;
    min-height: 100vh;

    ${({ context }) => {
        const { sidebar } = context.state.menu;
        return sidebar.active
            ? css`
                  grid-template-areas:
                      'header header'
                      'menu content'
                      'menu footer';
              `
            : css`
                  grid-template-areas:
                      'header header'
                      'content content'
                      'footer footer';
              `;
    }}
`;
