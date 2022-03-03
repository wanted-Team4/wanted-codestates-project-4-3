import React from "react";
import styled from "styled-components";
import Options from "../components/Options";
import Settings from "../components/Settings";
import Selectors from "../components/Selectors";
import { useState } from "react";
import { emojiMenus } from "../components/emojiMenus";

const Home = () => {
  const [dataOne, setDataOne] = useState({
    1: [...emojiMenus.slice(0, 2)],
    2: [...emojiMenus.slice(3, 4)],
  });
  return (
    <MainContainer>
      <Options dataOne={dataOne} setDataOne={setDataOne} />
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
  /* padding: 25px; */
`;

export default Home;
