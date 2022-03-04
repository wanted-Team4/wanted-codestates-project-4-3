import React from "react";
import styled from "styled-components";
import Options from "../components/Options";
// import Settings from "../components/Settings";
import Setting from "../components/Setting";
import Selectors from "../components/Selectors";
import { useState } from "react";
import { emojiMenus } from "../components/emojiMenus";

const Home = () => {
  const [leftData, setLeftData] = useState(emojiMenus);
  const [rightData, setRightData] = useState([]);

  return (
    <MainContainer>
      <Options
        leftData={leftData}
        setLeftData={setLeftData}
        rightData={rightData}
        setRightData={setRightData}
      />
      <Selectors />
      <Setting />
      {/* <Settings /> */}
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
