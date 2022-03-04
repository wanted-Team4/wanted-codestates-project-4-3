import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useRecoilState } from "recoil";
import { fontSizeAtom } from "../atom";

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
  const selectItem = (id) => {
    setDirection(direction);
    // 선택된게 하나도 없으면 추가
    if (selectId.length === 0) {
      setSelectId([id]);
      return;
    }

    if (selectId.findIndex((item) => item === id)) {
      setSelectId([id]);
    } else {
      setSelectId([]);
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
                ? "white"
                : "#b5d8f0",
          }}
          onClick={() => selectItem(item.id)}
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
