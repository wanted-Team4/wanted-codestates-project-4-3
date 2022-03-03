import React, { useState, useEffect, useRef } from "react";

import Search from "./Search"
import styled from "styled-components";
import Items from "./Items";

const Options = ({ dataOne, setDataOne }) => {
  let dataOneNum = dataOne[1].length;
  let dataTwoNum = dataOne[2].length;
  const [leftData, setLeftData] = useState(dataOne[1]);
  const [rightData, setRightData] = useState(dataOne[2]);

  return (
    <>
      <OptionsBox>
        <Search data={dataOne} setData={setDataOne} />
        <OptionsContainer>
          <OptionsSpan>available options</OptionsSpan>
          <OptionsUl>
            <Items
              list={leftData}
              setList={setLeftData}
            />
          </OptionsUl>
          <OptionsCount>0 / {dataOneNum}</OptionsCount>
        </OptionsContainer>
      </OptionsBox>

      <OptionsBox>
        <Search data={dataOne} setData={setDataOne} />
        <OptionsContainer>
          <OptionsSpan>available options</OptionsSpan>
          <OptionsUl>
            <Items
              list={rightData}
              setList={setRightData}
            /></OptionsUl>
          <OptionsCount>0 / {dataTwoNum}</OptionsCount>
        </OptionsContainer>
      </OptionsBox>
    </>
  );
};
const OptionsBox = styled.div`
  // 옵션 박스 감싸는 div
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
const OptionsContainer = styled.div`
  align-items: start;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
const OptionsSpan = styled.span`
  font-weight: 700;
  height: 60px;
  width: 100%;
  padding-top: 15px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
`;
const OptionsUl = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  list-style: none;
  padding: 0;
  height: 100%;
  margin: 0;
`;
const OptionsCount = styled.div`
  background-color: #fff;
  border-top: 1px solid #ccc;
  bottom: 0;
  display: block;
  position: relative;
  text-align: center;
  width: 100%;
  padding: 5px 0;
  font-size: 12px;
  font-weight: 500;
`;
export default Options;
