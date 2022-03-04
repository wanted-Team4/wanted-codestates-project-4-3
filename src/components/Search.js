import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { searchStateAtom } from "../atom";

const Options = () => {
  const [onDisabled] = useRecoilState(searchStateAtom);

  return (
    <>
      {onDisabled ? (
        <OptionsInp placeholder="검색" disabled></OptionsInp>
      ) : (
        <OptionsInp placeholder="검색"></OptionsInp>
      )}
    </>
  );
};

const OptionsInp = styled.input`
  //옵션 박스 인풋창
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  line-height: 26px;
  margin-bottom: 20px;
  padding: 2px 10px;
  width: 100%;
`;

export default Options;
