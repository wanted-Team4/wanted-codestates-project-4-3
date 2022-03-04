import React, { useState, useEffect, useRef } from "react";
import Search from "./Search";
import styled from "styled-components";
import Items from "./Items";
import { useRecoilState } from "recoil";
import {
  rightTitleAtom,
  leftTitleAtom,
  fontSizeAtom,
  boxWidthAtom,
  boxHeightAtom,
} from "../atom";

const Options = ({ dataOne, setDataOne }) => {
  //세팅 상태입니다
  const [rightTitle] = useRecoilState(rightTitleAtom);
  const [leftTitle] = useRecoilState(leftTitleAtom);
  const [fontSize] = useRecoilState(fontSizeAtom);
  const [boxWidth] = useRecoilState(boxWidthAtom);
  const [boxHeight] = useRecoilState(boxHeightAtom);

  let dataOneNum = dataOne[1].length;
  let dataTwoNum = dataOne[2].length;
  const [leftData, setLeftData] = useState(dataOne[1]);
  const [rightData, setRightData] = useState(dataOne[2]);

  return (
    <>
      <OptionsBox boxWidth={boxWidth} boxHeight={boxHeight}>
        <Search data={dataOne} setData={setDataOne} />
        <OptionsContainer>
          <OptionsSpan>{leftTitle}</OptionsSpan>
          <OptionsUl>
            <Items list={leftData} setList={setLeftData} fontSize={fontSize} />
          </OptionsUl>
          <OptionsCount>0 / {dataOneNum}</OptionsCount>
        </OptionsContainer>
      </OptionsBox>

      <OptionsBox boxWidth={boxWidth} boxHeight={boxHeight}>
        <Search data={dataOne} setData={setDataOne} />
        <OptionsContainer>
          <OptionsSpan>{rightTitle}</OptionsSpan>
          <OptionsUl>
            <Items
              list={rightData}
              setList={setRightData}
              fontSize={fontSize}
            />
          </OptionsUl>
          <OptionsCount>0 / {dataTwoNum}</OptionsCount>
        </OptionsContainer>
      </OptionsBox>
    </>
  );
};
const OptionsBox = styled.div`
  // 옵션 박스 감싸는 div
  width: ${(props) => props.boxWidth}px;
  height: ${(props) => props.boxHeight}px;
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
  margin-left: 10px;
  margin-top: 10px;
`;
const OptionsUl = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding: 0;
  height: 100%;
`;
const Optionsli = styled.li`
  cursor: pointer;
  font-size: ${(props) => props.fontSize}px;
  list-style: none;
  border-top: 1px solid #ccc;
  padding: 5px;
`;
const OptionsCount = styled.div`
  background-color: #fff;
  border-top: 1px solid #ccc;
  bottom: 0;
  display: block;
  position: relative;
  text-align: center;
  width: 100%;
`;
export default Options;
