import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  padding-bottom: 2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  position: relative;

  @media (max-width: 760px) {
    background-color: white;
  }
`;

export default HeaderContainer;
