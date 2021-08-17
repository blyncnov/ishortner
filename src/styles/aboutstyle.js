import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
`;

export const AboutColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const AboutRow = styled.div`
  width: 100%;
  padding: 2em 0;

  h1 {
    font-weight: 600;
    font-size: 2rem;
  }

  p {
    font-weight: 500;
    color: gray;
  }

  div {
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 760px) {
    h1 {
      font-weight: 600;
      font-size: 1rem;
    }

    p {
      font-weight: 500;
      font-size: 0.7rem;
    }
  }
`;

export const AboutCard = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2em;
  padding: 2em 1em;
  gap: 2em;
  background-color: #f5f6f7;
  border-radius: 5px;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const AboutCardRow = styled.div`
  text-align: start;
  width: 100%;
  flex-basis: 33.3%;
  background-color: white;
  color: white;
  padding: 2em;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  h1 {
    color: black;
    text-align: start;
    font-size: 1.5rem;
  }

  p {
    text-align: start;
    font-size: 1rem;
  }

  @media (max-width: 760px) {
    h1 {
      color: black;
      text-align: start;
      font-size: 1.3rem;
    }

    p {
      text-align: start;
      font-size: 0.8rem;
    }
  }
`;

export default AboutContainer;
