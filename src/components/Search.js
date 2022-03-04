import React, { useState } from "react";

import { searchStateAtom } from "../atom";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const Options = ({ leftData, setLeftData, rightData, setRightData, index }) => {
  const [onDisabled] = useRecoilState(searchStateAtom);
  const [initLeftData] = useState(leftData);

  const onChangeLeft = ({ target }) => {
    const res = leftData.filter(({ name }) => name.includes(target.value));

    if (target.value === "") {
      setTimeout(() => setLeftData(initLeftData), 300);
    } else {
      setTimeout(() => setLeftData(res), 300);
    }
  };

  const onChangeRight = ({ target }) => {
    const res = rightData.filter(({ name }) => name.includes(target.value));

    setTimeout(() => setRightData(res), 300);
  };

  return (
    <>
      {onDisabled ? (
        <Input placeholder="검색" disabled></Input>
      ) : index === "left" ? (
        <Input placeholder="검색" onChange={onChangeLeft}></Input>
      ) : (
        <Input placeholder="검색" onChange={onChangeRight}></Input>
      )}
    </>
  );
};

const Input = styled.input`
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
