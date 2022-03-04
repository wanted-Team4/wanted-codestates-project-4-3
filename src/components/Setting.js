import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  rightTitleAtom,
  leftTitleAtom,
  searchStateAtom,
  fontSizeAtom,
  boxWidthAtom,
  boxHeightAtom,
  onceMovingAtom,
  selectedNumAtom,
} from "../atom";
const Setting = () => {
  //설정
  const [onSetting, setOnSetting] = useState(false);

  //타이틀
  const [rightTitle, setRightTitle] = useRecoilState(rightTitleAtom);
  const [leftTitle, setLeftTitle] = useRecoilState(leftTitleAtom);
  const [onTittle, setOnTittle] = useState(false);

  //검색
  const [onSearch, setOnSearch] = useRecoilState(searchStateAtom);
  const [searchColor, setSearchColor] = useState(false);

  //하나씩만옮기기
  const [onceMoving, setOnceMoving] = useRecoilState(onceMovingAtom);
  const [onceMovingColor, setOnceMovingColor] = useState(false);

  //선택된 아이템 갯수 표시
  const [selectedNum, setSelectedNum] = useRecoilState(selectedNumAtom);
  const [selectedNumColor, setSelectedNumColor] = useState(false);

  //글자크기조정
  const [, setFontSize] = useRecoilState(fontSizeAtom);

  //박스크기조정
  const [, setBoxWidth] = useRecoilState(boxWidthAtom);
  const [, setBoxHeigh] = useRecoilState(boxHeightAtom);
  const onChangeWidthInput = (e) => {
    setBoxWidth(e.target.value);
  };
  const onChangeHeightInput = (e) => {
    setBoxHeigh(e.target.value);
  };

  /* 박스크기조정 인풋 블러 - 미구현
  const boxWidthRef = useRef();
  const onLeaveFocusBoxWidthInput = (e) =>
    (!boxWidth.currentTarget ? boxWidthRef.onBlur() : null);
  const onChangeWidthInput = (e) => {
    //onBlur 처리(input 밖에 클릭되면 value값이 setBoxWidth되도록)
    setBoxWidth(e.target.value);
  };
  */

  return (
    <Container>
      {/* i 버튼이 너무 작아서 토글시 오류가 나서, 임의로 버튼으로 대체해놨습니다! 추후 수정부탁드려요! */}
      <button
        // className="fa-solid fa-gear"
        onClick={() => setOnSetting(!onSetting)}
      >
        설정
      </button>
      {onSetting ? (
        <List className={onSetting}>
          <li>
            <Contents>
              <span>타이틀</span>
              <button
                onClick={() => setOnTittle(!onTittle)}
                className={!onTittle ? "off" : "on"}
              ></button>
            </Contents>
            <Inputs>
              {onTittle ? (
                <div className="showInputs">
                  <input
                    type="text"
                    onChange={(e) => setRightTitle(e.target.value)}
                    value={rightTitle}
                  />
                  <input
                    type="text"
                    onChange={(e) => setLeftTitle(e.target.value)}
                    value={leftTitle}
                  />
                </div>
              ) : null}
            </Inputs>
          </li>
          <li>
            <Contents>
              <span>검색</span>
              <button
                onClick={() =>
                  setSearchColor(!searchColor) & setOnSearch(!onSearch)
                }
                className={searchColor ? "off" : "on"}
              ></button>
            </Contents>
          </li>
          <li>
            <Contents>
              <span>하나씩만 옮기기</span>
              <button
                onClick={() =>
                  setOnceMovingColor(!onceMovingColor) & setOnceMoving()
                }
                className={onceMovingColor ? "off" : "on"}
              ></button>
            </Contents>
          </li>
          <Contents>
            <span>선택된 아이템 갯수 표시</span>
            <button
              onClick={() => setSelectedNumColor(!selectedNumColor)}
              className={selectedNumColor ? "off" : "on"}
            ></button>
          </Contents>
          <li>
            <Contents>
              <span>아이템 크기</span>
              <div>
                <label for="xs">XS</label>
                <input
                  type="radio"
                  id="xs"
                  name="size"
                  onClick={() => setFontSize(14)}
                />
                <label for="s">S</label>
                <input
                  type="radio"
                  id="s"
                  name="size"
                  onClick={() => setFontSize(16)}
                />
                <label for="m">M</label>
                <input
                  type="radio"
                  id="m"
                  name="size"
                  onClick={() => setFontSize(18)}
                />
              </div>
            </Contents>
          </li>
          <li>
            <Contents>
              <span>박스 사이즈 조정</span>
            </Contents>
            <Inputs>
              <div>
                {/* <div onClick={onLeaveFocusBoxWidthInput}> */}
                <label>가로</label>
                <input
                  type="number"
                  onChange={onChangeWidthInput}
                  // ref={boxWidthRef}
                  // onBlur={boxWidthRef.current.focus()}
                />
                <span>px</span>
              </div>
              <div>
                <label>세로</label>
                <input type="number" onChange={onChangeHeightInput} />
                <span>px</span>
              </div>
            </Inputs>
          </li>
        </List>
      ) : null}
    </Container>
  );
};

export default Setting;

const Container = styled.div`
  position: absolute;
  right: 5vw;
  top: 1vw;
  border: 1px solid black;
  width: 200px;
`;
const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #999;

  span {
  }

  button {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: none;
  }
  .on {
    background: green;
  }
  .off {
    background: red;
  }
  .showInputs {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Inputs = styled.div`
  background: #eee;
`;
