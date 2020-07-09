import styled, { css } from 'styled-components';

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

export const UserDropDown = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #fff;
    padding: 2rem;
    position: relative;
    cursor: pointer;
`;
export const UserName = styled.span`
    font-weight: bold;
    text-transform: capitalize;
`;
export const UserAvatar = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
    margin-left: 1rem;
`;

export const MenuDropDown = styled.ul`
    position: absolute;
    top: 70px;
    box-shadow: 0px 10px 15px #1b1c2029;
    min-width: 170px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 1;
    display: none;
    ${(props) =>
        props.show &&
        css`
            display: block;
        `}

    &::before {
        content: '';
        position: absolute;
        left: calc(55% - 0px);
        top: -10px;
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #fff;
    }
`;
export const MenuItem = styled.li`
    color: #515768;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:hover {
        background: #ddd;
    }
    > a {
        color: #515768;
        margin-left: 0.5rem;
    }
`;
