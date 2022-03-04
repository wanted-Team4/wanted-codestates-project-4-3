import React from "react";
import styled from "styled-components";
const Settings = () => {
  return (
    <>
      <SettinhsBox>
        <SettinhsBtn>
          <i className="fa-solid fa-gear"></i>
        </SettinhsBtn>
        <Settinhs>
          <SettinhsList>
            타이틀
            <ToggleBox>
              <ToggleInp type="checkbox" />
              <Label>
                <LabelIn></LabelIn>
              </Label>
            </ToggleBox>
          </SettinhsList>
          <SettinhsList>
            검색
            <ToggleBox>
              <ToggleInp type="checkbox" />
              <Label>
                <LabelIn></LabelIn>
              </Label>
            </ToggleBox>
          </SettinhsList>
          <SettinhsList>
            하나씩 옮기기
            <ToggleBox>
              <ToggleInp type="checkbox" />
              <Label>
                <LabelIn></LabelIn>
              </Label>
            </ToggleBox>
          </SettinhsList>
          <SettinhsList>
            선택된 횟수 표시
            <ToggleBox>
              <ToggleInp type="checkbox" />
              <Label>
                <LabelIn></LabelIn>
              </Label>
            </ToggleBox>
          </SettinhsList>
          <SettinhsList>
            아이템 크기
            <ItemLabel>
              XS
              <Input type="radio" value="XS" />
            </ItemLabel>
            <ItemLabel>
              S
              <Input type="radio" value="S" />
            </ItemLabel>
            <ItemLabel>
              M
              <Input type="radio" value="M" />
            </ItemLabel>
          </SettinhsList>
          <WeightHeight>
            <ItemLabel>가로</ItemLabel>
            <SizeInput type="number"></SizeInput>px
          </WeightHeight>
          <WeightHeight>
            <ItemLabel>세로</ItemLabel>
            <SizeInput type="number"></SizeInput>px
          </WeightHeight>
        </Settinhs>
      </SettinhsBox>
    </>
  );
};

const SettinhsBox = styled.div`
  // 설정창 감싸는 div
  position: absolute;
  right: 5vw;
  top: 1vw;
`;
const SettinhsBtn = styled.button``;
const Settinhs = styled.div`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  font-size: 13px;
  padding: 5px 8px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;
const SettinhsList = styled.div`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  font-size: 13px;
  padding: 5px 8px;
  width: 100%;
`;
const ToggleBox = styled.div`
  border-radius: 25px;
  height: 22px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s;
  width: 44px;
  float: left;
`;
const ToggleInp = styled.input`
  display: none;
`;
const Label = styled.label`
  background-color: #ccc;
  display: block;
  height: 22px;
  width: 44px;
  /* &.sc-gjNHFA gerxap input:checked + label {
    background-color: bisque;
  } */
`;
const LabelIn = styled.div`
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  height: 18px;
  left: 2px;
  position: absolute;
  top: 2px;
  transition: all 0.3s;
  width: 18px;
  &checkbox:checked + .sc-ceNcIt ctagBE {
    transform: translateX(22px);
  }
`;
const ItemLabel = styled.label``;

const WeightHeight = styled.div`
  // 설정 가로세로 설정 div 담는 div
  font-size: 13px;
  padding: 5px 8px;
`;
const SizeInput = styled.input`
  // 가로세로 인풋창
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 26px;
  margin: 5px 6px 5px 8px;
  padding: 2px 10px;
  width: 120px;
`;
const Input = styled.input``;

export default Settings;
