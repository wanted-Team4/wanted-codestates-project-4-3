import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Selectors = ({
  leftData,
  setLeftData,
  rightData,
  setRightData,
  selectId,
  setSelectId,
}) => {
  const [initLeftData, setInitLeftData] = useState(leftData);
  const [initRightData, setInitRightData] = useState(rightData);

  const onClickClear = () => {
    setLeftData(initLeftData);
    setRightData(initRightData);
  };
  const onClickRight = () => {
    setLeftData([]);
    setRightData([...rightData, ...leftData]);
  };
  const onClickLeft = () => {
    setRightData([]);
    setLeftData([...leftData, ...rightData]);
  };

  const onMove = (selectId, direction) => {
    let moveItem = [];
    if (!selectId) return;
    // Left -> Right
    if (direction) {
      setLeftData((prev) => {
        let copyData = Object.assign([], prev);

        selectId.map((id) =>
          leftData.map((data) => {
            if (id === data.id) {
              copyData.splice(
                copyData.findIndex((item) => item.id === id),
                1
              );

              if (selectId.length === 1) {
                moveItem = [{ ...data }];
              } else {
                moveItem = [...moveItem, { ...data }];
              }
            }
          })
        );
        return copyData;
      });

      setRightData((prev) => {
        return [...prev, ...moveItem];
      });
    }
    //Right -> Left
    else {
      setRightData((prev) => {
        let copyData = Object.assign([], prev);
        selectId.map((id) =>
          rightData.map((data, index) => {
            if (id === data.id) {
              copyData.splice(
                copyData.findIndex((item) => item.id === id),
                1
              );

              if (selectId.length === 1) {
                moveItem = [{ ...data }];
              } else {
                moveItem = [...moveItem, { ...data }];
              }
            }
          })
        );
        return copyData;
      });

      setLeftData((prev) => {
        return [...prev, ...moveItem];
      });
    }

    setSelectId([]);
  };

  return (
    <>
      <OptionsArrow>
        <Button onClick={onClickClear}>
          <i className="fa-solid fa-rotate"></i>
        </Button>
        <Button onClick={onClickRight}>
          <i className="fa-solid fa-angles-right"></i>
        </Button>
        <Button onClick={onClickLeft}>
          <i className="fa-solid fa-angles-left"></i>
        </Button>
        <Button onClick={() => onMove(selectId, 1)}>
          <i className="fa-solid fa-angle-right"></i>
        </Button>
        <Button onClick={() => onMove(selectId, 0)}>
          <i className="fa-solid fa-angle-left"></i>
        </Button>
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
const Button = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
export default Selectors;
