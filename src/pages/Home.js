import React from "react";
import styled from "styled-components";
import Options from "../components/Options";
import Settings from "../components/Settings";
import Selectors from "../components/Selectors";
const Home = () => {
  return (
    <MainContainer>
      <Options />
      <Selectors />
      <Settings />
    </MainContainer>
  );
};
const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px;
`;

export default Home;
