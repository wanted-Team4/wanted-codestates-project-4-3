import React, { useState } from "react";

import Search from "./Search"
import styled from "styled-components";

const Options = ({dataOne, setDataOne}) => {
  let dataOneNum = dataOne[1].length;
  let dataTwoNum = dataOne[2].length;

  const OptionsOneMap = dataOne[1].map((item, i) => {
    return (
      <Optionsli key={i}>
        {item.emoji}
        {item.name}
      </Optionsli>
    );
  });
  const OptionsTwoMap = dataOne[2].map((item, i) => {
    return (
      <Optionsli key={i}>
        {item.emoji}
        {item.name}
      </Optionsli>
    );
  });

  return (
    <>
      <OptionsBox>
        <Search data={dataOne} setData={setDataOne}/>
        <OptionsContainer>
          <OptionsSpan>available options</OptionsSpan>
          <OptionsUl>{OptionsOneMap}</OptionsUl>
          <OptionsCount>0/{dataOneNum}</OptionsCount>
        </OptionsContainer>
      </OptionsBox>

      <OptionsBox>
        <Search data={dataOne} setData={setDataOne}/>
        <OptionsContainer>
          <OptionsSpan>available options</OptionsSpan>
          <OptionsUl>{OptionsTwoMap}</OptionsUl>
          <OptionsCount>0/{dataTwoNum}</OptionsCount>
        </OptionsContainer>
      </OptionsBox>
    </>
  );
};
const OptionsBox = styled.div`
  // 옵션 박스 감싸는 div
  width: 200px;
  height: 300px;
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
  font-size: 14px;
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
