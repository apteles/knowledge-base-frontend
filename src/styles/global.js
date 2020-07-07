import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 62.5%; /* 16px * 62.5 = 10px = 1rem*/
  }
  body {
    font-size: 1.6rem;
    font-family: "Nunito", sans-serif;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }
  body,
  h1,
  h2,
  p,
  ul,
  li {
    margin: 0px;
    padding: 0;
  }

  body,
  input,
  button {
    font-family: "Nunito", sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #222222;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
  .grid-container {
    display: grid;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 1fr 5rem;
    min-height: 100vh;
  }

  .main {
    grid-area: main;
  }

`;
