import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100%;
`;

export const NavigationColumn = styled.div`
  background-color: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavigationRow = styled.div`
  background-color: transparent;
  width: 100%;
  max-width: 90%;
  padding: 1em 0;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #7834ca;
    font-family: sans-serif;
    transition: all 0.3s ease-out;
  }

  h1:hover {
    transform: scale(1.1);
  }

  span {
    color: rgb(84, 35, 141);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavigationLists = styled.ul`
  font-size: 1rem;
  display: flex;

  li {
    padding-left: 1em;
    font-weight: 700;
    transition: all 0.3s ease-in;
  }

  li:hover {
    transform: scale(1.13);
  }

  @media (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? "-100%" : 0)};
    transition: all 0.5s ease-in;
    width: 50vw;
    height: 100vh;
    background-color: white;
    padding: 2em 0;

    li a {
      /* color: white; */
      padding: 1em 0;
    }

    li {
      margin: 2em 1em;
    }
  }
`;

export const Mobile = styled.div`
  cursor: pointer;
  color: #54238d;
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;

export default NavigationContainer;
