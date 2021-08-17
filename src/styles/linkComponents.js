import styled from "styled-components";

export const LinkContainer = styled.div`
  width: 100%;
  background-color: #0b1736;
  padding: 2em 0.8em;

  input {
    width: 100%;
    height: 9vh;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 0.2em 1em;
  }

  p {
    color: rgb(245, 245, 245);
    font-size: 0.8rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    padding: 1.5em 2em;
    cursor: pointer;
    background-color: black;
    border-radius: 4px;
    font-weight: 600;
    outline: none;
    border: none;
    color: white;
    margin-top: 0.5em;
  }

  @media (max-width: 760px) {
    padding: 2em 0;

    form {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }
`;

export const Constraint = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export default LinkContainer;
