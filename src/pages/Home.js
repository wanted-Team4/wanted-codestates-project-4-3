import React, { useState } from "react";
import styled from "styled-components";
import { emojiMenus } from "../components/emojiMenus";

const Home = () => {
  const [dataOne, setDataOne] = useState(emojiMenus.slice(0, 7));
  const [dataTwo, setDataTwo] = useState(emojiMenus);
  console.log(dataOne);
  let dataOneNum = dataOne.length;
  let dataTwoNum = dataTwo.length;

  const OptionsOneMap = dataOne.map((item, i) => {
    return (
      <Optionsli key={i}>
        {item.emoji}
        {item.name}
      </Optionsli>
    );
  });
  const OptionsTwoMap = dataTwo.map((item, i) => {
    return (
      <Optionsli key={i}>
        {item.emoji}
        {item.name}
      </Optionsli>
    );
  });

  return (
    <MainContainer>
      <OptionsBox>
        <OptionsInp placeholder="검색"></OptionsInp>
        <OptionsContainer>
          <OptionsSpan>available options</OptionsSpan>
          <OptionsUl>{OptionsOneMap}</OptionsUl>
          <OptionsCount>0/{dataOneNum}</OptionsCount>
        </OptionsContainer>
      </OptionsBox>
      <OptionsArrow>
        <ArrowBtn>
          <i class="fa-solid fa-rotate"></i>
        </ArrowBtn>
        <ArrowBtn>
          <i class="fa-solid fa-angles-right"></i>
        </ArrowBtn>
        <ArrowBtn>
          <i class="fa-solid fa-angles-left"></i>
        </ArrowBtn>
        <ArrowBtn>
          <i class="fa-solid fa-angle-right"></i>
        </ArrowBtn>
        <ArrowBtn>
          <i class="fa-solid fa-angle-left"></i>
        </ArrowBtn>
      </OptionsArrow>
      <OptionsBox>
        <OptionsInp placeholder="검색"></OptionsInp>
        <OptionsContainer>
          <OptionsSpan>available options</OptionsSpan>
          <OptionsUl>{OptionsTwoMap}</OptionsUl>
          <OptionsCount>0/{dataTwoNum}</OptionsCount>
        </OptionsContainer>
      </OptionsBox>
      <SettinhsBox>
        <SettinhsBtn>
          <i class="fa-solid fa-gear"></i>
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
    </MainContainer>
  );
};
const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px;
`;
const OptionsBox = styled.div`
  // 옵션 박스 감싸는 div
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;
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
  margin-bottom: 41px;
  overflow: auto;
  width: 100%;
  list-style: none;
  border-bottom: 1px solid #ccc;
`;
const Optionsli = styled.li`
  cursor: pointer;
  font-size: 14px;
  border-top: 1px solid #ccc;
`;
const OptionsCount = styled.div`
  background-color: #fff;
  border-top: 1px solid #ccc;
  bottom: 0;
  display: block;
  position: absolute;
  text-align: center;
  width: 100%;
`;
const OptionsArrow = styled.div`
  // 화살표 옵션 들어있는 곳
  display: flex;
  flex-direction: column;
  margin: 60px 10px 0;
  position: relative;
  top: 14px;
`;
const ArrowBtn = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
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
  width: 44px
  &.sc-gjNHFA gerxap input:checked + label {
    background-color: bisque;
  }
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
export default Home;
