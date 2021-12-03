import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    flex: 7;

    background: ${theme.colors.primary};
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${theme.colors.text};
    }
  `}
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    > h2 {
      font: 700 24px 'Poppins', sans-serif;

      margin: 56px 0 24px;
    }

    > button {
      margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #ea4335;
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    > p {
      font-size: 14px;
      color: ${theme.colors.description};

      a {
        color: ${theme.colors.primary};
        text-decoration: none;
      }
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid ${theme.colors.background};
      }

      button {
        margin: 16px 0;
      }

      button,
      input {
        width: 100%;
      }
    }
  `}
`;
