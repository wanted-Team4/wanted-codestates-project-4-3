import React, { useState } from "react";
import styled from "styled-components";

const Selectors = () => {
  return (
    <>
      <OptionsArrow>
        <ArrowBtn>
          <i className="fa-solid fa-rotate"></i>
        </ArrowBtn>
        <ArrowBtn>
          <i className="fa-solid fa-angles-right"></i>
        </ArrowBtn>
        <ArrowBtn>
          <i className="fa-solid fa-angles-left"></i>
        </ArrowBtn>
        <ArrowBtn>
          <i className="fa-solid fa-angle-right"></i>
        </ArrowBtn>
        <ArrowBtn>
          <i className="fa-solid fa-angle-left"></i>
        </ArrowBtn>
      </OptionsArrow>
    </>
  );
};

const OptionsArrow = styled.div`
  // 화살표 옵션 들어있는 곳
  display: flex;
  flex-direction: column;
  margin: 60px 10px 0;
  position: absolute;
  top: 95px;
`;
const ArrowBtn = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
export default Selectors;
