import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

export const HeroSectionColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const HeroSectionRow = styled.div`
  width: 100%;
  padding: 2em 0;
  flex-basis: 50%;

  div {
    width: 100%;
  }

  h1 {
    margin-bottom: 0.5em;
    color: #333333;
  }

  p {
    line-height: 2;
    font-weight: 600;
    color: gray;
  }

  img {
    max-width: 100%;
  }

  button {
    padding: 1.5em 2em;
    background-color: #030d28;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    outline: none;
    border: none;
    color: white;
    margin-top: 0.5em;
  }
`;

export default HeroSectionContainer;
