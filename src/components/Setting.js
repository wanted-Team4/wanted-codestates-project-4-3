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
  singleMovingAtom,
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
  const [singleMoving, setSingleMoving] = useRecoilState(singleMovingAtom);
  const [singleMovingColor, setSingleMovingColor] = useState(false);

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
      <button className="settingBtn" onClick={() => setOnSetting(!onSetting)}>
        <i className="fa-solid fa-gear"></i>
      </button>

      {onSetting ? (
        <SettingBox>
          <List>
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
                    onChange={(e) => setLeftTitle(e.target.value)}
                    value={leftTitle}
                    className="title"
                    placeholder="왼쪽 타이틀을 입력하세요"
                  />
                  <input
                    type="text"
                    onChange={(e) => setRightTitle(e.target.value)}
                    value={rightTitle}
                    className="title"
                    placeholder="오른쪽 타이틀을 입력하세요"
                  />
                </div>
              ) : null}
            </Inputs>

            <Contents>
              <span>검색</span>
              <button
                onClick={() =>
                  setSearchColor(!searchColor) & setOnSearch(!onSearch)
                }
                className={searchColor ? "off" : "on"}
              ></button>
            </Contents>

            <Contents>
              <span>하나씩만 옮기기</span>
              <button
                onClick={() =>
                  setSingleMovingColor(!singleMovingColor) &
                  setSingleMoving(!singleMoving)
                }
                className={singleMovingColor ? "off" : "on"}
              ></button>
            </Contents>

            <Contents>
              <span>아이템 갯수 표시</span>
              <button
                onClick={() =>
                  setSelectedNumColor(!selectedNumColor) &
                  setSelectedNum(!selectedNum)
                }
                className={selectedNumColor ? "off" : "on"}
              ></button>
            </Contents>

            <Contents>
              <span>아이템크기</span>
              <div>
                <label for="xs">XS</label>
                <input
                  type="radio"
                  id="xs"
                  name="size"
                  onClick={() => setFontSize(12)}
                />
                <label for="s">S</label>
                <input
                  type="radio"
                  id="s"
                  name="size"
                  onClick={() => setFontSize(14)}
                />
                <label for="m">M</label>
                <input
                  type="radio"
                  id="m"
                  name="size"
                  onClick={() => setFontSize(16)}
                />
              </div>
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
          </List>
        </SettingBox>
      ) : null}
    </Container>
  );
};

export default Setting;

const Container = styled.div`
  position: absolute;
  right: 5vw;
  top: 1vw;

  .settingBtn {
    background: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 170px;

    .fa-gear {
      font-size: 14px;
      color: #777;
      padding: 3px;
    }
  }
`;

const SettingBox = styled.div`
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
`;
const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  padding: 12px 15px;
  box-sizing: border-box;

  span {
    font-size: 14px;
  }

  button {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: none;
  }
  label {
    font-size: 14px;
  }
  .on {
    background: rgba(0, 128, 0, 0.65);
  }
  .off {
    background: rgba(255, 0, 0, 0.65);
  }
`;

const Inputs = styled.div`
  transition: top 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;

  label {
    font-size: 14px;
  }
  span {
    font-size: 14px;
  }
  input {
    padding: 3px 5px;
    margin: 5px 10px;
    width: 100px;
    font-size: 14px;

    &.title {
      width: 150px;
    }
  }
  .showInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 5px;
    box-sizing: border-box;
  }
`;
