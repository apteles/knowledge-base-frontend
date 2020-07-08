import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 6rem 1fr 4rem;
    min-height: 100vh;

    ${({ context }) => {
        const { menu } = context.state;

        return menu.isActive
            ? css`
                  grid-template-areas:
                      'header header'
                      'menu content'
                      'menu footer';
                  transition: grid-template-areas 500ms ease-in-out;
              `
            : css`
                  grid-template-areas:
                      'header header'
                      'content content'
                      'footer footer';
              `;
    }}
`;
