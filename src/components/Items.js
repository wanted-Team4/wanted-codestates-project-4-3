import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useRecoilState } from "recoil";
import { fontSizeAtom, leftTitleAtom } from "../atom";

const Optionsli = styled.li`
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  display: flex;
  align-items: center;
  height: 25px;
  line-height: 14px;
  &:hover {
    background-color: #b5d8f0;
  }
`;
const Emoji = styled.div`
  margin-right: 5px;
  font-size: ${(props) => props.fontSize}px;
`;
const Text = styled.p`
  font-size: ${(props) => props.fontSize}px;
`;

const Items = ({
  list,
  setList,
  selectId,
  setSelectId,
  direction,
  setDirection,
}) => {
  const { handleDragStart, onDragEnter } = useDragAndDrop({
    list,
    setList,
  });

  const [fontSize] = useRecoilState(fontSizeAtom);
  const [firstClick, setFirstClick] = useState(0);

  const selectItem = (e, id, idx) => {
    setDirection(direction);

    if (e.shiftKey) {
      let copyData = Object.assign([], list);
      let select = [];
      const start = firstClick < idx ? firstClick : idx;
      const end = firstClick < idx ? idx + 1 : firstClick + 1;

      copyData.splice(start, end).map((item) => select.push(item.id));

      setSelectId(select);
      return;
    }

    if (e.ctrlKey) {
      setFirstClick(idx);
      setSelectId((prev) => [...prev, id]);
      return;
    }

    // 선택된게 하나도 없으면 추가
    if (selectId.length === 0) {
      setFirstClick(idx);
      setSelectId([id]);
      return;
    }

    if (selectId.findIndex((item) => item === id) !== -1) {
      let data = [];
      setFirstClick(0);
      if (selectId.length !== 1) {
        data = (prev) => prev.filter((element) => element !== id);
      }
      setSelectId(data);
    } else {
      setFirstClick(idx);
      setSelectId([id]);
    }
  };

  return (
    <>
      {list.map((item, idx) => (
        <Optionsli
          key={item.id}
          draggable
          onDragStart={(e) => {
            handleDragStart(e, idx);
          }}
          style={{
            backgroundColor:
              selectId.findIndex((id) => id === item.id) === -1
                ? ""
                : "#b5d8f0",
          }}
          onClick={(e) => selectItem(e, item.id, idx)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => onDragEnter(e, idx)}
        >
          <Emoji fontSize={fontSize}>{item.emoji}</Emoji>
          <Text fontSize={fontSize}>{item.name}</Text>
        </Optionsli>
      ))}
    </>
  );
};

export default Items;
