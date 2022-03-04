import Options from "../components/Options";
import React from "react";
import Selectors from "../components/Selectors";
import Settings from "../components/Settings";
import { emojiMenus } from "../components/emojiMenus";
import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const [leftData, setLeftData] = useState(emojiMenus);
  const [rightData, setRightData] = useState([]);
  const [selectId, setSelectId] = useState([]);

  return (
    <MainContainer>
      <Options
        leftData={leftData}
        setLeftData={setLeftData}
        rightData={rightData}
        setRightData={setRightData}
        selectId={selectId}
        setSelectId={setSelectId}
      />
      <Selectors
        leftData={leftData}
        setLeftData={setLeftData}
        rightData={rightData}
        setRightData={setRightData}
        selectId={selectId}
        setSelectId={setSelectId}
      />
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
`;

export default Home;
