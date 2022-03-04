import React, { useState, useEffect, useRef } from "react";

import Search from "./Search";
import styled from "styled-components";
import Items from "./Items";

const Options = ({
  leftData,
  setLeftData,
  rightData,
  setRightData,
  selectId,
  setSelectId,
}) => {
  let dataOneNum = leftData.length;
  let dataTwoNum = rightData.length;
  const [direction, setDirection] = useState();

  return (
    <>
      <OptionsBox>
        <Search leftData={leftData} setLeftData={setLeftData} />
        <OptionsContainer>
          <OptionsSpan>available options</OptionsSpan>
          <OptionsUl>
            <Items
              list={leftData}
              setList={setLeftData}
              selectId={selectId}
              setSelectId={setSelectId}
              direction="left"
              setDirection={setDirection}
            />
          </OptionsUl>
          <OptionsCount>
            {direction === "left" ? selectId.length : 0} / {dataOneNum}
          </OptionsCount>
        </OptionsContainer>
      </OptionsBox>

      <OptionsBox>
        <Search rightData={rightData} setRightData={setRightData} />
        <OptionsContainer>
          <OptionsSpan>available options</OptionsSpan>
          <OptionsUl>
            <Items
              list={rightData}
              setList={setRightData}
              selectId={selectId}
              setSelectId={setSelectId}
              direction="right"
              setDirection={setDirection}
            />
          </OptionsUl>
          <OptionsCount>
            {direction === "right" ? selectId.length : 0} / {dataTwoNum}
          </OptionsCount>
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
