import styled from "styled-components"

export const HeaderContainer = styled.div`
    background-color: ${(props => props.bgColor)};
    color: ${(props) => props.textColor};
    display: flex;
    align-items: center;
    padding: 0.1rem;
    width: 100%;
    >.left {
        margin: 0.8rem 0.5rem;
    }
    >.right {
        margin: 0.8rem 0.5rem;
        display: flex;
        flex-grow: 1;
        >div:nth-child(1) {
            display: flex;
            flex-grow: 5;
            justify-content: center;
            align-items: center;
        }
        >div:nth-child(2) {
            display: flex;
            flex-grow: 1;
            justify-content: flex-end;
        }
    }
    .header__logo__container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header__logo {
        max-width: 100%;
        height: auto;
        cursor: pointer;
    }
    .header__nav__links {
        cursor: pointer;
        font-size: larger;
        font-weight: 600;
        margin: 0 0.8rem;
    }
    .header__btn {
        outline: none;
        border-radius: 0.6rem;
        width: 5rem;
        margin: 0 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
        font-weight: 500;
    }
    .login {
        border: 1px solid #000000;
        background-color: transparent;
    }
    .signup {
        border: none;
        background-color: #000000;
        color: #ffffff;
    }
    @media(max-width: 768px) {
        .right {
            >div:nth-child(1) {
                display: flex;
                justify-content: flex-end;
                padding: 0 0.5rem;
            }
        }
    }
`;