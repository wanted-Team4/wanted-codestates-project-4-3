import React, { useState } from "react";
import styled from "styled-components";

const Selectors = ({
  leftData,
  setLeftData,
  rightData,
  setRightData,
  selectId,
  setSelectId,
}) => {
  const onMove = (selectId, direction) => {
    let moveItem = [];
    // Left -> Right
    if (direction) {
      setLeftData((prev) => {
        let copyData = Object.assign([], prev);

        selectId.map((id) =>
          leftData.map((data, index) => {
            if (id === data.id) {
              leftData.splice(index, 1);
              moveItem = [...moveItem, data];
            }
          })
        );
        return copyData;
      });
      setRightData((prev) => [...prev, ...moveItem]);
    }
    // Right -> Left
    else {
      setLeftData((prev) => {
        let copyData = Object.assign([], prev);

        selectId.map((id) =>
          rightData.map((data, index) => {
            if (id === data.id) {
              rightData.splice(index, 1);
              moveItem = [...moveItem, data];
            }
          })
        );
        return copyData;
      });
      setLeftData((prev) => [...prev, ...moveItem]);
    }

    setSelectId([]);
  };

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
        <ArrowBtn onClick={() => onMove(selectId, 1)}>
          <i className="fa-solid fa-angle-right"></i>
        </ArrowBtn>
        <ArrowBtn onClick={() => onMove(selectId, 0)}>
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
