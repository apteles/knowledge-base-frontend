import styled, { css } from 'styled-components';

export const Container = styled.div`
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    padding: 2rem;
    margin-top: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;

    flex: 1;
    display: flex;
    // justify-content: space-between;
    align-items: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;

    > svg {
        font-size: 4.5rem;
        ${(props) =>
            props.color &&
            css`
                color: ${props.color};
            `}
    }
`;
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-end;
`;
export const Title = styled.h3`
    font-size: 1.5rem;
    color: #caccdd;
`;
export const Number = styled.span`
    color: #4c4747;
    font-size: 3rem;
`;
